<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\PlayerRepository;
use App\Repository\BrandRepository;
use App\Repository\MisMarcasRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Player;
use App\Entity\Brand;

class MisMarcasController extends AbstractController
{
    /**
     * @Route("/mismarcas/actuales", name="mismarcas_actuales")
     */
    public function index(MisMarcasRepository $repoMisMarcas, BrandRepository $repoBrand, Request $request ): Response
    {
        $jsonData = json_decode($request->getContent());
        $idPlayer = $jsonData->idPerfil;

        $mismarcas = [];
        $mismarcasEntitys = $repoMisMarcas->findByPlayer($idPlayer);

        $fecha_actual = strtotime(date("d-m-Y H:i:00",time()));
        $fecha_entrada = strtotime("19-11-2008 21:00:00");
        
        
        
        
        
        foreach($mismarcasEntitys as $mismarcasEntity){
            if(new \DateTime() < $mismarcasEntity->getFechaFin()){
                $mimarca = [];
                $mimarca ["id"] = $mismarcasEntity->getBrand()->getId();
                $mimarca ["nombre"] = $mismarcasEntity->getBrand()->getNombre();
                $mimarca ["imagen"] = $mismarcasEntity->getBrand()->getImagen();
                
                $mimarca ['fecha_inicio'] =    $mismarcasEntity->getFechaInicio()->format('d/m/Y') ;
                $mimarca ['fecha_fin'] = $mismarcasEntity->getFechaFin()->format('d/m/Y');
                
            
                $mismarcas[] = $mimarca;
           
            }
            
        }

        return $this->json([
            "misMarcasActuales" => $mismarcas
            ]);
    }

    /**
     * @Route("/mismarcas/anteriores", name="mismarcas_anteriores")
     */
    public function anteriores(MisMarcasRepository $repoMisMarcas, BrandRepository $repoBrand, Request $request ): Response
    {
        $jsonData = json_decode($request->getContent());
        $idPlayer = $jsonData->idPerfil;

        $mismarcas = [];
        $mismarcasEntitys = $repoMisMarcas->findByPlayer($idPlayer);

        $fecha_actual = strtotime(date("d-m-Y H:i:00",time()));
        $fecha_entrada = strtotime("19-11-2008 21:00:00");
        
        
        
        
        
        foreach($mismarcasEntitys as $mismarcasEntity){
            if(new \DateTime() > $mismarcasEntity->getFechaFin()){
                $mimarca = [];
                $mimarca ["id"] = $mismarcasEntity->getBrand()->getId();
                $mimarca ["nombre"] = $mismarcasEntity->getBrand()->getNombre();
                $mimarca ["imagen"] = $mismarcasEntity->getBrand()->getImagen();
                
                $mimarca ['fecha_inicio'] =    $mismarcasEntity->getFechaInicio()->format('d/m/Y') ;
                $mimarca ['fecha_fin'] = $mismarcasEntity->getFechaFin()->format('d/m/Y');
                
            
                $mismarcas[] = $mimarca;
           
            }
            
        }

        return $this->json([
            "misMarcasAnteriores" => $mismarcas
            ]);
    }
}
