					<?php $flamingo_option = vankarwai_get_global_options(); 
					if((isset($flamingo_option['flamingo_portfolio_share_twitter']) && $flamingo_option['flamingo_portfolio_share_twitter']) || (isset($flamingo_option['flamingo_portfolio_share_facebook']) && $flamingo_option['flamingo_portfolio_share_facebook']) || (isset($flamingo_option['flamingo_portfolio_share_gplus']) && $flamingo_option['flamingo_portfolio_share_gplus']) || (isset($flamingo_option['flamingo_portfolio_share_pinterest']) && $flamingo_option['flamingo_portfolio_share_pinterest'])){ ?>
					<div class="post-share">
                      <h5><?php _e("Share it","flamingo"); ?></h5>
                        <ul class="social-icon">
                          <?php if(isset($flamingo_option['flamingo_portfolio_share_twitter']) && $flamingo_option['flamingo_portfolio_share_twitter']){ ?>
                      <li><a target="_blank" href="http://twitter.com/home?status=<?php the_title(); ?>. <?php echo __("Amazing work of","flamingo").' '.get_bloginfo('name').' - '.get_permalink(); ?>" class="social-link twitter"><i class="icon-twitter"></i></a>
                      </li>
                      <?php } if(isset($flamingo_option['flamingo_portfolio_share_facebook']) && $flamingo_option['flamingo_portfolio_share_facebook']){ ?>
                      <li><a target="_blank" href="http://www.facebook.com/share.php?u='<?php the_permalink(); ?>" class="social-link facebook"><i class="icon-facebook"></i></a>
                      </li>
                      <?php } if(isset($flamingo_option['flamingo_portfolio_share_gplus']) && $flamingo_option['flamingo_portfolio_share_gplus']){ ?>
                      <li><a target="_blank" href="https://plus.google.com/share?url=<?php the_permalink(); ?>" class="social-link gplus"><i class="icon-google-plus"></i></a>
                      </li>
                      <?php } if(isset($flamingo_option['flamingo_portfolio_share_pinterest']) && $flamingo_option['flamingo_portfolio_share_pinterest']){ ?>
                      <li><a target="_blank" href="javascript:void((function()%7Bvar%20e=document.createElement(&apos;script&apos;);e.setAttribute(&apos;type&apos;,&apos;text/javascript&apos;);e.setAttribute(&apos;charset&apos;,&apos;UTF-8&apos;);e.setAttribute(&apos;src&apos;,&apos;http://assets.pinterest.com/js/pinmarklet.js?r=&apos;+Math.random()*99999999);document.body.appendChild(e)%7D)());" class="social-link pinterest"><i class="icon-pinterest"></i></a>
                      </li>
                      <?php } ?>
                        </ul>
                    </div>
                    <?php } ?>