<?php

namespace App\Entity;

use App\Repository\BrandRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BrandRepository::class)
 */
class Brand
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nombre;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imagen;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descripcion;

    /**
     * @ORM\OneToOne(targetEntity=User::class, inversedBy="brand", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $usuario;

    /**
     * @ORM\OneToOne(targetEntity=RedSocial::class, cascade={"persist", "remove"})
     */
    private $rrss;

    /**
     * @ORM\OneToMany(targetEntity=MisDeportistas::class, mappedBy="brand")
     */
    private $misDeportistas;

    public function __construct()
    {
        $this->misDeportistas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(?string $imagen): self
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): self
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getUsuario(): ?User
    {
        return $this->usuario;
    }

    public function setUsuario(User $usuario): self
    {
        $this->usuario = $usuario;

        return $this;
    }

    public function getRrss(): ?RedSocial
    {
        return $this->rrss;
    }

    public function setRrss(?RedSocial $rrss): self
    {
        $this->rrss = $rrss;

        return $this;
    }

    /**
     * @return Collection|MisDeportistas[]
     */
    public function getMisDeportistas(): Collection
    {
        return $this->misDeportistas;
    }

    public function addMisDeportista(MisDeportistas $misDeportista): self
    {
        if (!$this->misDeportistas->contains($misDeportista)) {
            $this->misDeportistas[] = $misDeportista;
            $misDeportista->setBrand($this);
        }

        return $this;
    }

    public function removeMisDeportista(MisDeportistas $misDeportista): self
    {
        if ($this->misDeportistas->removeElement($misDeportista)) {
            // set the owning side to null (unless already changed)
            if ($misDeportista->getBrand() === $this) {
                $misDeportista->setBrand(null);
            }
        }

        return $this;
    }
}
