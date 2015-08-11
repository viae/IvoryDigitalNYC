 		</div><!--/.content-->

        </div><!--/.main-page-->

      </div><!--/.content-wrapper-->

    <!--section for bottom angle-->
    <div class="bottom-angle"></div>

    <!--footer-->
          <footer class="footer">
            <div class="footer-angle"></div>
            <div class="sub-footer">
              <div class="inner-subfooter">
                <?php
                  if(isset($flamingo_option['flamingo_menu_bg']) && $flamingo_option['flamingo_menu_bg']){ $flamingo_menu_bg = ' backgrounded'; } else { $flamingo_menu_bg=''; } ?>
                  <nav class="nav-footer">
                  <?php wp_nav_menu( array(
                    'theme_location' => 'flamingo_footer',
                    'container' => '',
                    'menu_class' => 'menu-footer'.$flamingo_menu_bg
                )); ?>
                  </nav>
                <span class="copy-right">
                  <?php $flamingo_option = vankarwai_get_global_options(); if(isset($flamingo_option['flamingo_footer_copy'])){ print $flamingo_option['flamingo_footer_copy']; } else { echo 'Copyright &copy; 2013 - Flamingo Theme'; } ?>
                </span>

                <h5><?php if(isset($flamingo_option['flamingo_footer_social_copy']) && $flamingo_option['flamingo_footer_social_copy']!=''){ echo $flamingo_option['flamingo_footer_social_copy']; } else { _e("We are social","flamingo"); } ?></h5>
                <ul class="social-icon">
                  <?php for($i=1; $i<=7; $i++){ ?>
                  <?php if($flamingo_option['flamingo_social_url_'.$i] && $flamingo_option['flamingo_social_network_'.$i]){ ?>
                  <li>
                    <a target="_blank" href="<?php print $flamingo_option['flamingo_social_url_'.$i]; ?>" class="social-link <?php print $flamingo_option['flamingo_social_network_'.$i]; ?>"><i class="icon-<?php print $flamingo_option['flamingo_social_network_'.$i]; ?>"></i></a>
                  </li><?php }
                  }
                  ?>
		  <li>
		    <?php 
		    $encodedEmail = encode_email_address( 'hello@ivorydigitalnyc.com' );
		    printf('<a href="mailto:%s" class="social-link email"><i class="icon-email"></i></a>', $encodedEmail, $encodedEmail);                    
		    ?>
                  </li>
                </ul>
              </div>
            </div>
          </footer><!--/.footer-->

    </section><!--/.content-->
  </div><!--/.wrapper-->

<?php wp_footer(); ?>
</body>
</html>