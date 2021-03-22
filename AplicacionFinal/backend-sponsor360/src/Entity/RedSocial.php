<?php

namespace App\Entity;

use App\Repository\RedSocialRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RedSocialRepository::class)
 */
class RedSocial
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $twitter_usuario;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $twitter_seg;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $twitter_eng;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $fb_usuario;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $fb_seg;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $fb_eng;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $insta_usuario;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $insta_seg;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $insta_eng;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTwitterUsuario(): ?string
    {
        return $this->twitter_usuario;
    }

    public function setTwitterUsuario(?string $twitter_usuario): self
    {
        $this->twitter_usuario = $twitter_usuario;

        return $this;
    }

    public function getTwitterSeg(): ?float
    {
        return $this->twitter_seg;
    }

    public function setTwitterSeg(?float $twitter_seg): self
    {
        $this->twitter_seg = $twitter_seg;

        return $this;
    }

    public function getTwitterEng(): ?float
    {
        return $this->twitter_eng;
    }

    public function setTwitterEng(?float $twitter_eng): self
    {
        $this->twitter_eng = $twitter_eng;

        return $this;
    }

    public function getFbUsuario(): ?string
    {
        return $this->fb_usuario;
    }

    public function setFbUsuario(?string $fb_usuario): self
    {
        $this->fb_usuario = $fb_usuario;

        return $this;
    }

    public function getFbSeg(): ?float
    {
        return $this->fb_seg;
    }

    public function setFbSeg(?float $fb_seg): self
    {
        $this->fb_seg = $fb_seg;

        return $this;
    }

    public function getFbEng(): ?float
    {
        return $this->fb_eng;
    }

    public function setFbEng(?float $fb_eng): self
    {
        $this->fb_eng = $fb_eng;

        return $this;
    }

    public function getInstaUsuario(): ?string
    {
        return $this->insta_usuario;
    }

    public function setInstaUsuario(?string $insta_usuario): self
    {
        $this->insta_usuario = $insta_usuario;

        return $this;
    }

    public function getInstaSeg(): ?float
    {
        return $this->insta_seg;
    }

    public function setInstaSeg(?float $insta_seg): self
    {
        $this->insta_seg = $insta_seg;

        return $this;
    }

    public function getInstaEng(): ?float
    {
        return $this->insta_eng;
    }

    public function setInstaEng(?float $insta_eng): self
    {
        $this->insta_eng = $insta_eng;

        return $this;
    }
}
