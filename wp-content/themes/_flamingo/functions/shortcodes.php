<?php

// =====================
// SHORTCODES
// =====================


/* highlights
----------------------------*/
function vkw_highlight($atts, $content = null) {
	extract(shortcode_atts(array(
				'bgcolor' => '#ffea00',
				'color' => '#000'
			), $atts));
	$content = wpb_js_remove_wpautop($content);
	return '<span class="highlight" style="background:' . esc_attr( $bgcolor ) . ';color:' . esc_attr( $color ) . '">' . $content . '</span>';
}
add_shortcode('highlight', 'vkw_highlight');


/* dividers
----------------------------*/
function vkw_divider( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'style' => 'dotted-dark'
			), $atts ) );
	return '<div class="divider"><span class="' . esc_attr( $style ) . '"></span></div>';
}
add_shortcode('divider', 'vkw_divider');

/* claims
----------------------------*/
function vkw_claim( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'align' => ''
			), $atts ) );
	return '<h2 class="claim ' . ( $align ? 'align-' . esc_attr( $align ) : '' )  . '">' . do_shortcode( $content ) . '</h2>';
}
add_shortcode('claim', 'vkw_claim');

/* middle title
----------------------------*/
function vkw_midtle( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'align' => ''
			), $atts ) );
	return '<h2 class="midtle ' . ( $align ? 'align-' . esc_attr( $align ) : '' )  . '">' . do_shortcode( $content ) . '</h2>';
}
add_shortcode('midtle', 'vkw_midtle');

/* bigger texts
----------------------------*/
function vkw_biggertexts( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'size' => ''
			), $atts ) );
	return '<p class="bigger-text-' . esc_attr( $size ) . '">' . do_shortcode( $content ) . '</p>';
}
add_shortcode('biggertext', 'vkw_biggertexts');

/* smaller texts
----------------------------*/
function vkw_smallertexts( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'size' => ''
			), $atts ) );
	return '<p class="smaller-text-' . esc_attr( $size ) . '">' . do_shortcode( $content ) . '</p>';
}
add_shortcode('smallertext', 'vkw_smallertexts');


/* buttons
----------------------------*/
function vkw_button( $atts, $content = null ) {

	extract( shortcode_atts( array(
				'url'   => '',
				'size'  => '',
				'style' => '',
				'bgcolor' => '',
				'color' => '',
				'arrow' => ''
			), $atts ) );

	$output = '<a class="button ' . esc_attr( $size ) . ' ' . esc_attr( $style ) . '" href="' . esc_attr( $url ) . '" style="background:' . esc_attr( $bgcolor ) . ';color:' . esc_attr( $color ) . '">';

	if( $arrow && $arrow == 'left' )
		$output .= '<span class="arrow icon-angle-left"></span> ';

	$output .= $content;

	if( $arrow && $arrow == 'right' )
		$output .= ' <span class="arrow icon-angle-right"></span>';

	$output .= '</a>';

	return $output;

}
add_shortcode('button', 'vkw_button');

/* custom lists
----------------------------*/

function vkw_clists( $atts, $content = null ) {

	extract( shortcode_atts( array(
				'icon' => '',
				'style' => '',
				'color' => ''
			), $atts ) );

	$content = str_replace('<li>','<li><i class="icon-'.$icon.'" style="color:'.$color.'"></i>',$content);
	$content = str_replace('</li>','</li>',$content);

	return '<div class="custom-list '.$style.'">'.$content.'</div>';

}
add_shortcode('list', 'vkw_clists');


/* dropcaps
----------------------------*/
function vkw_dropcap( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'style' => ''
			), $atts ) );
	return '<span class="dropcap ' . esc_attr( $style ) . '">' . $content . '</span>';
}
add_shortcode('dropcap', 'vkw_dropcap');


/* content boxes
----------------------------*/
function vkw_contentbox( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'bgcolor'  => '',
				'color' =>''
			), $atts ) );
	return '<div class="content-box" style="background-color:'.esc_attr( $bgcolor ).';color:'.esc_attr( $color ).'">' . do_shortcode( $content ) . '</div>';
}
add_shortcode('content_box', 'vkw_contentbox');

