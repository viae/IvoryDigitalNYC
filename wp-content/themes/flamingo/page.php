<?php get_header(); $flamingo_option = vankarwai_get_global_options();  if(have_posts()){ the_post(); ?>
		
			<?php if(get_field('flamingo_hide_section_title') != 1){ ?>      
			<section class="header-display section-title">
				<div class="inner-section-title">
					<h2 class="page-title"><?php the_title(); ?></h2>
					<?php if(get_field('flamingo_page_description')){ ?>
					<div class="page-description">
						<?php the_field('flamingo_page_description'); ?>
				    </div>
				    <?php } ?>
				    <div class="actions clearfix">

	                  <div class="action-scroll">
	                    <a href="#" title="<?php _e("Show content","flamingo"); ?>"><i class="icon-chevron-down"></i></a>
	                  </div>

	                </div>
            	</div>
			</section>
			<?php } ?>

            <section>
              <?php the_content(); ?>
              <?php wp_link_pages(); ?>
            </section>

<?php } get_footer(); ?>