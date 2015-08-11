<?php get_header(); ?>

    <h2 class="page-title"><?php _e(".404","flamingo"); ?></h2>

    <div class="clearfix"></div>
    <section id="content-side">

      <?php _e("We are sorry, the content you are searching for does not exist.","flamingo"); ?>
      <a class="btn-back-404 btn" href="javascript:javascript:history.go(-1)">← <? _e("Go Back","flamingo"); ?></a>

    </section>

    <?php get_sidebar(); ?>

<?php get_footer(); ?>