/* code boxes
----------------------------*/
function vkw_codebox( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'bgcolor'  => '',
				'color' =>''
			), $atts ) );
	return '<div class="code-box" style="background-color:'.esc_attr( $bgcolor ).';color:'.esc_attr( $color ).'">' . do_shortcode( $content ) . '</div>';
}
add_shortcode('code_box', 'vkw_codebox');

/* blockquotes
----------------------------*/
function vkw_quote( $atts, $content = null ) {
	extract( shortcode_atts( array(
				'author' => '',
				'style' => '',
				'color' => '',
				'align' => '',
				'bgcolor'   => ''
			), $atts ) );
	$output = '<blockquote class="' . esc_attr( $style ) . '" style="background:'. esc_attr( $bgcolor ) .'; color:'. esc_attr( $color ) .'"><i class="icon-quote-left"></i>';
	$output .= '<p style="color:'. esc_attr( $color ) .';text-align:'. esc_attr( $align ) .'">' . $content . '</p>';
	$output .= '</blockquote>';
	if( $author )
		$output .= '<small class="quote-author">' . do_shortcode( $author ) . '</small><div class="clearfix"></div>';
	return $output;
}
add_shortcode('quote', 'vkw_quote');




/* tiny MCE buttons
----------------------------*/
function vkw_add_shortcodes_button() {
	if ( !current_user_can('edit_posts') && !current_user_can('edit_pages') )
		return;
	if ( get_user_option('rich_editing') == 'true' ) {
		add_filter('mce_external_plugins', 'vkw_add_shortcodes_tinymce_plugin');
		add_filter('mce_buttons', 'vkw_register_shortcodes_button');
	}
}
add_action('init', 'vkw_add_shortcodes_button');

function vkw_register_shortcodes_button( $buttons ) {
	array_push( $buttons, '|', 'vkw_framework_shortcodes' );
	return $buttons;
}

function vkw_add_shortcodes_tinymce_plugin( $plugin_array ) {
	$plugin_array['vkw_framework_shortcodes'] = get_template_directory_uri() . '/functions/tinymce/tinymce.js';
	return $plugin_array;
}

function vkw_refresh_mce( $ver ) {
	$ver += 3;
	return $ver;
}
add_filter('tiny_mce_version', 'vkw_refresh_mce');


function vankarwai_shortcodes_scripts(){
	wp_register_script('tinymce_scripts', get_template_directory_uri().'/functions/tinymce/js/scripts.js', array('jquery'), false, true );
	wp_enqueue_script('tinymce_scripts');
}

add_action('admin_print_scripts-post.php', 'vankarwai_shortcodes_scripts');
add_action('admin_print_scripts-post-new.php', 'vankarwai_shortcodes_scripts');



/* VC widgets */

function vkw_project_slideshow( $atts, $content = null ) {

	extract( shortcode_atts( array(
				'title'      => '',
				'orderby'      => '',
				'limit'      => ''), $atts ) );
				
	if(esc_attr( $orderby )=='Date'){
		$orderby_attr = 'date';
		$order_attr = 'DESC';
	} else {
		$orderby_attr = 'menu_order';
		$order_attr = 'ASC';
	}
	
	global $post;
	
	$args = array('post_type'  => 'portfolio',
		'posts_per_page' => esc_attr( $limit ),
		'order'          => $order_attr,
		'orderby'        => $orderby_attr,
		'post_status'    => 'publish',
		'meta_query' => array(
		array(
			'key' => 'flamingo_featured_project',
			'value' => '1',
			'compare' => '=='
		))
	);
	$output = '';

	$feat_work = new WP_Query( $args );

	if( !$feat_work->have_posts() ) {
		unset($args['meta_query']);
		$feat_work = new WP_Query( $args );
	}

	if( $feat_work->have_posts() ) {
		$output .= '<div class="latest-work"><small class="rotate-text">'.esc_attr($title).'</small>';

		$output .= '<section class="slider">';
		$output .= '<div class="flexslider">';
		$output .= '<ul class="slides">';

		while( $feat_work->have_posts() ) {

			$feat_work->the_post();

			$output .= '<li>';

			$output .= '<a href="' . get_permalink( $post->ID ) . '" title="' . get_the_title( $post->ID ) . '">';
			
			$image = get_field('flamingo_featured_project_image');
			
			if($image){
				$output .= '<img src="'.$image['sizes']['portfolio-1-col'].'" alt="'.$image['title'].'" />';
			} else {
				$output .= get_the_post_thumbnail($post->ID,'portfolio-1-col');	
			}

			$output .= '</a>';

			$output .= '</li>';

		}

		$output .= '</ul>';
		$output .= '</div>';
		$output .= '</section>';
		$output .= '</div>';

	}

	return $output;
}
add_shortcode( 'vkw_project_slideshow', 'vkw_project_slideshow' );




