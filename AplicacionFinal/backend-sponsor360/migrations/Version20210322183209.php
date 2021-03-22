<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210322183209 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE brand ADD rrss_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE brand ADD CONSTRAINT FK_1C52F958FE893BF9 FOREIGN KEY (rrss_id) REFERENCES red_social (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1C52F958FE893BF9 ON brand (rrss_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE brand DROP FOREIGN KEY FK_1C52F958FE893BF9');
        $this->addSql('DROP INDEX UNIQ_1C52F958FE893BF9 ON brand');
        $this->addSql('ALTER TABLE brand DROP rrss_id');
    }
}
