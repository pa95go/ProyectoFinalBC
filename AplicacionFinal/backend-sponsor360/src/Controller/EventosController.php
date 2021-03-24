<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\UserRepository;
use App\Repository\PlayerRepository;
use App\Repository\EventoRepository;

class EventosController extends AbstractController
{
    /**
     * @Route("/eventos", name="eventos")
     */
    public function index(EventoRepository $repoEvento, UserRepository $repoUser, PlayerRepository $repoPlayer, Request $request): Response
    {
        // Cojo el email del Token por request
         //$jsonData = json_decode($request->getContent());
         $em = "julio@player.com"; //$em = $jsonData->email;
         //$userEntity = $repoUser->findOneByEmail($em); // encuentra el email en db_user
         //$idUser =   $userEntity->getId(); // Consigue el Id del user que tiene el email coincidiendo con el del token

         //$idUser = 1;
         $playerEntity = $repoPlayer->findOneById($repoUser->findOneByEmail($em)->getId()); //encuentra un player que tenga el id del email
         $idPlayer = $playerEntity->getNombre();

        return $this->json([
            "eventos" =>($idPlayer)
            ]);
    }
}
