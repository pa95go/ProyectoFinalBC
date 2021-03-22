<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210322183013 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE player ADD rrss_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65FE893BF9 FOREIGN KEY (rrss_id) REFERENCES red_social (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_98197A65FE893BF9 ON player (rrss_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65FE893BF9');
        $this->addSql('DROP INDEX UNIQ_98197A65FE893BF9 ON player');
        $this->addSql('ALTER TABLE player DROP rrss_id');
    }
}
