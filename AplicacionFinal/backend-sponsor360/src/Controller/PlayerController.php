<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PlayerRepository;
use App\Repository\UserRepository;
use App\Repository\RedSocialRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Player;


class PlayerController extends AbstractController
{
    /**
     * @Route("/player", name="player")
     */
    public function index( PlayerRepository $repo, UserRepository $repouser, Request $request): Response
    {

       $jsonData = json_decode($request->getContent());
        $em = $jsonData->email;
        

       
       $userEntity = $repouser->findOneByEmail($em);
       $email[] =   $userEntity->getId();

       
       $playerEntity = $repo->findOneByUsuario($email);
       $player = [];
       $imagenPerfil = $playerEntity->getImagen() === null ? 'default/perfil_player.jpeg': $playerEntity->getImagen();

        $player['id'] = $playerEntity->getId();
        $player['nombre'] = $playerEntity->getNombre();
        $player['email'] = $userEntity->getEmail();
        $player['deporte'] = $playerEntity->getDeporte();
        $player['imagen'] = $request->getSchemeAndHttpHost() ."/images"."/". $imagenPerfil  ;
        $player['fechaNacimiento'] = $playerEntity->getFechaNacimiento()->format('Y-m-d');
        $player['sexo'] = $playerEntity->getSexo();
        $player['descripcion'] = $playerEntity->getDescripcion();
        $player['twitter'] = $playerEntity->getRrss()->getTwitterUsuario();
        $player['twitterSeg'] = $playerEntity->getRrss()->getTwitterSeg();
        $player['twitterEng'] = $playerEntity->getRrss()->getTwitterEng();
        $player['facebook'] = $playerEntity->getRrss()->getFbUsuario();
        $player['facebookSeg'] = $playerEntity->getRrss()->getFbSeg();
        $player['facebookEng'] = $playerEntity->getRrss()->getFbEng();
        $player['instagram'] = $playerEntity->getRrss()->getInstaUsuario();
        $player['instagramSeg'] = $playerEntity->getRrss()->getInstaSeg();
        $player['instagramEng'] = $playerEntity->getRrss()->getInstaEng();
        

        return $this->json([
             "player" =>( $player)
             ]);
       
        
    }

    /**
     * @Route("/player/edit", name="player_edit")
     */
    public function edit(EntityManagerInterface $em, PlayerRepository $repoPlayer, UserRepository $repoUser, Request $request): Response
    {

       $jsonData = json_decode($request->getContent());

        $id = $jsonData->id;
        
        $newPlayer = $repoPlayer->find($id);
        $newPlayer->setNombre($jsonData->nombre);
        $newPlayer->setDeporte($jsonData->deporte);
        //$newPlayer->setImagen($jsonData->imagen);
        $newPlayer->setFechaNacimiento(new \DateTime($jsonData->fechaNacimiento)) ;
        $newPlayer->setSexo($jsonData->sexo);
        $newPlayer->setDescripcion($jsonData->descripcion);
        $newPlayer->getRrss()->setTwitterUsuario($jsonData->twitter);
        $newPlayer->getRrss()->setTwitterSeg($jsonData->twitterSeg);
        $newPlayer->getRrss()->setTwitterEng($jsonData->twitterEng);
        $newPlayer->getRrss()->setFbUsuario($jsonData->facebook);
        $newPlayer->getRrss()->setFbSeg($jsonData->facebookSeg);
        $newPlayer->getRrss()->setFbEng($jsonData->facebookEng);
        $newPlayer->getRrss()->setInstaUsuario($jsonData->instagram);
        $newPlayer->getRrss()->setInstaSeg($jsonData->instagramSeg);
        $newPlayer->getRrss()->setInstaEng($jsonData->instagramEng);
        
        

        $em->persist($newPlayer);
        $em->flush();

        
        $player = [];
        $playerEntity = $repoPlayer->find($id);

        $imagenPerfil = $playerEntity->getImagen() === null ? 'default/perfil_player.jpeg': $playerEntity->getImagen();

        $player['id'] = $playerEntity->getId();
        $player['nombre'] = $playerEntity->getNombre();
        $player['deporte'] = $playerEntity->getDeporte();
        $player['email'] = $playerEntity->getUsuario()->getEmail();
        $player['imagen'] =  $request->getSchemeAndHttpHost() ."/images"."/". $imagenPerfil  ;
        $player['fechaNacimiento'] = $playerEntity->getFechaNacimiento()->format('Y-m-d');
        $player['sexo'] = $playerEntity->getSexo();
        $player['descripcion'] = $playerEntity->getDescripcion();
        $player['twitter'] = $playerEntity->getRrss()->getTwitterUsuario();
        $player['twitterSeg'] = $playerEntity->getRrss()->getTwitterSeg();
        $player['twitterEng'] = $playerEntity->getRrss()->getTwitterEng();
        $player['facebook'] = $playerEntity->getRrss()->getFbUsuario();
        $player['facebookSeg'] = $playerEntity->getRrss()->getFbSeg();
        $player['facebookEng'] = $playerEntity->getRrss()->getFbEng();
        $player['instagram'] = $playerEntity->getRrss()->getInstaUsuario();
        $player['instagramSeg'] = $playerEntity->getRrss()->getInstaSeg();
        $player['instagramEng'] = $playerEntity->getRrss()->getInstaEng();

            

        return $this->json([
             "player" =>( $player)
             ]);
        
        
    }
    /**
     * @Route("/player/editimagen/{id}", name="player_editimagen")
     */
    public function editimagen($id, EntityManagerInterface $em, PlayerRepository $repoPlayer, Request $request): Response
    {

        $imagen = $request->files->get('imagen') ;
        $nombreImg = 'perfil_player'.$id.'.jpeg';
        $ubicacionImg = $this->getParameter('imagenesDirectorio'). 'player/';
        $imagen->move($ubicacionImg, $nombreImg) ;

        $newPlayer = $repoPlayer->find($id);
        $newPlayer->setImagen('player/'.$nombreImg);

        $em->persist($newPlayer);
        $em->flush();
      
            

        return $this->json([]);
        
        
    }
}
