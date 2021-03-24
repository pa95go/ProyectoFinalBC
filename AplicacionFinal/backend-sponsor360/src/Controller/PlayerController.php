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

class PlayerController extends AbstractController
{
    /**
     * @Route("/player", name="player")
     */
    public function index( PlayerRepository $repo, UserRepository $repouser, Request $request): Response
    {
        
        // $players =[]; // Estoy mostrando todos los player pero depues lo tengo que cambiar para que miestre solo uno
        // $playerEntitys = $repo->findAll();
        // foreach($playerEntitys as $playerEntity){
        //     $reed = $red ->findOneBy(["id"=>1]);
        //     $player = [];
        //     $player ["nombre"] = $playerEntity->getNombre();
        //     $player ['social'] = $reed;
        //     $players[] = $player;
        // }
        
       // $playerEntity = $repo->find($id);

       $jsonData = json_decode($request->getContent());
        $em = $jsonData->email;

       //$em = "pablo@player.com"; // esta variable metersela por post
       $userEntity = $repouser->findOneByEmail($em);
       $email[] =   $userEntity->getId();

        $playerEntity = $repo->findOneByUsuario($email);
        $player = [];
        $player['id'] = $playerEntity->getId();
        $player['nombre'] = $playerEntity->getNombre();
        $player['email'] = $userEntity->getEmail();
        $player['deporte'] = $playerEntity->getDeporte();
        $player['imagen'] = $playerEntity->getImagen();
        $player['fecha_nacimiento'] = $playerEntity->getFechaNacimiento();
        $player['sexo'] = $playerEntity->getSexo();
        $player['descripcion'] = $playerEntity->getDescripcion();
        $player['rrss'] = $playerEntity->getRrss();
        

        return $this->json([
             "player" =>( $player)
             ]);
       
        
    }
}
