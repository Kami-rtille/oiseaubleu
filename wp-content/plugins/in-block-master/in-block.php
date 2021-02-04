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
require_once( dirname(__FILE__) .'/classes/in_block.php' );

In_Block\InBlock::getInstance();

