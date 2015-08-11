<?php

/* Translations can be filed in the /languages/ directory */
load_theme_textdomain( 'flamingo', get_template_directory() . '/languages' );

$locale = get_locale();
$locale_file = get_template_directory() . "/languages/$locale.php";
if ( is_readable($locale_file) )
    require_once($locale_file);


/* Tell WordPress to run flamingo_setup() when the 'after_setup_theme' hook is run. */
add_action( 'after_setup_theme', 'flamingo_theme_setup' );

if ( ! function_exists( 'flamingo_theme_setup' ) ):

function flamingo_theme_setup() {

	if(is_admin()){	
		require_once(get_template_directory(). '/functions/settings.php');
	}
		
	// This theme uses post thumbnails
	add_theme_support( 'post-thumbnails' );
	
	// Images size
	if ( function_exists( 'add_image_size' ) ) { 
		
		update_option('thumbnail_size_w', 324);
		update_option('thumbnail_size_h', 243);
		update_option('medium_size_w', 565);
		update_option('medium_size_h', 9999);
		update_option('large_size_w', 690);
		update_option('large_size_h', 9999);
		add_image_size('small-thumbnail', 100, 45, true);
		add_image_size('vertical-blog', 210, 375, true);
		add_image_size('horizontal-blog', 1000, 150, true);
		add_image_size('large-blog', 573, 430, true);
		add_image_size('large-slideshow', 1280, 2000, false);
		add_image_size('portfolio-1-col', 1020, 600, true);
		add_image_size('portfolio-2-col', 481, 361, true);
		add_image_size('portfolio-3-col', 324, 243, true);
	}
	
	// Add default posts and comments RSS feed links to head
	add_theme_support( 'automatic-feed-links' );
	update_option('image_default_link_type', 'none' );

	if ( ! isset( $content_width ) ) 
    $content_width = 565;
    
}
endif;


if ( function_exists( 'register_nav_menus' ) ) {
	register_nav_menus(
		array(
		  'flamingo_main' => __("General menu","flamingo"),
		  'flamingo_footer' => __("Footer menu","flamingo")
		)
	);
}


if ( function_exists('register_sidebar') ) {
	register_sidebar(array(
		'name' => __('Sidebar','flamingo'),
		'id' => 'sidebar',
		'before_title'  => '<h3 class="widget_title">',
		'after_title'   => '</h3>'
	));
}


/* Additional wp_nav_menu classes for portfolio items */
function flamingo_nav_class( $classes, $item ){
	$pages = get_posts(array(
        'post_type' => 'page',
		'meta_key' => '_wp_page_template',
		'meta_value' => 'template-portfolio.php'
	));
	if($pages){ 
		foreach($pages as $page){ 
			$pageid = $page->ID; 
		} 
	    if((is_singular('portfolio') && $item->object_id == $pageid) || (is_tax('portfolio_type') && $item->object_id == $pageid)){
	        $classes[] = 'current-menu-item';
	    }    
    }
    
    $pages = get_posts(array(
        'post_type' => 'page',
		'meta_key' => '_wp_page_template',
		'meta_value' => 'template-blog.php'
	));
	if($pages){ 
		foreach($pages as $page){ 
			$pageid = $page->ID; 
		} 
	    if(is_singular('post') && $item->object_id == $pageid){
	        $classes[] = 'current-menu-item';
	    }    
    }

    return $classes;
}
add_filter( 'nav_menu_css_class', 'flamingo_nav_class', 10, 2 );


	
	

/* Replacing the default WordPress search form with an HTML5 version*/
function flamingo_html5_search_form( $form ) {
    $form = '<form role="search" method="get" id="searchform" action="' . home_url( '/' ) . '" >
    <input type="search" placeholder="'.__("Click enter to search...").'" value="' . get_search_query() . '" name="s" id="s" />
    <input type="submit" id="searchsubmit" value="Search" />
    </form>';

    return $form;
}
add_filter( 'get_search_form', 'flamingo_html5_search_form' );


