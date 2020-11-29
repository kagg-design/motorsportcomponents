<?php
/**
 * Quasar Child Theme Functions File
 *
 * @package motorsportcomponents
 */

define( 'MSC_THEME_VERSION', '2.1' );

/**
 * Sets up the content width value based on the theme's design.
 *
 * @see quasar_content_width() for template-specific adjustments.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 604;
}

/**
 * Filters MO file path for loading translations for 'quasar' text domain.
 *
 * @param string $mofile Path to the MO file.
 * @param string $domain Text domain. Unique identifier for retrieving translated strings.
 *
 * @return string
 */
function msc_load_textdomain_mofile( string $mofile, string $domain ) {
	if ( 'quasar' === $domain ) {
		return get_stylesheet_directory() . '/languages/quasar-ru_RU.mo';
	}

	return $mofile;
}

add_filter( 'load_textdomain_mofile', 'msc_load_textdomain_mofile', 10, 2 );

/**
 * Replace buttons.css.
 */
function msc_wp_enqueue_scripts() {
	// Buttons.
	wp_deregister_style( 'quasar-buttons' );

	wp_enqueue_style( 'quasar-buttons', get_stylesheet_directory_uri() . '/css/buttons.css', [], MSC_THEME_VERSION );
}

add_action( 'wp_enqueue_scripts', 'msc_wp_enqueue_scripts', 20 );

if ( ! function_exists( 'quasar_content_width' ) ) {
	/**
	 * Adjusts content_width value for video post formats and attachment templates.
	 *
	 * @return void
	 * @since Quasar 1.0
	 */
	function quasar_content_width() {
		global $content_width;

		if ( is_attachment() ) {
			$content_width = 724;
		} elseif ( has_post_format( 'audio' ) ) {
			$content_width = 800;
		}
	}
}

/**
 * Enqueue main theme style.
 */
function quasar_child_enqueue() {
	wp_deregister_style( 'quasar-style' );

	// Enqueue parent styles.
	wp_enqueue_style( 'quasar-main', get_template_directory_uri() . '/style.css', [], MSC_THEME_VERSION );
	wp_enqueue_style( 'quasar-style', get_stylesheet_uri(), [ 'quasar-main' ], MSC_THEME_VERSION );
}

add_action( 'wp_enqueue_scripts', 'quasar_child_enqueue', 20 );

// First, create a function that includes the path to your favicon.
function add_favicon() {
	$favicon_url = get_stylesheet_directory_uri() . '/admin-favicon.ico';
	echo '<link rel="shortcut icon" href="' . $favicon_url . '" />';
}

// Now, just make sure that function runs when you're on the login page and admin pages.
add_action( 'login_head', 'add_favicon' );
add_action( 'admin_head', 'add_favicon' );

// Fix deprecated jQuery functions.
require_once 'fix-deprecated-jquery.php';
