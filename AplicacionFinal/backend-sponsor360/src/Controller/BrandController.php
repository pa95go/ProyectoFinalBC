<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use App\Repository\BrandRepository;
use App\Repository\SoporteRepository;


class BrandController extends AbstractController
{
    /**
     * @Route("/brand", name="brand")
     */
    public function index(): Response
    {
        return $this->render('brand/index.html.twig', [
            'controller_name' => 'BrandController',
        ]);
    }

    /**
     * @Route("/brand/showprofile/{id}", name="brand_showprofile")
     */
    public function showprofile($id, BrandRepository $repoBrand, SoporteRepository $repoSop): Response
    {

        $perfilEntity = $repoBrand->find($id);
        $perfil=[];
        $perfil['nombre'] = $perfilEntity->getNombre();
        $perfil['descripcion'] = $perfilEntity->getDescripcion();
        $perfil['imagen'] = $perfilEntity->getImagen();
        $perfil['twitter'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterUsuario();
        $perfil['twitterSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterSeg();
        $perfil['twitterEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getTwitterEng();
        $perfil['fb'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbUsuario();
        $perfil['fbSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbSeg();
        $perfil['fbEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getFbEng();
        $perfil['instagram'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaUsuario();
        $perfil['instaSeg'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaSeg();
        $perfil['instaEng'] = $perfilEntity->getRrss() === null ? '': $perfilEntity->getRrss()->getInstaEng();


        $soportesEntity = $repoSop->findByBrand($id);
        

        $perfil ['totalSoportes'] = count($soportesEntity);
        $perfil ['totalPlayers'] = 'Tabla de mis Deportistas';


        return $this->json([
            "perfilBrand" =>( $perfil)
            ]);
    }
}
