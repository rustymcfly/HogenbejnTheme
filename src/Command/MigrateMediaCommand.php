<?php

namespace RustyMcFly\HogenbejnTheme\Command;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;

class MigrateMediaCommand extends Command
{

    /**
     * @var EntityRepository
     */
    private $mediaRepository;

    public function __construct(EntityRepository $mediaRepository)
    {
        parent::__construct(self::$defaultName);
        $this->mediaRepository = $mediaRepository;
    }

    use ContainerAwareTrait;

    protected static $defaultName = 'media:migrate';

    protected function configure()
    {

    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $fsRoot = $this->container->getParameter('shopware.filesystem.public.config.root');
        foreach ($this->getDirContents($fsRoot . DIRECTORY_SEPARATOR . 'thumbnails') as $path) {
            if (!is_dir($path)) {
                $pathInfo = pathinfo($path);

                $criteria = new Criteria();

                $criteria->addFilter(new EqualsFilter('fileName', preg_replace('/[0-9]+x[0-9]+\.[a-z]{3}$/', '', $pathInfo["filename"])));

                $entity = $this->mediaRepository->search($criteria, Context::createDefaultContext())->first();
                if ($entity) {
                    $output->write('migrate ' . $path . PHP_EOL);
                    $mediaPath = str_replace('https://hogenbejn.de', '', $entity->getUrl());
                    $mediaDirs = explode(DIRECTORY_SEPARATOR, $mediaPath);
                    $mediaPathInfo = pathinfo($mediaPath);
                    array_pop($mediaDirs);
                    array_shift($mediaDirs);
                    $this->createDirRecursive($fsRoot, $mediaDirs);
                    $fileContent = file_get_contents($path);
                    file_put_contents($fsRoot . $mediaPath, $fileContent);
                    dump($fsRoot . $mediaPath);
                }

            } else {
                $output->write($path . PHP_EOL);
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
