<?php

namespace App\Entity;

use App\Repository\MisSoportesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MisSoportesRepository::class)
 */
class MisSoportes
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Brand::class, inversedBy="misSoportes")
     */
    private $brand;

    /**
     * @ORM\OneToOne(targetEntity=Soporte::class, cascade={"persist", "remove"})
     */
    private $soporte;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBrand(): ?Brand
    {
        return $this->brand;
    }

    public function setBrand(?Brand $brand): self
    {
        $this->brand = $brand;

        return $this;
    }

    public function getSoporte(): ?Soporte
    {
        return $this->soporte;
    }

    public function setSoporte(?Soporte $soporte): self
    {
        $this->soporte = $soporte;

        return $this;
    }
}
