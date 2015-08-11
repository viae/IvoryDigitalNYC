<?php
/**
 * Define our settings sections
 *
 * array key=$id, array value=$title in: add_settings_section( $id, $title, $callback, $page );
 * @return array
 */
function vankarwai_options_fonts_sections() {
	
	$sections = array();
	$sections['general_font_section']	= __("General Font Options", "flamingo");
	return $sections;	
} 

/**
 * Define our form fields (settings) 
 *
 * @return array
 */
function vankarwai_options_fonts_fields() {

	$options = array (
		
		array(	"section"	=> "general_font_section",
				"type" 		=> "typography",
				"title" 	=> __("Primary Typeface","flamingo"),
				"name" 		=> "flamingo_primary_typeface",
				"std"	=> array('face' => 'Raleway', 'weight' => '700', 'uppercase' => 0, 'lowercase' => 0),
				"screen"	=> array(	get_template_directory_uri().'/functions/images/screen01.jpg',
										get_template_directory_uri().'/functions/images/screen03.jpg'), 
				"desc"		=> __("<strong>(S)</strong>: System Font. <strong>(G)</strong>: Google Webfont.","flamingo")),
						
		array(	"section"	=> "general_font_section",
				"type" 		=> "typography",
				"title" 	=> __("Secondary Typeface","flamingo"),
				"name" 		=> "flamingo_secondary_typeface",
				"std"	=> array('face' => 'Old Standard TT', 'weight' => '200', 'uppercase' => 0, 'lowercase' => 0),
				"screen"	=> array(	get_template_directory_uri().'/functions/images/screen06.jpg'),  
				"desc"		=> __("<strong>(S)</strong>: System Font. <strong>(G)</strong>: Google Webfont.","flamingo")),
				
		array(	"section"	=> "general_font_section",
				"type" 		=> "typography",
				"title" 	=> __("Body Typeface","flamingo"),
				"name" 		=> "flamingo_body_typeface",
				"std"	=> array('face' => 'Muli', 'weight' => '200', 'uppercase' => 0, 'lowercase' => 0),
				"screen"	=> array(	get_template_directory_uri().'/functions/images/screen02.jpg'),  
				"desc"		=> __("<strong>(S)</strong>: System Font. <strong>(G)</strong>: Google Webfont.","flamingo"))
											
	);
	
			
	return $options;

}

?>