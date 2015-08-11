<?php
/** Enable W3 Total Cache */
 // added by W3 Total Cache
define( 'DB_NAME', 'ivorydig_dev_wp' );
define( 'DB_USER', 'ivorydig_dev_wp' );
define( 'DB_PASSWORD', 'A18uUgC5A7Q2' );
define( 'DB_HOST', '127.0.0.1' );
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );
$table_prefix = 'wp_';
define( 'AUTH_KEY', 'q12VLHvPH3yf5xpPCys4obG4xkLLbUDs' );
define( 'SECURE_AUTH_KEY', 'Mljt8V8vECQz0c4yAmy4EaO1kfIC02UI' );
define( 'LOGGED_IN_KEY', 't31iU5TeDqDjsyX80rTArnySJ6apY038' );
define( 'NONCE_KEY', '90wK15OuBoU92xYI5Nfc6DUFp0Uk03y6' );
define( 'AUTH_SALT', 'TUwK5g5nuFcc8613J6cGpWhU324ZLiLB' );
define( 'SECURE_AUTH_SALT', '8d14k27UNp3MCULhWN3hG11p924QgW7f' );
define( 'LOGGED_IN_SALT', 'Zf9f7c6LH9t9Z4nBy6I4dFpiDzZKb2P7' );
define( 'NONCE_SALT', '7EclW8Wjdlp2lCzJOdJ8J462uVSvOnsL' );
define( 'WP_LANG', '' );
define( 'WP_DEBUG', false );
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

require_once(ABSPATH . 'wp-settings.php');
