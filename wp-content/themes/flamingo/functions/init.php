<?php

/* Translations can be filed in the /functions/languages/ directory */
load_theme_textdomain( 'flamingo', get_template_directory() . '/functions/languages' );

$locale = get_locale();
$locale_file = get_template_directory() . "/functions/languages/$locale.php";
if ( is_readable($locale_file) )
    require_once($locale_file);


require_once(get_template_directory(). '/lib/plugins.php');
require_once(get_template_directory(). '/functions/settings.php');
require_once(get_template_directory(). '/functions/styles.php');
require_once(get_template_directory(). '/functions/enqueues.php');
require_once(get_template_directory(). '/functions/custom-post-types.php');
require_once(get_template_directory(). '/functions/custom-fields.php');
require_once(get_template_directory(). '/functions/shortcodes.php');
require_once(get_template_directory(). '/functions/Mobile_Detect.php');
?>