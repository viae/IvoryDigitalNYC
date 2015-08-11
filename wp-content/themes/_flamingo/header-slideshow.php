<?php if(get_field('flamingo_enable_slideshow')){ ?>
<!--just in case some theme feature is not compatible with other
appears this warning. In this case, controls the main background slider-->
<div class="feat-warning">
	<h3><?php _e("WARNING","flamingo"); ?></h3>
	<p><?php _e("The background slider feature is not compatible with <strong>'minimal layout mode'</strong>. Please, check your admin/theme configuration.","flamingo"); ?></p>
	<small><a class="remove-warn" href="#"><?php _e("remove warning","flamingo"); ?></a></small>
</div>
	<div class="intro-slider">
		<div class="slide-state prev-slide-state"><i class="icon-angle-left"></i></div>
		<div class="slide-state next-slide-state"><i class="icon-angle-right"></i></div>
		<div id="bg-slideshow" class="flexslider">
			<ul class="slides">
			<?php $flamingo_slideshow = get_field('flamingo_slideshow');
			if($flamingo_slideshow != '' && count($flamingo_slideshow)>0){
			    foreach($flamingo_slideshow as $flamingo_slide){ 
			    	if($flamingo_slide['custom_link']!=''){ $slide_link_pre = '<a href="'.$flamingo_slide['custom_link'].'">'; } 
			    	elseif($flamingo_slide['link']){ $links = $flamingo_slide['link']; $link = $links[0]; $slide_link_pre = '<a href="'.get_permalink($link->ID).'">'; }
			    	else { $slide_link_pre = ''; }
			    	if($flamingo_slide['link'] || $flamingo_slide['custom_link']){ $slide_link_pos = '</a>'; } else { $slide_link_pos = ''; }
			        if($flamingo_slide['title']){ $slide_title = '<h3 class="slide-title">'.$slide_link_pre.$flamingo_slide['title'].$slide_link_pos.'</h3>'; } else { $slide_title=''; }
			        if($flamingo_slide['description']){ $slide_desc = '<div class="slide-desc">'.$flamingo_slide['description'].'</div>'; } else { $slide_desc=''; }
			    ?>
					<li><img src="<?php echo $flamingo_slide['image']['url']; ?>" alt="<?php $flamingo_slide['image']['alt']; ?>" /><?php echo $slide_title.$slide_desc; ?></li>
				<?php	
			    }
			}
			?>
			</ul>
		</div>
	</div>
<?php } ?>