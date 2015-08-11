<?php get_header(); 
$flamingo_option = vankarwai_get_global_options();
$pages = get_posts(array(
'post_type' => 'page',
'meta_key' => '_wp_page_template',
'meta_value' => 'template-blog.php'
));
if($pages){ 
	foreach($pages as $page){ 
		$blogid = $page->ID; 
	} 
}
if(!isset($blogid)){ $blogid=null; }
?>

            <section class="header-display section-title">
              <div class="inner-section-title">
                <h2 class="page-title">
                  <?php if(is_tag()){ echo __("Tag","flamingo").' "'.get_query_var('tag').'"'; }
                    elseif(is_date()){ echo __("Archive","flamingo"); }
                    elseif(is_category()){ print single_cat_title(); }
                    elseif(is_search()){ echo __("Search","flamingo"). ' "'.get_query_var('s').'"'; }
                    elseif( get_option( 'show_on_front' ) == 'page' ){ echo get_the_title( get_option('page_for_posts' ) ); }
                    else { _e("Blog","flamingo"); }
                  ?>
                </h2>
                <?php if(get_field('flamingo_page_description', $blogid)){ ?>
				<div class="page-description">
					<?php the_field('flamingo_page_description', $blogid); ?>
			    </div>
			    <?php } ?>
                  <div class="actions clearfix">

                          <div class="action-scroll">
                            <a href="#" title="<?php _e("Show content","flamingo"); ?>"><i class="icon-chevron-down"></i></a>
                          </div>

                        </div>
                  </div>
            </section>

            <div class="clearfix"></div>

            <?php if(have_posts()){ ?>
            <section id="content-side">
	          <?php while(have_posts()){ the_post(); ?>
              <article class="hentry cover-post">
                <div class="post-body">
                  <div class="post-content">
                    <?php if($flamingo_option['flamingo_blog_layout']!='blog-layout-4'){ ?>
                    <div class="post-image clearfix">
                      <figure><?php if($flamingo_option['flamingo_blog_layout']=='blog-layout-1'){ the_post_thumbnail('large-blog'); } else if($flamingo_option['flamingo_blog_layout']=='blog-layout-2'){ the_post_thumbnail('horizontal-blog'); } else { the_post_thumbnail('vertical-blog'); } ?></figure>
                    </div>
                    <?php } ?>
                    <ul><li><?php the_category(', '); ?> / </li></ul>
                    <div class="the-date"><?php the_time(get_option('date_format')); ?></div>
                    <h2><a title="the-permalink" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="post-excerpt">
                      <?php the_excerpt(); ?>
                      <?php wp_link_pages(); ?>
                    </div>
                  </div>
                </div>
              </article>
              <?php } ?>

              <div class="pagination clearfix">
              	<?php if(function_exists('wp_pagenavi')){ wp_pagenavi(); } else { ?>
                <div class="next-post btn">
                  <?php next_posts_link(__('Older Entries', 'flamingo')) ?>
                </div>
                <div class="prev-post btn">
                  <?php previous_posts_link(__('Newer Entries', 'flamingo')) ?>
                </div>
                <?php } ?>
              </div>

            </section><!--/.posts-stream-->
            <?php } ?>
            <?php get_sidebar(); ?>

            <div class="clearfix"></div>

<?php get_footer(); ?>