<?php
function flamingo_custom_styles(){
	$flamingo_option = vankarwai_get_global_options();
	if(!isset($flamingo_option['flamingo_page_description_color'])){ $flamingo_option['flamingo_page_description_color'] = '#ffffff'; }
	
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
?>

<style type="text/css">

#spinner:before { border-top-color: <?php echo $flamingo_option['flamingo_main_color']; ?>; }

body {
	background-color: <?php echo $flamingo_option['flamingo_bg_color']; ?>;
}
	
body.image-bg,
body.pattern-bg {
	<?php if(function_exists('get_field') && (get_field('flamingo_background_type',$page_id) == 'image-bg' || get_field('flamingo_background_type',$page_id) == 'pattern-bg')){ ?>
	background-image: url(<?php the_field('flamingo_background_image',$page_id); ?>);
	<?php } else { ?>
	background-image: url(<?php echo $flamingo_option['flamingo_bg_image']; ?>);
	<?php } ?>
}
body.color-bg {
	<?php if(function_exists('get_field') && (get_field('flamingo_background_type',$page_id) == 'color-bg')){ ?>	
	background-color: <?php the_field('flamingo_background_color',$page_id); ?>;
	<?php } ?>
}
body.ios-fallback-bg { 
	background-image: url(<?php if(get_field('flamingo_video_fallback_image',$page_id)){ $ios_fallback_image = get_field('flamingo_video_fallback_image',$page_id); echo $ios_fallback_image['sizes']['large-slideshow']; } else { echo $flamingo_option['flamingo_bg_image']; } ?>);
}
h2.page-title,
.post-share h5,
.post-category h5,
.widget h3,
cite.fn,
.widget-twitter-content .query a {
	border-bottom-color: <?php echo $flamingo_option['flamingo_main_color']; ?>;
}
.content-wrapper a:hover,
.info-box h5,
.related-project ul,
.info-box a:not(.gal-close-btn),
.info-box a:not(.fullscreen-btn),
.info-box a:not(.show-related-btn),
.navigation ul li a:hover,
.menu-footer li a:hover,
input[type=submit]:active,
input[type=submit]:focus,
input[type=submit]:hover {
	border-bottom-color: <?php echo $flamingo_option['flamingo_sec_color']; ?>;
}
.bypostauthor { border-top-color: <?php echo $flamingo_option['flamingo_main_color']; ?>; }
.related-project ul { border-top-color: <?php echo $flamingo_option['flamingo_sec_color']; ?>; }
input:focus,
input:not([type="submit"]):focus,
textarea:focus { border-color: <?php echo $flamingo_option['flamingo_main_color']; ?>; }
.post-content h2 a:hover,
.single-pagination span a:hover {
	border-bottom: 2px solid <?php echo $flamingo_option['flamingo_main_color']; ?>;
}
.gal-v4 .galleria-close-wrapper a i,
.gal-v4 .galleria-image-nav-right i,
.gal-v4 .galleria-image-nav-left i,
.gal-v4 .galleria-content-area,
.menu-launcher span a small {
	background-color: <?php echo $flamingo_option['flamingo_main_color']; ?>;
}
.menu-launcher span a small:after{ border-left-color: <?php echo $flamingo_option['flamingo_main_color']; ?>; }
.tagcloud a:hover,
.wpb_wrapper .wpb_carousel .prev:hover,
.wpb_wrapper .wpb_carousel .next:hover,
.pagination .wp-pagenavi a:hover{
	background-color: <?php echo $flamingo_option['flamingo_main_color']; ?>;
	color: <?php echo $flamingo_option['flamingo_sec_color']; ?>;
}
.widget ul li a:hover,
.info-box a:not(.gal-close-btn):hover,
.wpb_wrapper .wpb_accordion .wpb_accordion_wrapper .ui-accordion-header-active,
.wpb_wrapper .wpb_content_element div.ui-tabs .ui-tabs-nav li.ui-tabs-active {border-bottom:1px solid <?php echo $flamingo_option['flamingo_main_color']; ?>;}

.featured ul li div span,
.featured ul li .title-overlay h3,
.featured ul li .title-overlay {
	color: <?php echo $flamingo_option['flamingo_thumb_text_color']; ?>;
}

.menu.backgrounded,
.content-wrapper,
.device-menu-firer,
.wpb_wrapper .vc_text_separator div,
.menu > li .sub-menu li a:hover {
	background-color: <?php echo $flamingo_option['flamingo_content_bg_color']; ?>;
}

.section-header {
	border-color: <?php echo $flamingo_option['flamingo_content_bg_color']; ?>;
}


.menu li a,
.menu-share ul li a {
	color: <?php echo $flamingo_option['flamingo_menu_color']; ?>;
}

.menu-layout-1 #overlay-header,
.menu-layout-2 #overlay-header,
.straight-layout.menu-layout-3 .bottom-menu-angle,
.minimal-layout.menu-layout-3 .bottom-menu-angle,
.sticky-opacity.menu-layout-fixed.menu-layout-3 .bottom-menu-angle {
	background: <?php echo $flamingo_option['flamingo_menu_bg_color']; ?>;
}
.bottom-menu-angle {
	border-color: rgba(255, 255, 255, 0) <?php echo $flamingo_option['flamingo_menu_bg_color']; ?>;
}

.logo img {
	width: <?php echo $flamingo_option['flamingo_logo_width']; ?>px;
	height: <?php echo $flamingo_option['flamingo_logo_height']; ?>px;
	margin-left: <?php echo $flamingo_option['flamingo_logo_horizontal_position']; ?>px;
	margin-top: <?php echo $flamingo_option['flamingo_logo_vertical_position']*-1; ?>px;
}

.top-angle,
.bottom-angle {
	border-color: transparent <?php echo $flamingo_option['flamingo_content_bg_color']; ?>;
}
/*
.content-wrapper{
	background-color: <?php echo $flamingo_option['flamingo_content_bg_color']; ?>;
}
*/
.reply a,
.wpb_wrapper .wpb_carousel .prev,
.wpb_wrapper .wpb_carousel .next,
.pagination .wp-pagenavi a,
.pagination .wp-pagenavi span,
.pagination .wp-pagenavi span.current {
	color: <?php echo $flamingo_option['flamingo_main_color']; ?>;
	border: 2px solid <?php echo $flamingo_option['flamingo_main_color']; ?>;
}
.tagcloud a,
.widget_archive select {
	color: <?php echo $flamingo_option['flamingo_main_color']; ?>;
	border: 1px solid <?php echo $flamingo_option['flamingo_main_color']; ?>;
}
.tagcloud a:hover,
.menu > li .sub-menu li a:hover{
	color: <?php echo $flamingo_option['flamingo_sec_color']; ?>;
}

h1,h2,h3,h4,h5,h6 {
	font-family: <?php echo vankarwai_get_font_face_css($flamingo_option['flamingo_primary_typeface']['face']); ?>;
	font-weight: <?php echo $flamingo_option['flamingo_primary_typeface']['weight']; ?>;
	text-transform:  <?php echo vankarwai_get_text_transform($flamingo_option['flamingo_primary_typeface']); ?>;
}
.post-content h2,
.post-content h2 a,
.post-content h2 a:visited,
.post-body .btn a:hover { color: <?php echo $flamingo_option['flamingo_main_color']; ?>; }

<?php if(isset($flamingo_option['flamingo_menu_helper']) && $flamingo_option['flamingo_menu_helper']==1){ ?> 
.menu-launcher span a small { display: none !important; }
<?php } ?>

/*Primary typeface*/
body {
	font-family: <?php echo vankarwai_get_font_face_css($flamingo_option['flamingo_primary_typeface']['face']); ?>;
}

/*Secondary typeface*/
.inner-header h4,
.current-header,
.menu-layout-1 .current-body,
.current-footer,
.target-header,
.menu-layout-1 .target-body,
.target-footer,
.secondary-font > *,
.remove-warn,
.content-wrapper blockquote { font-family: <?php echo vankarwai_get_font_face_css($flamingo_option['flamingo_secondary_typeface']['face']); ?>; }
/*Body typeface*/
.content-wrapper p,
.post-excerpt,
.tweet_text { font-family: <?php echo vankarwai_get_font_face_css($flamingo_option['flamingo_body_typeface']['face']); ?>; }

/* PAGE */
h2.page-title,
.page-description,
.page-description p,
.actions-related a i,
.action-fullscreen a i,
.action-scroll a i {
	<?php if(get_field('flamingo_page_description_color',$page_id)){ ?>
	color: <?php the_field('flamingo_page_description_color',$page_id); ?>; 
	<?php } else { ?>
	color: <?php echo $flamingo_option['flamingo_page_description_color']; ?>;
	<?php } ?>
}

.content-info-box .actions .action-fullscreen,
.content-info-box .action-fullscreen,
.content-info-box .action-scroll { color: <?php echo $flamingo_option['flamingo_main_color']; ?>; }

.actions-related, .action-fullscreen, .action-scroll {
	<?php if(get_field('flamingo_page_description_color',$page_id)){ ?>
	border-color: <?php the_field('flamingo_page_description_color',$page_id); ?>; 
	<?php } else { ?>
	border-color: <?php echo $flamingo_option['flamingo_page_description_color']; ?>;
	<?php } ?>
}
.section-title h2:after,
.actions-related:hover,
.action-fullscreen:hover,
.action-scroll:hover {
	<?php if(get_field('flamingo_page_description_color',$page_id)){ ?>
	background: <?php the_field('flamingo_page_description_color',$page_id); ?>; 
	<?php } else { ?>
	background: <?php echo $flamingo_option['flamingo_page_description_color']; ?>;
	<?php } ?>
}



/* PORTOLIO */

.flexslider ul li .title-layer,
.featured ul li .hover-overlay,
.wpb_thumbnails h2.post-title a {
	background: <?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>;
	<?php if($flamingo_option['flamingo_thumbs_bg_type']=='gradient-bg'){ ?>
	background: -webkit-gradient(linear, 0 0, 0 bottom, from(<?php echo $flamingo_option['flamingo_thumbs_bg_color_2']; ?>), to(<?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>));
	background: -webkit-linear-gradient(<?php echo $flamingo_option['flamingo_thumbs_bg_angle']; ?>deg, <?php echo $flamingo_option['flamingo_thumbs_bg_color_2']; ?>, <?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>);
	background:    -moz-linear-gradient(<?php echo $flamingo_option['flamingo_thumbs_bg_angle']; ?>deg, <?php echo $flamingo_option['flamingo_thumbs_bg_color_2']; ?>, <?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>);
	background:     -ms-linear-gradient(<?php echo $flamingo_option['flamingo_thumbs_bg_angle']; ?>deg, <?php echo $flamingo_option['flamingo_thumbs_bg_color_2']; ?>, <?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>);
	background:      -o-linear-gradient(<?php echo $flamingo_option['flamingo_thumbs_bg_angle']; ?>deg, <?php echo $flamingo_option['flamingo_thumbs_bg_color_2']; ?>, <?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>);
	background:         linear-gradient(<?php echo $flamingo_option['flamingo_thumbs_bg_angle']; ?>deg, <?php echo $flamingo_option['flamingo_thumbs_bg_color_2']; ?>, <?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>);
	-pie-background: linear-gradient(<?php echo $flamingo_option['flamingo_thumbs_bg_angle']; ?>deg, <?php echo $flamingo_option['flamingo_thumbs_bg_color_2']; ?>, <?php echo $flamingo_option['flamingo_thumbs_bg_color']; ?>);
	<?php } else if($flamingo_option['flamingo_thumbs_bg_type']=='pattern-bg'){  ?>
	background: url(<?php echo $flamingo_option['flamingo_thumbs_bg_pattern']; ?>);
	background-repeat: repeat;
	<?php } ?>
	opacity:<?php echo $flamingo_option['flamingo_thumbs_opacity']/100; ?>;
	filter:alpha(opacity=<?php echo $flamingo_option['flamingo_thumbs_opacity']; ?>);
}

<?php if(get_field('flamingo_project_description_color',$page_id)){ ?>
body.single-portfolio .info-box h3,
.info-box-description p,
.category-list,
.content-info-box .info-box-meta .category-list a,
.project-date li,
body.single-portfolio .actions-related a i,
body.single-portfolio .action-fullscreen a i,
body.single-portfolio .action-scroll a i {
	color: <?php the_field('flamingo_project_description_color',$page_id); ?>;
}
.actions .actions-related,
.actions .action-fullscreen,
.actions .action-scroll {
	border-color: <?php the_field('flamingo_project_description_color',$page_id); ?>;
}
.actions .actions-related:hover,
.actions .action-fullscreen:hover,
.actions .action-scroll:hover,
body.single-portfolio.content-info-box .actions a {
	background: <?php the_field('flamingo_project_description_color',$page_id); ?>;
}
body.single-portfolio .info-box h3:after {
	background: <?php the_field('flamingo_project_description_color',$page_id); ?>;
}
.gal-v4 .galleria-counter {
	color: <?php echo $flamingo_option['flamingo_main_color']; ?>;
}
<?php } ?>


<?php echo htmlspecialchars_decode($flamingo_option['flamingo_css_code']); ?>

</style>
<?php }

add_action( 'wp_head', 'flamingo_custom_styles', 98 ); ?>