/* Custom body classes */
add_filter('body_class','flamingo_body_classes');
function flamingo_body_classes($classes) {
	$flamingo_option = vankarwai_get_global_options();
	
	if(is_tax('portfolio_type')){ 
		$portfolio_pages = get_posts(array(
		    'post_type' => 'page',
			'meta_key' => '_wp_page_template',
			'meta_value' => 'template-portfolio.php'
		));
		if($portfolio_pages){ 
			$page_id = $portfolio_pages[0]->ID;
		} else {
			$page_id = null;
		}
	} else {
		$page_id = get_the_ID();
	}
	
	
	if(isset($flamingo_option['flamingo_retina']) && $flamingo_option['flamingo_retina']==1){ $classes[] = 'retina-enabled'; }
	if(flamingo_is_blog()){ 
		$classes[] = 'posts-stream'; 
		$classes[] = $flamingo_option['flamingo_sidebar_archive']; 
	}	
	if(is_singular('post')){
		$classes[] = $flamingo_option['flamingo_sidebar_single_post']; 
	}
	if(is_post_type_archive('portfolio') || is_page_template('template-portfolio.php') || is_tax('portfolio_type')){
		$classes[] = 'page-template-portfolio'; 
	}
	if(isset($flamingo_option['flamingo_projects_filtering'])){ $classes[] = $flamingo_option['flamingo_projects_filtering']; }
	if(isset($flamingo_option['flamingo_projects_pagination'])){ $classes[] = $flamingo_option['flamingo_projects_pagination']; }
	
	if(isset($flamingo_option['flamingo_gallery_style'])){ $classes[] = $flamingo_option['flamingo_gallery_style']; }
	if(isset($flamingo_option['flamingo_project_transition'])){ $classes[] = $flamingo_option['flamingo_project_transition']; }
	if(isset($flamingo_option['flamingo_project_size'])){ $classes[] = $flamingo_option['flamingo_project_size']; }
	
	if(isset($flamingo_option['flamingo_bg_layout'])){ $classes[] = $flamingo_option['flamingo_bg_layout']; }
	if(isset($flamingo_option['flamingo_blog_layout'])){ $classes[] = $flamingo_option['flamingo_blog_layout']; }
	if(isset($flamingo_option['flamingo_menu_layout'])){ $classes[] = $flamingo_option['flamingo_menu_layout']; }
	if(isset($flamingo_option['flamingo_dark_layout']) && $flamingo_option['flamingo_dark_layout']==1){ $classes[] = 'dark-layout'; }
	if(isset($flamingo_option['flamingo_scroll_to_top']) && $flamingo_option['flamingo_scroll_to_top']==1){ $classes[] = 'scroll-helper-enabled'; }
	
	if(isset($flamingo_option['flamingo_menu_fixed']) && $flamingo_option['flamingo_menu_fixed']==1){ $classes[] = 'menu-layout-fixed'; }
	if(isset($flamingo_option['flamingo_menu_displays']) && $flamingo_option['flamingo_menu_displays']==1){ $classes[] = 'no-menu-displays'; }
	
	if(isset($flamingo_option['flamingo_parallax']) && $flamingo_option['flamingo_parallax']){ $classes[] = 'parallax'; }
	/*if(isset($flamingo_option['flamingo_typewriter']) && $flamingo_option['flamingo_typewriter']){ $classes[] = 'typewriter'; }*/
	
	$detect = new Mobile_Detect();
	
	if(function_exists('get_field') && get_field('flamingo_background_type',$page_id) && get_field('flamingo_background_type',$page_id) != 'default'){
		if(($detect->isMobile() || $detect->isTablet()) && (get_field('flamingo_background_type',$page_id)=='video-bg')){
			$classes[] = 'image-bg'; 
			$classes[] = 'ios-fallback-bg';
		} else {
			$classes[] = get_field('flamingo_background_type',$page_id); 
		}
	} else if(isset($flamingo_option['flamingo_bg_type'])){ 
		if(($detect->isMobile() || $detect->isTablet()) && ($flamingo_option['flamingo_bg_type']=='video-bg')){
			$classes[] = 'image-bg'; 
			$classes[] = 'ios-fallback-bg';
		} else {
			$classes[] = $flamingo_option['flamingo_bg_type']; 
		}
	}

	
	if(function_exists('get_field') && get_field('flamingo_content_info_box',$page_id)){
		$classes[] = 'content-info-box'; 
	}
	
	if(function_exists('get_field') && get_field('flamingo_enable_slideshow',$page_id)){
		if(get_field('flamingo_slider_transition',$page_id)){ $classes[] = get_field('flamingo_slider_transition',$page_id); }
	}
	
	return $classes;
}


