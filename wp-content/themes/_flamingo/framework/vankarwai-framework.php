<?php

/**
 * VanKarWai Framework v1.0.0
 */



/**
 * Specify Hooks/Filters
 */
add_action( 'admin_menu', 'vankarwai_add_menu' );
add_action( 'admin_init', 'vankarwai_register_settings' );


/**
 * Helper function for registering our form field settings
 *
 * src: http://alisothegeek.com/2011/01/wordpress-settings-api-tutorial-1/
 * @param (array) $args The array of arguments to be used in creating the field
 * @return function call
 */
function vankarwai_create_settings_field( $args = array() ) {
	// default array to overwrite when calling the function
	$defaults = array(
		'id'      => 'default_field', 					// the ID of the setting in our options array, and the ID of the HTML form element
		'title'   => 'Default Field', 					// the label for the HTML form element
		'desc'    => '', 	// the description displayed under the HTML form element
		'std'	  => '', 								// the default value for this setting
		'type'    => 'text', 							// the HTML form element to use
		'section' => 'main_section', 					// the section this setting belongs to — must match the array key of a section in vankarwai_options_page_sections()
		'choices' => array(),							// (optional): the choices in drop-down menu
		'values'  => array(), 							// (optional): the values in drop-down menu
		'unit'	  => 'px',
		'screen'  => '',
		'style'	  =>'',
		'in_style'=>'',
		'max_width'=>''
	);
	
	// "extract" to be able to use the array keys as variables in our function output below
	extract( wp_parse_args( $args, $defaults ) );
	
	// additional arguments for use in form field output in the function vankarwai_form_field_fn!
	$field_args = array(
		'type'      => $type,
		'desc'      => $desc,
		'std'       => $std,
		'name'   	=> $name,
		'title'   	=> $title,
		'choices'  	=> $choices,
		'values'   	=> $values,
		'unit'   	=> $unit,
		'screen'  	=> $screen,
		'style'		=> $style,
		'in_style'	=> $in_style,
		'max_width' => $max_width
	);

	add_settings_field( $name, $title, 'vankarwai_form_field_fn', __FILE__, $section, $field_args );

}

/**
 * Register our setting, settings sections and settings fields
 */
function vankarwai_register_settings(){
	
	// get the settings sections array
	$settings_output 	= vankarwai_get_settings();
	if($settings_output){
		$vankarwai_option_name = $settings_output['vankarwai_option_name'];
		
		//setting
		register_setting($vankarwai_option_name, $vankarwai_option_name, 'vankarwai_option_validate');
		
		//sections
		if(!empty($settings_output['vankarwai_page_sections'])){
			// call the "add_settings_section" for each!
			foreach ( $settings_output['vankarwai_page_sections'] as $name => $title ) {
				add_settings_section( $name, $title, 'vankarwai_section_fn', __FILE__);
			}
		}
			
		//fields
		if(!empty($settings_output['vankarwai_page_fields'])){
			// call the "add_settings_field" for each!
			foreach ($settings_output['vankarwai_page_fields'] as $option) {
				vankarwai_create_settings_field($option);
			}
		}
	}
}


/**
 * Validate Options.
 *
 * This runs after the submit button has been clicked and
 * validates the inputs.
 */
