<?php


// ===================== 
// ! CUSTOM POST TYPES  
// ===================== 
 
add_action( 'init', 'flamingo_custom_types_register',1 );
function flamingo_custom_types_register() {
	
	$flamingo_option = vankarwai_get_global_options();
	if(isset($flamingo_option['flamingo_portfolio_slug'])){ $portfolio_slug = $flamingo_option['flamingo_portfolio_slug']; } else { $portfolio_slug='portfolio'; }
	
	/*
		PROJECT TYPE: Custom Taxonomy for 'Portfolio'
		Note: Register the taxonomy before custom post type due to wp_rewrite behaviour
	*/
	$project_cat_labels = array(
		'name' 							=> _x('Project Type','taxonomy general name','flamingo'),
		'singular_name' 				=> _x('Project Type','taxonomy singular name','flamingo'),
		'search_items' 					=> __('Search Project Types','flamingo'),
		'popular_items'					=> __('Popular Project Types','flamingo' ),
		'all_items' 					=> __('All Project Types','flamingo'),
		'parent_item'                 	=> __('Parent Project Types','flamingo'),
		'edit_item' 					=> __('Edit Project Type','flamingo'),
		'update_item' 					=> __('Update Project Type','flamingo'),
		'add_new_item' 					=> __('Add Project Type','flamingo'),
		'new_item_name' 				=> __('New Project Type','flamingo'),
		'add_or_remove_items'			=> __('Add or remove Project Types','flamingo')
	);
	
	$args = array(
	    'label'                         => __('Project Type', 'flamingo'),
	    'labels'                        => $project_cat_labels,
	    'public'                        => true,
	    'hierarchical'                  => true,
	    'show_ui'                       => true,
	    'show_in_nav_menus'             => true,
	    'rewrite'                       => array( 'slug' => $portfolio_slug.'/type', 'with_front' => true ),
	    'query_var'                     => true
	);
	register_taxonomy( 'portfolio_type', 'portfolio', $args );
	
	
	
	/*
		PORTFOLIO: Custom Post Type
	*/
	
	$projects_labels = array(
		'name' 					=> _x('Portfolio','post type general name','flamingo'),
		'singular_name'			=> _x('Project','post type singular name','flamingo'),
		'add_new' 				=> _x('Add New Project','portfolio','flamingo'),
		'add_new_item'			=> __('Add New Project','flamingo'),
		'edit_item'				=> __('Edit Project','flamingo'),
		'new_item'				=> __('New Project','flamingo'),
		'view_item'				=> __('View Project','flamingo'),
		'search_items'			=> __('Search Project','flamingo'),
		'not_found' 			=> __('No Project found','flamingo'),
		'not_found_in_trash' 	=> __('No Project found in Trash','flamingo')
	);
	
	$projects_args = array(
        'labels'                => $projects_labels,
        'public'                => true,
        'show_ui'               => true,
        'query_var' 			=> true,
        'show_in_menu'          => true,
        'menu_position' 		=> 5,
        'capability_type' 		=> 'post',
        'supports'              => array( 'title', 'editor', 'thumbnail', 'page-attributes' ),	
        'rewrite'               => array( 'slug' => $portfolio_slug, 'with_front' => true ),
        'has_archive'           => true
    );
    
	register_post_type( 'portfolio' , $projects_args );
	
}


/* Add new columns for PORTFOLIO custom post type */
function flamingo_portfolio_columns_head($defaults) {
	$defaults['project_image'] = __("Project Image","flamingo");
	$defaults['project_client'] = __("Client","flamingo");
	return $defaults;
}
function flamingo_portfolio_columns_content($column_name, $post_ID) {
	if ($column_name == 'project_image') {
		$project_image = flamingo_get_featured_image($post_ID);
		if ($project_image) {
			echo '<img width="100" src="' . $project_image . '" />';
		}
	}
	
	if ($column_name == 'project_client') {
		$project_client = get_post_meta($post_ID, 'project_client', true);
		if ($project_client) {
			echo $project_client;
		}
	}
}
add_filter('manage_edit-portfolio_columns', 'flamingo_portfolio_columns_head');
add_action('manage_portfolio_posts_custom_column', 'flamingo_portfolio_columns_content', 10, 2);


/* Add new columns for SLIDER IMAGE custom post type */
function flamingo_slider_columns_head($defaults) {
	$defaults['slider_image'] = __("Featured Image","flamingo");
	return $defaults;
}
function flamingo_slider_columns_content($column_name, $post_ID) {
	if ($column_name == 'slider_image') {
		$slider_image = flamingo_get_featured_image($post_ID);
		if ($slider_image) {
			echo '<img width="100" src="' . $slider_image . '" />';
		}
	}
}
add_filter('manage_edit-slider_columns', 'flamingo_slider_columns_head');
add_action('manage_slider_posts_custom_column', 'flamingo_slider_columns_content', 10, 2);



/* Get featured image */
function flamingo_get_featured_image($post_ID) {
	$post_thumbnail_id = get_post_thumbnail_id($post_ID);
	if ($post_thumbnail_id) {
		$post_thumbnail_img = wp_get_attachment_image_src($post_thumbnail_id, 'featured-thumbnail');
		return $post_thumbnail_img[0];
	}
}

add_action('do_meta_boxes', 'flamingo_slider_image_metabox');

function flamingo_slider_image_metabox(){
    remove_meta_box( 'postimagediv', 'slider', 'side' );
    add_meta_box('postimagediv', __('Slideshow Images','flamingo'), 'post_thumbnail_meta_box', 'slider', 'advanced', 'default');
}


?>