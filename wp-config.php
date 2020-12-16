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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ob' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_F,W*fv~5&Mvq7Clpzc<vw50qVSH~o,%-s^Z)3*Ef;QJSx?=V%D)B$ZD=v6d_Cxm' );
define( 'SECURE_AUTH_KEY',  '(sQBkz,,NLGCeiCF)jm9`7AFc|rfm<aR[OR+PR7sp(Qp(g^a90bu;X/i[g[/px?,' );
define( 'LOGGED_IN_KEY',    'c;Vi@0~f9VLY^Hoa&#L-t;V;?C P6T><Pwh7V2i_(4.<pBB.^~a8PNd;_i#>{BrV' );
define( 'NONCE_KEY',        ')wu6@p.&7y*04O{C(N=&M[>qbrt4|V*~:$0bY/8V!E:=DHVwFC`03@i3Z8R`:lZ5' );
define( 'AUTH_SALT',        '}X$CHc(Dd{OjA=q2BG SX)8Ds8%TxyQ8W2qAEDf$_1VDt>VH~bJKdgs85]lL&z_8' );
define( 'SECURE_AUTH_SALT', 'DzHT7s,:^c8q|_7QvS3@cif+%cvA[e]6/lHQvH71$irMw06.EW!Pes2GGe&`tyd/' );
define( 'LOGGED_IN_SALT',   '{1q.175aG=WR]?)|aXa4eQUq9wyb?gvrl<1OIA8GuYIDgtKubF$UB|*.SjM7MbL?' );
define( 'NONCE_SALT',       'z#%v]E<eU@)yJ(>>NzL=R1H![02nc]Nb@pGsxUq@H2m#/9$}}x(2yxKd?!+&a[,^' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
