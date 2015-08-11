<?php

/**
 * Theme Setups
 */
add_action( 'after_setup_theme', 'id_theme_setup' );

if ( ! function_exists( 'id_theme_setup' ) ):

function id_theme_setup() {
		
	// Images size
	if ( function_exists( 'add_image_size' ) ) { 
						
		add_image_size('portfolio-content-image', 1996);
	}
	    
}
endif;



/**
 * JavaScript overwrites
 */
add_action( 'wp_enqueue_scripts', 'id_script_fix' );
function id_script_fix()
{
    wp_dequeue_script( 'custom' );
    wp_enqueue_script( 'custom', get_stylesheet_directory_uri() . '/js/custom.js', array( 'jquery' ) );
    wp_enqueue_script( 'ivorydigital', get_stylesheet_directory_uri() . '/js/ivorydigital.js', array( 'jquery' ) );
}



/**
 * Encode an email address to display on your website
 */
function encode_email_address( $email ) {

     $output = '';

     for ($i = 0; $i < strlen($email); $i++) 
     { 
          $output .= '&#'.ord($email[$i]).';'; 
     }

     return $output;
}