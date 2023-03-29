<?php

namespace PigeonPosse\{{pp_template_plugin_namespace}}\Inc;

use PigeonPosse\{{pp_template_plugin_namespace}}\Utils\Notices;

/**
 * PHP class to put all fake admin functions
 *
 **/
class Core {

    /**
     * 'classes'    contains Classes 
     * 'capability' contains capability of fake admin
     * 'id'         contains the unique ID of user role
     *
     */
    protected $txt, $notices;

    /**
     * Initialize the class and set its properties.
     *
     */
    public function __construct( ) {

    	$this->plugin_name      = '{{pp_template_name}}';
        $this->txt           	= $this->txt();
        $this->notices 			= new Notices();

    }

    /**
     * Todo
     *
     */
    protected function txt(){

    	$name = $this->plugin_name;

    	return [
    		'plugin-name'  => __( '{{pp_template_plugin_name}}', $name ),
    		'admin-notice' => __( 'Lorem ipsum', $name ),
    	];

    }

}
