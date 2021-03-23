<?php

namespace App\Entity;

use App\Repository\PlayerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlayerRepository::class)
 */
class Player
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
     * @ORM\Column(type="string", length=255)
     */
    private $deporte;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $imagen;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $fecha_nacimiento;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $sexo;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $descripcion;

    /**
     * @ORM\OneToOne(targetEntity=User::class, inversedBy="player", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $usuario;

    /**
     * @ORM\OneToOne(targetEntity=RedSocial::class, cascade={"persist", "remove"})
     */
    private $rrss;

    /**
     * @ORM\OneToMany(targetEntity=MisMarcas::class, mappedBy="player")
     */
    private $misMarcas;

    /**
     * @ORM\OneToMany(targetEntity=Soporte::class, mappedBy="player")
     */
    private $soportes;

    /**
     * @ORM\OneToMany(targetEntity=Evento::class, mappedBy="player")
     */
    private $eventos;

    public function __construct()
    {
        $this->misMarcas = new ArrayCollection();
        $this->soportes = new ArrayCollection();
        $this->eventos = new ArrayCollection();
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

    public function getDeporte(): ?string
    {
        return $this->deporte;
    }

    public function setDeporte(string $deporte): self
    {
        $this->deporte = $deporte;

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

    public function getFechaNacimiento(): ?\DateTimeInterface
    {
        return $this->fecha_nacimiento;
    }

    public function setFechaNacimiento(?\DateTimeInterface $fecha_nacimiento): self
    {
        $this->fecha_nacimiento = $fecha_nacimiento;

        return $this;
    }

    public function getSexo(): ?string
    {
        return $this->sexo;
    }

    public function setSexo(string $sexo): self
    {
        $this->sexo = $sexo;

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
     * @return Collection|MisMarcas[]
     */
    public function getMisMarcas(): Collection
    {
        return $this->misMarcas;
    }

    public function addMisMarca(MisMarcas $misMarca): self
    {
        if (!$this->misMarcas->contains($misMarca)) {
            $this->misMarcas[] = $misMarca;
            $misMarca->setPlayer($this);
        }

        return $this;
    }

    public function removeMisMarca(MisMarcas $misMarca): self
    {
        if ($this->misMarcas->removeElement($misMarca)) {
            // set the owning side to null (unless already changed)
            if ($misMarca->getPlayer() === $this) {
                $misMarca->setPlayer(null);
            }
        }

        return $this;
    }


    /**
     * @return Collection|Soporte[]
     */
    public function getSoportes(): Collection
    {
        return $this->soportes;
    }

    public function addSoporte(Soporte $soporte): self
    {
        if (!$this->soportes->contains($soporte)) {
            $this->soportes[] = $soporte;
            $soporte->setPlayer($this);
        }

        return $this;
    }

    public function removeSoporte(Soporte $soporte): self
    {
        if ($this->soportes->removeElement($soporte)) {
            // set the owning side to null (unless already changed)
            if ($soporte->getPlayer() === $this) {
                $soporte->setPlayer(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Evento[]
     */
    public function getEventos(): Collection
    {
        return $this->eventos;
    }

    public function addEvento(Evento $evento): self
    {
        if (!$this->eventos->contains($evento)) {
            $this->eventos[] = $evento;
            $evento->setPlayer($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): self
    {
        if ($this->eventos->removeElement($evento)) {
            // set the owning side to null (unless already changed)
            if ($evento->getPlayer() === $this) {
                $evento->setPlayer(null);
            }
        }

        return $this;
    }
}
