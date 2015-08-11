<?php get_header(); $flamingo_option = vankarwai_get_global_options(); ?>
		<?php 
		if(is_page_template('template-portfolio.php')){ 
			$portfolio_ID = get_the_ID(); 
		} else {
			$portfolio_pages = get_posts(array(
		        'post_type' => 'page',
				'meta_key' => '_wp_page_template',
				'meta_value' => 'template-portfolio.php'
			));
			if($portfolio_pages){ 
				$portfolio_ID = $portfolio_pages[0]->ID;
			} else {
				$portfolio_ID = null;
			}
		} 
		if((is_page_template('template-portfolio.php') && get_field('flamingo_hide_section_title', $portfolio_ID) != 1) || is_tax('portfolio_type')){ ?> 
		<section class="header-display section-title">
			<div class="inner-section-title">
				<h2 class="page-title">
					<?php if(is_tax('portfolio_type')){
						single_cat_title();
					} else {
						echo get_the_title($portfolio_ID);
					} ?>
				</h2>
				<?php if(is_page() && get_field('flamingo_page_description', $portfolio_ID)){ ?>
				<div class="page-description">
					<?php the_field('flamingo_page_description', $portfolio_ID); ?>
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
        <div class="block-content content-works">
			<div class="categories categories-bg-color">
				<div class="section-header">
					<h4><?php _e("W","flamingo"); ?></h4>
				</div>
				<?php if(get_field('flamingo_section_description', $portfolio_ID)){ ?>
				<div class="section-header-description">
					<?php the_field('flamingo_section_description', $portfolio_ID); ?>
				</div>
				<?php } ?>
				<?php if(is_page_template('template-portfolio.php')){ $filters_exclude = get_field('flamingo_exclude_project_types', $portfolio_ID); } else { $filters_exclude = array(); } ?>
				<ul<?php if(is_page_template('template-portfolio.php') && get_field('flamingo_hide_project_type_filters_menu', $portfolio_ID) == 1){ echo ' class="hidden-filters"'; } ?>>
					<li><a href="<?php if(!is_page_template('template-portfolio.php')){ echo get_permalink($portfolio_ID); } ?>" class="cat-all" data-filter=".portfolio"><?php _e("All","flamingo"); ?></a></li>
					<?php $filters = get_terms('portfolio_type',array('orderby' => 'term_group', 'exclude' => $filters_exclude)); 
					foreach($filters as $filter){
					$subfilters = get_terms('portfolio_type',array('parent' => $filter->term_id, 'exclude' => $filters_exclude)); ?>
				    <li class="fade-option"><a href="<?php echo get_term_link($filter); ?>" class="cat-<?php print $filter->slug; ?>" data-filter=".<?php print $filter->slug; ?>" title="<?php print __("View projects under","flamingo").' '.$filter->name; ?>"><?php print $filter->name; ?></a></li>
				<?php } ?>
				</ul>
			</div>
        
	        <?php 
	        if ( get_query_var('paged') ) {
				$paged = get_query_var('paged');
			} elseif ( get_query_var('page') ) {
				$paged = get_query_var('page');
			} else {
				$paged = 1;
			}	

	        if($flamingo_option['flamingo_projects_orderby']=='menu_order'){ $order='asc'; } else { $order='desc'; } 
	        if(is_page_template('template-portfolio.php')){
	            $args = array(
	            	'post_type' => 'portfolio', 
	            	'post_status' => 'publish', 
	            	'posts_per_page' => $flamingo_option['flamingo_projects_per_page'], 
	            	'orderby' => $flamingo_option['flamingo_projects_orderby'], 
	            	'order' => $order, 
	            	'paged' => $paged,
	            	'tax_query' => array(
	            		array(
	            			'taxonomy' => 'portfolio_type',
							'field' => 'id',
							'terms' => $filters_exclude,
							'operator' => 'NOT IN'
	            		)
	            	)
	            );
	        } else {
	        	global $wp_query;
	        	$args = array_merge( 
					$wp_query->query, 
					array( 	
						'posts_per_page' => $flamingo_option['flamingo_projects_per_page'],
						'orderby' => $flamingo_option['flamingo_projects_orderby'], 
						'order' => $order,
						'paged' => $paged
					) 
				);
		        
	        }
	        query_posts($args);
			if(have_posts()){ ?>
	        <div class="featured projects cols-<?php echo $flamingo_option['flamingo_num_thumbs']; ?>">
	          <ul id="container" class="variable-sizes">
	          	<?php while(have_posts()){ the_post(); $term_slugs = flamingo_get_post_terms_slugs('portfolio_type'); ?>
	            <li <?php post_class($term_slugs); ?>>
	              <?php $img_size = $flamingo_option['flamingo_num_thumbs']; if($img_size>=3){ $img_size = 3; } ?>
	              <figure><?php the_post_thumbnail('portfolio-'.$img_size.'-col'); ?></figure>
	                <a title="<?php the_title(); ?>" href="<?php the_permalink(); ?>">
	                  <div class="title-overlay">
	                    <h3><?php the_title(); ?></h3>
	                    <?php if(isset($flamingo_option['flamingo_portfolio_date']) && $flamingo_option['flamingo_portfolio_date']){ ?>
	                    <span class="project-date"><?php the_time('Y'); ?></span> 
	                    <?php } ?>
	                    <?php if(isset($flamingo_option['flamingo_portfolio_categories']) && $flamingo_option['flamingo_portfolio_categories']){ ?>
	                    <span class="project-cat"><?php echo strip_tags(get_the_term_list($post->ID,'portfolio_type','',', ','')); ?></span> 
	                    <?php } ?>
	                  </div>
	                  <div class="hover-overlay"></div>
	                </a>
	            </li>
	            <?php } ?>
	          </ul>
	          <!--<div class="LoadMore"> <a href="#">&nbsp;</a> <span>load more<small>&nbsp;</small></span> </div>--> 
	          <div class="pagination clearfix">
	          	<?php if(function_exists('wp_pagenavi') && $flamingo_option['flamingo_projects_pagination']!='infinite-scrl'){ wp_pagenavi(); } else { ?>
	            <div class="next-post btn">
	              <?php next_posts_link(__('Older Entries', 'flamingo')) ?>
	            </div>
	            <div class="prev-post btn">
	              <?php previous_posts_link(__('Newer Entries', 'flamingo')) ?>
	            </div>
	            <?php } ?>
	          </div>
	        </div>
	        <?php } ?>
        </div><!--/.content--> 
<?php get_footer(); ?>