(function($){
    'use strict';

	$(document).ready(function() {
		$(document).ajaxSuccess(function(e, xhr, settings) {
			var widget_id_base = 'widget_menu';
			if(settings.data!=undefined){
				if(settings.data.search('action=save-widget') != -1 && settings.data.search('id_base=' + widget_id_base) != -1) {
					vkw_framework_upload();		
					vkw_framework_slider();		
				}
			}
		});
	
		jQuery.fn.exists = function(){return this.length>0;}
		
		function vkw_framework_colorpicker(){
			// Color Picker
			$('.color-selector').each(function(){
				var Othis = this; //cache a copy of the this variable for use inside nested function
				var initialColor = $(Othis).next('input').attr('value');
				$(this).ColorPicker({
				color: initialColor,
				onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
				},
				onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
				},
				onChange: function (hsb, hex, rgb) {
				$(Othis).children('div').css('backgroundColor', '#' + hex);
				$(Othis).next('input').attr('value','#' + hex);
			}
			});
			});
		}
		
		
		function vkw_framework_upload(){
			/*
			jQuery('.uploadbutton').click(function() {
				var inputelem = jQuery(this).prev('input');
				original_send_to_editor = window.send_to_editor;
				window.send_to_editor = function(html) {
					hrefurl = jQuery(html).attr('href');
					inputelem.val(hrefurl);
					tb_remove();
					window.send_to_editor = original_send_to_editor;
				}
				formfield = inputelem.attr('name');
				tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
				return false;
			});		
			*/
			
			var custom_uploader;
	  
		    jQuery('.uploadbutton').click(function(e) {
			    var inputelem = jQuery(this).prev('input');
		        e.preventDefault();
		 
		        //If the uploader object has already been created, reopen the dialog
		        if (custom_uploader) {
		            custom_uploader.open();
		            return;
		        }
		 
		        //Extend the wp.media object
		        custom_uploader = wp.media.frames.file_frame = wp.media({
		            title: 'Choose Image',
		            button: {
		                text: 'Choose Image'
		            },
		            multiple: false
		        });
		 
		        //When a file is selected, grab the URL and set it as the text field's value
		        custom_uploader.on('select', function() {
		            var attachment = custom_uploader.state().get('selection').first().toJSON();
		          inputelem.val(attachment.url);
		        });
		 
		        //Open the uploader dialog
		        custom_uploader.open();
		 
		    });
	    
					
		}
		
			
		vkw_framework_colorpicker();
		vkw_framework_upload();
		vkw_framework_slider();
		
		function vkw_framework_slider(){
			// Slider
			$( ".slider" ).slider({
				step: 1,
				slide: function( event, ui ) {
					var slider_unit = $(this).attr('class').split('slider-unit-')[1].split(" ")[0];
					if(slider_unit==''){ slider_unit = 'px'; }
					$(this).find("input[type='hidden']:nth-child(1)").val( ui.value );
					$(this).next(".slider-value" ).html( ui.value + slider_unit);
				}
			});
			
			$( ".slider-value" ).each(function(){
				var slider_unit = $(this).prev().attr('class').split('slider-unit-')[1].split(" ")[0];
				if(slider_unit==''){ slider_unit='px';}
				$(this).html($(this).prev().find("input[type='hidden']:nth-child(1)").val()+slider_unit);
			});
			
			$( ".slider" ).each(function(){
				$( this ).slider( "option", "min", parseInt($(this).find("input[type='hidden']:nth-child(2)").val()) );
				$( this ).slider( "option", "max", parseInt($(this).find("input[type='hidden']:nth-child(3)").val()) );
				$( this ).slider( "option", "value", parseInt($(this).find("input[type='hidden']:nth-child(1)").val()) );
			});
			
		}
		
	
		// Patterns
		$(".bg_preview").each(function(){
			if($(this).parent().find($('input[type="hidden"]')).val()=='null'){ $(this).find('.empty-bg').parent().addClass('active_preview'); }
			$(this).children('div[style*="'+$(this).parent().find($('input[type="hidden"]')).val()+'"]').parent().addClass('active_preview');
			$(this).children('div').children('img[src*="'+$(this).parent().find($('input[type="hidden"]')).val()+'"]').parent().parent().addClass('active_preview');
	    });  
	 
	
	    
	  	$('.bg_preview div').click(function() {
			$(this).parent().parent().find($('.bg_preview')).removeClass('active_preview');
			$(this).parent().addClass('active_preview');
			if($(this).hasClass('empty-bg')){ 
				$(this).parent().parent().find($('input[type="hidden"]')).val('null');
			} else {
				if($(this).attr('style')){
					$(this).parent().parent().find($('input[type="hidden"]')).val('http'+$(this).attr('style').split("http")[1].split("'")[0].split('"')[0].split(')')[0]);
				} else {
					$(this).parent().parent().find($('input[type="hidden"]')).val($(this).find('img').attr('src'));
				}
			}
		});
			
		
		$('.image_select').click(function() {
			$(this).parent().parent().find($('input[type="hidden"]')).val($(this).find('img').attr('alt'));
		});
		
		
		$('.uploadpattern').change(function(){
			if($(this).parent().parent().prev().find('.bg_preview div:first').attr('style')){
				$(this).parent().parent().prev().find('.bg_preview div:first').attr('style','background-image:url('+$(this).val()+')').trigger('click');
			} else {
				$(this).parent().parent().prev().find('.bg_preview div:first img').attr('src',$(this).val()).trigger('click');
			}
		});
		
		
		
		
		//Webfont
		if($(".vkw-screen-slider").exists()){ $(".vkw-screen-slider").cycle(); }
		
		$("select.vkw-typography-face").change(function(){
			var elem = $(this).parent().find('p').find('span');
			
			$.post('admin-ajax.php', { action:"vankarwai_load_font", font:$(this).val() }, function(data){ 			
				elem.css('style','');
				elem.find('style').remove();
				elem.css('font-family',($(this).parent().find('.vkw-typography-face').val()));
				$('head').append(data);
				elem.hide();
				elem.html(elem.text()).delay(500).show();
			});
		});
		
		
		$("select.vkw-typography-size").change(function(){
			$(this).parent().find('p').css('font-size',$(this).val());
		});
		
		$("select.vkw-typography-size").trigger('change');
		
		$("select.vkw-typography-face").change(function(){
			$(this).parent().find('p').css('font-family',$(this).val());
		});
		
		$("select.vkw-typography-face").trigger('change');
		
		$("select.vkw-typography-weight").change(function(){
			$(this).parent().find('p').css('font-weight',$(this).val());
		});
		
		$("select.vkw-typography-weight").trigger('change');
		
		$("input.vkw-typography-italic").change(function(){ 
			if($(this).attr('checked')){ 
				$(this).parent().parent().find('p').css('font-style','italic'); 
				$(this).parent().prev().val('1');
			} else { 
				$(this).parent().parent().find('p').css('font-style','normal');
				$(this).parent().prev().val('0');
			}
		});
		
		$("input.vkw-typography-italic").trigger('change');
		
		$("input.vkw-typography-uppercase").change(function(){ 
			if($(this).attr('checked')){ 
				$(this).parent().parent().find('p').css('text-transform','uppercase'); 
				$(this).parent().prev().val('1');
			} else { 
				$(this).parent().parent().find('p').css('text-transform','none');
				$(this).parent().prev().val('0');
			}
		});
		
		$("input.vkw-typography-uppercase").trigger('change');
		
		$("input.vkw-typography-lowercase").change(function(){ 
			if($(this).attr('checked')){ 
				$(this).parent().parent().find('p').css('text-transform','lowercase'); 
				$(this).parent().prev().val('1');
			} else { 
				if($(this).parent().parent().find('.vkw-typography-uppercase').attr('checked')!='checked'){
					$(this).parent().parent().find('p').css('text-transform','none');
				}
				$(this).parent().prev().val('0');
			}
		});
		
		$("input.vkw-typography-lowercase").trigger('change');
	
		
	});
	
}(jQuery));