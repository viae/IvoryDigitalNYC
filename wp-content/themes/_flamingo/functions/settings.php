<?php
require_once(TEMPLATEPATH.'/framework/vankarwai-framework.php');

/**
 * Define Constants
 */

define('VKW_THEME_NAME', 'Flamingo'); 
define('VKW_THEME_DOMAIN', 'flamingo'); 
define('VKW_THEME_DOMAIN_PO', 'flamingo'); 
define('VKW_PAGE_BASENAME', 'flamingo-settings'); 


/**
 * Include the required files
 */
// page settings sections & fields
require_once('options/general.php');
require_once('options/portfolio.php');
require_once('options/blog.php');
require_once('options/fonts.php');



function vankarwai_set_default_options() {
	$vankarwai_default_options = array();
	$vankarwai_default_options_pages = array();
	$vankarwai_default_options_fonts = array();
				
	foreach(vankarwai_options_fields() as $val){
   		if(isset($val['std'])){ $vankarwai_default_options[$val['name']] = $val['std']; } else {  $vankarwai_default_options[$val['name']] = ''; }
	}
	update_option('vankarwai_options',$vankarwai_default_options);
	
		
	foreach(vankarwai_options_portfolio_fields() as $val){
   		if(isset($val['std'])){ $vankarwai_default_options_portfolio[$val['name']] = $val['std']; } else {  $vankarwai_default_options[$val['name']] = ''; }
	}
	update_option('vankarwai_options_portfolio',$vankarwai_default_options_portfolio);
	
	foreach(vankarwai_options_blog_fields() as $val){
   		if(isset($val['std'])){ $vankarwai_default_options_blog[$val['name']] = $val['std']; } else {  $vankarwai_default_options[$val['name']] = ''; }
	}
	update_option('vankarwai_options_blog',$vankarwai_default_options_blog);
	
	foreach(vankarwai_options_fonts_fields() as $val){
   		if(isset($val['std'])){ $vankarwai_default_options_fonts[$val['name']] = $val['std']; } else {  $vankarwai_default_options[$val['name']] = ''; }
	}
	update_option('vankarwai_options_fonts',$vankarwai_default_options_fonts);
	
}


function vankarwai_first_run_options() {
	if ( get_option('flamingo_activation_check') != "set" ) {
		vankarwai_set_default_options();
   		add_option('flamingo_activation_check', "set");
  	}
}
add_action('wp_head', 'vankarwai_first_run_options');
add_action('admin_head', 'vankarwai_first_run_options');



/**
 * Collects our theme options
 *
 * @return array
 */
function vankarwai_get_global_options(){

	$vankarwai_option = array();

	// collect option names as declared in vankarwai_get_settings()
	$vankarwai_option_names = array (
		'vankarwai_options',
		'vankarwai_options_portfolio',
		'vankarwai_options_blog',
		'vankarwai_options_fonts'
	);

	// loop for get_option
	foreach ($vankarwai_option_names as $vankarwai_option_name) {
		if (get_option($vankarwai_option_name)!= FALSE) {
			$option 	= get_option($vankarwai_option_name);

			// now merge in main $vankarwai_option array!
			$vankarwai_option = array_merge($vankarwai_option, $option);
		} 
	}	

return $vankarwai_option;
}



