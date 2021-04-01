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
use App\Entity\User;
use App\Entity\Player;
use App\Entity\Brand;

class SoportesController extends AbstractController
{
    /**
     * @Route("/soportes/show/{id}", name="soportes_show")
     */
    public function index($id,  SoporteRepository $repoSop,PlayerRepository $repoPlayer,BrandRepository $repoBrand, EntityManagerInterface $em,  Request $request): Response
    {


        $soportes =[]; 
        $soporteEntitys = $repoSop->findByPlayer($id);

        
        foreach($soporteEntitys as $soporteEntity){
            $soporte = [];
            $soporte ["id"] = $soporteEntity->getId();//$index;
            $soporte ["nombre"] = $soporteEntity->getNombre();
            $soporte ['descripcion'] = $soporteEntity->getDescripcion();
            $soporte ['imagen'] = $request->getSchemeAndHttpHost() ."/images"."/". $soporteEntity->getImagen();
            $soporte ['tamano'] = $soporteEntity->getTamano();
            $soporte ['precio'] = $soporteEntity->getPrecio();
            $soporte ['estado'] = $soporteEntity->getEstado()  === 'true' ? true: false;
            $soporte ['marca'] = $soporteEntity->getBrand() === null ? '': $soporteEntity->getBrand()->getNombre(); 
            $soportes[] = $soporte;
            
        }
        
        if ($soportes !== []) {
            return $this->json([
                "soportes" => $soportes
                ]);

        }else{
           
            $soportes =[];
               
                for ($i=0; $i < 4; $i++)  {
                    $soportenew = new Soporte;
                    $soportenew->setPlayer($repoPlayer->find($id));
                    $soportenew->setNombre("");
                   $soportenew->setEstado('false');
                    $soportenew->setImagen('default/soporte.jpeg');
                    $soportenew->setPrecio(0);
            
                    
                    $em->persist($soportenew);
                    $em->flush();

                    
                   $soport ["id"] = $soportenew->getId();//$index;
                    $soport ["nombre"] = "";
                    $soport ['descripcion'] = '';
                    $soport ['imagen'] = $request->getSchemeAndHttpHost() ."/images/default/soporte.jpeg";
                    $soport ['tamano'] = '';
                    $soport ['precio'] = 0;
                    $soport ['estado'] = false;
                   
                    $soport ['marca'] = '';
                    $soportes[] = $soport;
                    


                }
                
                return $this->json([
                    "soportes" => $soportes
                    ]);
        }
        
    }


    /**
     * @Route("/soportes/edit", name="soportes_edit")
     */
    public function edit( SoporteRepository $repoSop,PlayerRepository $repoPlayer, EntityManagerInterface $em,  Request $request): Response
    {

       
       
        $jsonData = json_decode($request->getContent());
        $soporte = $repoSop->find($jsonData->id);
        $soporte->setNombre($jsonData->nombre);
       // $soporte->setImagen($jsonData->imagen);
        $soporte->setDescripcion($jsonData->descripcion);
        $soporte->setTamano($jsonData->tamano);
        $soporte->setPrecio($jsonData->precio);
        $soporte->setEstado($jsonData->estado);
        $em->persist($soporte);
            $em->flush();
        

       
        
        return $this->json([
            "Modificado el soporte con id: " =>     $jsonData->id
            ]);
    }

    /**
     * @Route("/soportes/editimagen/{id}", name="soportes_editimagen")
     */
    public function editimagen($id, EntityManagerInterface $em, SoporteRepository $repoSop, Request $request): Response
    {

        $imagen = $request->files->get('imagensoporte') ;
        $nombreImg = 'soporte_imagen_'.$id.'.jpeg';
        $ubicacionImg = $this->getParameter('imagenesDirectorio'). 'soportes/';
        $imagen->move($ubicacionImg, $nombreImg) ;

        $newSop = $repoSop->find($id);
        $newSop->setImagen('soportes/'.$nombreImg);

        $em->persist($newSop);
        $em->flush();
      
            

        return $this->json([ $id
            
        ]);
        
        
    }
}
