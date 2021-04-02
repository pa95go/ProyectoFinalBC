<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SoporteRepository;
use App\Repository\CarritoRepository;
use App\Repository\BrandRepository;
use App\Repository\MisMarcasRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

use App\Entity\MisMarcas;
use App\Entity\Carrito;

class TiendaController extends AbstractController
{
    /**
     * @Route("/tienda", name="tienda")
     */
    public function index(SoporteRepository $repoSop, Request $request): Response
    {
        $soportesEntitys = $repoSop->findByEstado('true');
        $anuncios = [];
        foreach($soportesEntitys as $soportesEntity){
        
            $anuncio['id'] = $soportesEntity->getId();
            $anuncio['nombre_soporte'] = $soportesEntity->getNombre();
            $anuncio['precio'] = $soportesEntity->getPrecio();
            $anuncio['tamano'] = $soportesEntity->getTamano();
            $anuncio['descripcion'] = $soportesEntity->getDescripcion();
            $anuncio['img_soporte'] =$request->getSchemeAndHttpHost() ."/images"."/". $soportesEntity->getImagen();
            $anuncio['id_player'] = $soportesEntity->getPlayer()->getId();
            $anuncio['nombre_player'] = $soportesEntity->getPlayer()->getNombre();
            $anuncio['img_player'] =$request->getSchemeAndHttpHost() ."/images"."/". $soportesEntity->getPlayer()->getImagen();
        
            $anuncios[]= $anuncio;
        }




        return $this->json([
            "anuncios" =>( $anuncios)
            ]);
    }
    /**
     * @Route("/tienda/addcart", name="tienda_addcart")
     */
    public function addcart( EntityManagerInterface $em, SoporteRepository $repoSop,BrandRepository $repoBrand, Request $request): Response
    {
        $jsonData = json_decode($request->getContent());
        $idBrand = $jsonData->idBrand;
        $idSop = $jsonData->idSop;

        $brandEntity = $repoBrand->find($idBrand);
        $soporteEntity = $repoSop->find($idSop);

        $soporteEntity->setEstado('false');
        $em->persist($soporteEntity);
        $em->flush();
        
        $carrito = new Carrito;
        $carrito->setBrand($brandEntity);
        $carrito->setSoporte($soporteEntity);
        $em->persist($carrito);   
        $em->flush();
        //cambiar en soporte el estado a false

        return $this->json([
            "Soporte añadido: " =>( $soporteEntity->getNombre())
            ]);
    }

    /**
     * @Route("/tienda/cart", name="tienda_cart")
     */
    public function cart( EntityManagerInterface $em, CarritoRepository $repoCart, Request $request): Response
    {

        $jsonData = json_decode($request->getContent());
        $idBrand = $jsonData->idPerfil;

        $carritoEntitys = $repoCart->findByBrand($idBrand);
        $productos = [];
        
        $suma = 0;
        foreach($carritoEntitys as $carritoEntity){
        
            $producto['id'] = $carritoEntity->getId();
            $producto['id_soporte'] = $carritoEntity->getSoporte()->getId();
            $producto['nombre_soporte'] = $carritoEntity->getSoporte()->getNombre();
            $producto['precio'] = $carritoEntity->getSoporte()->getPrecio();
            $producto['tamano'] = $carritoEntity->getSoporte()->getTamano();
            $producto['descripcion'] = $carritoEntity->getSoporte()->getDescripcion();
            $producto['img_soporte'] =$request->getSchemeAndHttpHost() ."/images"."/". $carritoEntity->getSoporte()->getImagen();
            $producto['id_player'] = $carritoEntity->getSoporte()->getPlayer()->getId();
            $producto['nombre_player'] = $carritoEntity->getSoporte()->getPlayer()->getNombre();
            $producto['img_player'] =$request->getSchemeAndHttpHost() ."/images"."/". $carritoEntity->getSoporte()->getPlayer()->getImagen();
        
            $productos[]= $producto;
            $suma = $suma + $carritoEntity->getSoporte()->getPrecio();
            
        }




        return $this->json([
            "productos" =>( $productos),
            "precio_total" => ($suma) 

        ]);
    }

   
    /**
     * @Route("/tienda/cart/delete", name="tienda_cart_delete")
     */
    public function delete( EntityManagerInterface $em, CarritoRepository $repoCart,SoporteRepository $repoSop, Request $request ): Response
    {

        $jsonData = json_decode($request->getContent());
        $id = $jsonData->idCart;

        $carrito = $repoCart->find($id);
        $soporteId = $carrito->getSoporte()->getId();
        $soporte = $repoSop->find($soporteId);

        $soporte->setEstado('true');
        $em->persist($soporte);
       
         
         $carrito = $repoCart->find($id);
         $preciorestar =  $carrito->getSoporte()->getPrecio();
         
          $em->remove($carrito);
          $em->flush();

       
        return $this->json([
            "Eliminado del carrito soporte id:  " =>($soporteId),
            "precio_restar"=>($preciorestar)
            ]);
    }
     /**
     * @Route("/tienda/cart/pagado", name="tienda_cart_pagado")
     */
    public function pagado( EntityManagerInterface $em, CarritoRepository $repoCart,SoporteRepository $repoSop,MisMarcasRepository $repoMisM, Request $request ): Response
    {

        $jsonData = json_decode($request->getContent());
        $id = $jsonData->idBrand;

        $carritoEntitys = $repoCart->findByBrand($id);
        $idsCart =[];
        foreach($carritoEntitys as $carritoEntity){
            
            $sponsor['id_carrito']= $carritoEntity->getId();
            $sponsor['id_brand']= $carritoEntity->getBrand()->getId();
            $sponsor['id_soporte']= $carritoEntity->getSoporte()->getId();
            $carrito= $carritoEntity->getId();;
            $brand= $carritoEntity->getBrand();
            $soporte= $carritoEntity->getSoporte();

            $deletecart = $repoCart->find($carrito);
            
            $timeNow = new \DateTime();
            $timeAno =date_add(new \DateTime(), date_interval_create_from_date_string("12 months")); 
            
            $mimarca = new MisMarcas;
            $mimarca->setBrand($brand);
            $mimarca->setPlayer($soporte->getPlayer());
            $mimarca->setFechaInicio($timeNow);
            $mimarca->setFechaFin($timeAno);

            $soporte->setBrand($brand);
            $soporte->setFechaInicio($timeNow);
            $soporte->setFechaFin($timeAno);

            $idsCart[] = $carrito;
            $em->persist($soporte);
            $em->persist($mimarca);
            
            $em->flush();

        }
           
        return $this->json([
            "Pagado Sponsor: " =>($idsCart)
            ]);
    }
       /**
     * @Route("/tienda/cart/vaciar", name="tienda_cart_vaciar")
     */
    public function vaciar( EntityManagerInterface $em, CarritoRepository $repoCart,SoporteRepository $repoSop, Request $request ): Response
    {

        $jsonData = json_decode($request->getContent());
        $id = $jsonData->idCart;

        $carrito = $repoCart->find($id);
        $soporteId = $carrito->getSoporte()->getId();
        $soporte = $repoSop->find($soporteId);
        $carrito = $repoCart->find($id);
        $em->remove($carrito);
        $em->flush();

       
        return $this->json([
            "Vaciando el carrito el soporte con id:  " =>($soporteId),
            
            ]);
    }
}