/* Remove defalut read more for excerpt blog entries
and add a custom button */
function new_excerpt_more($more) {
	global $post;
	if(is_singular('portfolio')){
		return '';
	} else {
		return '... <div class="btn one-half"><a title="'.get_the_title($post->ID).'" href="'.get_permalink($post->ID).'">'.__("Read more","flamingo").'</a></div>';
	}
}
add_filter('excerpt_more', 'new_excerpt_more');

/**
 * Change default fields, add placeholder and change type attributes.
 *
 * @param  array $fields
 * @return array
 */
function flamingo_comment_placeholders( $fields )
{
    $fields['author'] = str_replace(
        '<input',
        '<input required placeholder="'
            . _x(
                'name',
                'comment form placeholder',
                'flamingo'
                )
            . '"',
        $fields['author']
    );
    $fields['email'] = str_replace(
        '<input id="email" name="email" type="text"',
        '<input type="email" placeholder="contact@example.com"  id="email" name="email" required',
        $fields['email']
    );
    $fields['url'] = str_replace(
        '<input id="url" name="url" type="text"',
        '<input placeholder="http://example.com" id="url" name="url" type="url"',
        $fields['url']
    );

    return $fields;
}

add_filter( 'comment_form_default_fields', 'flamingo_comment_placeholders' );


// Add a default avatar to Settings > Discussion
if ( !function_exists('get_addgravatar') ) {
	function get_addgravatar( $avatar_defaults ) {
		$myavatar = get_template_directory_uri() . '/images/favicon-retina.png';
		$avatar_defaults[$myavatar] = get_bloginfo('name');
		return $avatar_defaults;
	}

	add_filter( 'avatar_defaults', 'get_addgravatar' );
}


function flamingo_comment($comment, $args, $depth) {
   $GLOBALS['comment'] = $comment; ?>
   <li <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
     <div id="comment-<?php comment_ID(); ?>">
      <div class="comment-author vcard">
         <?php echo get_avatar($comment, 80); ?>
      </div>
      <?php if ($comment->comment_approved == '0') : ?>
         <em><?php _e('Your comment is awaiting moderation.','flamingo') ?></em>
         <br />
      <?php endif; ?>

      <div class="comment-body-items">
      	  <?php printf('<cite class="fn">%s</cite> <span class="says">'.__('says','flamingo').':</span>', get_comment_author_link()) ?>
	      <div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>"><?php printf(__('%1$s at %2$s','flamingo'), get_comment_date(),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)','flamingo'),'  ','') ?></div>
	      <?php comment_text() ?>

	      <div class="reply">
	         <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	      </div>
  	  </div>
  	  <div class="clearfix"></div>
     </div>
<?php
}
        

/* Get portfolio page ID */

function flamingo_portfolio_ID(){
	$pages = get_pages(array('meta_key' => '_wp_page_template','meta_value' => 'template-portfolio.php'));
	if($pages){
		foreach($pages as $page){
			$portfolio_page_id = $page->ID;
		}
		return $portfolio_page_id;
	} else {
		return false;
	}
}
     


