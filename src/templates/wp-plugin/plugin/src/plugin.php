<?php

/**
 * This is the file used to call all the functionality of the plugin
 * 
 **/

namespace PigeonPosse\{{pp_template_plugin_namespace}};

// If this file is called directly, abort.
if( ! defined( 'ABSPATH' ) ) die();

/**
 * Begins execution of the plugin.
 */

$run = function() {

   Inc\Main::run();

};

$run();
