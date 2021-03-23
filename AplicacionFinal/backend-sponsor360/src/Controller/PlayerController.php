<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PlayerRepository;
use App\Repository\RedSocialRepository;

class PlayerController extends AbstractController
{
    /**
     * @Route("/player", name="player")
     */
    public function index(PlayerRepository $repo, RedSocialRepository $red ): Response
    {
        $players =[]; // Estoy mostrando todos los player pero depues lo tengo que cambiar para que miestre solo uno
        $playerEntitys = $repo->findAll();
        foreach($playerEntitys as $playerEntity){
            $reed = $red ->findOneBy(["id"=>1]);
            $player = [];
            $insta = [];
            $player ["nombre"] = $playerEntity->getNombre();
            $insta []= $playerEntity->getRrss();
            $player ['social'] = $reed;
            $player ['user'] = $insta[0];
            $players[] = $player;
        }

        return $this->json([
             "player" => $players[0]
             ]);
        
    }
}
