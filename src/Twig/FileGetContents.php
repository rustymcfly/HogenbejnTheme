<?php

namespace RustyMcFly\HogenbejnTheme\Twig;

use Shopware\Core\Content\Media\MediaEntity;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FileGetContents extends AbstractExtension
{

    public function __construct(private string $rootFilePath)
    {
    }

    public function getFunctions()
    {
        return array(
            new TwigFunction('fileGetContents', array($this, 'fileGetContents') ),
        );
    }

    public function fileGetContents($file)
    {
        return file_get_contents($this->rootFilePath . DIRECTORY_SEPARATOR . $file);
    }

}
