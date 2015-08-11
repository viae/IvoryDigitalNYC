<?php
/**
 * Define our settings sections
 *
 * array key=$id, array value=$title in: add_settings_section( $id, $title, $callback, $page );
 * @return array
 */
function vankarwai_options_portfolio_sections() {
	
	$sections = array();
	$sections['general_section'] 		= __('Portfolio General Options', 'flamingo');
	$sections['single_section'] 		= __('Single Project Options', 'flamingo');
	$sections['style_section'] 			= __('Portfolio Style Options', 'flamingo');
	$sections['social_section'] 		= __('Portfolio Sharing Options', 'flamingo');
	return $sections;	
} 

/**
 * Define our form fields (settings) 
 *
 * @return array
 */
function vankarwai_options_portfolio_fields() {
	
	$options = array (
		
		array(	"section"	=> "general_section",
				"type" 		=> "textcode",
				"name" 		=> "flamingo_portfolio_slug",
				"std" 		=> "project",
				"title" 	=> __("Project URL Slug","flamingo")),
		
		array(	"section"	=> "general_section",
				"type" 		=> "number",
				"name" 		=> "flamingo_projects_per_page",
				"std" 		=> "12",
				"title" 	=> __("Projects Per Page","flamingo")),

		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_num_thumbs",
				"title"		=> __("Thumb columns","flamingo"),
				"choices" 	=> array(1,2,3,4,5,6),
				"values" 	=> array(1,2,3,4,5,6),
				"std" 		=> 3),
				
		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_projects_orderby",
				"title" 	=> __("Order Projects By","flamingo"),
				"choices" 	=> array(__('Date','flamingo'),__('Menu Order','flamingo')),
				"values" 	=> array('date','menu_order'),
				"std" 		=> 'date',
				"desc" 		=> __("If you want to order the projects by a custom menu order, we recommend you to install the <a href='http://wordpress.org/extend/plugins/simple-page-ordering/' target='_blank'>Simple Page Ordering</a> plugin.<br />If you install it, note that you have to click on 'Sort by Order' button on the top of the projects list before trying to sort them.","flamingo")),
		
		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_projects_filtering",
				"title" 	=> __("Project Filtering Type","flamingo"),
				"choices" 	=> array(__('Default Filtering','flamingo'),__('Isotope Filtering','flamingo')),
				"values" 	=> array('default-filtering','isotope-filtering'),
				"std" 		=> 'isotope-filtering',
				"desc" 		=> __("You can enable the Isotope Filtering option if you want to filter the projects without reload the page and with a smooth animation effect.","flamingo")),
		
		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_projects_pagination",
				"title" 	=> __("Project Pagination Type","flamingo"),
				"choices" 	=> array(__('Infinite Scroll','flamingo'),__('Standard Pagination','flamingo')),
				"values" 	=> array('infinite-scrl','infinite-scrl-disabled'),
				"std" 		=> 'infinite-scrl'),
								
		array(	"section"	=> "general_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_portfolio_date",
				"title" 	=> __("Display Project Date","flamingo"),		
				"desc"		=> __("If checked, display the date of the project when mouseover the project.","flamingo")),
				
		array(	"section"	=> "general_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_portfolio_categories",
				"std"		=> 1,
				"title" 	=> __("Display Project Categories","flamingo"),		
				"desc"		=> __("If checked, display the categories of the project when mouseover the project.","flamingo")),
		
		array(	"section"	=> "general_section",
				"type" 		=> "imageselect",
				"name" 		=> "flamingo_gallery_style",
				"title" 	=> __("Gallery Style","flamingo"),
				"choices" 	=> array('Flamingo','Circular','Bureau', 'Simple'),
				"values" 	=> array('gal-v4','gal-v1','gal-v3','gal-v2'),
				"std" 		=> 'gal-v4',
				"desc"		=> __("Choose between three styles for the gallery layout.","flamingo")),
		
		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_project_transition",
				"title" 	=> __("Project Gallery Transition","flamingo"),
				"choices" 	=> array(__("Fade","flamingo"), __("Flash","flamingo"), __("Pulse","flamingo"), __("Slide","flamingo"), __("Fade Slide","flamingo")),
				"values" 	=> array('project-transition-fade','project-transition-flash','project-transition-pulse','project-transition-slide','project-transition-fadeslide'),
				"std" 		=> 'project-transition-slide'),
				
		array(	"section"	=> "general_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_project_size",
				"title" 	=> __("Project Gallery Fit","flamingo"),
				"choices" 	=> array(__("Prevent Upscale","flamingo"), __("Fullscreen","flamingo"), __("Dynamic (Let User Choose)","flamingo")),
				"values" 	=> array('project-size-fit','project-size-fullscreen','project-size-dynamic'),
				"std" 		=> 'project-size-fullscreen'),
				
		array(	"section"	=> "single_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_project_date",
				"title" 	=> __("Display Project Date","flamingo"),		
				"desc"		=> __("If checked, display the date in the project details page.","flamingo")),
				
		array(	"section"	=> "single_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_project_categories",
				"std"		=> 1,
				"title" 	=> __("Display Project Categories","flamingo"),		
				"desc"		=> __("If checked, display the categories in the project details page.","flamingo")),
		
		array(	"section"	=> "single_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_project_nextprev",
				"title" 	=> __("Display Project Next/Prev Arrows","flamingo"),		
				"std"		=> 1,
				"desc"		=> __("If checked, display arrows for paginate between projects","flamingo")),
									
		array(	"section"	=> "style_section",
				"type" 		=> "slider",
				"name" 		=> "flamingo_thumbs_opacity",
				"title" 	=> __("Thumb Mouseover Opacity","flamingo"),
				"values" 	=> array(0,100),
				"unit"		=> '%',
				"std" 		=> 85),	
		
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_thumb_text_color",
				"std"		=> "#1f1f1f",
				"title" 	=> __("Thumbs Text Color","flamingo")),
				
		array(	"section"	=> "style_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_thumbs_bg_type",
				"title" 	=> __("Thumbs Background Type","flamingo"),
				"choices" 	=> array(__("Plain Color","flamingo"), __("Gradient Color","flamingo"), __("Pattern Image","flamingo")),
				"values" 	=> array('color-bg','gradient-bg','pattern-bg'),
				"std" 	=> 'gradient-bg'),
		
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_thumbs_bg_color",
				"std"		=> "#7acccc",
				"title" 	=> __("Thumbs Background Color","flamingo")),
		
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_thumbs_bg_color_2",
				"std"		=> "#b9e6a6",
				"title" 	=> __("Thumbs Background Color 2","flamingo"),
				"desc"		=> __("Only used if gradient background type is selected.","flamingo")),
				
		array(	"section"	=> "style_section",
				"type" 		=> "slider",
				"name" 		=> "flamingo_thumbs_bg_angle",
				"title" 	=> __("Thumb Background Angle","flamingo"),
				"values" 	=> array(0,180),
				"unit"		=> 'deg',
				"std" 		=> 0,
				"desc"		=> __("Only used if gradient background type is selected.","flamingo")),
						
		array(	"section"	=> "style_section",
				"type" 		=> "bgbuttons",
				"name" 		=> "flamingo_thumbs_bg_pattern",
				"title" 	=> __("Thumbs Background Pattern","flamingo"),
				"values" 	=> array(	get_template_directory_uri().'/images/default-hover-bg.png'
								),
				"std"		=> get_template_directory_uri().'/images/default-hover-bg.png'),
								
		array(	"section"	=> "style_section",
				"type" 		=> "imagenopreview",
				"name" 		=> "flamingo_thumbs_bg_pattern_custom",
				"title" 	=> __("Custom Thumbs Background Pattern","flamingo"),
				"desc"		=> __("Upload an image or a pattern for your site background. Note you should click the 'Insert to post' button in order to insert the image correctly.","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_portfolio_share_twitter",
				"std"		=> 1,
				"title" 	=> __("Twitter","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_portfolio_share_facebook",
				"std"		=> 1,
				"title" 	=> __("Facebook","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_portfolio_share_gplus",
				"std"		=> 1,
				"title" 	=> __("Google +","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_portfolio_share_pinterest",
				"std"		=> 1,
				"title" 	=> __("Pinterest","flamingo"))
			
	);

	return $options;

}

?>