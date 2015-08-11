<?php
$absolute_path = __FILE__;
$path_to_file = explode('wp-content', $absolute_path);
$path_to_wp = $path_to_file[0];

//Access WordPress
require_once( $path_to_wp.'/wp-load.php' );

?>
<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="utf-8">
	<style>
		#main-shortcodes { width: 95%; }
		#aw-shortcodes label { font-weight: bold; }
		#aw-shortcodes label em { font-weight: normal; }
		#aw-shortcodes th { padding: 18px 10px; }
		#aw-shortcodes .red { color: red; }
	</style>
</head>
<body>

<div id="main-shortcodes">

	<table id="aw-shortcodes" class="form-table">

		<tbody>

			<!-- start dropdown -->
			<tr>

				<th class="label">

					<label for="shortcode-dropdown"><?php _e('All shortcodes', 'flamingo'); ?></label>

				</th>

				<td class="field">
			
					<select name="shortcode-dropdown" id="shortcode-dropdown" class="widefat">
						<option value=""><?php _e('Pick a Shortcode', 'flamingo'); ?></option>
						<option value="divider"><?php _e('Divider', 'flamingo'); ?></option>
						<option value="midtle"><?php _e('Middle Title', 'flamingo'); ?></option>
						<option value="claim"><?php _e('Big Title', 'flamingo'); ?></option>
						<option value="highlight"><?php _e('Highlight Text', 'flamingo'); ?></option>
						<option value="button-code"><?php _e('Button', 'flamingo'); ?></option>
						<option value="dropcap"><?php _e('Dropcap', 'flamingo'); ?></option>
						<option value="list"><?php _e('List', 'flamingo'); ?></option>
						<option value="quote"><?php _e('Quote', 'flamingo'); ?></option>
					</select>

				</td>

			</tr>
			<!-- end dropdown -->

			<!-- start divider -->
			<tr class="option divider">

				<th class="label">

					<label for="divider-style"><?php _e('Dotted line', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<input type="checkbox" name="divider-style" id="divider-style" value="on">

				</td>

			</tr>
			<!-- end divider -->
			
			<!-- start midtle -->
			<tr class="option midtle">

				<th class="label">

					<label for="midtle-text"><?php _e('Text', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="midtle-text" id="midtle-text" value="" class="widefat">

				</td>

			</tr>

			<tr class="option midtle">
				<th class="label">

					<label for="midtle-align"><?php _e('Align', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<select name="midtle-align" id="midtle-align" class="widefat">
						<option value="" selected><?php _e('Normal', 'flamingo'); ?></option>
						<option value="left"><?php _e('Left', 'flamingo'); ?></option>
						<option value="center"><?php _e('Center', 'flamingo'); ?></option>
						<option value="right"><?php _e('Right', 'flamingo'); ?></option>
					</select>

				</td>

			</tr>
			<!-- end midtle -->
			
			
			<!-- start claim -->
			<tr class="option claim">

				<th class="label">

					<label for="claim-text"><?php _e('Text', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="claim-text" id="claim-text" value="" class="widefat">

				</td>

			</tr>

			<tr class="option claim">
				<th class="label">

					<label for="claim-align"><?php _e('Align', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<select name="claim-align" id="claim-align" class="widefat">
						<option value="" selected><?php _e('Normal', 'flamingo'); ?></option>
						<option value="left"><?php _e('Left', 'flamingo'); ?></option>
						<option value="center"><?php _e('Center', 'flamingo'); ?></option>
						<option value="right"><?php _e('Right', 'flamingo'); ?></option>
					</select>

				</td>

			</tr>
			<!-- end claim -->
			
			<!-- start highlight -->
			<tr class="option highlight">

				<th class="label">

					<label for="highlight-text"><?php _e('Text', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="highlight-text" id="highlight-text" value="" class="widefat">

				</td>

			</tr>
			
			<!-- start button-code -->
			<tr class="option button-code">

				<th class="label">

					<label for="button-code-content"><?php _e('Text', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="button-code-content" id="button-code-content" value="" class="widefat">

				</td>

			</tr>

			<tr class="option button-code">

				<th class="label">

					<label for="button-code-url"><?php _e('URL', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<input type="text" name="button-code-url" id="button-code-url" value="" class="widefat">

				</td>

			</tr>

			<tr class="option button-code">

				<th class="label">

					<label for="button-code-size"><?php _e('Size', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<select name="button-code-size" id="button-code-size" class="widefat">
						<option value="" selected><?php _e('Normal', 'flamingo'); ?></option>
						<option value="medium"><?php _e('Medium', 'flamingo'); ?></option>
						<option value="Large"><?php _e('Large', 'flamingo'); ?></option>
					</select>

				</td>

			</tr>

			<tr class="option button-code">

				<th class="label">

					<label for="button-code-style"><?php _e('Remove background', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<input type="checkbox" name="button-code-style" id="button-code-style" value="no-bg">

				</td>

			</tr>

			<tr class="option button-code">

				<th class="label">

					<label for="button-code-arrow"><?php _e('Arrow', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<select name="button-code-arrow" id="button-code-arrow" class="widefat">
						<option value="" selected><?php _e('No', 'flamingo'); ?></option>
						<option value="right"><?php _e('Right', 'flamingo'); ?></option>
						<option value="left"><?php _e('Left', 'flamingo'); ?></option>
					</select>

				</td>

			</tr>
			<!-- end button-code -->

			<!-- start dropcap -->
			<tr class="option dropcap">

				<th class="label">

					<label for="dropcap-content"><?php _e('Text', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
					
					<input type="text" name="dropcap-content" id="dropcap-content" value="" class="widefat">

				</td>

			</tr>

			<tr class="option dropcap">

				<th class="label">

					<label for="dropcap-style"><?php _e('Background', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<select name="dropcap-style" id="dropcap-style" class="widefat">
						<option value="" selected><?php _e('Light', 'flamingo'); ?></option>
						<option value="dark"><?php _e('Dark', 'flamingo'); ?></option>
					</select>
				</td>

			</tr>
			<!-- end dropcap -->

			<!-- start quote -->
			<tr class="option quote">

				<th class="label">

					<label for="quote-author"><?php _e('Author', 'flamingo'); ?></label>

				</th>

				<td class="field">
					
					<input type="text" name="quote-author" id="quote-author" value="" class="widefat">

				</td>

			</tr>

			<tr class="option quote">

				<th class="label">

					<label for="quote-type"><?php _e('Type', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<select name="quote-type" id="quote-type" class="widefat">
						<option value="" selected><?php _e('Default', 'flamingo'); ?></option>
						<option value="simple"><?php _e('Simple', 'flamingo'); ?></option>
					</select>

				</td>

			</tr>

			<tr class="option quote">

				<th class="label">

					<label for="quote-content"><?php _e('Content', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="quote-content" id="quote-content" cols="30" rows="5" class="widefat"></textarea>

			</td>

			</tr>
			<!-- end quote -->
			
			<!-- start list -->
			<tr class="option list">

				<th class="label">

					<label for="list-style"><?php _e('Icon', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<select name="list-icon" id="list-icon" class="widefat">
						<option value="none"><?php _e('None', 'flamingo'); ?></option>
						<option value="bolt" selected><?php _e('Bolt', 'flamingo'); ?></option>
						<option value="certificate"><?php _e('Certificate', 'flamingo'); ?></option>
						<option value="check"><?php _e('Check', 'flamingo'); ?></option>
						<option value="minus"><?php _e('Minus', 'flamingo'); ?></option>
						<option value="ok"><?php _e('Ok', 'flamingo'); ?></option>
						<option value="okcircle"><?php _e('Ok Circle', 'flamingo'); ?></option>
						<option value="oksign"><?php _e('Ok Sign', 'flamingo'); ?></option>
						<option value="plus"><?php _e('Plus', 'flamingo'); ?></option>
					</select>

				</td>

			</tr>

			<tr class="option list">

				<th class="label">

					<label for="list-style"><?php _e('Dotted Bottom Border', 'flamingo'); ?></label>

				</th>

				<td class="field">
				
					<input type="checkbox" name="list-style" id="list-style" value="dotted">

				</td>

			</tr>

			<tr class="option list">

				<th class="label">

					<label for="list-content"><?php _e('Content', 'flamingo'); ?><span class="red">*</span></label>

				</th>

				<td class="field">
				
					<textarea name="list-content" id="list-content" cols="30" rows="5" class="widefat"></textarea>

				</td>

			</tr>
			<!-- end list -->


			<!-- start current -->
			<tr>

				<th class="label">

					<label for="shortcode-dropdown"><?php _e('Current shortcode with all available attributes', 'flamingo'); ?><br />					
					<em>(<span class="red"><?php _e('red', 'flamingo'); ?></span> = <?php _e('required', 'flamingo'); ?>)</em></label>

				</th>

				<td class="field">

					<code id="shortcode"></code>

				</td>

			</tr>
			<!-- end current -->

			<!-- start insert -->
			<tr>

				<th class="label"></th>

				<td class="field">

					<p><button id="insert-shortcode" class="button-primary"><?php _e('Insert Shortcode', 'flamingo'); ?></button></p>

				</td>

			</tr>
			<!-- end insert -->

		</tbody>

	</table>
	
</div><!-- end #main -->

<script>jQuery('.option').hide();</script>

</body>
</html>