<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\BrandRepository;
use App\Repository\SoporteRepository;



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
        $imagenPerfil = $brandEntity->getImagen() === null ? 'default/perfil_player.jpeg': $brandEntity->getImagen();

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
     * @Route("/brand/showprofile/{id}", name="brand_showprofile")
     */
    public function showprofile($id, BrandRepository $repoBrand, SoporteRepository $repoSop): Response
    {

        $perfilEntity = $repoBrand->find($id);
        $perfil=[];
        $perfil['nombre'] = $perfilEntity->getNombre();
        $perfil['descripcion'] = $perfilEntity->getDescripcion();
        $perfil['imagen'] = $perfilEntity->getImagen();
        $perfil['twitter'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterUsuario();
        $perfil['twitterSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterSeg();
        $perfil['twitterEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterEng();
        $perfil['fb'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbUsuario();
        $perfil['fbSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbSeg();
        $perfil['fbEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbEng();
        $perfil['instagram'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaUsuario();
        $perfil['instaSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaSeg();
        $perfil['instaEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaEng();


        $soportesEntity = $repoSop->findByBrand($id);
        

        $perfil ['totalSoportes'] = count($soportesEntity);
        $perfil ['totalPlayers'] = 'Tabla de mis Deportistas';


        return $this->json([
            "perfilBrand" =>( $perfil)
            ]);
    }
}
