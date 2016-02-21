#! /bin/sh

# etcpack : http://malideveloper.arm.com/resources/tools/mali-gpu-texture-compression-tool/

nvcompress -bc1 rgb.png       compressed/rgb_bc1.dds
nvcompress -bc1 alpha.png    compressed/alpha_bc1.dds
nvcompress -bc1a alpha.png    compressed/alpha_bc1a.dds
nvcompress -bc3 alpha.png     compressed/alpha_bc3.dds

etcpack rgb.png compressed -c etc1
etcpack rgb.png compressed -c etc1 -ktx
