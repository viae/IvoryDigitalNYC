<?php get_header(); $flamingo_option = vankarwai_get_global_options();  if(have_posts()){ the_post(); ?>

            <section id="content-side">

              <article class="hentry cover-post">
                <?php if(isset($flamingo_option['flamingo_blog_meta_date']) && $flamingo_option['flamingo_blog_meta_date']){ ?>
                <div class="the-date"><?php the_time(get_option('date_format')); ?></div><?php } ?>
                <div class="post-body">
                  <div class="post-content">
                    <h2><?php the_title(); ?></h2>
                    <div class="post-image clearfix">
                      <figure><?php the_post_thumbnail('large-slideshow'); ?></figure>
                    </div>
                    <div class="post-excerpt">
                      <?php the_content(); ?>
                      <?php wp_link_pages(); ?>
                    </div>

                    <?php the_tags('<div class="post-tags"><h5>'.__("Tags","flamingo").'</h5><ul><li>','</li><li>','</li></ul></div>'); ?>
                    <?php if(isset($flamingo_option['flamingo_blog_meta_author']) && $flamingo_option['flamingo_blog_meta_author']){ ?>
                    <div class="post-metas">
                      <h5><?php _e("Written by","flamingo"); ?></h5>
                      <ul>
                        <li><?php the_author();
    if(isset($flamingo_option['flamingo_blog_meta_date']) && $flamingo_option['flamingo_blog_meta_date']){ _e(" on","flamingo"); ?></li>
                        <li><?php the_time(get_option('date_format')); } ?></li>
                      </ul>
                    </div>
                    <?php } ?>
                    <div class="post-share">
                      <h5><?php _e("Share it","flamingo"); ?></h5>
                        <ul class="social-icon">
                          <?php if(isset($flamingo_option['flamingo_blog_share_twitter']) && $flamingo_option['flamingo_blog_share_twitter']){ ?>
                      <li><a target="_blank" href="http://twitter.com/home?status=<?php the_title(); ?>. <?php echo __("Amazing work of","flamingo").' '.get_bloginfo('name').' - '.get_permalink(); ?>" class="social-link twitter"><i class="icon-twitter"></i></a>
                      </li>
                      <?php } if(isset($flamingo_option['flamingo_blog_share_facebook']) && $flamingo_option['flamingo_blog_share_facebook']){ ?>
                      <li><a target="_blank" href="http://www.facebook.com/share.php?u='<?php the_permalink(); ?>" class="social-link facebook"><i class="icon-facebook"></i></a>
                      </li>
                      <?php } if(isset($flamingo_option['flamingo_blog_share_gplus']) && $flamingo_option['flamingo_blog_share_gplus']){ ?>
                      <li><a target="_blank" href="https://plus.google.com/share?url=<?php the_permalink(); ?>" class="social-link gplus"><i class="icon-google-plus"></i></a>
                      </li>
                      <?php } if(isset($flamingo_option['flamingo_blog_share_pinterest']) && $flamingo_option['flamingo_blog_share_pinterest']){ ?>
                      <li><a target="_blank" href="javascript:void((function()%7Bvar%20e=document.createElement(&apos;script&apos;);e.setAttribute(&apos;type&apos;,&apos;text/javascript&apos;);e.setAttribute(&apos;charset&apos;,&apos;UTF-8&apos;);e.setAttribute(&apos;src&apos;,&apos;http://assets.pinterest.com/js/pinmarklet.js?r=&apos;+Math.random()*99999999);document.body.appendChild(e)%7D)());" class="social-link pinterest"><i class="icon-pinterest"></i></a>
                      </li>
                      <?php } ?>
                        </ul>
                    </div>
                  </div>
                </div>

                <span class="back-news-btn btn"><a href="<?php if( get_option( 'show_on_front' ) == 'page'  && get_option('page_for_posts' ) ) echo get_permalink( get_option('page_for_posts' ) ); else echo get_site_url(); ?>"><?php _e("back to news","flamingo"); ?></a></span>

                <div class="single-pagination clearfix">
                  <span id="prev-post">
                    <?php previous_post_link('<small>&larr; '.__("previous post","flamingo").'</small>%link') ?>
                  </span>
                  <span id="next-post">
                    <?php next_post_link('<small>'.__("next post","flamingo").' &rarr;</small>%link') ?>
                  </span>
                </div>

                <?php comments_template( '', true ); ?>

              </article>

            </section><!--/.posts-stream-->

            <?php get_sidebar(); ?>

            <div class="clearfix"></div>

<?php }

get_footer(); ?>
