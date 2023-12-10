<?php declare(strict_types=1);

namespace HogenbejnTheme\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1675606019createOfferUpload extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1675606019;
    }

    public function update(Connection $connection): void
    {
        $connection->executeStatement("
        create table if not exists offer_upload (
            `id` binary(16),
            `customer_id` binary(16),
            `salutation_id` binary(16),
            `media_id` binary(16),
            `product_id` binary(16),
            `firstname` varchar(255) not null,
            `lastname` varchar(255) not null,
            `phone` varchar(255) not null,
            `email` varchar(255) not null,
            `subject` varchar(255) not null,
            `message` longtext not null,
            `privacy` tinyint not null,
            `created_at` DATETIME(3) NOT NULL,
            `updated_at` DATETIME(3),

            primary key (`id`),


    CONSTRAINT `fk.offer_upload_media` FOREIGN KEY (media_id)
        REFERENCES media (`id`) ON DELETE set null ON UPDATE CASCADE,
    CONSTRAINT `fk.offer_upload_product` FOREIGN KEY (product_id)
        REFERENCES product (`id`) ON DELETE set null ON UPDATE CASCADE,
    CONSTRAINT `fk.offer_upload_customer` FOREIGN KEY (customer_id)
        REFERENCES customer (`id`) ON DELETE set null ON UPDATE CASCADE,
    CONSTRAINT `fk.offer_upload_salutation` FOREIGN KEY (salutation_id)
        REFERENCES salutation (`id`) ON DELETE set null ON UPDATE CASCADE
        )
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4
    COLLATE = utf8mb4_unicode_ci;

        ");
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
