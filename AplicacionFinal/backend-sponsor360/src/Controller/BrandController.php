<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\BrandRepository;
use App\Repository\RedSocialRepository;
use App\Repository\SoporteRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\User;
use App\Entity\Brand;
use App\Entity\RedSocial;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


class BrandController extends AbstractController
{
    /**
     * @Route("/brand", name="brand")
     */
    public function index(BrandRepository $repoBrand, UserRepository $repoUser, Request $request): Response
    {
        $jsonData = json_decode($request->getContent());
        $em = $jsonData->email;

        //$em= "pablo@brand.com";

        $userEntity = $repoUser->findOneByEmail($em);
         $email[] =   $userEntity->getId();

        $brandEntity = $repoBrand->findOneByUsuario($email);
        $brand = [];
        $imagenPerfil = $brandEntity->getImagen() === null ? 'default/perfil_brand.jpg': $brandEntity->getImagen();

        $brand['id'] = $brandEntity->getId();
        $brand['nombre'] = $brandEntity->getNombre();
        $brand['email'] = $userEntity->getEmail();
        $brand['imagen'] = $request->getSchemeAndHttpHost() ."/images"."/". $imagenPerfil ;
        $brand['descripcion'] = $brandEntity->getDescripcion();
        $brand['twitter'] = $brandEntity->getRrss()->getTwitterUsuario();
        $brand['twitterSeg'] = $brandEntity->getRrss()->getTwitterSeg();
        $brand['twitterEng'] = $brandEntity->getRrss()->getTwitterEng();
        $brand['facebook'] = $brandEntity->getRrss()->getFbUsuario();
        $brand['facebookSeg'] = $brandEntity->getRrss()->getFbSeg();
        $brand['facebookEng'] = $brandEntity->getRrss()->getFbEng();
        $brand['instagram'] = $brandEntity->getRrss()->getInstaUsuario();
        $brand['instagramSeg'] = $brandEntity->getRrss()->getInstaSeg();
        $brand['instagramEng'] = $brandEntity->getRrss()->getInstaEng();


        return $this->json([
            "brand" =>( $brand)
            ]);
    }


    /**
     * @Route("/brand/edit", name="brand_edit")
     */
    public function edit(EntityManagerInterface $em, BrandRepository $repoBrand, UserRepository $repoUser, Request $request): Response
    {

       $jsonData = json_decode($request->getContent());

        $id = $jsonData->id;
        
        $newBrand = $repoBrand->find($id);
        $newBrand->setNombre($jsonData->nombre);
        $newBrand->setDescripcion($jsonData->descripcion);
        $newBrand->getRrss()->setTwitterUsuario($jsonData->twitter);
        $newBrand->getRrss()->setTwitterSeg($jsonData->twitterSeg);
        $newBrand->getRrss()->setTwitterEng($jsonData->twitterEng);
        $newBrand->getRrss()->setFbUsuario($jsonData->facebook);
        $newBrand->getRrss()->setFbSeg($jsonData->facebookSeg);
        $newBrand->getRrss()->setFbEng($jsonData->facebookEng);
        $newBrand->getRrss()->setInstaUsuario($jsonData->instagram);
        $newBrand->getRrss()->setInstaSeg($jsonData->instagramSeg);
        $newBrand->getRrss()->setInstaEng($jsonData->instagramEng);
        
        

        $em->persist($newBrand);
        $em->flush();

        
        $brand = [];
        $brandEntity = $repoBrand->find($id);

        $imagenPerfil = $brandEntity->getImagen() === null ? 'default/perfil_brand.jpeg': $brandEntity->getImagen();

        $brand['id'] = $brandEntity->getId();
        $brand['nombre'] = $brandEntity->getNombre();
        $brand['email'] = $brandEntity->getUsuario()->getEmail();
        $brand['imagen'] =  $request->getSchemeAndHttpHost() ."/images"."/". $imagenPerfil  ;
        $brand['descripcion'] = $brandEntity->getDescripcion();
        $brand['twitter'] = $brandEntity->getRrss()->getTwitterUsuario();
        $brand['twitterSeg'] = $brandEntity->getRrss()->getTwitterSeg();
        $brand['twitterEng'] = $brandEntity->getRrss()->getTwitterEng();
        $brand['facebook'] = $brandEntity->getRrss()->getFbUsuario();
        $brand['facebookSeg'] = $brandEntity->getRrss()->getFbSeg();
        $brand['facebookEng'] = $brandEntity->getRrss()->getFbEng();
        $brand['instagram'] = $brandEntity->getRrss()->getInstaUsuario();
        $brand['instagramSeg'] = $brandEntity->getRrss()->getInstaSeg();
        $brand['instagramEng'] = $brandEntity->getRrss()->getInstaEng();

            

        return $this->json([
             "brand" =>( $brand)
             ]);
        
        
    }
    /**
     * @Route("/brand/editimagen/{id}", name="brand_editimagen")
     */
    public function editimagen($id, EntityManagerInterface $em, BrandRepository $repoBrand, Request $request): Response
    {

        $imagen = $request->files->get('imagen') ;
        $nombreImg = 'perfil_brand'.$id.'.jpeg';
        $ubicacionImg = $this->getParameter('imagenesDirectorio'). 'brand/';
        $imagen->move($ubicacionImg, $nombreImg) ;

        $newBrand = $repoBrand->find($id);
        $newBrand->setImagen('brand/'.$nombreImg);

        $em->persist($newBrand);
        $em->flush();
      
            

        return $this->json([]);
        
        
    }



