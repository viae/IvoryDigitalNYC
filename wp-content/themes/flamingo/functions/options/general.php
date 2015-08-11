<?php
/**
 * Define our settings sections
 *
 * array key=$id, array value=$title in: add_settings_section( $id, $title, $callback, $page );
 * @return array
 */
function vankarwai_options_sections() {
	
	$sections = array();
	$sections['style_section'] 		= __('General Style Options', 'flamingo');
	$sections['background_section'] = __('General Background Options', 'flamingo');
	$sections['general_section'] 	= __('General Options', 'flamingo');
	$sections['social_section'] 	= __('Social Options', 'flamingo');
	return $sections;	
} 

/**
 * Define our form fields (settings) 
 *
 * @return array
 */
function vankarwai_options_fields() {
	$flamingo_option = vankarwai_get_global_options(); 
	
	$flamingo_sliders_choices = array();
	$flamingo_sliders_values = array();
	$flamingo_sliders_choices[] = __('Select a slider or create a new one','flamingo').'...';
	$flamingo_sliders_values[] = 0;
	$sliders = get_posts(array('numberposts' => -1, 'post_type' => 'slider', 'post_status' => 'publish')); 
	if(isset($sliders)){
		foreach($sliders as $slider){ 
			$flamingo_sliders_choices[] = $slider->post_title; 
			$flamingo_sliders_values[] = $slider->ID; 
		}
	}
	
	$flamingo_social_choices = array('- Disabled -','Twitter','Facebook','Gplus','Pinterest','Linkedin','Tumblr','Dribbble','Foursquare','YouTube','Instagram','Vimeo');
	$flamingo_social_values = array(0,'twitter','facebook','google-plus','pinterest','linkedin','tumblr','dribbble','foursquare','youtube','instagram','vimeo-square');
	
	if(isset($flamingo_option['flamingo_content_bg_color'])){ $flamingo_bg_color = $flamingo_option['flamingo_content_bg_color']; } else { $flamingo_bg_color = '#ffffff'; }
	
	$options = array (
		
		array(	"section"	=> "general_section",
				"type" 		=> "textcode",
				"name" 		=> "flamingo_analytics",
				"title" 	=> __("Google Analytics Domain ID","flamingo"),
				"desc"		=> __("To get Google Analytics on your site, simply introduce you Google Analytics Domain ID here. It should be something like UA-123456-1.","flamingo")),
				
		array(	"section"	=> "general_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_footer_copy",
				"std" 		=> "Copyright © 2013 - Flamingo Theme",
				"title" 	=> __("Footer Credits Text","flamingo")),
										
		array(	"section"	=> "style_section",
				"type" 		=> "image",
				"name" 		=> "flamingo_custom_logo",
				"title" 	=> __("Custom Logo","flamingo"),
				"std"		=> get_template_directory_uri().'/images/logo.png',
				"desc"		=> __("Upload a logo or specify the image URL of your logo. This logo will be shown in the portfolio header. If retina is enabled, you have to upload the logo image at double size. Note you should click on 'Insert to post' button in order to insert the image correctly.","flamingo"),
				"in_style"	=> "background-repeat:repeat;background:".$flamingo_bg_color.";padding:5px;"),
		
		array(	"section"	=> "style_section",
				"type" 		=> "number",
				"name" 		=> "flamingo_logo_width",
				"std" 		=> "74",
				"title" 	=> __("Custom Logo Width","flamingo"),
				"desc"		=> __("Logo size is only necessary if you enabled retina display option.","flamingo")),
		
		array(	"section"	=> "style_section",
				"type" 		=> "number",
				"name" 		=> "flamingo_logo_height",
				"std" 		=> "74",
				"title" 	=> __("Custom Logo Height","flamingo"),
				"desc"		=> __("Logo size is only necessary if you enabled retina display option.","flamingo")),
				
		array(	"section"	=> "style_section",
				"type" 		=> "slider",
				"name" 		=> "flamingo_logo_horizontal_position",
				"title" 	=> __("Custom Logo Horizontal Position","flamingo"),
				"values" 	=> array(-300,300),	
				"std"		=> 0,
				"desc"		=> __("A positive value will move the logo to the right. A negative one, will move it to the left.","flamingo")),
				
		array(	"section"	=> "style_section",
				"type" 		=> "slider",
				"name" 		=> "flamingo_logo_vertical_position",
				"title" 	=> __("Custom Logo Vertical Position","flamingo"),
				"values" 	=> array(-300,300),
				"std"		=> 0,
				"desc"		=> __("A positive value will move the logo up. A negative one, will move it down.","flamingo")),	
						
		array(	"section"	=> "style_section",
				"type" 		=> "image",
				"name" 		=> "flamingo_custom_favicon",
				"title" 	=> __("Custom Favicon","flamingo"),
				"std"		=> get_template_directory_uri().'/images/favicon.png',
				"desc"		=> __("Upload a 16x16px PNG that will represent your website's favicon.","flamingo"),
				"style"		=> "width: 16px; overflow: hidden;"),
		
		array(	"section"	=> "style_section",
				"type" 		=> "image",
				"name" 		=> "flamingo_custom_favicon_retina",
				"title" 	=> __("Custom Retina Favicon","flamingo"),
				"std"		=> get_template_directory_uri().'/images/favicon-retina.png',
				"desc"		=> __("Upload a 144x144px PNG for the retina version favicon.","flamingo"),
				"style"		=> "width: 144px; overflow: hidden;"),
		
		array(	"section"	=> "style_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_menu_layout",
				"title" 	=> __("Menu layout","flamingo"),
				"choices" 	=> array(__("Layout 1","flamingo"),__("Layout 2","flamingo"),__("Layout 3","flamingo"),__("Layout 4 (opened)","flamingo")),
				"values" 	=> array('menu-layout-1','menu-layout-2','menu-layout-3','menu-layout-open'),
				"std" 	=> 'menu-layout-1'),

		array(	"section"	=> "style_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_menu_fixed",
				"title" 	=> __("Sticky menu","flamingo"),
				"desc"		=> __("Sticky menu only will work when menu layout 1 or menu layout 4 (opened) are enabled. In other cases is discarded.","flamingo")),

		array(	"section"	=> "style_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_menu_displays",
				"title" 	=> __("Disable Menu Displays","flamingo")),
				
		array(	"section"	=> "style_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_menu_helper",
				"title" 	=> __("Disable Menu Helper","flamingo")),
				
		array(	"section"	=> "style_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_bg_layout",
				"title" 	=> __("General Layout Style","flamingo"),
				"choices" 	=> array(__("Angles Layout","flamingo"),__("Straight Standard Layout","flamingo"),__("Minimal Layout","flamingo")),
				"values" 	=> array('angles-layout','straight-layout','minimal-layout'),
				"std" 	=> 'angles-layout'),
		
		array(	"section"	=> "style_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_dark_layout",
				"title" 	=> __("Enable Dark Layout","flamingo")),
		
		array(	"section"	=> "style_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_scroll_to_top",
				"title" 	=> __("Enable Scroll To Top Button","flamingo")),
												
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_main_color",
				"std"	=> "#19e6a5",
				"title" 	=> __("Main Color","flamingo")),
		
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_sec_color",
				"std"	=> "#00ba79",
				"title" 	=> __("Secondary Color","flamingo")),
		
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_menu_color",
				"std"		=> "#f5f5f5",
				"title" 	=> __("Menu Links Color","flamingo")),
		
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_menu_bg_color",
				"std"		=> "#1c1c1c",
				"title" 	=> __("Menu Background Color","flamingo")),
				
		array(	"section"	=> "style_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_page_description_color",
				"std"		=> "#ffffff",
				"title" 	=> __("Page Description Color","flamingo")),
		/*
		array(	"section"	=> "style_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_typewriter",
				"title" 	=> __("Enable Typewriter Effect","flamingo")),
		*/						
		array(	"section"	=> "style_section",
				"type" 		=> "textareacode",
				"name" 		=> "flamingo_css_code",
				"title" 	=> __("Custom CSS","flamingo"),
				"desc"		=> __("Insert here your custom CSS code to overwrite the theme's one. Note that you can also add your custom CSS code to the custom.css file inside the css folder of the theme.","flamingo")),
		
		array(	"section"	=> "background_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_parallax",
				"title" 	=> __("Enable Parallax Background","flamingo")),
				
		array(	"section"	=> "background_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_content_bg_color",
				"std"		=> "#ffffff",
				"title" 	=> __("Content Background Color","flamingo")),
													
		array(	"section"	=> "background_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_bg_type",
				"title" 	=> __("Angles Background Type","flamingo"),
				"choices" 	=> array(__("Plain Color","flamingo"),__("Fullscreen Image","flamingo"), __("Pattern Image","flamingo"), __("Fullscreen Video","flamingo")),
				"values" 	=> array('color-bg','image-bg','pattern-bg', 'video-bg'),
				"std" 	=> 'color-bg',
				"desc"		=> __("This background will be displayed in all the pages.","flamingo")),
				
		array(	"section"	=> "background_section",
				"type" 		=> "color",
				"name" 		=> "flamingo_bg_color",
				"std"		=> "#F2F2F2",
				"title" 	=> __("Default Plain Background Color","flamingo")),
		
		array(	"section"	=> "background_section",
				"type" 		=> "bgbuttons",
				"name" 		=> "flamingo_bg_image",
				"title" 	=> __("Angles Background Image","flamingo"),
				"values" 	=> array(	get_template_directory_uri().'/images/background.jpg'
								),
				"std"	=> get_template_directory_uri().'/images/background.jpg'),
								
		array(	"section"	=> "background_section",
				"type" 		=> "imagenopreview",
				"name" 		=> "flamingo_bg_image_custom",
				"title" 	=> __("Angles Background Image","flamingo"),
				"desc"		=> __("This image will be displayed only if 'Fullscreen Image' or 'Pattern Image' is selected in the 'Portfolio Background Type' option.","flamingo")),
									
		array(	"section"	=> "background_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_bg_video_vimeo",
				"title" 	=> __("Vimeo Video ID","flamingo")),
				
		array(	"section"	=> "background_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_bg_video_youtube",
				"title" 	=> __("YouTube Video ID","flamingo")),
				
		array(	"section"	=> "background_section",
				"type" 		=> "number",
				"name" 		=> "flamingo_bg_video_width",
				"std" 		=> "1280",
				"title" 	=> __("Source Video Width","flamingo")),
		
		array(	"section"	=> "background_section",
				"type" 		=> "number",
				"name" 		=> "flamingo_bg_video_height",
				"std" 		=> "720",
				"title" 	=> __("Source Video Height","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_share_twitter",
				"std"		=> 1,
				"title" 	=> __("Twitter","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_share_facebook",
				"std"		=> 1,
				"title" 	=> __("Facebook","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_share_gplus",
				"std"		=> 1,
				"title" 	=> __("Google +","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_share_pinterest",
				"std"		=> 1,
				"title" 	=> __("Pinterest","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_share_linkedin",
				"std"		=> 0,
				"title" 	=> __("Linkedin","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_share_evernote",
				"std"		=> 0,
				"title" 	=> __("Evernote","flamingo")),
				
		array(	"section"	=> "social_section",
				"type" 		=> "checkbox",
				"name" 		=> "flamingo_share_tumblr",
				"std"		=> 0,
				"title" 	=> __("Tumblr","flamingo")),	
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_footer_social_copy",
				"std" 		=> "We are social",
				"title" 	=> __("Footer Social Text","flamingo")),
						
		array(	"section"	=> "social_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_social_network_1",
				"title" 	=> __("Footer Social Network","flamingo").' #1',
				"choices" 	=> $flamingo_social_choices,
				"values" 	=> $flamingo_social_values,
				"std" 		=> 'facebook'),
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_social_url_1",
				"std" 		=> "http://www.twitter.com/",
				"title" 	=> __("Footer Social URL","flamingo").' #1'),
		
		array(	"section"	=> "social_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_social_network_2",
				"title" 	=> __("Footer Social Network","flamingo").' #2',
				"choices" 	=> $flamingo_social_choices,
				"values" 	=> $flamingo_social_values,
				"std" 		=> 'twitter'),
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_social_url_2",
				"std" 		=> "http://www.facebook.com/",
				"title" 	=> __("Footer Social URL","flamingo").' #2'),
		
		array(	"section"	=> "social_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_social_network_3",
				"title" 	=> __("Footer Social Network","flamingo").' #3',
				"choices" 	=> $flamingo_social_choices,
				"values" 	=> $flamingo_social_values,
				"std" 		=> "g-plus"),
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_social_url_3",
				"std" 		=> "http://plus.google.com",
				"title" 	=> __("Footer Social URL","flamingo").' #3'),
				
		array(	"section"	=> "social_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_social_network_4",
				"title" 	=> __("Footer Social Network","flamingo").' #4',
				"choices" 	=> $flamingo_social_choices,
				"values" 	=> $flamingo_social_values,
				"std" 		=> 0),
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_social_url_4",
				"std" 		=> "http://www.pinterest.com",
				"title" 	=> __("Footer Social URL","flamingo").' #4'),
		
		array(	"section"	=> "social_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_social_network_5",
				"title" 	=> __("Footer Social Network","flamingo").' #5',
				"choices" 	=> $flamingo_social_choices,
				"values" 	=> $flamingo_social_values,
				"std" 		=> 0),
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_social_url_5",
				"std" 		=> "http://www.linkedin.com",
				"title" 	=> __("Footer Social URL","flamingo").' #5'),
		
		array(	"section"	=> "social_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_social_network_6",
				"title" 	=> __("Footer Social Network","flamingo").' #6',
				"choices" 	=> $flamingo_social_choices,
				"values" 	=> $flamingo_social_values,
				"std" 		=> 0),
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_social_url_6",
				"std" 		=> "",
				"title" 	=> __("Footer Social URL","flamingo").' #6'),
				
		array(	"section"	=> "social_section",
				"type" 		=> "select",
				"name" 		=> "flamingo_social_network_7",
				"title" 	=> __("Footer Social Network","flamingo").' #7',
				"choices" 	=> $flamingo_social_choices,
				"values" 	=> $flamingo_social_values,
				"std" 		=> 0),
		
		array(	"section"	=> "social_section",
				"type" 		=> "text",
				"name" 		=> "flamingo_social_url_7",
				"std" 		=> "",
				"title" 	=> __("Footer Social URL","flamingo").' #7'),

			
	);
	
	return $options;

}

?>