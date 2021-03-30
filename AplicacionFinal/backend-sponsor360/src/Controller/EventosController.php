<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\PlayerRepository;
use App\Repository\EventoRepository;
use Doctrine\ORM\EntityManagerInterface;

use App\Entity\Evento;

class EventosController extends AbstractController
{
    /**
     * @Route("/eventos", name="eventos")
     */
    public function index(EventoRepository $repoEvento, Request $request): Response
    {
   

         $jsonData = json_decode($request->getContent());
         $idPlayer = $jsonData->idPlayer;

        $eventos =[]; 
        $eventoEntitys = $repoEvento->findByPlayer($idPlayer);
        $index = 0;
        foreach($eventoEntitys as $eventoEntity){
            $evento = [];
            $evento ["id"] = $eventoEntity->getId();//$index;
            $evento ["nombre"] = $eventoEntity->getNombre();
            $evento ['fecha'] = $eventoEntity->getFecha();
            $evento ['estado'] = $eventoEntity->getClasificacion();
            $evento ['disabled'] = true;
            $eventos[] = $evento;
            $index++;
        }

        return $this->json([
            "eventos" =>($eventos)
            ]);
    }

    /**
     * @Route("/eventos/add", name="eventos_add")
     */
    public function add(EntityManagerInterface $em, PlayerRepository $repo, EventoRepository $repoevent, Request $request ): Response
    {

        $jsonData = json_decode($request->getContent());

        $existe = $repoevent->find($jsonData->idlogro);
        if (is_null($existe) == false) {

         
            $evento = $repoevent->find($jsonData->idlogro);
            $evento->setNombre($jsonData->nombre);
            $evento->setFecha(new \DateTime($jsonData->fecha)) ;
            $em->persist($evento);
            $em->flush();
        return $this->json(["Modificado" =>($jsonData->idlogro)]);
            
        }if((is_null($existe) == true)){
            $evento = new Evento();
            $evento->setNombre($jsonData->nombre);
            $evento->setFecha(new \DateTime($jsonData->fecha)); 
            $evento->setClasificacion($jsonData->clasificacion);
            $player= $repo->find($jsonData->player);
            $evento->setPlayer($player);
    
            $em->persist($evento);
            $em->flush();

            //$nuevoId = $repoevent->find($jsonData->idlogro);

            return $this->json(["nuevoid" =>($evento->getId())]);
        }


        
    }

    /**
     * @Route("/eventos/delete/{id}", name="eventos_delete")
     */
    public function delete($id, EntityManagerInterface $emi, EventoRepository $repoevent, Request $request ): Response
    {



        $evento = $repoevent->find($id);

        $emi->remove($evento);
        $emi->flush();
       
        return $this->json(["Eliminado " =>($id)]);
    }

    

    
}
