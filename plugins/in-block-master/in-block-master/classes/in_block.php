<?php
/**
 * Plugin Name:     In Block
 * Plugin URI:
 * Description:     Gutenberg's blocks for portfolio
 * Author:          Camille
 * Author URI:
 * Text Domain:     in-block
 * Domain Path:     /languages
 * Version:         2.0.0
 *
 * @package         In_Block
 */
namespace In_Block;

class InBlock {

  /**
   * Singleton instance
   *
   * @since 1.0.0
   */
  private static $_instance = null;

  /**
   * Trigger the block & script registration on init.
   *
   * @since 1.0.0
   */
  private function __construct() {
    add_action('init', array( $this, 'registerBlock' ) );
    add_action('init', array( $this, 'registerScript' ) );
    // add_action('enqueue_block_editor_assets', array( $this, 'registerStyle' ) );
    add_action('enqueue_block_assets', array( $this, 'registerStyle' ) );
  }

  /**
   * Registers the plugin's script.
   *
   * @since 1.0.0
   */
  public function registerScript() {
    wp_register_script(
   		'in-block-script',
   		plugins_url( 'dist/main.js', plugin_dir_path( __FILE__ ) ),
   		array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-components', 'wp-edit-post', 'wp-rich-text', 'lodash' ),
   		'1.0'
    );
    wp_localize_script('in-block-script', 'theme', array(
      'path' => get_template_directory_uri()
));
  }

 
 
  /**
   * Registers the style's script.
   *
   * @since 1.0.0
   */
  public function registerStyle() {
    wp_enqueue_style(
   		'in-block-style',
   		plugins_url( 'style/main.css', plugin_dir_path( __FILE__ ) ),
   		false,
   		'1.0',
      'all'
   	);
  }

  /**
   * Registers the plugin's block.
   *
   * @since 1.0.0
   */
  public function registerBlock() {
    if( ! function_exists( 'register_block_type' ) ) {
      return;
    }
    register_block_type( 'in-block/hello-world', array(
    	'editor_script' => 'in-block-script',
    ) );
  }

  /**
   * Initialize or return existing instance
   *
   * @since 1.0.0
   * @return InBlock
   */
  public static function getInstance() {
    if(is_null(self::$_instance)) {
      self::$_instance = new InBlock();
    }
    return self::$_instance;
  }

}