function vankarwai_option_validate( $input ) {
	
	//print_r($input);
	$settings_output 		= vankarwai_get_settings();
	
	
	foreach ( $settings_output['vankarwai_page_fields'] as $option ) {
		
		if ( ! isset( $option['name'] ) ) {
			continue;
		}

		if ( ! isset( $option['type'] ) ) {
			continue;
		}
		
		$name = preg_replace( '/[^a-zA-Z0-9._\-]/', '', strtolower( $option['name'] ) );
		
		switch($option['type']){
			
			case 'select':
			if(isset($input[$name])){ $input[$name] = sanitize_key($input[$name]); } else { $input[$name]=''; } 
			break;
			
			case 'checkbox':
			if ( ! isset( $input[$name] ) ) {
				$input[$name] = false;
			}
			break;
			
			case 'text':
			if(isset($input[$name])){ $input[$name] = esc_html($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'number':
			if(isset($input[$name])){ $input[$name] = intval($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'textcode':
			if(isset($input[$name])){ $input[$name] = esc_html($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'image':
			if(isset($input[$name])){ $input[$name] = esc_url_raw($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'imagenopreview':
			if(isset($input[$name])){ $input[$name] = esc_url_raw($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'bgbuttons':
			if(isset($input[$name])){ $input[$name] = esc_url_raw($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'imagebuttons':
			if(isset($input[$name])){ $input[$name] = esc_url_raw($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'imageselect':
			if(isset($input[$name])){ $input[$name] = sanitize_key($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'textarea':
			if(isset($input[$name])){ $input[$name] = esc_textarea($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'textareacode':
			if(isset($input[$name])){ $input[$name] = esc_html($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'color':
			if(isset($input[$name])){ $input[$name] = vankarwai_sanitize_hex_color($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'slider':
			if(isset($input[$name])){ $input[$name] = intval($input[$name]); } else { $input[$name]=''; }
			break;
			
			case 'typography':	
			
			if ( isset( $input[$name]['size'] ) ) {
			$input[$name]['size'] = esc_attr($input[$name]['size']);
			}
			
			$input[$name]['weight'] = esc_attr($input[$name]['weight']);
			$input[$name]['face'] = esc_attr($input[$name]['face']);
			
			if ( ! isset( $input[$name]['italic'] ) ) {
				$input[$name]['italic'] = false;
			}
			
			if ( ! isset( $input[$name]['lowercase'] ) ) {
				$input[$name]['lowercase'] = false;
			}
			
			if ( ! isset( $input[$name]['uppercase'] ) ) {
				$input[$name]['uppercase'] = false;
			}
			
			if ( isset( $input[$name]['color'] ) ) {
				$input[$name]['color'] = vankarwai_sanitize_hex_color($input[$name]['color']);
			}
			break;
			
			
			case 'fontsize':	
			$input[$name] = esc_attr($input[$name]);
		
			
			break;

			
		}
	}
	
	
	return $input;
		
		
		
		
		
		
	}
	




// ************************************************************************************************************

// Callback functions

/*
 * Section HTML, displayed before the first option
 * @return echoes output
 */
function vankarwai_section_fn($desc) {

}

/**
 * Form Fields HTML
 * All form field types share the same function!!
 * @return echoes output
 */
function vankarwai_form_field_fn($args = array()) {
	
	extract( $args );
	
	// get the settings sections array
	$settings_output 	= vankarwai_get_settings();
	
	$vankarwai_options		= $settings_output['vankarwai_option_name'];
	$vankarwai_option_name = $vankarwai_options.'['.$name.']';
	$options 			= get_option($vankarwai_options);
		
	// switch html display based on the setting type.	
	switch ( $type ) {
		case 'select':
		?>
		<select name="<?php print $vankarwai_option_name; ?>">
	  	<?php $i=0; foreach($values as $value){ ?>
			<option value="<?php print $value ?>"<?php if($value == $options[$name]){ ?> selected="selected"<?php } ?>><?php print $choices[$i]; ?></option>
		<?php $i++; } ?></select>
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'text':
		?>
		<input class="regular-text" type="text" name="<?php print $vankarwai_option_name; ?>" value="<?php if(isset($options[$name])){ print $options[$name]; } ?>" />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'number':
		?>
		<input type="number" class="small-text" step="1" name="<?php print $vankarwai_option_name; ?>" value="<?php if(isset($options[$name])){ print $options[$name]; } ?>" />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'textcode':
		?>
		<input class="regular-text code" type="text" name="<?php print $vankarwai_option_name; ?>" value="<?php print $options[$name]; ?>" />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'checkbox':
		?>
		<input type="checkbox" name="<?php print $vankarwai_option_name; ?>" value="1"<?php if(isset($options[$name]) && $options[$name]==1){ ?> checked="checked"<?php } ?> />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'image':
		?>
		<input class="uploadimg" type="text" name="<?php print $vankarwai_option_name; ?>" value="<?php if(isset($options[$name])){ print $options[$name]; } ?>" />
		<input class="button uploadbutton" type="button" value="<?php _e("Upload Image","flamingo"); ?>" />
		<br />
		<?php if(isset($options[$name]) && $options[$name]!=''){ ?><div class="image_preview bordered_preview rounded_preview"<?php if(isset($style)){ ?> style="<?php print $style; ?>"<?php } ?>><div class="image_preview_inner rounded_preview"<?php if(isset($in_style)){ ?> style="<?php print $in_style; ?>"<?php } ?>><img src="<?php print $options[$name]; ?>" alt="<?php print $title; ?>" /></div></div><?php } ?>
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'imagenopreview':
		?>
		<input class="uploadimg" type="text" name="<?php print $vankarwai_option_name; ?>" value="<?php if(isset($options[$name])){ print $options[$name]; } ?>" />
		<input class="button uploadbutton" type="button" value="<?php _e("Upload Image","flamingo"); ?>" />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'bgbuttons':
		?>
		<?php if(isset($options[$name.'_custom']) && $options[$name.'_custom']!=''){ ?><div class="image_preview rounded_preview bordered_preview bg_preview pattern_preview"><div style="background-image:url('<?php if(isset($options[$name.'_custom'])){ print $options[$name.'_custom']; } ?>')"></div></div><?php } ?>
		<?php foreach($values as $value){ ?>
		<div class="image_preview rounded_preview bordered_preview bg_preview pattern_preview"><div<?php if($value=='null'){ ?> class="empty-bg"<?php } else { ?> style="background-image:url('<?php print $value; ?>')"<?php } ?>><?php if($value=='null'){ print '<span>'.__("Disable","flamingo").'</span>'; } ?></div></div>
		<?php } ?>
		<input type="hidden" value="<?php print $options[$name]; ?>" name="<?php print $vankarwai_option_name; ?>" />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'imagebuttons':
		?>
		<?php if(isset($options[$name.'_custom'])){ if($options[$name.'_custom']!=''){ ?><div class="image_preview rounded_preview bordered_preview bg_preview"<?php if(isset($max_width)){ ?> style="max-width: <?php print $max_width; ?>px"<?php } ?>><div class="rounded_preview bordered_preview img_preview"><img src="<?php print $options[$name.'_custom']; ?>" alt="<?php print $title; ?>" /></div></div><?php } } ?>
		<?php foreach($values as $option_value){ ?>
		<div class="image_preview rounded_preview bordered_preview bg_preview"<?php if(isset($max_width)){ ?> style="max-width: <?php print $max_width; ?>px"<?php } ?>><div class="rounded_preview bordered_preview img_preview"><img src="<?php print $option_value; ?>" alt="<?php print $title; ?>" /></div></div>
		<?php } ?>
		<input type="hidden" value="<?php print $options[$name]; ?>" name="<?php print $vankarwai_option_name; ?>" />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'imageselect':
		?>
		<?php $i=0; foreach($values as $option_value){?>
		<div class="image_select image_preview rounded_preview bordered_preview bg_preview"><div class="rounded_preview bordered_preview img_preview"><img src="<?php print get_template_directory_uri().'/functions/images/'.$option_value.'.png'; ?>" alt="<?php print $option_value; ?>" /><span><?php print $choices[$i]; ?></span></div></div>
		<?php $i++; } ?>
		<input type="hidden" value="<?php print $options[$name]; ?>" name="<?php print $vankarwai_option_name; ?>" />
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'textarea':
		?>
		<textarea class="large-text" name="<?php print $vankarwai_option_name; ?>"><?php print $options[$name]; ?></textarea>
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'textareacode':
		?>
		<textarea class="large-text code" name="<?php print $vankarwai_option_name; ?>"><?php print $options[$name]; ?></textarea>
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'color':
		?>
		<div class="colorpicker-container">
		<div class="color-selector" id="color-selector-1"><div style="background-color: <?php print $options[$name]; ?>"></div></div>
		<input type="hidden" name="<?php print $vankarwai_option_name; ?>" value="<?php print $options[$name]; ?>" />
		</div>
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'slider':
		?>
		<div class="slider slider-unit-<?php print $unit; ?>"><input type="hidden" name="<?php print $vankarwai_option_name; ?>" value="<?php if(!isset($options[$name])){ print '0'; } else { print $options[$name]; } ?>" />
    	<input type="hidden" name="<?php print $name; ?>_min" value="<?php print $values[0]; ?>" />
    	<input type="hidden" name="<?php print $name; ?>_max" value="<?php print $values[1]; ?>" /></div>
    	<div class="slider-value"></div>
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		break;
		
		case 'typography':	
				
		if($screen){ if(is_array($screen)){ ?><div class="vkw-screen-slider-container"><div class="vkw-screen-slider"><?php foreach($screen as $screen_single){ ?><img class="vkw-screen screen-<?php print $name; ?>" src="<?php print $screen_single; ?>" /><?php } ?></div></div><?php } else { ?><img class="vkw-screen screen-<?php print $name; ?>" src="<?php print $screen; ?>" /><?php } } ?>
		
		<div class="vkw-typography-container">
		<?php if(isset($std['size'])){ ?>
		<select class="vkw-typography vkw-typography-size" name="<?php print $vankarwai_option_name.'[size]'; ?>">
		<?php
		for ($i = 9; $i < 91; $i++) { 
			$size = $i . 'px'; ?>
			<option value="<?php print esc_attr( $size ); ?>"<?php if($size == $options[$name]['size']){ ?> selected="selected"<?php } ?>><?php print esc_html( $size ); ?></option>
		<?php } ?>
		</select>
		
		<?php } if(isset($std['face'])){ ?>
		<select class="vkw-typography vkw-typography-face" name="<?php print $vankarwai_option_name.'[face]'; ?>">
		
		<?php $faces = vankarwai_get_font_list(); 
		foreach ( $faces as $key => $face ){ ?>
			<option value="<?php print esc_attr( $key ); ?>"<?php if($key == $options[$name]['face']){ ?> selected="selected"<?php } ?>><?php print esc_html( $face ); ?></option>
		<?php } ?>			
		
		</select>
		
		<?php } if(isset($std['weight'])){ ?>
		<select class="vkw-typography vkw-typography-weight" name="<?php print $vankarwai_option_name.'[weight]'; ?>">

		<?php $weights = vankarwai_get_font_weights();
		foreach ( $weights as $key => $weight ) { ?>
			<option value="<?php print esc_attr( $key ); ?>"<?php if($key == $options[$name]['weight']){ ?> selected="selected"<?php } ?>><?php print $weight; ?></option>
		<?php 
		}
		?>
		</select>
		
		<?php } if(isset($std['color'])){ ?>
		<div class="colorpicker-container">
		<div class="color-selector" id="color-selector-1"><div style="background-color: <?php print $options[$name]['color']; ?>"></div></div>
		<input type="hidden" name="<?php print $vankarwai_option_name.'[color]'; ?>" value="<?php print $options[$name]['color']; ?>" />
		</div>
		
		<?php } if(isset($std['italic'])){ ?><input type="hidden" name="<?php print $vankarwai_option_name.'[italic]'; ?>" value="" /><label><input class="vkw-typography-italic" type="checkbox"<?php if($options[$name]['italic']==1){ ?> checked="checked"<?php } ?> /> <?php _e("Italic", "flamingo"); ?></label>
		
		<?php } if(isset($std['uppercase'])){ ?><input type="hidden" name="<?php print $vankarwai_option_name.'[uppercase]'; ?>" value="" /><label><input class="vkw-typography-uppercase" type="checkbox" <?php if($options[$name]['uppercase']==1){ ?> checked="checked"<?php } ?> /> <?php _e("Uppercase", "flamingo"); ?></label>
		
		<?php } if(isset($std['lowercase'])){ ?><input type="hidden" name="<?php print $vankarwai_option_name.'[lowercase]'; ?>" value="" /><label><input class="vkw-typography-lowercase" type="checkbox" <?php if($options[$name]['lowercase']==1){ ?> checked="checked"<?php } ?> /> <?php _e("Lowercase", "flamingo"); ?></label><?php } ?>
		
		<p class="webfont_preview rounded_preview bordered_preview"><span><?php print get_bloginfo('name'); ?></span></p><div class="clear"></div></div>
		<?php echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		
		break;
		
		
		case 'fontsize':	
				
		if($screen){ if(is_array($screen)){ ?><div class="vkw-screen-slider-container"><div class="vkw-screen-slider"><?php foreach($screen as $screen_single){ ?><img class="vkw-screen screen-<?php print $name; ?>" src="<?php print $screen_single; ?>" /><?php } ?></div></div><?php } else { ?><img class="vkw-screen screen-<?php print $name; ?>" src="<?php print $screen; ?>" /><?php } } ?>
		
		<div class="vkw-typography-container vkw-font-size-container">
		<?php if(isset($std)){ ?>
		<select class="vkw-typography vkw-typography-size" name="<?php print $vankarwai_option_name; ?>">
		<?php
		for ($i = 9; $i < 91; $i++) { 
			$size = $i . 'px'; ?>
			<option value="<?php print esc_attr( $size ); ?>"<?php if($size == $options[$name]){ ?> selected="selected"<?php } ?>><?php print esc_html( $size ); ?></option>
		<?php } ?>
		</select>

		<?php } echo ($desc != '') ? "<br /><span class='description'>$desc</span>" : ""; 
		
		break;
	}
}

/*
 * Admin Settings Page HTML
 * 
 * @return echoes output
 */
function vankarwai_settings_page_fn() {
	// get the settings sections array
	$settings_output = vankarwai_get_settings();
?>
	<div class="wrap">
		<?php 
		// dislays the page title
		vankarwai_settings_page_header(); 
		?>
		
		<form action="options.php" method="post">
			<?php 
			// http://codex.wordpress.org/Function_Reference/settings_fields
			settings_fields($settings_output['vankarwai_option_name']); 
			// http://codex.wordpress.org/Function_Reference/do_settings_sections
			do_settings_sections(__FILE__); 
			?>
			
			<p class="submit">
				<input name="Submit" type="submit" class="button-primary" value="<?php esc_attr_e('Save Changes','flamingo'); ?>" />
			</p>
			
		</form>
	</div><!-- wrap -->
<?php }


/**
 * Helper function: Check for pages and return the current page name
 *
 * @return string
 */
function vankarwai_get_admin_page() {

	global $pagenow;
	
	$current_page = "";
	
	if(isset($_GET['page'])){ $current_page = trim($_GET['page']); }
	
	// use a different way to read the current page name when the form submits
	if ($pagenow == 'options.php') {
		// get the page name
		$parts 	= explode('page=', $_POST['_wp_http_referer']); // http://codex.wordpress.org/Function_Reference/wp_referer_field
		if(isset($parts) && count($parts)>1){
			$page  	= $parts[1]; 
			$page	= explode('&', $page);
			$page	= $page[0];
			$current_page = trim($page);
		}
	} 

	return $current_page;

}



/**
 * Helper function: Creates settings page title
 *
 * @return echos output
 */
function vankarwai_settings_page_header() {
	
    $settings_output 	= vankarwai_get_settings();
		
	// display the icon and page title
	echo '<div id="icon-options-general" class="icon32"><br /></div>';
	echo '<h2>' . get_bloginfo('name') .' / '.sprintf(__('%s Options','flamingo'), $settings_output['vankarwai_page_title']) . '</h2>';
   
}


/**
 * Group scripts (js & css)
 */
function vankarwai_settings_scripts(){
	wp_enqueue_media();
	wp_enqueue_script('media-upload');
	/*wp_enqueue_script('thickbox');
	wp_enqueue_script('my-upload');*/
	wp_enqueue_script('jquery-ui-mouse');
	wp_enqueue_script('jquery-ui-slider');
	wp_enqueue_script('color-picker', get_template_directory_uri().'/framework/js/colorpicker.js');
	wp_enqueue_script('cycle', get_template_directory_uri().'/framework/js/jquery.cycle.lite.js');
	wp_enqueue_script('framework-options', get_template_directory_uri().'/framework/js/framework-options.js');	
	//wp_enqueue_script('theme-options', get_template_directory_uri().'/framework/js/theme-options.js');	
	
	wp_enqueue_style('thickbox');
	wp_enqueue_style('jquery-ui', get_template_directory_uri().'/framework/css/smoothness/jquery-ui-1.8.18.custom.css');
	wp_enqueue_style('color-picker', get_template_directory_uri().'/framework/css/colorpicker.css');
	wp_enqueue_style('framework-options', get_template_directory_uri().'/framework/css/framework-options.css');
	//wp_enqueue_style('theme-options', get_template_directory_uri().'/framework/css/theme-options.css');
}


add_action('admin_enqueue_scripts', 'vankarwai_settings_scripts');



function vankarwai_get_font_list() {
	$default = array(
		'Arial'     				=> 'Arial (S)',
		'Verdana'   				=> 'Verdana, Geneva (S)',
		'Trebuchet MS'				=> 'Trebuchet (S)',
		'Georgia'   				=> 'Georgia (S)',
		'Times'     				=> 'Times New Roman (S)',
		'Tahoma'    				=> 'Tahoma, Geneva (S)',
		'Palatino'  				=> 'Palatino (S)',
		'Helvetica'					=> 'Helvetica (S)',
		'Abel'    					=> 'Abel (G)',
		'Abril Fatface'				=> 'Abril Fatface (G)',
		'Advent Pro'				=> 'Advent Pro (G)',
		'Alef'						=> 'Alef (G)',
		'Alegreya'					=> 'Alegreya (G)',
		'Alfa Slab One'				=> 'Alfa Slab One (G)',
		'Alice'						=> 'Alice (G)',
		'Alike'						=> 'Alike (G)',
		'Anaheim'					=> 'Anaheim (G)',	
		'Antic'						=> 'Antic (G)',	
		'Antic Slab'				=> 'Antic Slab (G)',
		'Archivo Black'				=> 'Archivo Black (G)',
		'Archivo Narrow'			=> 'Archivo Narrow (G)',
		'Arimo'						=> 'Arimo (G)',
		'Artifika'					=> 'Artifika (G)',
		'Arvo'						=> 'Arvo (G)',
		'Average Sans'				=> 'Average Sans (G)',
		'Balthazar'					=> 'Balthazar (G)',
		'Bevan'						=> 'Bevan (G)',
		'Bowlby One SC'				=> 'Bowlby One SC (G)',
		'Bree Serif'				=> 'Bree Serif (G)',
		'Cabin'						=> 'Cabin (G)',
		'Cabin Condensed'			=> 'Cabin Condensed (G)',
		'Cantata One'				=> 'Cantata One (G)',
		'Clicker Script'		    => 'Clicker Script (G)',
		'Condiment'					=> 'Condiment (G)',
		'Cookie'					=> 'Cookie (G)',
		'Copse'						=> 'Copse (G)',
		'Coustard'					=> 'Coustard (G)',
		'Crete Round'				=> 'Crete Round (G)',
		'Cutive'					=> 'Cutive (G)',
		'Dosis'						=> 'Dosis (G)',
		'Droid Sans'				=> 'Droid Sans (G)',
		'Droid Sans Mono'			=> 'Droid Sans Mono (G)',
		'EB Garamond'				=> 'EB Garamond (G)',
		'Economica'					=> 'Economica (G)',
		'Euphoria Script'			=> 'Euphoria Script (G)',
		'Fauna One'					=> 'Fauna One (G)',
		'Fjord One'					=> 'Fjord One (G)',
		'Flamenco'					=> 'Flamenco (G)',
		'Fruktur'					=> 'Fruktur (G)',
		'Gabriela'					=> 'Gabriela (G)',
		'Glass Antiqua'				=> 'Glass Antiqua (G)',
		'Glegoo'					=> 'Glegoo (G)',
		'Graduate'					=> 'Graduate (G)',
		'Gravitas One'				=> 'Gravitas One (G)',
		'Holtwood One SC'			=> 'Holtwood One SC (G)',
		'IM Fell DW Pica SC'		=> 'IM Fell DW Pica SC (G)',
		'Inika'						=> 'Inika (G)',
		'Josefin Sans'				=> 'Josefin Sans (G)',
		'Kameron'					=> 'Kameron (G)',
		'Kelly Slab'				=> 'Kelly Slab (G)',
		'Kreon'						=> 'Kreon (G)',
		'Lancelot'					=> 'Lancelot (G)',
		'Lato'						=> 'Lato (G)',
		'Lekton'					=> 'Lekton (G)',
		'Limelight'					=> 'Limelight (G)',
		'Linden Hill'				=> 'Linden Hill (G)',
		'Lobster Two'				=> 'Lobster Two (G)',
		'Lora'						=> 'Lora (G)',
		'Lustria'					=> 'Lustria (G)',
		'Maven Pro'					=> 'Maven Pro (G)',
		'Megrim'					=> 'Megrim (G)',
		'Merriweather Sans'			=> 'Merriweather Sans(G)',
		'Metrophobic'				=> 'Metrophobic(G)',
		'Molengo'					=> 'Molengo (G)',
		'Monda'						=> 'Monda (G)',
		'Montaga'					=> 'Montaga (G)',
		'Montserrat'				=> 'Montserrat (G)',
		'Montserrat Alternates'		=> 'Montserrat Alternates (G)',
		'Muli'						=> 'Muli (G)',
		'Nobile'					=> 'Nobile (G)',
		'Noticia Text'				=> 'Noticia Text (G)',
		'Offside'					=> 'Offside (G)',
		'Old Standard TT'			=> 'Old Standard TT (G)',
		'Oldenburg'					=> 'Oldenburg (G)',
		'Oleo Script'				=> 'Oleo Script (G)',
		'Open Sans'					=> 'Open Sans (G)',
		'Orienta'					=> 'Orienta (G)',
		'Pathway Gothic One'		=> 'Pathway Gothic One (G)',
		'Patua One'					=> 'Patua One (G)',
		'Paytone One'				=> 'Paytone One (G)',
		'Playball'					=> 'Playball (G)',
		'Playfair Display'			=> 'Playfair Display (G)',
		'Playfair Display SC'		=> 'Playfair Display SC (G)',
		'Poiret One'				=> 'Poiret One (G)',
		'Port Lligat Slab'			=> 'Port Lligat Slab (G)',
		'PT Sans Narrow'			=> 'PT Sans Narrow (G)',
		'PT Serif'					=> 'PT Serif (G)',
		'Questrial'					=> 'Questrial (G)',
		'Quicksand'					=> 'Quicksand (G)',
		'Radley'					=> 'Radley (G)',
		'Raleway'					=> 'Raleway (G)',
		'Roboto Slab'				=> 'Roboto Slab (G)',
		'Rokkitt'					=> 'Rokkitt (G)',
		'Rye'						=> 'Rye (G)',
		'Satisfy'					=> 'Satisfy (G)',
		'Seaweed Script'			=> 'Seaweed Script (G)',
		'Signika'					=> 'Signika (G)',
		'Simonetta'					=> 'Simonetta (G)',
		'Sonsie One'				=> 'Sonsie One (G)',
		'Sorts Mill Goudy'			=> 'Sorts Mill Goudy (G)',
		'Source Code Pro'			=> 'Source Code Pro (G)',
		'Source Sans Pro'			=> 'Source Sans Pro (G)',
		'Stint Ultra Expanded'		=> 'Stint Ultra Expanded (G)',
		'Telex'						=> 'Telex (G)',
		'Tienne'					=> 'Tienne (G)',
		'Tinos'						=> 'Tinos (G)',
		'Titillium Web'				=> 'Titillium Web (G)',
		'Tulpen One'				=> 'Tulpen One (G)',
		'Ubuntu'					=> 'Ubuntu (G)',
		'Ubuntu Mono'				=> 'Ubuntu Mono (G)',
		'Ultra'						=> 'Ultra (G)',
		'Vidaloka'					=> 'Vidaloka (G)',
		'Volkhov'					=> 'Volkhov (G)',
		'Vollkorn'					=> 'Vollkorn (G)'
		);
		
	return $default;
}



function vankarwai_get_font_face_css($name){
	if($name=='Helvetica'){
		$face = '"Helvetica Neue", "HelveticaNeue", "Helvetica-Neue", "Helvetica"';
	}	
	else if($name=='Trebuchet MS'){
		$face = '"Trebuchet", "Trebuchet MS"';
	} else {
		$face = '"'.$name.'"';
	}
	return $face;
}




function vankarwai_get_google_webfont($font){
	
	$fontprefix = '<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=';
	$fontsufix = '">';
	$import='';	
	
	
	if($font=='Abel'){
		$import = $fontprefix."Abel".$fontsufix;
	}
	if($font=='Abril Fatface'){
		$import = $fontprefix."Abril+Fatface".$fontsufix;
	}
	if($font=='Advent Pro'){
		$import = $fontprefix."Advent+Pro:100,200,300,400,500,600,700".$fontsufix;
	}
	if($font=='Alef'){
		$import = $fontprefix."Alef:400,700".$fontsufix;
	}
	if($font=='Alegreya'){
		$import = $fontprefix."Alegreya:400italic,700italic,900italic,400,700,900".$fontsufix;
	}
	if($font=='Alfa Slab One'){
		$import = $fontprefix."Alfa+Slab+One".$fontsufix;
	}
	if($font=='Alice'){
		$import = $fontprefix."Alice".$fontsufix;
	}
	if($font=='Alike'){
		$import = $fontprefix."Alike".$fontsufix;
	}
	if($font=='Anaheim'){
		$import = $fontprefix."Anaheim".$fontsufix;
	}
	if($font=='Antic'){
		$import = $fontprefix."Antic".$fontsufix;
	}
	if($font=='Antic Slab'){
		$import = $fontprefix."Antic+Slab".$fontsufix;
	}
	if($font=='Archivo Black'){
		$import = $fontprefix."Archivo+Black".$fontsufix;
	}
	if($font=='Archivo Narrow'){
		$import = $fontprefix."Archivo+Narrow:400,400italic,700,700italic".$fontsufix;
	}
	if($font=='Arimo'){
		$import = $fontprefix."Arimo:400,700,400italic,700italic".$fontsufix;
	}
	if($font=='Artifika'){
		$import = $fontprefix."Artifika".$fontsufix;
	}
	if($font=='Arvo'){
		$import = $fontprefix."Arvo:400,700,400italic,700italic".$fontsufix;
	}
	if($font=='Average Sans'){
		$import = $fontprefix."Average+Sans".$fontsufix;
	}
	if($font=='Balthazar'){
		$import = $fontprefix."Balthazar".$fontsufix;
	}
	if($font=='Bevan'){
		$import = $fontprefix."Bevan".$fontsufix;
	}
	if($font=='Bowlby One SC'){
		$import = $fontprefix."Bowlby+One+SC".$fontsufix;
	}
	if($font=='Bree Serif'){
		$import = $fontprefix."Bree+Serif".$fontsufix;
	}
	if($font=='Cabin'){
		$import = $fontprefix."Cabin:400,500,600,700,400italic,500italic,600italic,700italic".$fontsufix;
	}
	if($font=='Cabin Condensed'){
		$import = $fontprefix."Cabin+Condensed:400,500,600,700".$fontsufix;
	}
	if($font=='Cantata One'){
		$import = $fontprefix."Cantata+One".$fontsufix;
	}
	if($font=='Clicker Script'){
		$import = $fontprefix."Clicker+Script".$fontsufix;
	}
	if($font=='Carme'){
		$import = $fontprefix."Carme".$fontsufix;
	}
	if($font=='Condiment'){
		$import = $fontprefix."Condiment".$fontsufix;
	}
	if($font=='Cookie'){
		$import = $fontprefix."Cookie".$fontsufix;
	}
	if($font=='Copse'){
		$import = $fontprefix."Copse".$fontsufix;
	}
	if($font=='Coustard'){
		$import = $fontprefix."Coustard:400,900".$fontsufix;
	}
	if($font=='Crete Round'){
		$import = $fontprefix."Crete+Round:400,400italic".$fontsufix;
	}
	if($font=='Cutive'){
		$import = $fontprefix."Cutive".$fontsufix;
	}
	if($font=='Dosis'){
		$import = $fontprefix."Dosis".$fontsufix;
	}
	if($font=='Droid Sans'){
		$import = $fontprefix."Droid+Sans:400,700".$fontsufix;
	}
	if($font=='Droid Sans Mono'){
		$import = $fontprefix."Droid+Sans+Mono".$fontsufix;
	}
	if($font=='EB Garamond'){
		$import = $fontprefix."EB+Garamond".$fontsufix;
	}
	if($font=='Economica'){
		$import = $fontprefix."Economica:400,700,400italic,700italic".$fontsufix;
	}
	if($font=='Euphoria Script'){
		$import = $fontprefix."Euphoria+Script".$fontsufix;
	}
	if($font=='Fauna One'){
		$import = $fontprefix."Fauna+One".$fontsufix;
	}
	if($font=='Fjord One'){
		$import = $fontprefix."Fjord+One".$fontsufix;
	}
	if($font=='Flamenco'){
		$import = $fontprefix."Flamenco:300,400".$fontsufix;
	}
	if($font=='Fruktur'){
		$import = $fontprefix."Fruktur".$fontsufix;
	}
	if($font=='Gabriela'){
		$import = $fontprefix."Gabriela".$fontsufix;
	}
	if($font=='Glass Antiqua'){
		$import = $fontprefix."Glass+Antiqua".$fontsufix;
	}
	if($font=='Glegoo'){
		$import = $fontprefix."Glegoo".$fontsufix;
	}
	if($font=='Graduate'){
		$import = $fontprefix."Graduate".$fontsufix;
	}
	if($font=='Gravitas One'){
		$import = $fontprefix."Gravitas+One".$fontsufix;
	}
	if($font=='Holtwood One SC'){
		$import = $fontprefix."Holtwood+One+SC".$fontsufix;
	}
	if($font=='IM Fell DW Pica SC'){
		$import = $fontprefix."IM+Fell+DW+Pica+SC".$fontsufix;
	}
	if($font=='Inika'){
		$import = $fontprefix."Inika:400,700".$fontsufix;
	}
	if($font=='Josefin Sans'){
		$import = $fontprefix."Josefin+Sans:100,300,400,600,700,100italic,300italic,400italic,600italic,700italic".$fontsufix;
	}
	if($font=='Kameron'){
		$import = $fontprefix."Kameron:400,700".$fontsufix;
	}
	if($font=='Kelly Slab'){
		$import = $fontprefix."Kelly+Slab".$fontsufix;
	}
	if($font=='Kreon'){
		$import = $fontprefix."Kreon:300,400,700".$fontsufix;
	}
	if($font=='Lancelot'){
		$import = $fontprefix."Lancelot".$fontsufix;
	}
	if($font=='Lato'){
		$import = $fontprefix."Lato:300,400,700,900,300italic,400italic,700italic,900italic".$fontsufix;
	}
	if($font=='Lekton'){
		$import = $fontprefix."Lekton:400,700,400italic".$fontsufix;
	}
	if($font=='Limelight'){
		$import = $fontprefix."Limelight".$fontsufix;
	}
	if($font=='Linden Hill'){
		$import = $fontprefix."Linden+Hill:400,400italic".$fontsufix;
	}
	if($font=='Lobster Two'){
		$import = $fontprefix."Lobster+Two:400,400italic,700,700italic".$fontsufix;
	}
	if($font=='Lora'){
		$import = $fontprefix."Lora:400,700,400italic,700italic".$fontsufix;
	}
	if($font=='Lustria'){
		$import = $fontprefix."Lustria".$fontsufix;
	}
	if($font=='Maven Pro'){
		$import = $fontprefix."Maven+Pro:400,500,700,900".$fontsufix;
	}
	if($font=='Megrim'){
		$import = $fontprefix."Megrim".$fontsufix;
	}
	if($font=='Merriweather Sans'){
		$import = $fontprefix."Merriweather+Sans:300,300italic,400,400italic,700,700italic,800,800italic".$fontsufix;
	}
	if($font=='Metrophobic'){
		$import = $fontprefix."Metrophobic".$fontsufix;
	}
	if($font=='Molengo'){
		$import = $fontprefix."Molengo".$fontsufix;
	}
	if($font=='Monda'){
		$import = $fontprefix."Monda:400,700".$fontsufix;
	}
	if($font=='Montaga'){
		$import = $fontprefix."Montaga".$fontsufix;
	}
	if($font=='Montserrat'){
		$import = $fontprefix."Montserrat:400,700".$fontsufix;
	}
	if($font=='Montserrat Alternates'){
		$import = $fontprefix."Montserrat+Alternates:400,700".$fontsufix;
	}
	if($font=='Muli'){
		$import = $fontprefix."Muli:300,400,300italic,400italic".$fontsufix;
	}
	if($font=='Nobile'){
		$import = $fontprefix."Nobile:400,400italic,700,700italic".$fontsufix;
	}
	if($font=='Noticia Text'){
		$import = $fontprefix."Noticia+Text:400,400italic,700,700italic".$fontsufix;
	}
	if($font=='Offside'){
		$import = $fontprefix."Offside".$fontsufix;
	}
	if($font=='Old Standard TT'){
		$import = $fontprefix."Old+Standard+TT:400,400italic,700".$fontsufix;
	}
	if($font=='Oldenburg'){
		$import = $fontprefix."Oldenburg".$fontsufix;
	}
	if($font=='Oleo Script'){
		$import = $fontprefix."Oleo+Script:400,700".$fontsufix;
	}
	if($font=='Open Sans'){
		$import = $fontprefix."Open+Sans".$fontsufix;
	}
	if($font=='Orienta'){
		$import = $fontprefix."Orienta".$fontsufix;
	}
	if($font=='Pathway Gothic One'){
		$import = $fontprefix."Pathway+Gothic+One".$fontsufix;
	}
	if($font=='Patua One'){
		$import = $fontprefix."Patua+One".$fontsufix;
	}
	if($font=='Paytone One'){
		$import = $fontprefix."Paytone+One".$fontsufix;
	}
	if($font=='Playball'){
		$import = $fontprefix."Playball".$fontsufix;
	}
	if($font=='Playfair Display'){
		$import = $fontprefix."Playfair+Display:400,400italic".$fontsufix;
	}
	if($font=='Playfair Display SC'){
		$import = $fontprefix."Playfair+Display+SC:400,400italic,700,700italic,900,900italic".$fontsufix;
	}
	if($font=='Poiret One'){
		$import = $fontprefix."Poiret+One".$fontsufix;
	}
	if($font=='Port Lligat Slab'){
		$import = $fontprefix."Port+Lligat+Slab".$fontsufix;
	}
	if($font=='PT Sans Narrow'){
		$import = $fontprefix."PT+Sans+Narrow:400,700".$fontsufix;
	}
	if($font=='PT Serif'){
		$import = $fontprefix."PT+Serif:400,700,400italic,700italic".$fontsufix;
	}
	if($font=='Questrial'){
		$import = $fontprefix."Questrial".$fontsufix;
	}
	if($font=='Quicksand'){
		$import = $fontprefix."Quicksand:300,400,700".$fontsufix;
	}
	if($font=='Radley'){
		$import = $fontprefix."Radley:400,400italic".$fontsufix;
	}
	if($font=='Raleway'){
		$import = $fontprefix."Raleway:200,300,400,500,600,700,800,900".$fontsufix;
	}
	if($font=='Roboto Slab'){
		$import = $fontprefix."Roboto+Slab:100,300,400,700".$fontsufix;
	}
	if($font=='Rokkitt'){
		$import = $fontprefix."Rokkitt:400,700".$fontsufix;
	}
	if($font=='Rye'){
		$import = $fontprefix."Rye".$fontsufix;
	}
	if($font=='Satisfy'){
		$import = $fontprefix."Satisfy".$fontsufix;
	}
	if($font=='Seaweed Script'){
		$import = $fontprefix."Seaweed+Script".$fontsufix;
	}
	if($font=='Signika'){
		$import = $fontprefix."Signika:400,300,600,700".$fontsufix;
	}
	if($font=='Simonetta'){
		$import = $fontprefix."Simonetta:400,400italic".$fontsufix;
	}
	if($font=='Sonsie One'){
		$import = $fontprefix."Sonsie+One".$fontsufix;
	}
	if($font=='Sorts Mill Goudy'){
		$import = $fontprefix."Sorts+Mill+Goudy:400,400italic".$fontsufix;
	}
	if($font=='Source Code Pro'){
		$import = $fontprefix."Source+Code+Pro:200,300,400,500,600,700,900".$fontsufix;
	}
	if($font=='Source Sans Pro'){
		$import = $fontprefix."Source+Sans+Pro:200,300,400,500,600,700,900".$fontsufix;
	}
	if($font=='Stint Ultra Expanded'){
		$import = $fontprefix."Source+Sans+Pro:300,400,600,700,900".$fontsufix;
	}
	if($font=='Telex'){
		$import = $fontprefix."Telex".$fontsufix;
	}
	if($font=='Tienne'){
		$import = $fontprefix."Tienne:400,700,900".$fontsufix;
	}
	if($font=='Tinos'){
		$import = $fontprefix."Tinos:400,700,400italic,700italic".$fontsufix;
	}
	if($font=='Titillium Web'){
		$import = $fontprefix."Titillium+Web:300,300italic,400,400italic,600,600italic,700,700italic,900".$fontsufix;
	}
	if($font=='Tulpen One'){
		$import = $fontprefix."Tulpen+One".$fontsufix;
	}
	if($font=='Ubuntu'){
		$import = $fontprefix."Ubuntu:300,400,500,700,300italic,400italic,500italic,700italic".$fontsufix;
	}
	if($font=='Ubuntu Mono'){
		$import = $fontprefix."Ubuntu+Mono:400,700,400italic,700italic".$fontsufix;
	}
	if($font=='Ultra'){
		$import = $fontprefix."Ultra".$fontsufix;
	}
	if($font=='Vidaloka'){
		$import = $fontprefix."Vidaloka".$fontsufix;
	}
	if($font=='Volkhov'){
		$import = $fontprefix."Volkhov:400,400italic,700,700italic".$fontsufix;
	}
	if($font=='Vollkorn'){
		$import = $fontprefix."Vollkorn:400,400italic".$fontsufix;
	}
	
	return $import;
}


function vankarwai_get_font_weights() {
	$default = array(
		'200'			=> 'Light',
		'normal'      	=> 'Normal',
		'bold'        	=> 'Bold',
		'300' 			=> '300',
		'400' 			=> '400',
		'500' 			=> '500',
		'600' 			=> '600',
		'700' 			=> '700',
		'800' 			=> '800',
		'900' 			=> '900'
		);
		
	return $default;
}


function vankarwai_get_text_transform($option){	
	if(isset($option['uppercase']) && $option['uppercase']==1){
		$uppercase = 'uppercase'; } else { $uppercase = 'none'; 
	}
	if(isset($option['lowercase']) && $option['lowercase']==1){
		$lowercase = 'lowercase'; 
	} else {
		$lowercase = 'none'; 
	}
	if($uppercase == 'uppercase'){
		return $uppercase;
	} elseif($lowercase=='lowercase'){
		return $lowercase;
	} else {
		return 'none';
	}
}


function vankarwai_sanitize_hex_color( $color ) {
	if ( '' === $color )
		return '';

	// 3 or 6 hex digits, or the empty string.
	if ( preg_match('|^#([A-Fa-f0-9]{3}){1,2}$|', $color ) )
		return $color;

	return null;
}

function vankarwai_get_font_style($option){
	if(isset($option['italic']) && $option['italic']==1){
		$italic = 'italic'; 
	} else {
		$italic = 'normal'; 
	}
	return $italic;
}


// ===================== 
// ! AJAX  
// ===================== 

add_action('wp_ajax_vankarwai_load_font', 'vankarwai_load_font');

function vankarwai_load_font(){
	print vankarwai_get_google_webfont($_POST['font']);
	die();
}

?>