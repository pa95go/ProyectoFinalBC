<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210323093321 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE carrito (id INT AUTO_INCREMENT NOT NULL, brand_id INT DEFAULT NULL, INDEX IDX_77E6BED544F5D008 (brand_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE mis_soportes (id INT AUTO_INCREMENT NOT NULL, brand_id INT DEFAULT NULL, player_id INT DEFAULT NULL, INDEX IDX_5A0DE3D544F5D008 (brand_id), INDEX IDX_5A0DE3D599E6F5DF (player_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE carrito ADD CONSTRAINT FK_77E6BED544F5D008 FOREIGN KEY (brand_id) REFERENCES brand (id)');
        $this->addSql('ALTER TABLE mis_soportes ADD CONSTRAINT FK_5A0DE3D544F5D008 FOREIGN KEY (brand_id) REFERENCES brand (id)');
        $this->addSql('ALTER TABLE mis_soportes ADD CONSTRAINT FK_5A0DE3D599E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE soporte ADD carrito_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE soporte ADD CONSTRAINT FK_2273AC6DE2CF6E7 FOREIGN KEY (carrito_id) REFERENCES carrito (id)');
        $this->addSql('CREATE INDEX IDX_2273AC6DE2CF6E7 ON soporte (carrito_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE soporte DROP FOREIGN KEY FK_2273AC6DE2CF6E7');
        $this->addSql('DROP TABLE carrito');
        $this->addSql('DROP TABLE mis_soportes');
        $this->addSql('DROP INDEX IDX_2273AC6DE2CF6E7 ON soporte');
        $this->addSql('ALTER TABLE soporte DROP carrito_id');
    }
}