    /**
     * @Route("/brand/showprofile/{id}", name="brand_showprofile")
     */
    public function showprofile($id, BrandRepository $repoBrand, SoporteRepository $repoSop, Request $request): Response
    {

        $perfilEntity = $repoBrand->find($id);
        $perfil=[];
        $perfil['nombre'] = $perfilEntity->getNombre();
        $perfil['descripcion'] =  $perfilEntity->getDescripcion();
        $perfil['imagen'] = $request->getSchemeAndHttpHost() ."/images"."/".$perfilEntity->getImagen();
        $perfil['twitter'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterUsuario();
        $perfil['twitterSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterSeg();
        $perfil['twitterEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterEng();
        $perfil['fb'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbUsuario();
        $perfil['fbSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbSeg();
        $perfil['fbEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbEng();
        $perfil['instagram'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaUsuario();
        $perfil['instaSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaSeg();
        $perfil['instaEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaEng();


        $soportesEntitys = $repoSop->findByBrand($id);
        
        $perfil ['totalSoportes'] = count($soportesEntitys);

        
        $misdeportistas = [];
        $arrayIdPlayers = [];
        foreach($soportesEntitys as $soportesEntity){
            if(new \DateTime() < $soportesEntity->getFechaFin()){

                $idPlayer = $soportesEntity->getPlayer()->getId();

                if(!in_array($idPlayer, $arrayIdPlayers)){

                $mideportista = [];
                $arrayIdPlayers[] = $idPlayer;
                $mideportista ["id_player"] = $soportesEntity->getPlayer()->getId();
                $misdeportistas[] = $mideportista;
                
                 }
            }
        }

        $perfil ['totalPlayers'] = count($misdeportistas);


        return $this->json([
            "perfilBrand" =>( $perfil)
            ]);
    }


    /**
     * @Route("/brand/missoportes/", name="brand_missoportes")
     */
    public function missoportes( BrandRepository $repoBrand, SoporteRepository $repoSop, Request $request): Response
    {

        $jsonData = json_decode($request->getContent());

        $id = $jsonData->idPerfil;
        
        
        $soportesEntitys = $repoSop->findByBrand($id);

        $missoportes = [];
        foreach($soportesEntitys as $soportesEntity){
            if(new \DateTime() < $soportesEntity->getFechaFin()){
                $misoporte = [];
                $misoporte ["id"] = $soportesEntity->getId();
                $misoporte ["nombre_soporte"] = $soportesEntity->getNombre();
                $misoporte ["img_soporte"] = $request->getSchemeAndHttpHost() ."/images"."/". $soportesEntity->getImagen();
                $misoporte ['fecha_inicio'] =    $soportesEntity->getFechaInicio()->format('d/m/Y') ;
                $misoporte ['fecha_fin'] = $soportesEntity->getFechaFin()->format('d/m/Y');
                $misoporte ["tamano"] = $soportesEntity->getTamano();
                $misoporte ["descripcion"] = $soportesEntity->getDescripcion();
                $misoporte ["id_player"] = $soportesEntity->getPlayer()->getId();
                $misoporte ["nombre_player"] = $soportesEntity->getPlayer()->getNombre();
                $misoporte ["img_player"] = $request->getSchemeAndHttpHost() ."/images"."/". $soportesEntity->getPlayer()->getImagen();
                
            
                $missoportes[] = $misoporte;
           
            }
        }
        

        // $perfil ['totalSoportes'] = count($soportesEntitys);
        // $perfil ['totalPlayers'] = 'Tabla de mis Deportistas';


        return $this->json([
            "missoportes" =>( $missoportes)
            ]);
    }
    
    /**
     * @Route("/brand/misdeportistas/", name="brand_misdeportistas")
     */
    public function misdeportistas( BrandRepository $repoBrand, SoporteRepository $repoSop, Request $request): Response
    {

         $jsonData = json_decode($request->getContent());

        $id = $jsonData->idPerfil;
        
        $soportesEntitys = $repoSop->findByBrand($id);

        $misdeportistas = [];
        $arrayIdPlayers = [];
        foreach($soportesEntitys as $soportesEntity){
            if(new \DateTime() < $soportesEntity->getFechaFin()){

                $idPlayer = $soportesEntity->getPlayer()->getId();

                if(!in_array($idPlayer, $arrayIdPlayers)){

                $mideportista = [];
                $arrayIdPlayers[] = $idPlayer;
                $mideportista ["id_player"] = $soportesEntity->getPlayer()->getId();
                $mideportista ["nombre_deportista"] = $soportesEntity->getPlayer()->getNombre();
                $mideportista ["deporte"] = $soportesEntity->getPlayer()->getDeporte();
                $mideportista ["img_deportista"] = $request->getSchemeAndHttpHost() ."/images"."/". $soportesEntity->getPlayer()->getImagen();
            
                $misdeportistas[] = $mideportista;

                
                 }
            }
        }
        

        return $this->json([
            "misdeportistas" =>( $misdeportistas)
            ]);
    }

    /**
     * @Route("/brand/registro/usuario", name="brand_reg_usuario")
     */
    public function brandreg(UserPasswordEncoderInterface $encoder,EntityManagerInterface $em, RedSocialRepository $repoRed, BrandRepository $repoBrand, UserRepository $repoUser, Request $request): Response
    {

        $jsonData = json_decode($request->getContent());
        
        $email = $jsonData->email;
        $pass = $jsonData->pass;

        $newuser = new User;
        $newuser->setPassword($encoder->encodePassword( $newuser,$pass));
        $newuser->setEmail($email);
        $roles=[];
        $roles[]= 'ROLE_BRAND';
        $newuser->setRoles($roles);

        $newred = new RedSocial;

        $em->persist($newuser);
        $em->persist($newred);
        $em->flush();
        $id= $newuser->getId();
        $idRed= $newred->getId();

        return $this->json([
            "idUser" =>( $id),
            "idRed" =>( $idRed)
            ]);
    }

    /**
     * @Route("/brand/registro/perfil", name="brand_reg_perfil")
     */
    public function brandregperfil(EntityManagerInterface $em, BrandRepository $repoBrand, UserRepository $repoUser,RedSocialRepository $repoRed, Request $request): Response
    {

        $jsonData = json_decode($request->getContent());
        $id = $jsonData->id;
        $idRed = $jsonData->idRed;
        $nombre = $jsonData->nombre;
        
        $user = $repoUser->find($id);
        $red = $repoRed->find($idRed);

        $newbrand = new Brand;
        $newbrand->setNombre($nombre);
        $newbrand->setUsuario($user);
        $newbrand->setRrss($red);
        

        $em->persist($newbrand);
        $em->flush();

        $idBrand= $newbrand->getId();

        return $this->json([
            "idBrand" =>( $idBrand)
            ]);
    }
    
    
}
