<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SoporteRepository;
use App\Repository\CarritoRepository;
use App\Repository\BrandRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

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

        $carrito = new Carrito;

        $carrito->setBrand($brandEntity);
        $carrito->setSoporte($soporteEntity);
        $soporteEntity->setEstado('false');
        $em->persist($carrito);
        $em->persist($soporteEntity);
        $em->flush();
        //cambiar en soporte el estado a false

        return $this->json([
            "Soporte añadido: " =>( $soporteEntity->getNombre())
            ]);
    }
}
