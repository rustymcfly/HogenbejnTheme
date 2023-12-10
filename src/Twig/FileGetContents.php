<?php

namespace HogenbejnTheme\Twig;

use Shopware\Core\Content\Media\MediaEntity;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FileGetContents extends AbstractExtension
{
    use ContainerAwareTrait;
    public function getFunctions()
    {
        return array(
            new TwigFunction('fileGetContents', array($this, 'fileGetContents') ),
        );
    }

    public function fileGetContents($file)
    {
//        /**
//         * @var MediaEntity
//         */
//        $media;
        return file_get_contents($this->container->getParameter('shopware.filesystem.public.config.root') . DIRECTORY_SEPARATOR . $file);
    }

}