/**
* Helper function for defining variables according to current page content
*
* @return array
*/
function vankarwai_get_settings() {
	
	$output = array();
	
	/*PAGES*/
	// get current page
	$page = vankarwai_get_admin_page();

	if(strpos($page,VKW_THEME_DOMAIN) === 0){
		/*DEFINE VARS*/
		// define variables according to registered admin menu page: vankarwai_add_menu()
		switch ($page) {
			case VKW_PAGE_BASENAME:
				$vankarwai_option_name 		= 'vankarwai_options';
				$vankarwai_settings_page_title = __( 'General',VKW_THEME_DOMAIN_PO);	
				$vankarwai_page_sections 		= vankarwai_options_sections();
				$vankarwai_page_fields 		= vankarwai_options_fields();
			break;
			
			case VKW_PAGE_BASENAME . '-fonts':
				$vankarwai_option_name 		= 'vankarwai_options_fonts';
				$vankarwai_settings_page_title = __( 'Fonts',VKW_THEME_DOMAIN_PO);
				$vankarwai_page_sections 		= vankarwai_options_fonts_sections();
				$vankarwai_page_fields 		= vankarwai_options_fonts_fields();
			break;
						
			case VKW_PAGE_BASENAME . '-portfolio':
				$vankarwai_option_name 		= 'vankarwai_options_portfolio';
				$vankarwai_settings_page_title = __( 'Portfolio',VKW_THEME_DOMAIN_PO);	
				$vankarwai_page_sections 		= vankarwai_options_portfolio_sections();
				$vankarwai_page_fields 		= vankarwai_options_portfolio_fields();
			break;
			
			case VKW_PAGE_BASENAME . '-blog':
				$vankarwai_option_name 		= 'vankarwai_options_blog';
				$vankarwai_settings_page_title = __( 'Blog',VKW_THEME_DOMAIN_PO);	
				$vankarwai_page_sections 		= vankarwai_options_blog_sections();
				$vankarwai_page_fields 		= vankarwai_options_blog_fields();
			break;
			
		}
		
		// put together the output array 
		$output['vankarwai_option_name'] 		= $vankarwai_option_name;
		$output['vankarwai_page_title'] 		= $vankarwai_settings_page_title;
		$output['vankarwai_page_sections'] 		= $vankarwai_page_sections;
		$output['vankarwai_page_fields'] 		= $vankarwai_page_fields;
	}
	return $output;
}


/**
 * The admin menu pages
 */
function vankarwai_add_menu(){
	
	$settings_output 		= vankarwai_get_settings();

	// As a "top level" menu
	add_menu_page( VKW_THEME_NAME, VKW_THEME_NAME, 'manage_options', VKW_PAGE_BASENAME, 'vankarwai_settings_page_fn', get_template_directory_uri().'/images/favicon.png'); 
	
	// general page
	$vankarwai_settings_page = add_submenu_page(VKW_PAGE_BASENAME, VKW_THEME_NAME . ' / ' . __('General Options', VKW_THEME_DOMAIN_PO), __('General',VKW_THEME_DOMAIN_PO), 'manage_options', VKW_PAGE_BASENAME, 'vankarwai_settings_page_fn');

		// css & js
		add_action( 'load-'. $vankarwai_settings_page, 'vankarwai_settings_scripts' );
	
	// portfolio page
	$vankarwai_settings_portfolio = add_submenu_page(VKW_PAGE_BASENAME, VKW_THEME_NAME . ' / ' . __('Portfolio Options', VKW_THEME_DOMAIN_PO), __('Portfolio',VKW_THEME_DOMAIN_PO), 'manage_options', VKW_PAGE_BASENAME . '-portfolio', 'vankarwai_settings_page_fn');

		// css & js
		add_action( 'load-'. $vankarwai_settings_portfolio, 'vankarwai_settings_scripts' );
		
	// blog page
	$vankarwai_settings_blog = add_submenu_page(VKW_PAGE_BASENAME, VKW_THEME_NAME . ' / ' . __('Blog Options', VKW_THEME_DOMAIN_PO), __('Blog',VKW_THEME_DOMAIN_PO), 'manage_options', VKW_PAGE_BASENAME . '-blog', 'vankarwai_settings_page_fn');

		// css & js
		add_action( 'load-'. $vankarwai_settings_blog, 'vankarwai_settings_scripts' );	
		
	// fonts page
	$vankarwai_settings_fonts = add_submenu_page(VKW_PAGE_BASENAME, VKW_THEME_NAME . ' / ' . __('Fonts Options', VKW_THEME_DOMAIN_PO), __('Fonts',VKW_THEME_DOMAIN_PO), 'manage_options', VKW_PAGE_BASENAME . '-fonts', 'vankarwai_settings_page_fn');

		// css & js
		add_action( 'load-'. $vankarwai_settings_fonts, 'vankarwai_settings_scripts' );
	
}


?>