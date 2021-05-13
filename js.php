<?php

$file = "../templates/62235_/group.js";
$input_js = "";
$output_js = "";

$js_group = array(
	"../jscript/magnific/js/magnific.min.js",
	"../jscript/owl-carousel/owl.carousel.min.js",
	"../templates/62235_/javascript/match-height.min.js",
	"../templates/62235_/javascript/vamshop.js",
	"../templates/62235_/javascript/jquery.sticky/jquery.sticky.js",
	"../jscript/jscript_ajax_cart.js",
	"../jscript/jquery/plugins/colorbox/jquery.colorbox.js",
	"../jscript/jquery/plugins/colorbox/i18n/jquery.colorbox-ru.js",
	"../templates/62235_/javascript/bootstrap/bootstrap.min.js",
	"../templates/62235_/javascript/bootstrap/bootstrap-dropdownhover.min.js"
);

foreach ($js_group as $value) {
	$input_js = file_get_contents($value);
	$output_js .= $input_js . PHP_EOL . PHP_EOL;
}

/*foreach ($js_group as $value) {
	$input_js = file_get_contents($value);
	$output_js .= JSMinPlus::minify($input_js) . PHP_EOL . PHP_EOL;
}*/


//set_time_limit(120);
//$output_js = JSMinPlus::minify($input_js);


if(file_put_contents($file, $output_js)) echo "<h1>JS обновлены</h1>";

?>