<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210322182803 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE red_social (id INT AUTO_INCREMENT NOT NULL, twitter_usuario VARCHAR(255) DEFAULT NULL, twitter_seg DOUBLE PRECISION DEFAULT NULL, twitter_eng DOUBLE PRECISION DEFAULT NULL, fb_usuario VARCHAR(255) DEFAULT NULL, fb_seg DOUBLE PRECISION DEFAULT NULL, fb_eng DOUBLE PRECISION DEFAULT NULL, insta_usuario VARCHAR(255) DEFAULT NULL, insta_seg DOUBLE PRECISION DEFAULT NULL, insta_eng DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE red_social');
    }
}
