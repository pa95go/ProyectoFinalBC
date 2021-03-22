<?php

namespace App\Repository;

use App\Entity\MisMarcas;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MisMarcas|null find($id, $lockMode = null, $lockVersion = null)
 * @method MisMarcas|null findOneBy(array $criteria, array $orderBy = null)
 * @method MisMarcas[]    findAll()
 * @method MisMarcas[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MisMarcasRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MisMarcas::class);
    }

    // /**
    //  * @return MisMarcas[] Returns an array of MisMarcas objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MisMarcas
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
