<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'NOJSFm+E8tei4x5DHvL4ECuxmt9m4FT3SD3E8birISu4eNBcfSWHdxmsZ4nADkSYntnp0sNV5FH80A7JjMvI5Q==');
define('SECURE_AUTH_KEY',  'n7IvVs9pwrQqdocOpu+jnIPNCbSU1M+OYgp/HZUN5z656Ot7hEK7tslc4HSCGh2OQPU+1OSheCPEFoj6tiCuGg==');
define('LOGGED_IN_KEY',    'P2K5R1jOQkB6pQ1nn8nyRz7mEmM/x+vql5k/3CUGqaxuceJ3yE2ND9EWKrYD5A2f4MEWXD9/mQGEPRrygdXRtg==');
define('NONCE_KEY',        'lBgi+P8hqLhEDBSD7L4MN2AT1ssXB6XdI/7hDBtGJ7wVuJgPCX3zTBykZRciWnnDnHxli+lS5GrrwqbcbSrmwg==');
define('AUTH_SALT',        'k9dzogFjjg/voFYJhnvHGNt1oaUkQJIgsS5Y65H/HhK702Ja2AR1WkFXySkWnQqDkpOTHxwCumg4GkEUVzIn0g==');
define('SECURE_AUTH_SALT', 'N99Hw6EsIPoIosljSgMSw4zmx/nONOS6kT2bOzv5uaUM3UIWt5ujhL6aSxtZQoZrw80Ykd9NCWaz5auRo2ZXZw==');
define('LOGGED_IN_SALT',   '/hWBm6v0byWz9eXaS741zbojm29vXKeOF74tuZClYecrIj7Cq5Z/GuFR/wTTr+328Qw4KTJMAym/Eq+dsfJKzw==');
define('NONCE_SALT',       'qmLoYXgGqrG9VBfhbP/I6pibgGPNO7Rw1Dngpa5QF2WkN3pfINC+1LJJoPKK1WiSj/htHMdnj0NLQiYLTh4B2g==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';





/* Inserted by Local by Flywheel. See: http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy */
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