function vkw_project_grid( $atts, $content = null ) {

	extract( shortcode_atts( array(
				'title'      => '',
				'limit'      => '',
				'cols'       => '',
				'link'       => '',
				'link_title' => '',
				'orderby' 	 => '',
				'display_type'=>'',
				'display_date'=>'',
				'exclude_feat' => ''), $atts ) );

	global $post;
	
	if(esc_attr( $orderby )=='Date'){
		$orderby_attr = 'date';
		$order_attr = 'DESC';
	} else {
		$orderby_attr = 'menu_order';
		$order_attr = 'ASC';
	}
	$args = array('post_type'  => 'portfolio',
		'posts_per_page' => esc_attr( $limit ),
		'order'          => $order_attr,
		'orderby'        => $orderby_attr,
		'post_status'    => 'publish',

	);
	$output = '';

	if( $exclude_feat=='yes' ) {

		$args = array_merge( $args, array( 'meta_query' => array(
		array(
			'key' => 'flamingo_featured_project',
			'value' => '1',
			'compare' => '!='
		))
		));

	}
	$latest_work = new WP_Query( $args );

	if( $latest_work->have_posts() ) {

		$output .= '<div class="featured projects cols-'.$cols.'"><small class="rotate-text">'.esc_attr($title).'</small>';

		$output .= '<ul id="container">';

		while( $latest_work->have_posts() ) {

			$latest_work->the_post();

			$output .= '<li>';
			
			$img_size = $cols; if($img_size>=3){ $img_size = 3; }

			$output .= '<figure>'.get_the_post_thumbnail($post->ID,'portfolio-'.$img_size.'-col').'</figure>';

			$output .= '<a href="' . get_permalink( $post->ID ) . '" title="' . get_the_title( $post->ID ) . '">';

			$output .= '<div class="title-overlay">';

			$output .= '<h3>'. get_the_title( $post->ID ) .'</h3>';

			if($display_date=='yes'){
				$output .= '<span class="project-date">'.get_the_time('Y').'</span>';
			}

			if($display_type=='yes'){
				$output .= '<span class="project-cat">'.strip_tags(get_the_term_list($post->ID,'portfolio_type','',', ','')).'</span>';
			}
			$output .= '<div class="hover-overlay"></div>';

			$output .= '</div>';

			$output .= '</a>';

			$output .= '</li>';

		}
		
		$output .= '</ul>';
		
		if($link=='yes'){
			$output .= '<div class="btn btn-latest-works">';
			$output .= '<a title="' .esc_attr($link_title).'" href="' . get_permalink( flamingo_portfolio_ID() ) . '" class="inner-link">'.esc_attr($link_title).'</a>';
			$output .= '</div>';
		}

		



		$output .= '</div>';

	}

	return $output;



}
add_shortcode( 'vkw_project_grid', 'vkw_project_grid' );




function vkw_twitter( $atts, $content = null ) {

	extract( shortcode_atts( array(
				'limit'      => '',
				'username' => ''), $atts ) );

	$output = '';
	$output .= '<div id="paging" class="widget-twitter widget-twitter-content">';
	$output .= '<div class="widget query"></div>';
	$output .= '<div class="controls">';
	$output .= '<a href="#" class="prev" title="Previous tweet"><i class="icon-angle-left"></i></a>';
	$output .= '<span class="pagenum"></span>';
	$output .= '<a href="#" class="next" title="Next tweet"><i class="icon-angle-right"></i></a>';
	$output .= '</div>';
	$output .= '</div>';

	$output .= ' <script type="text/javascript">
	(function($){
    	"use strict";
		$(document).ready(function() {
			$("#paging .widget").tweet({
			    modpath: themeUrl+"/functions/twitter/",
			    count: '.$limit.',
			    username: "'.esc_attr($username).'",
			    loading_text: "'.__("loading tweets...","flamingo").'"
			});
		});
	}(jQuery));
	</script>';

	return $output;



}
add_shortcode( 'vkw_twitter', 'vkw_twitter' );



