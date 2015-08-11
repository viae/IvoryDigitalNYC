<?php

if(function_exists("register_field_group")){
	
	
	register_field_group(array (
		'id' => 'acf_background-settings',
		'title' => 'Background settings',
		'fields' => array (
			array (
				'key' => 'field_51aa997a0b8d6',
				'label' => __("Background Type","flamingo"),
				'name' => 'flamingo_background_type',
				'type' => 'select',
				'multiple' => 0,
				'allow_null' => 0,
				'choices' => array (
					'default' => __("Use default background","flamingo"),
					'color-bg' => __("Plain Color","flamingo"),
					'image-bg' => __("Fullscreen Image","flamingo"),
					'pattern-bg' => __("Pattern Image","flamingo"),
					'video-bg' => __("Fullscreen Video","flamingo"),
				),
				'default_value' => '',
			),
			array (
				'key' => 'field_51aa991b0b8d5',
				'label' => __("Background Image","flamingo"),
				'name' => 'flamingo_background_image',
				'type' => 'image',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'image-bg',
						),
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'pattern-bg',
						),
					),
					'allorany' => 'any',
				),
				'save_format' => 'url',
				'preview_size' => 'full',
			),
			array (
				'key' => 'field_51aa9a2225e0b',
				'label' => __("Background Color","flamingo"),
				'name' => 'flamingo_background_color',
				'type' => 'color_picker',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'color-bg',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
			),
						
			array (
				'key' => 'field_528d6efb99a05',
				'label' => __('Select Video Service','flamingo'),
				'name' => 'flamingo_video_service',
				'type' => 'select',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'video-bg',
						),
					),
					'allorany' => 'all',
				),
				'choices' => array (
					'youtube' => 'YouTube',
					'vimeo' => 'Vimeo',
				),
				'default_value' => '',
				'allow_null' => 0,
				'multiple' => 0,
			),
			array (
				'key' => 'field_528d6f3a99a06',
				'label' => __('Vimeo Video ID','flamingo'),
				'name' => 'flamingo_vimeo_video_id',
				'type' => 'text',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'video-bg',
						),
						array (
							'field' => 'field_528d6efb99a05',
							'operator' => '==',
							'value' => 'vimeo',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_528d6f4a99a07',
				'label' => __('YouTube Video ID','flamingo'),
				'name' => 'flamingo_youtube_video_id',
				'type' => 'text',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'video-bg',
						),
						array (
							'field' => 'field_528d6efb99a05',
							'operator' => '==',
							'value' => 'youtube',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'formatting' => 'html',
				'maxlength' => '',
			),
			array (
				'key' => 'field_528d6f5999a08',
				'label' => __('Video Source Width','flamingo'),
				'name' => 'flamingo_video_width',
				'type' => 'number',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'video-bg',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => 'px',
				'min' => '',
				'max' => '',
				'step' => '',
			),
			array (
				'key' => 'field_528d6f7e99a09',
				'label' => __('Video Source Height','flamingo'),
				'name' => 'flamingo_video_height',
				'type' => 'number',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'video-bg',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => 'px',
				'min' => '',
				'max' => '',
				'step' => '',
			),
			array (
				'key' => 'field_53c0284817b12',
				'label' => 'Mute video',
				'name' => 'flamingo_video_mute',
				'type' => 'true_false',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'video-bg',
						),
					),
					'allorany' => 'all',
				),
				'message' => '',
				'default_value' => 1,
			),
			array (
				'key' => 'field_528e781257e7c',
				'label' => __('Video fallback image (mobile)'),
				'name' => 'flamingo_video_fallback_image',
				'type' => 'image',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51aa997a0b8d6',
							'operator' => '==',
							'value' => 'video-bg',
						),
					),
					'allorany' => 'all',
				),
				'instructions' => __("Mobile devices and tablets doesn't support video autoplay in background. You can use a custom fallback image to replace the video only in the devices.","flamingo"),
				'save_format' => 'object',
				'preview_size' => 'medium',
				'library' => 'all',
			),
			array (
				'key' => 'field_525ac6492397e',
				'label' => __('Enable Slideshow','flamingo'),
				'name' => 'flamingo_enable_slideshow',
				'type' => 'true_false',
				'message' => '',
				'default_value' => 0,
			),
			array (
				'key' => 'field_5254714424b8c',
				'label' => __('Slideshow','flamingo'),
				'name' => 'flamingo_slideshow',
				'type' => 'repeater',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_525ac6492397e',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
				'sub_fields' => array (
					array (
						'key' => 'field_5254715324b8d',
						'label' => __('Image','flamingo'),
						'name' => 'image',
						'type' => 'image',
						'column_width' => '',
						'save_format' => 'object',
						'preview_size' => 'large-slideshow',
						'library' => 'all',
					),
					array (
						'key' => 'field_525ac0110ee39',
						'label' => __('Title','flamingo'),
						'name' => 'title',
						'type' => 'text',
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'formatting' => 'html',
						'maxlength' => '',
					),
					array (
						'key' => 'field_5254716924b8e',
						'label' => __('Description','flamingo'),
						'name' => 'description',
						'type' => 'text',
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'formatting' => 'html',
						'maxlength' => '',
					),
					array (
						'key' => 'field_5264003895347',
						'label' => __('Link','flamingo'),
						'name' => 'link',
						'type' => 'relationship',
						'instructions' => __('Select a content of your site to point the slide to.','flamingo'),
						'return_format' => 'object',
						'post_type' => array (
							0 => 'post',
							1 => 'page',
							2 => 'portfolio',
						),
						'taxonomy' => array (
							0 => 'all',
						),
						'filters' => array (
							0 => 'search',
							1 => 'post_type',
						),
						'result_elements' => array (
							0 => 'post_type',
							1 => 'post_title',
						),
						'max' => 1,
					),
					array (
						'key' => 'field_525ac0110ad34',
						'label' => __('Custom Link','flamingo'),
						'name' => 'custom_link',
						'type' => 'text',
						'instructions' => __('If you want to link the slide somewhere, enter the URL here. This will override the previous option.','flamingo'),
						'column_width' => '',
						'default_value' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'formatting' => 'html',
						'maxlength' => '',
					),
				),
				'row_min' => 0,
				'row_limit' => '',
				'layout' => 'row',
				'button_label' => __('Add Slide','flamingo'),
			),
			array (
				'key' => 'field_525d3ba7e36a1',
				'label' => __('Slider transition','flamingo'),
				'name' => 'flamingo_slider_transition',
				'type' => 'select',
				'choices' => array (
					'sldr-fade' => 'Fade',
					'sldr-slide' => 'Slide',
				),
				'default_value' => '',
				'allow_null' => 0,
				'multiple' => 0,
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_525ac6492397e',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
			),
			array (
				'key' => 'field_528e7335c4a67',
				'label' => __('Hide section title','flamingo'),
				'name' => 'flamingo_hide_section_title',
				'type' => 'true_false',
				'message' => '',
				'default_value' => 0,
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
					'order_no' => 0,
					'group_no' => 0,
				),
				array (
					'param' => 'page_template',
					'operator' => '!=',
					'value' => 'template-blog.php',
					'order_no' => 1,
					'group_no' => 0,
				),
			),
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'portfolio',
					'order_no' => 0,
					'group_no' => 1,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
	
	register_field_group(array (
		'id' => 'acf_portfolio-options',
		'title' => 'Portfolio options',
		'fields' => array (
			array (
				'key' => 'field_5260010de4e77',
				'label' => 'Section description',
				'name' => 'flamingo_section_description',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 'no',
			),
			array (
				'key' => 'field_52841dff4527e',
				'label' => __('Exclude project types','flamingo'),
				'name' => 'flamingo_exclude_project_types',
				'type' => 'taxonomy',
				'instructions' => __('This option let you create different portfolio pages with different project types in each one. Note that his option only work when filtering projects with isotope mode.','flamingo'),
				'taxonomy' => 'portfolio_type',
				'field_type' => 'checkbox',
				'allow_null' => 0,
				'load_save_terms' => 0,
				'return_format' => 'id',
				'multiple' => 0,
			),
			array (
				'key' => 'field_528538bb76b37',
				'label' => __('Hide project type filters menu','flamingo'),
				'name' => 'flamingo_hide_project_type_filters_menu',
				'type' => 'true_false',
				'message' => '',
				'default_value' => 0,
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'template-portfolio.php',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
	
	register_field_group(array (
		'id' => 'acf_page-options',
		'title' => 'Page options',
		'fields' => array (
			array (
				'key' => 'field_525281623ba8b',
				'label' => __('Page description','flamingo'),
				'name' => 'flamingo_page_description',
				'type' => 'wysiwyg',
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 'no',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
	
	
	register_field_group(array (
		'id' => 'acf_page-options-color',
		'title' => 'Page options color',
		'fields' => array (
			array (
				'key' => 'field_5252817e3ba8c',
				'label' => __('Page description color','flamingo'),
				'name' => 'flamingo_page_description_color',
				'type' => 'color_picker',
				'default_value' => '#ffffff',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'page',
					'order_no' => 0,
					'group_no' => 0,
				),
				array (
					'param' => 'page_template',
					'operator' => '!=',
					'value' => 'template-blog.php',
					'order_no' => 1,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));

	
	
	register_field_group(array (
		'id' => 'acf_project-options',
		'title' => 'Project Options',
		'fields' => array (
			array (
				'key' => 'field_51b61e8565470',
				'label' => __("Project Description","flamingo"),
				'name' => 'flamingo_project_description',
				'type' => 'wysiwyg',
				'instructions' => __("Enter a short description for the project. This description will be shown on the right side of project page.","flamingo"),
				'default_value' => '',
				'toolbar' => 'full',
				'media_upload' => 'no',
			),
			array (
				'key' => 'field_5252817e3ca8d',
				'label' => __('Project description color','flamingo'),
				'name' => 'flamingo_project_description_color',
				'type' => 'color_picker',
				'default_value' => '#ffffff',
			),
			array (
				'key' => 'field_51dff69a9ef1d',
				'label' => __('Project Info Box Inside Content','flamingo'),
				'name' => 'flamingo_content_info_box',
				'type' => 'true_false',
				'instructions' => __("Enable this option to locate project title and description inside the project main content instead of in the page header.","flamingo"),
				'message' => '',
				'default_value' => 0,
			),
			array (
				'key' => 'field_51dff066bce4c',
				'label' => __("Featured Project","flamingo"),
				'name' => 'flamingo_featured_project',
				'type' => 'true_false',
				'instructions' => __("Featured projects will be shown in the Project Slideshow shortcode which you can setup with Visual Composer.","flamingo"),
				'message' => '',
				'default_value' => 0,
			),
			array (
				'key' => 'field_51dff4693a5cb',
				'label' => __("Featured Project Image","flamingo"),
				'name' => 'flamingo_featured_project_image',
				'type' => 'image',
				'instructions' => __("Upload a custom project image that will be displayed at 1020x600px in the slideshow. Leave this field empty to display the project featured image.","flamingo"),
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51dff066bce4c',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
				'save_format' => 'object',
				'preview_size' => 'portfolio-1-col',
			),
			array (
				'key' => 'field_51dff69a9ed9c',
				'label' => __('Enable Project Fullscreen Gallery','flamingo'),
				'name' => 'flamingo_project_gallery_enable',
				'type' => 'true_false',
				'instructions' => __("If you add images or videos to the gallery, a button link will appear in the project page to open the gallery in fullscreen mode.","flamingo"),
				'message' => '',
				'default_value' => 0,
			),
			array (
				'key' => 'field_51b46d21aff4e',
				'label' => __("Project Fullscreen Gallery","flamingo"),
				'name' => 'flamingo_project_gallery',
				'type' => 'repeater',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_51dff69a9ed9c',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
				'sub_fields' => array (
					array (
						'key' => 'field_51b46e2caff51',
						'label' => __("Image","flamingo"),
						'name' => 'flamingo_gallery_image',
						'type' => 'image',
						'column_width' => 25,
						'save_format' => 'object',
						'preview_size' => 'large',
					),
					array (
						'key' => 'field_51b46ddaaff50',
						'label' => __("Video URL","flamingo"),
						'name' => 'flamingo_video_url',
						'type' => 'text',
						'instructions' => __("Enter a Vimeo or YouTube video URL in case you want the slide to be a video","flamingo"),
						'column_width' => 25,
						'default_value' => '',
						'formatting' => 'none',
					),
					array (
						'key' => 'field_51b61acb26b71',
						'label' => __("Video Width","flamingo"),
						'name' => 'flamingo_video_width',
						'type' => 'number',
						'default_value' => '',
					),
					array (
						'key' => 'field_51b470cbf6bb2',
						'label' => __("Slide Title","flamingo"),
						'name' => 'flamingo_slide_title',
						'type' => 'text',
						'column_width' => 25,
						'default_value' => '',
						'formatting' => 'none',
					),
					array (
						'key' => 'field_51b470004c180',
						'label' => __("Slide Description","flamingo"),
						'name' => 'flamingo_slide_description',
						'type' => 'wysiwyg',
						'column_width' => 25,
						'default_value' => '',
						'toolbar' => 'full',
						'media_upload' => 'no',
					),
				),
				'row_min' => 0,
				'row_limit' => '',
				'layout' => 'row',
				'button_label' => __("Add Slide","flamingo"),
			),
			array (
				'post_type' => array (
					0 => 'portfolio',
				),
				'max' => '3',
				'taxonomy' => array (
					0 => 'all',
				),
				'filters' => array (
					0 => 'search',
				),
				'result_elements' => array (
					0 => 'post_title',
				),
				'key' => 'field_51aa9a6b25e0d',
				'label' => __("Related Projects","flamingo"),
				'name' => 'flamingo_related_projects',
				'type' => 'relationship',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'post_type',
					'operator' => '==',
					'value' => 'portfolio',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'default',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));
	
	
	register_field_group(array (
		'id' => 'acf_contact-options',
		'title' => 'Contact options',
		'fields' => array (
			array (
				'key' => 'field_525d2ebecee6e',
				'label' => __('Enable Background Map','flamingo'),
				'name' => 'flamingo_background_map',
				'type' => 'true_false',
				'message' => '',
				'default_value' => 0,
			),
			array (
				'key' => 'field_525d2cca5dd84',
				'label' => __('Location','flamingo'),
				'name' => 'flamingo_map_location',
				'type' => 'location-field',
				'instructions' => __('Find your location in the map to get the coordinates','flamingo'),
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_525d2ebecee6e',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
				'val' => 'coordinates',
				'mapheight' => 300,
				'center' => '48.856614,2.3522219000000177',
				'zoom' => 10,
				'scrollwheel' => 1,
				'mapTypeControl' => 1,
				'streetViewControl' => 1,
				'PointOfInterest' => 1,
			),
			array (
				'key' => 'field_525d2ee381dfa',
				'label' => __('Map Zoom','flamingo'),
				'name' => 'flamingo_map_zoom',
				'type' => 'number',
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_525d2ebecee6e',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
				'default_value' => 13,
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'min' => 1,
				'max' => 18,
				'step' => '',
			),
			array (
				'key' => 'field_525d2f1e81dfb',
				'label' => __('Map Marker','flamingo'),
				'name' => 'flamingo_map_marker',
				'type' => 'image',
				'instructions' => __('Replace the default map marker with a custom image.','flamingo'),
				'conditional_logic' => array (
					'status' => 1,
					'rules' => array (
						array (
							'field' => 'field_525d2ebecee6e',
							'operator' => '==',
							'value' => '1',
						),
					),
					'allorany' => 'all',
				),
				'save_format' => 'object',
				'preview_size' => 'medium',
				'library' => 'all',
			),
		),
		'location' => array (
			array (
				array (
					'param' => 'page_template',
					'operator' => '==',
					'value' => 'template-contact.php',
					'order_no' => 0,
					'group_no' => 0,
				),
			),
		),
		'options' => array (
			'position' => 'normal',
			'layout' => 'no_box',
			'hide_on_screen' => array (
			),
		),
		'menu_order' => 0,
	));

}

?>