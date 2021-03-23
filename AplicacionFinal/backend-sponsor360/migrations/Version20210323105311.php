<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210323105311 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE mis_soportes (id INT AUTO_INCREMENT NOT NULL, brand_id INT DEFAULT NULL, soporte_id INT DEFAULT NULL, INDEX IDX_5A0DE3D544F5D008 (brand_id), UNIQUE INDEX UNIQ_5A0DE3D573C044D2 (soporte_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE mis_soportes ADD CONSTRAINT FK_5A0DE3D544F5D008 FOREIGN KEY (brand_id) REFERENCES brand (id)');
        $this->addSql('ALTER TABLE mis_soportes ADD CONSTRAINT FK_5A0DE3D573C044D2 FOREIGN KEY (soporte_id) REFERENCES soporte (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE mis_soportes');
    }
}