function vkw_gmap( $atts, $content = null ) {

	extract( shortcode_atts( array(
				'coords'      => '',
				'marker' => '',
				'zoom' => '',
				'styles' => ''), $atts ) );

	$output = '';
	$output .= '<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAGHGFiezCqgHErvsVgHr4AE1EhDJZL-DM&amp;sensor=false"></script>';
	$output .= "<script>
    var map;
    function initialize() {";

	//$output .= esc_attr($styles);

	$output .= "var styles = [
    {
      featureType: 'administrative',
      elementType: 'all',
      stylers: [
        { hue: '#ffea00' },
        { saturation: 100 },
        { lightness: -2 },
        { visibility: 'simplified' }
      ]
    },{
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        { hue: '#474747' },
        { saturation: -100 },
        { lightness: -69 },
        { visibility: 'simplified' }
      ]
    },{
      featureType: 'water',
      elementType: 'all',
      stylers: [
        { hue: '#d3eeee' },
        { saturation: -2 },
        { lightness: 50 },
        { visibility: 'on' }
      ]
    }
  ];";

	$marker = wp_get_attachment_image_src($marker,'full');
	if($marker){ $marker_url = $marker[0]; } else { $marker_url = get_template_directory_uri().'/images/default-map-marker.png'; }

	$output .= "
      var options = {
        mapTypeControlOptions: {
          mapTypeIds: [ 'Styled']
        },
        center: new google.maps.LatLng(".esc_attr($coords)."),
        zoom: ".esc_attr($zoom).",
        mapTypeControl: false,
        streetViewControl: true,
        mapTypeId: 'Styled'
      };
      var div = document.getElementById('map-canvas');
      var map = new google.maps.Map(div, options);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Flamingo' });
      map.mapTypes.set('Styled', styledMapType);
      var mapOptions = {
        zoom: ".esc_attr($zoom).",
        scrollwheel: false,
        streetViewControl: true,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL
        },
      };
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(".esc_attr($coords)."),
          map: map,
          title: 'Flamingo',
          clickable: false,
          icon: '".$marker_url."'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
	</script>";
	$output .= '<div id="map-canvas"></div>';


	return $output;

}
add_shortcode( 'vkw_gmap', 'vkw_gmap' );





