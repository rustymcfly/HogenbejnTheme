<?php

namespace RustyMcFly\HogenbejnTheme\Command;

use Doctrine\DBAL\Connection;
use Shopware\Core\Content\Media\MediaCollection;
use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\Uuid\Uuid;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class MigrateMediaCommand extends Command
{

    public function __construct(private readonly string $rootPath, private readonly EntityRepository $mediaRepository, private readonly Connection $connection)
    {
        parent::__construct(self::$defaultName);
    }

    protected static $defaultName = 'media:migrate';

    protected function configure()
    {

    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $mediaIds = $this->connection->fetchAllAssociative(<<<SQL
select lower(hex(id)) as id from media where path not like concat('%', file_name, '%')
SQL
        );


        $criteria = new Criteria(array_column($mediaIds, "id"));


        /**
         * @var $entities MediaCollection
         */
        $entities = $this->mediaRepository->search($criteria, Context::createDefaultContext())->getEntities();
        foreach ($entities as $entity) {
            $search = $this->rootPath . '/media/*/*/*/*/' . $entity->getFileNameIncludingExtension();
            $file = glob($search);

            if (count($file)) {
                $path = str_replace($this->rootPath . DIRECTORY_SEPARATOR, '', $file[0]);
                $id = $entity->getId();
                $this->connection->executeStatement(
                "update media set path = :path where id = :id;"
                , [
                    "path" =>$path,
                    "id" => Uuid::fromHexToBytes($id),
                ]);
            }

        }
        return 1;

    }

    private function createDirRecursive(string $basePath, array $parts)
    {
        if (count($parts)) {
            if (!is_dir($basePath . DIRECTORY_SEPARATOR . $parts[0])) {
                mkdir($basePath . DIRECTORY_SEPARATOR . $parts[0]);
            }
            $shift = array_shift($parts);
            $this->createDirRecursive($basePath . DIRECTORY_SEPARATOR . $shift, $parts);
        }
    }


    private function getDirContents($dir, &$results = array())
    {
        $files = scandir($dir);

        foreach ($files as $key => $value) {
            $path = realpath($dir . DIRECTORY_SEPARATOR . $value);
            if (!is_dir($path)) {
                $results[] = $path;
            } else if ($value != "." && $value != "..") {
                $this->getDirContents($path, $results);
                $results[] = $path;
            }
        }

        return $results;
    }

}
