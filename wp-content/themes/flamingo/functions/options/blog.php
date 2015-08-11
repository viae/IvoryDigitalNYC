<?php
/**
 * Define our settings sections
 *
 * array key=$id, array value=$title in: add_settings_section( $id, $title, $callback, $page );
 * @return array
 */
function vankarwai_options_blog_sections() {
	
	$sections = array();
	$sections['general_section'] 	= __('Blog General Options', 'flamingo');
	$sections['social_section'] 	= __('Blog Sharing Options', 'flamingo');
	return $sections;	
} 

/**
 * Define our form fields (settings) 
 *
 * @return array
 */
function vankarwai_options_blog_fields() {
	
	$options = array (

		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_sidebar_archive",
				"title" 	=> __("Blog Sidebar Position","flamingo"),
				"choices" 	=> array(__('Sidebar Disabled','flamingo'),__('Right Sidebar','flamingo'),__('Left Sidebar','flamingo')),
				"values" 	=> array('hide-side','right-side','left-side'),
				"std" 	=>  'right-side'),
		
		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_sidebar_single_post",
				"title" 	=> __("Single Post Sidebar Position","flamingo"),
				"choices" 	=> array(__('Sidebar Disabled','flamingo'),__('Right Sidebar','flamingo'),__('Left Sidebar','flamingo')),
				"values" 	=> array('hide-side','right-side','left-side'),
				"std" 	=>  'right-side'),
		
		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_blog_layout",
				"title" 	=> __("Blog Layout Style","flamingo"),
				"choices" 	=> array(__('Standard Layout','flamingo'), __('Horizontal Thumbs Layout','flamingo'),__('Vertical Thumbs Layout','flamingo'),__('Layout Without Thumbs','flamingo')),
				"values" 	=> array('blog-layout-1','blog-layout-2','blog-layout-3','blog-layout-4'),
				"std" 	=>  'blog-layout-2'),
				
		array(	"section"	=> "general_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_blog_meta_author",
				"std"		=> 1,
				"title" 	=> __("Display Author Name","flamingo")),
		
		array(	"section"	=> "general_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_blog_meta_date",
				"std"		=> 1,
				"title" 	=> __("Display Post Date","flamingo")),
				
		array(	"section"	=> "general_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_blog_meta_cat",
				"std"		=> 1,
				"title" 	=> __("Display Post Category","flamingo")),
								
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_blog_share_twitter",
				"std"		=> 1,
				"title" 	=> __("Twitter","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_blog_share_facebook",
				"std"		=> 1,
				"title" 	=> __("Facebook","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_blog_share_gplus",
				"std"		=> 1,
				"title" 	=> __("Google +","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_blog_share_pinterest",
				"std"		=> 1,
				"title" 	=> __("Pinterest","flamingo"))
				
	);
	
	return $options;

}

?>