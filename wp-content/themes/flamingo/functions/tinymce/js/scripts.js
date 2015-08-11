(function( $ ) {
	var shortcode = '',
		alertBoxShortcode,
		layoutShortcode;

	$('#shortcode-dropdown').live('change', function() {
		var $currentShortcode = $(this).val();

		// Reset everything
		$('#shortcode').empty();
		alertBoxShortcode = false;
		layoutShortcode   = false;

		/* Divider */

		if( $currentShortcode === 'divider' ) {
			vankarwai_show_option('.divider');
			shortcode = '[divider style=""]';

		/*	Claim */
		} else if( $currentShortcode === 'claim' ) {
			vankarwai_show_option('.claim');
			shortcode = '[claim align=""] [/claim]';
		
		/*	Middle Title */
		} else if( $currentShortcode === 'midtle' ) {
			vankarwai_show_option('.midtle');
			shortcode = '[midtle align=""] [/midtle]';
			
		/*	Hightlight */
		} else if( $currentShortcode === 'highlight' ) {
			vankarwai_show_option('.highlight');
			shortcode = '[highlight] [/highlight]';
				
		/*	Button */
		} else if( $currentShortcode === 'button-code' ) {
			vankarwai_show_option('.button-code');
			shortcode = '[button <span class="red">url=""</span> size="" style="" arrow=""] [/button]';

		/*	Dropcap */
		} else if( $currentShortcode === 'dropcap' ) {
			vankarwai_show_option('.dropcap');
			shortcode = '[dropcap style=""] [/dropcap]';

		/*	Quote */
		} else if( $currentShortcode === 'quote' ) {
			vankarwai_show_option('.quote');
			shortcode = '[quote author="" type=""] [/quote]';

		/*	List */
		} else if( $currentShortcode === 'list' ) {
			vankarwai_show_option('.list');
			shortcode = '[list icon="" style=""] [/list]';

		/*	Raw */
		} else if( $currentShortcode === 'raw' ) {
			vankarwai_show_option('.raw');
			shortcode = '[raw] [/raw]';

		} else {

			$('.option').hide();
			shortcode = '';

		}

		$('#shortcode').html( shortcode );

	});

	$('#insert-shortcode').live('click', function() {
		var $currentShortcode = $('#shortcode-dropdown').val();

		/*	Divider */

		if( $currentShortcode === 'divider' ) {
			if( $('#divider-style').is(':checked') ) {
				shortcode = '[divider style="dotted"]';
		
			} else {

				shortcode = '[divider]';
				
			}

		/*	Claim */
		} else if( $currentShortcode === 'claim' ) {
			var claimText  = $('#claim-text').val(),
				claimAlign = $('#claim-align').val();

			shortcode = '[claim';

			if( claimAlign )
				shortcode += ' align="' + claimAlign + '"';

			shortcode += ']' + claimText + '[/claim]';
		
		/*	Middle Title */
		} else if( $currentShortcode === 'midtle' ) {
			var midtleText  = $('#midtle-text').val(),
				midtleAlign = $('#midtle-align').val();

			shortcode = '[midtle';

			if( midtleAlign )
				shortcode += ' align="' + midtleAlign + '"';

			shortcode += ']' + midtleText + '[/midtle]';
		
		
		/*	Hightlight */
		} else if( $currentShortcode === 'highlight' ) {
			var highlightText  = $('#highlight-text').val();
			shortcode = '[highlight]' + highlightText + '[/highlight]';

		/*	Button */
		} else if( $currentShortcode === 'button-code' ) {
			var buttonCodeUrl     = $('#button-code-url').val(),
				buttonCodeSize    = $('#button-code-size').val(),
				buttonCodeStyle   = $('#button-code-style'),
				buttonCodeArrow   = $('#button-code-arrow').val(),
				buttonCodeContent = $('#button-code-content').val();

			shortcode = '[button';

			if( buttonCodeUrl )
				shortcode += ' url="' + buttonCodeUrl + '"';

			if( buttonCodeSize )
				shortcode += ' size="' + buttonCodeSize + '"';

			if( buttonCodeStyle.is(':checked') )
				shortcode += ' style="' + buttonCodeStyle.val() + '"';

			if( buttonCodeArrow )
				shortcode += ' arrow="' + buttonCodeArrow + '"';

			shortcode += ']' + buttonCodeContent + '[/button]';

		/*	Dropcap */
		} else if( $currentShortcode === 'dropcap' ) {
			var dropcapStyle   = $('#dropcap-style').val(),
				dropcapContent = $('#dropcap-content').val();

			shortcode = '[dropcap';

			if( dropcapStyle )
				shortcode += ' style="' + dropcapStyle + '"';

			shortcode += ']' + dropcapContent + '[/dropcap]';


		/*	Quote */
		} else if( $currentShortcode === 'quote' ) {
			var quoteAuthor  = $('#quote-author').val(),
				quoteType    = $('#quote-type').val(),
				quoteContent = $('#quote-content').val();

			shortcode = '[quote';

			if( quoteAuthor )
				shortcode += ' author="' + quoteAuthor + '"';

			if( quoteType )
				shortcode += ' type="' + quoteType + '"';

			shortcode += ']' + quoteContent + '[/quote]';

		/*	List */
		} else if( $currentShortcode === 'list' ) {
			var listIcon 	= $('#list-icon').val(),
				listStyle   = $('#list-style'),
				listContent = $('#list-content').val();

			shortcode = '[list';

			if( listIcon )
				shortcode += ' icon="' + listIcon + '"';

			if( listStyle.is(':checked') )
				shortcode += ' style="' + listStyle.val() + '"';

			shortcode += ']' + listContent + '[/list]';


		/*	Raw */
		} else if( $currentShortcode === 'raw' ) {
			var rawContent = $('#raw-content').val();

			shortcode = '[raw]' + rawContent + '[/raw]';

		}
		
		// Insert shortcode and remove popup
		tinyMCE.activeEditor.execCommand('mceInsertContent', false, shortcode);
		tb_remove();

	});

	// Show current shortcode
	function vankarwai_show_option( option ) {
		$('.option').hide();
		$( option ).show();

	}

})( jQuery );