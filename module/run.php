<?php

$text=$_GET['name'];
$text_2=$_GET['branch'];

$text=$text."  of  ".$text_2;

$left=(int)$_GET['left'];

$left=$left+370;

var_dump($left);

$origin_x=$left;

$image=imagecreatefromjpeg("ipimage.jpg");

$output="certificate.jpg";

$black=imagecolorallocate($image,40,40,40);

$font_size=80;
$rotation=0;

$origin_y=1300;
$font=__DIR__.'/certi.ttf';


$text1=imagettftext($image,$font_size,$rotation,$origin_x,$origin_y,$black,$font,$text);
//$text1=imagettftext($image,20,$rotation,320,535,imagecolorallocate($image,0,0,0),__DIR__.'/cert2.ttf',$text_2);

//unlink(__DIR__ . '/opimage.jpg');
imagejpeg($image,$output,99);

?>
