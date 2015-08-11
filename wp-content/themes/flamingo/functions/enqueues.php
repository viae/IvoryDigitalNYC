<?php

function flamingo_scripts_embed(){
?>
<script type="text/javascript">
	var themeUrl = "<?php echo get_template_directory_uri(); ?>";
	var langLoadMore = "<?php _e("Load more","flamingo"); ?>";
	var langNoMore = "<?php _e("No more pages to load","flamingo"); ?>";
	<?php if(is_page_template('template-contact.php')){ ?>
	<?php $marker_url = ''; if(get_field('flamingo_map_marker')){ $marker = get_field('flamingo_map_marker'); $marker_url = $marker['url']; } else { $marker_url = get_template_directory_uri().'/images/default-map-marker.png'; } ?>var markerUrl = "<?php echo $marker_url; ?>";
	<?php if(get_field('flamingo_map_zoom')){ echo 'var mapZoom = "'.get_field('flamingo_map_zoom').'";
	'; }
	if(get_field('flamingo_map_location')){ echo 'var mapLocation = "'.get_field('flamingo_map_location').'";
	'; } } ?>
</script>
<?php
}


/* Load twitter on page header to enable the optional .po translation */
function flamingo_jquery_embed(){ 
$flamingo_option = vankarwai_get_global_options(); ?>
<?php }
	

/* Load Google webfonts */

function flamingo_load_webfonts(){
	$flamingo_option = vankarwai_get_global_options();
	$webfonts = array_unique(array($flamingo_option['flamingo_primary_typeface']['face'],$flamingo_option['flamingo_secondary_typeface']['face'],$flamingo_option['flamingo_body_typeface']['face']));
	foreach($webfonts as $webfont){ print vankarwai_get_google_webfont($webfont)."\n"; }
}
add_action('wp_enqueue_scripts', 'flamingo_load_webfonts');

// Add RSS links to <head> section
add_theme_support( 'automatic-feed-links' );

function flamingo_scripts(){
	// Load scripts
	if ( !is_admin() ) {
		$flamingo_option = vankarwai_get_global_options();
		add_action('wp_footer', 'flamingo_jquery_embed', 20);
		add_action('wp_head', 'flamingo_scripts_embed', 2);
		wp_enqueue_script('jquery');
		wp_enqueue_script('scripts', get_template_directory_uri().'/js/scripts.js', false, false, true);
		wp_enqueue_script('hoverintent', get_template_directory_uri().'/js/hoverIntent.js', false, false, true);
		wp_enqueue_script('superfish', get_template_directory_uri().'/js/superfish.js', false, false, true);
		wp_enqueue_script('cycle', get_template_directory_uri().'/js/jquery.cycle.lite.js', false, false, true);
		wp_enqueue_script('custom', get_template_directory_uri().'/js/custom.js', false, false, true);
		
		if($flamingo_option['flamingo_bg_type']=='video-bg' && isset($flamingo_option['flamingo_bg_video_vimeo']) && $flamingo_option['flamingo_bg_video_vimeo']!=''){
			wp_enqueue_script('froogaloop', get_template_directory_uri().'/js/froogaloop2.min.js', false, false, false);
		}
		
		if ( is_singular() ) wp_enqueue_script( "comment-reply" );

		global $is_IE;
		if($is_IE){
			wp_enqueue_script('html5shiv', get_template_directory_uri()."/js/html5shiv.js", false, false, true);
			wp_enqueue_script('imgsizer', get_template_directory_uri()."/js/imgsizer.js", false, false, true);
			wp_enqueue_script('respond', get_template_directory_uri()."/js/respond.min.js", false, false, true);
			wp_enqueue_script('modernizr', get_template_directory_uri()."/js/modernizr-2.5.3-min.js", false, false, true);
		}
		
	}
}

add_action('wp_enqueue_scripts', 'flamingo_scripts');  

function flamingo_styles(){ 	
	wp_enqueue_style('style', get_bloginfo('stylesheet_url'));
	wp_enqueue_style('global', get_template_directory_uri().'/css/global.css');
	
	
	$flamingo_option = vankarwai_get_global_options();
	
	if($flamingo_option['flamingo_gallery_style']=='gal-v1'){
		wp_enqueue_style('galleria', get_template_directory_uri().'/js/themes/one_plus/galleria.one_plus.css');
	} else if($flamingo_option['flamingo_gallery_style']=='gal-v2'){
		wp_enqueue_style('galleria', get_template_directory_uri().'/js/themes/one_plus_light/galleria.one_plus_simple.css');
	} else if($flamingo_option['flamingo_gallery_style']=='gal-v3'){
		wp_enqueue_style('galleria', get_template_directory_uri().'/js/themes/one_plus_bureau/galleria.one_plus_bureau.css');
	} else if($flamingo_option['flamingo_gallery_style']=='gal-v4'){
		wp_enqueue_style('galleria', get_template_directory_uri().'/js/themes/flamingo/galleria.flamingo.css');
	}
}

add_action('wp_enqueue_scripts', 'flamingo_styles');

			
// Clean up the <head>
function flamingo_remove_head_links() {
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'flamingo_remove_head_links');
remove_action('wp_head', 'wp_generator');

?>