/* Remove dimension attributes from homepage thumbnails */
add_filter( 'post_thumbnail_html', 'flamingo_remove_thumbnail_dimensions', 10, 3 );

function flamingo_remove_thumbnail_dimensions( $html, $post_id, $post_image_id ) {
    $html = preg_replace( '/(width|height)=\"\d*\"\s/', "", $html );
    return $html;
}


/* Add custom taxonomies to the post class */
add_filter( 'post_class', 'custom_taxonomy_post_class', 10, 3 );

if( !function_exists( 'custom_taxonomy_post_class' ) ) {
    function custom_taxonomy_post_class( $classes, $class, $ID ) {
        $taxonomy = 'portfolio_type';
        $terms = get_the_terms( (int) $ID, $taxonomy );
        if( !empty( $terms ) ) {
            foreach( (array) $terms as $order => $term ) {
                if( !in_array( $term->slug, $classes ) ) {
                    $classes[] = $term->slug;
                }
            }
        }
        return $classes;
    }
}  


/* Get the post term slugs */ 
function flamingo_get_post_terms_slugs($taxonomy){
	$terms = get_the_terms(get_the_ID(), $taxonomy); 
    if($terms && ! is_wp_error($terms)){
		$term_slugs = array();
		foreach ($terms as $term){
			$term_slugs[] = $term->slug;
		}
		return $term_slugs;
	}						
}



/* Get YouTube video ID from the URL */
function flamingo_get_youtube_ID($url){
	preg_match('#(\.be/|/embed/|/v/|/watch\?v=)([A-Za-z0-9_-]{5,11})#', $url, $matches);
	if(isset($matches[2]) && $matches[2] != ''){
	     return $matches[2];
	}
}

/* Get Vimeo video ID from the URL */
function flamingo_get_vimeo_ID($url){
	preg_match_all('#(http://vimeo.com)/([0-9]+)#i',$url,$output);
	return $output[2][0];
}

function flamingo_is_blog(){
	if(is_post_type_archive('post') || is_author() || is_search() || is_home() || is_category() || is_page_template('blog.php')){
		if(is_page()){
			if(is_page_template('template-blog.php')) return true; else return false;
		}
		return true; 
	} else { return false; }
}


function filter_next_post_sort($sort) {
	global $post, $wpdb;
	if(is_singular('portfolio')){
		$flamingo_option = vankarwai_get_global_options();
		if($flamingo_option['flamingo_projects_orderby']=='menu_order'){
			$sort = "ORDER BY p.menu_order DESC LIMIT 1";
		}
	}
	return $sort;
}
function filter_next_post_where($where) {
	global $post, $wpdb;
	if(is_singular('portfolio')){
		$flamingo_option = vankarwai_get_global_options();
		if($flamingo_option['flamingo_projects_orderby']=='menu_order'){
			  return $wpdb->prepare("WHERE p.menu_order < '%s' AND p.post_type = 'portfolio' AND p.post_status = 'publish'",$post->menu_order);
	    }
	}
	return $where;
}

function filter_previous_post_sort($sort) {
	global $post, $wpdb;
	if(is_singular('portfolio')){
		$flamingo_option = vankarwai_get_global_options();
		if($flamingo_option['flamingo_projects_orderby']=='menu_order'){
			$sort = "ORDER BY p.menu_order ASC LIMIT 1";
		}
	}
	return $sort;
}
function filter_previous_post_where($where) {
	global $post, $wpdb;
	if(is_singular('portfolio')){
		$flamingo_option = vankarwai_get_global_options();
		if($flamingo_option['flamingo_projects_orderby']=='menu_order'){
			return $wpdb->prepare("WHERE p.menu_order > '%s' AND p.post_type = 'portfolio' AND p.post_status = 'publish'",$post->menu_order);
		}
	}
	return $where;
}


add_filter('get_next_post_sort',   'filter_next_post_sort');
add_filter('get_next_post_where',  'filter_next_post_where');

