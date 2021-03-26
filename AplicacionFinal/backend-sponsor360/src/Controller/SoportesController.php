<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\SoporteRepository;
use App\Repository\PlayerRepository;
use App\Repository\BrandRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Soporte;
use App\Entity\Player;

class SoportesController extends AbstractController
{
    /**
     * @Route("/soportes", name="soportes")
     */
    public function index(SoporteRepository $repoSop): Response
    {


        $soportes =[]; 
        $soporteEntitys = $repoSop->findByPlayer(1);
        foreach($soporteEntitys as $soporteEntity){
            $soporte = [];
            $soporte ["id"] = $soporteEntity->getId();//$index;
            $soporte ["nombre"] = $soporteEntity->getNombre();
            $soporte ['descripcion'] = $soporteEntity->getDescripcion();
            $soporte ['imagen'] = $soporteEntity->getImagen();
            $soporte ['tamano'] = $soporteEntity->getTamano();
            $soporte ['precio'] = $soporteEntity->getPrecio();
            $soporte ['estado'] = $soporteEntity->getEstado()  === 'true' ? true: false;
            // $soporte ['fechaInicio'] = $soporteEntity->getFechaInicio();
            // $soporte ['fechaFin'] = $soporteEntity->getFechaFin();
            $soporte ['marca'] = '';
            // $soporte ['marca'] = $soporteEntity->getBrand();
            $soportes[] = $soporte;
            
        }
        
        
        return $this->json([
            "soportes" => $soportes
            ]);
    }


    /**
     * @Route("/soportes/add/{id}", name="soportes_add")
     */
    public function add($id, SoporteRepository $repoSop,PlayerRepository $repoPlayer, EntityManagerInterface $em,  Request $request): Response
    {

       
        for ($i=0; $i < 4; $i++) { 
            $soporte = new Soporte;
        $soporte->setPlayer($repoPlayer->find($id));
        $soporte->setEstado('false');
        $soporte->setImagen('https://i.pinimg.com/736x/01/29/66/012966f0b8950ee8e67fa87f315d8eff.jpg');
        $soporte->setPrecio(0);

        $em->persist($soporte);
        $em->flush();
        }
        

       
        
        return $this->json([
            "BD Creada" =>( 'OK')
            ]);
    }
}
