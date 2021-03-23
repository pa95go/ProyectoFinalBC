<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210323091942 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE soporte (id INT AUTO_INCREMENT NOT NULL, player_id INT DEFAULT NULL, brand_id INT DEFAULT NULL, nombre VARCHAR(255) DEFAULT NULL, descripcion LONGTEXT DEFAULT NULL, imagen VARCHAR(255) DEFAULT NULL, tamano VARCHAR(255) DEFAULT NULL, precio DOUBLE PRECISION DEFAULT NULL, estado VARCHAR(255) DEFAULT NULL, fecha_inicio DATE DEFAULT NULL, fecha_fin DATE DEFAULT NULL, INDEX IDX_2273AC699E6F5DF (player_id), INDEX IDX_2273AC644F5D008 (brand_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE soporte ADD CONSTRAINT FK_2273AC699E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE soporte ADD CONSTRAINT FK_2273AC644F5D008 FOREIGN KEY (brand_id) REFERENCES brand (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE soporte');
    }
}