if(function_exists('wpb_map')){

	wpb_map( array(
		"name" => __("Project Slideshow","flamingo"),
		"base" => "vkw_project_slideshow",
		"class" => "",
		"category" => __('Flamingo','flamingo'),
		"icon" => 'icon-flamingo-project-slideshow',
		'admin_enqueue_css' => array(get_template_directory_uri().'/functions/vc_extend/project-slideshow.css'),
		"params" => array(
			array(
				"type" => "textfield",
				"holder" => "div",
				"class" => "",
				"heading" => __("Title","flamingo"),
				"param_name" => "title",
				"value" => __('Featured Projects', 'flamingo')
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Number of projects","flamingo"),
				"param_name" => "limit",
				"value" => array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Order Projects By","flamingo"),
				"param_name" => "orderby",
				"value" => array("Date","Menu Order")
			),
		)
	));

	wpb_map( array(
		"name" => __("Project Grid","flamingo"),
		"base" => "vkw_project_grid",
		"class" => "",
		"category" => __('Flamingo','flamingo'),
		"icon" => 'icon-flamingo-project-grid',
		'admin_enqueue_css' => array(get_template_directory_uri().'/functions/vc_extend/project-grid.css'),
		"params" => array(
			array(
				"type" => "textfield",
				"holder" => "div",
				"class" => "",
				"heading" => __("Title","flamingo"),
				"param_name" => "title",
				"value" => __('Latest Work', 'flamingo')
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Number of projects","flamingo"),
				"param_name" => "limit",
				"value" => array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Thumb columns","flamingo"),
				"param_name" => "cols",
				"value" => array(1,2,3,4,5,6)
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Exclude Featured Projects","flamingo"),
				"param_name" => "exclude_feat",
				"value" => array("yes","no"),
				"description" => __("Exclude the featured projects that are displayed in the slideshow","flamingo")
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Display Project Type","flamingo"),
				"param_name" => "display_type",
				"value" => array("yes","no")
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Display Project Date","flamingo"),
				"param_name" => "display_date",
				"value" => array("yes","no")
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Order Projects By","flamingo"),
				"param_name" => "orderby",
				"value" => array("Date","Menu Order")
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Include a link to Portfolio","flamingo"),
				"param_name" => "link",
				"value" => array("yes","no")
			),
			array(
				"type" => "textfield",
				"holder" => "div",
				"class" => "",
				"heading" => __("Portfolio Link Title","flamingo"),
				"param_name" => "link_title",
				"value" => __('View Portfolio', 'flamingo')
			)

		)
	));


	wpb_map( array(
		"name" => __("Twitter","flamingo"),
		"base" => "vkw_twitter",
		"class" => "",
		"category" => __('Flamingo','flamingo'),
		"icon" => 'icon-flamingo-twitter',
		'admin_enqueue_css' => array(get_template_directory_uri().'/functions/vc_extend/twitter.css'),
		"params" => array(
			array(
				"type" => "textfield",
				"holder" => "div",
				"class" => "",
				"heading" => __("Twitter Username","flamingo"),
				"param_name" => "username",
				"value" => __('vankarwai', 'flamingo')
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Number of tweets to show","flamingo"),
				"param_name" => "limit",
				"value" => array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20)
			)
		)
	));

	wpb_map( array(
		"name" => __("Google Maps","flamingo"),
		"base" => "vkw_gmap",
		"class" => "",
		"category" => __('Flamingo','flamingo'),
		"icon" => 'icon-google-maps',
		'admin_enqueue_css' => array(get_template_directory_uri().'/functions/vc_extend/google-maps.css'),
		"params" => array(
			array(
				"type" => "textfield",
				"holder" => "div",
				"class" => "",
				"heading" => __("Coordinates","flamingo"),
				"param_name" => "coords",
				"value" => "40.116247181558116, 0.12441406250002007",
				"description" => __("You can get your coordinates in","flamingo").' <a href="http://itouchmap.com/latlong.html" target="_blank">itouchmap.com</a>'
			),
			array(
				"type" => "attach_image",
				"holder" => "div",
				"class" => "",
				"heading" => __("Marker Image","flamingo"),
				"param_name" => "marker"
			),
			array(
				"type" => "dropdown",
				"holder" => "div",
				"class" => "",
				"heading" => __("Zoom","flamingo"),
				"param_name" => "zoom",
				"value" => array(4,5,6,7,8,9,10,11,12,13,14,15,16,17,18)
			)/*,
     array(
   	 	"type" => "textarea_raw_html",
         "holder" => "div",
         "class" => "",
         "heading" => __("Custom map styles","flamingo"),
         "param_name" => "styles",
         "value" => base64_encode("var styles = [
{
  featureType: 'administrative',
  elementType: 'all',
  stylers: [
    { hue: '#ffea00' },
    { saturation: 100 },
    { lightness: -2 },
    { visibility: 'simplified' }
  ]
},{
  featureType: 'landscape',
  elementType: 'all',
  stylers: [
    { hue: '#474747' },
    { saturation: -100 },
    { lightness: -69 },
    { visibility: 'simplified' }
  ]
},{
  featureType: 'water',
  elementType: 'all',
  stylers: [
    { hue: '#d3eeee' },
    { saturation: -2 },
    { lightness: 50 },
    { visibility: 'on' }
  ]
}
];"),
         "description" => __("You can create your own styles var in","flamingo").' <a href="http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html" target="_blank">googlecode.com</a>'
     )*/
			)
	));


}


?>