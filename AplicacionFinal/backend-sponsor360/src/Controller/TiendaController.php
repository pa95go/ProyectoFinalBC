<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\SoporteRepository;

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
}
