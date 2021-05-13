<?php

require_once "../vendor/tubalmartin/CssMin/Colors.php";
require_once "../vendor/tubalmartin/CssMin/Command.php";
require_once "../vendor/tubalmartin/CssMin/Minifier.php";
require_once "../vendor/tubalmartin/CssMin/Utils.php";

use tubalmartin\CssMin\Minifier as CSSmin;

$file = "../templates/62235_/style.css";
$input_css = "";

$css_group = array(
	"../templates/62235_/css/font.css",
	"../templates/62235_/css/bootstrap.css",
	"../templates/62235_/css/bootstrap-dropdownhover.css",
	"../templates/62235_/css/web-fonts-with-css/css/fontawesome-all.css",
	"../templates/62235_/css/mobmenu.css",
	"../jscript/jquery/plugins/colorbox/colorbox.css",
	"../jscript/owl-carousel/owl.carousel.min.css",
	"../templates/62235_/stylesheet.css",
	"../jscript/magnific/css/magnific.css"
);

foreach ($css_group as $value) {
	$input_css .= file_get_contents($value) . " ";
}
//$input_css = file_get_contents("templates/62235_/stylesheet2.css");


$compressor = new CSSmin;

$compressor->setLineBreakPosition(1000);

$compressor->setMemoryLimit("256M");
$compressor->setMaxExecutionTime(120);
$compressor->setPcreBacktrackLimit(3000000);
$compressor->setPcreRecursionLimit(150000);

$output_css = $compressor->run($input_css);


if(file_put_contents($file, $output_css)) echo "<h1>Стили обновлены</h1>";

?>