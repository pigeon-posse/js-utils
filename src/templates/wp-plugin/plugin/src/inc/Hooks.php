<?php

namespace PigeonPosse\{{pp_template_plugin_namespace}}\Inc;

/**
 * PHP class to put all fake admin functions
 *
 **/
class Hooks extends Core {

    /**
     * Add error notices if there are not fake administrator
     *
     */
    public function notices( ) {

        $this->notices->add(
            'all',
            'warning', 
            $this->txt['admin-notice'],
            false,
            false
        );

    }

    /**
     * Todo
     *
     */
    public function add(){

        add_action( 
            'admin_notices', 
            [ $this, 'notices' ],
        );

    }

}
