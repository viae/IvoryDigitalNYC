<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if gte IE 8]> <html class="no-js ie" <?php language_attributes(); ?>> <![endif]-->
<!--[if !IE]><html <?php language_attributes(); ?>><![endif]-->
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="description" content="<?php bloginfo('description'); ?>">
<title><?php bloginfo('name'); ?> <?php wp_title('&raquo;', true, 'left'); ?></title>

<?php $flamingo_option = vankarwai_get_global_options();
if(isset($flamingo_option['flamingo_custom_favicon'])){ print '<link rel="shortcut icon" href="'.$flamingo_option['flamingo_custom_favicon'].'" />'; } ?>
<?php if(isset($flamingo_option['flamingo_custom_favicon_retina'])){ print '<link rel="apple-touch-icon-precomposed" href="'.$flamingo_option['flamingo_custom_favicon_retina'].'" />'; } ?>

<?php if(isset($flamingo_option['flamingo_analytics']) && $flamingo_option['flamingo_analytics']!=''){ ?>
<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', '<?php print $flamingo_option['flamingo_analytics']; ?>']);
	_gaq.push(['_trackPageview']);

	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
</script>

<?php } ?>

<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<div id="preloader">
    <div id="spinner"></div>
</div>

	<?php
if(function_exists('get_field')){ 
	$detect = new Mobile_Detect();
	
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
	
	
	if(!$detect->isMobile() && !$detect->isTablet()){
		if(($flamingo_option['flamingo_bg_type']=='video-bg' &&  !get_field('flamingo_background_type',$page_id)) || ($flamingo_option['flamingo_bg_type']=='video-bg' && get_field('flamingo_background_type',$page_id)=='default') || get_field('flamingo_background_type',$page_id)=='video-bg'){
			/* General Video Background */
			if(!get_field('flamingo_background_type',$page_id) || get_field('flamingo_background_type',$page_id)=='default'){ 
				if(isset($flamingo_option['flamingo_bg_video_vimeo']) && $flamingo_option['flamingo_bg_video_vimeo']!=''){
					$flamingo_vimeo_ID = $flamingo_option['flamingo_bg_video_vimeo'];
				} else if(isset($flamingo_option['flamingo_bg_video_youtube']) && $flamingo_option['flamingo_bg_video_youtube'] != ''){
					$flamingo_youtube_ID = $flamingo_option['flamingo_bg_video_youtube'];
				}
				$flamingo_video_height = $flamingo_option['flamingo_bg_video_height'];
				$flamingo_video_width = $flamingo_option['flamingo_bg_video_width'];
			/* Page Custom Video Background */
			} else if(get_field('flamingo_background_type',$page_id) == 'video-bg'){
				if(get_field('flamingo_video_service',$page_id)=='vimeo'){ 
					$flamingo_vimeo_ID = get_field('flamingo_vimeo_video_id',$page_id); 
				} else { 
					$flamingo_youtube_ID = get_field('flamingo_youtube_video_id',$page_id); 
				}
				$flamingo_video_height = get_field('flamingo_video_height',$page_id);
				$flamingo_video_width = get_field('flamingo_video_width',$page_id);
			}
			
			echo '<div id="bgVideo">';
			if(isset($flamingo_vimeo_ID) && $flamingo_vimeo_ID!=''){
				echo '<div id="vmVideo"><iframe id="vmPlayer" src="http://player.vimeo.com/video/'.$flamingo_vimeo_ID.'?api=1&amp;&player_id=vmPlayer&amp;&controls=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1&amp;color='.get_field('flamingo_main_color',$page_id).'" width="'.$flamingo_video_width.'" height="'.$flamingo_video_height.'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>';
			} else if(isset($flamingo_youtube_ID) && $flamingo_youtube_ID!=''){
					echo '<a id="ytVideo" href="http://www.youtube.com/watch?v='.$flamingo_youtube_ID.'" class="movie"></a>';
			}
			echo '</div>';
		} 
	}
}
?>

  <!--main wrapper-->
  <div id="wrapper">

  	<div id="overlay-header"></div>

  	<header class="header">
  		<div class="inner-header">
			<h1>
	            <a href="<?php echo site_url(); ?>" class="logo">
	              <img src="<?php if(isset($flamingo_option['flamingo_custom_logo'])){ echo $flamingo_option['flamingo_custom_logo']; } ?>" alt="<?php bloginfo('name'); ?>" title="<?php bloginfo('name'); ?>" />
	            </a>
	        </h1>

	        <div class="menu-launcher">
	        	<span><a href="#" title="Show Menu"><small><?php _e("Menu","flamingo"); ?></small><i class="icon-reorder menu-closed"></i><i class="icon-remove menu-opened"></i></a></span>
	        </div>
	        
	        <div class="main-navigation">

	        	<div class="current-page">
		        	<span class="current-header"><?php _e("Currently Watching","flamingo"); ?></span>
		        	<span class="current-body">
		        	<?php if(is_page()){
		        		the_title();
		        	} else if(is_singular('post')){ 
		        		_e("Article","flamingo"); 
		        	} else if(is_singular('portfolio')){ 
		        		_e("Project","flamingo"); 
		        	} else if(is_post_type_archive('portfolio') || is_page_template('template-portfolio.php')){ 
		        		_e("Portfolio","flamingo"); 
		        	} else if(is_search()){
			        	_e("Search","flamingo"); 
		        	} else if(is_category()){
			        	_e("Category","flamingo"); 
		        	} else if(is_tag()){
			        	_e("Tag","flamingo"); 
		        	} else if(is_archive()){
			        	_e("Archive","flamingo"); 
		        	}?></span>
		        	<span class="current-footer"><?php _e("Page","flamingo"); ?></span>
	        	</div>

	        	<div class="target-page">
		        	<span class="target-header"><?php _e("View","flamingo"); ?></span>
		        	<span class="target-body"></span>
		        	<span class="target-footer"><?php _e("Page","flamingo"); ?></span>
	        	</div>

	        	<h4><?php _e("Menu","flamingo"); ?></h4>
	        	<nav class="navigation">
		        <?php
				wp_nav_menu( array(
					'theme_location' => 'flamingo_main',
					'container' => '',
					'menu_class' => 'menu sf-menu'
				)); ?>
	        	</nav>

				<h4><?php _e("Share","flamingo"); ?></h4>
				<div class="menu-share">
					<ul>
						<?php if(isset($flamingo_option['flamingo_share_twitter']) && $flamingo_option['flamingo_share_twitter']){ ?>
						<li><a id="btn-twitter" href="http://twitter.com/home?status=<?php _e("Amazing+work,+take+a+look","flamingo"); ?>-<?php echo get_permalink(); ?>" class="share-btn-twitter">Twitter</a></li>
						<?php }
						if(isset($flamingo_option['flamingo_share_facebook']) && $flamingo_option['flamingo_share_facebook']){ ?>
						<li><a id="btn-facebook" class="share-btn-facebook" href="http://www.facebook.com/share.php?u=<?php echo get_permalink(); ?>">Facebook</a></li>
						<?php }
						if(isset($flamingo_option['flamingo_share_gplus']) && $flamingo_option['flamingo_share_gplus']){ ?>
						<li><a id="btn-gplus" class="share-btn-gplus" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>">Google+</a></li>
						<?php }
						if(isset($flamingo_option['flamingo_share_pinterest']) && $flamingo_option['flamingo_share_pinterest']){ ?>
						<?php if(is_single()){ $share_thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'medium' ); $share_thumb_url = $share_thumb['0']; } else { $share_thumb_url = ''; } ?>
						<li><a id="btn-pinterest" class="share-btn-pinterest" href="http://pinterest.com/pin/create/bookmarklet/?media=<?php echo $share_thumb; ?>&amp;url=<?php echo get_permalink(); ?>&amp;is_video=false&amp;description=<?php the_title(); ?>">Pinterest</a></li>
						<?php }
						if(isset($flamingo_option['flamingo_share_linkedin']) && $flamingo_option['flamingo_share_linkedin']){ ?>
						<li><a id="btn-linkedin" class="share-btn-linkedin" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo get_permalink(); ?>&amp;title=<?php the_title(); ?>&amp;source=<?php echo get_permalink(); ?>">Linkedin</a></li>
						<?php }
						if(isset($flamingo_option['flamingo_share_evernote']) && $flamingo_option['flamingo_share_evernote']){ ?>
						<li><a id="btn-evernote" class="share-btn-evernote" href="http://www.evernote.com/clip.action?url=<?php echo get_permalink(); ?>&amp;title=<?php the_title(); ?>">Evernote</a></li>
						<?php }
						if(isset($flamingo_option['flamingo_share_tumblr']) && $flamingo_option['flamingo_share_tumblr']){ ?>
						<li><a id="btn-tumblr" class="share-btn-tumblr" href="http://www.tumblr.com/share?v=3&amp;u=<?php echo get_permalink(); ?>&amp;t=<?php the_title(); ?>">Tumblr</a></li>
						<?php } ?>
					</ul>
				</div>

	        </div>
	        
		</div>
	</header>
    <!--/.header-->

    <?php get_template_part('header','slideshow'); ?>
    <section class="content">
	
    <!--section for top angle-->
    <div class="top-angle"></div>

      <!--content-wrapper-->
      <div class="content-wrapper">
        <div class="main-page">

          <!--content-->
          <div class="block-content">