add_filter('get_previous_post_sort',  'filter_previous_post_sort');
add_filter('get_previous_post_where', 'filter_previous_post_where');



//DEREGISTER CONTACT FORM 7 STYLES
add_action( 'wp_print_styles', 'flamingo_deregister_styles', 100 );

function flamingo_deregister_styles() {
	wp_deregister_style( 'contact-form-7' );
}


if ( ! defined( 'WPCF7_AUTOP' ) )
	define( 'WPCF7_AUTOP', false );


/* Get all the project media for the slider */

function flamingo_get_project_media($postid, $size='thumbnail', $sizelarge='large-slideshow', $jumpfeat=false) {
	$args = array(
	'post_type' => 'attachment',
	'orderby' => 'menu_order',
	'order' => 'ASC',
	'numberposts' => -1,
	'post_mime_type' => 'image',
	'post_status' => null,
	'post_parent' => $postid
	);
	$images_array = array();
	if($jumpfeat){ $featatid = get_post_thumbnail_id(); } else { $featatid=0; }
	$attachments = get_posts($args);
	if ($attachments) {
		$num_image=0;
		$array_pos=0;
		foreach ($attachments as $attachment) {
			$image_thumb = wp_get_attachment_image_src($attachment->ID, $size);
			$image_large = wp_get_attachment_image_src($attachment->ID, $sizelarge);

			if(($attachment->ID != $featatid && $jumpfeat==true) || $jumpfeat==false){
				
				$images_array[$array_pos]['attachment_title'] = $attachment->post_title;
				$images_array[$array_pos]['attachment_caption'] = $attachment->post_excerpt;
				$images_array[$array_pos]['attachment_desc'] = $attachment->post_content;
				
				if(get_post_meta($attachment->ID, '_url_video', true)){ 
					$images_array[$array_pos]['url_source'] = get_post_meta($attachment->ID, '_url_video', true); 
					$images_array[$array_pos]['attachment_class'] = 'video';
				} elseif(get_post_meta($attachment->ID, '_url_website', true)){ 
					$images_array[$array_pos]['url_source'] = get_post_meta($attachment->ID, '_url_website', true); 
					$images_array[$array_pos]['attachment_class'] = 'iframe';
				} elseif(get_post_meta($attachment->ID, '_embed_soundcloud', true)){
					preg_match('/(https:\/\/)(.*)/', get_post_meta($attachment->ID, '_embed_soundcloud', true), $link);
					$images_array[$array_pos]['url_source'] = $link[0];
					$images_array[$array_pos]['attachment_class'] = 'iframe';
				} else { 
					$images_array[$array_pos]['url_source'] = $image_large[0]; 
					$images_array[$array_pos]['attachment_class'] = 'image';
				}
				
				$images_array[$array_pos]['video_width'] = get_post_meta($attachment->ID, '_video_width', true);
				
				$images_array[$array_pos]['attachment_id'] = $attachment->ID;
				$images_array[$array_pos]['url_thumb'] = $image_thumb[0];
				
				$array_pos++;
			}
			$num_image++;
		}
	}
	return $images_array;
}




/* By default, display only the images uploaded to a post in the post gallery */

add_action( 'admin_footer-post-new.php', 'flamingo_default_uploaded_images' );
add_action( 'admin_footer-post.php', 'flamingo_default_uploaded_images' );

function flamingo_default_uploaded_images(){
?>
<script>
jQuery(function($) {
    var called = 0;
    $('#wpcontent').ajaxStop(function() {
        if ( 0 == called ) {
            $('[value="uploaded"]').attr( 'selected', true ).parent().trigger('change');
            called = 1;
        }
    });
});
</script>
<?php
}


/* We set Visual Composer plugin to be part of the theme. Plugin update notifications will be disabled. */
if(function_exists('vc_set_as_theme')){ vc_set_as_theme(true); }


require_once(get_template_directory(). '/functions/init.php');


?>
