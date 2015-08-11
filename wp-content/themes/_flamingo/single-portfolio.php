<?php get_header(); $flamingo_option = vankarwai_get_global_options();
if(have_posts()){ the_post(); ?>

        <div class="project-stream">
		<?php if(get_field('flamingo_hide_section_title') != 1){ ?>   
          <section class="header-display info-box">
            <div class="inner-info-box">
              <div class="outer-border"></div>
              <h3><?php the_title(); ?></h3>
              <?php if(get_field('flamingo_project_description')){ ?>
              <div class="info-box-description">
                <?php the_field('flamingo_project_description'); ?>
              </div>
              <?php } ?>

              <div class="info-box-meta">
              <?php if(isset($flamingo_option['flamingo_project_categories']) && $flamingo_option['flamingo_project_categories']){ ?>
                <ul class="category-list">
                  <?php
  		echo get_the_term_list($post->ID,'portfolio_type','',', ',''); ?>
                </ul>
                <?php } ?>
                 <?php if(isset($flamingo_option['flamingo_project_date']) && $flamingo_option['flamingo_project_date']){ ?>
                <ul class="category-list project-date"><li></br><?php the_time('Y'); ?></li></ul>
                <?php } ?>
              </div>

              <div class="actions clearfix">

                  <div class="action-scroll">
                    <a href="#" title="<?php _e("Show content","flamingo"); ?>"><i class="icon-chevron-down"></i></a>
                  </div>

                  <div class="action-fullscreen">
                    <a href="#" class="fullscreen-btn" title="<?php _e("Fullscreen view","flamingo"); ?>"><i class="icon-resize-full"></i></a>
                  </div>

                  <div class="actions-related">
                    <a class="show-related-btn" href="#" title="<?php _e("Show related projects","flamingo"); ?>"><i class="icon-plus"></i></a>
                  </div>

                  <?php $related_posts = get_field('flamingo_related_projects');
                    if($related_posts){ ?>
                      <div class="related-project">
                        <span><?php _e("Related Projects","flamingo"); ?></span>
                        <span class="btn-close-related"><a class="close-related" href="#" title="<?php _e("Close related projects","flamingo"); ?>"><i class="icon-remove"></i></a></span>
                        <ul>
                        <?php foreach($related_posts as $related_post){ ?>
                            <li>
                               <figure><a title="<?php echo get_the_title($related_post->ID); ?>" href="<?php echo get_permalink($related_post->ID); ?>"><?php echo get_the_post_thumbnail($related_post->ID,'portfolio-3-col'); ?></a></figure>
                            </li>
                        <?php } ?>
                        </ul>
                      </div>
                  <?php } ?>

                  <!--Galleria-->
                  <?php $fc_slides = get_field('flamingo_project_gallery');
                    if($fc_slides != '' && count($fc_slides)>0 && get_field('flamingo_project_gallery_enable')){
                      $count = 0;
                      $video_classes = array();
                      foreach($fc_slides as $fc_slide){
                        $count++;
                        if(isset($fc_slide['flamingo_video_url']) && $fc_slide['flamingo_video_url']!='' && isset($fc_slide['flamingo_video_width']) && $fc_slide['flamingo_video_width']!=0){ $video_classes[] = 'flamingo-video-'.$fc_slide['flamingo_video_width'].'-'.$count; }
                      }
                  ?>
                  
                  <div id="fullscreen-images">
                    <div id="galleria" class="<?php echo implode(' ',$video_classes); ?>">
                        <?php foreach($fc_slides as $fc_slide){
                          if(isset($fc_slide['flamingo_video_url']) && $fc_slide['flamingo_video_url']!=''){ ?>
                            <a href="<?php echo $fc_slide['flamingo_video_url']; ?>"><?php if(isset($fc_slide['flamingo_gallery_image']) && $fc_slide['flamingo_gallery_image']!=''){ ?><img src="<?php echo $fc_slide['flamingo_gallery_image']['sizes']['small-thumbnail']; ?>" /><?php } else { ?><span class="video" data-size="<?php if(isset($fc_slide['flamingo_video_width'])){ echo $fc_slide['flamingo_video_width']; } ?>"></span><?php } ?></a>
                            <?php } elseif(isset($fc_slide['flamingo_gallery_image']) && $fc_slide['flamingo_gallery_image']!=''){ ?>
                            <a href="<?php echo $fc_slide['flamingo_gallery_image']['sizes']['large-slideshow']; ?>"><img src="<?php echo $fc_slide['flamingo_gallery_image']['sizes']['small-thumbnail']; ?>" data-big="<?php echo $fc_slide['flamingo_gallery_image']['sizes']['large-slideshow']; ?>" data-title="<?php echo $fc_slide['flamingo_slide_title']; ?>" data-description="<?php echo htmlspecialchars($fc_slide['flamingo_slide_description']); ?>"></a>
                            <?php }
                        }
                    ?>
                    </div>
                  </div>
                  <?php } ?>

              </div><!--/.actions-->
            </div><!--/.inner-info-box-->
          </section>
		  <?php } ?>
          <div class="project-detail">
            <?php the_content(); ?>
				  <div class="btn clearfix">
		          <a href="<?php echo get_permalink(flamingo_portfolio_ID()); ?>"><?php _e("Back to Portfolio","flamingo"); ?></a>
		          </div>
          </div>


        </div>

        <?php if(isset($flamingo_option['flamingo_project_nextprev']) && $flamingo_option['flamingo_project_nextprev']){
      		next_post_link('<div class="arrow-nav prev-project">%link</div>', '<i class="icon-angle-left"></i><span>%title</span>');
      		previous_post_link('<div class="arrow-nav next-project">%link</div>', '<span>%title</span><i class="icon-angle-right"></i>');
          echo('<div class="clearfix"></div>');
      	}

  }

get_footer(); ?>