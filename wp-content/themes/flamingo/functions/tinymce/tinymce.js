(function() {
	tinymce.create('tinymce.plugins.vkwFrameworkShortcodes', {
		init : function(ed, url) {
			ed.addButton('vkw_framework_shortcodes', {
				title : 'Insert Shortcode',
				image : url + '/img/add.png',
				onclick : function() {
					tb_show('Shortcodes Manager', url + '/tinymce.php?&width=670&height=600');
				}
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				longname : "Vankarwai Shortcodes",
				author : 'VanKarWai',
				authorurl : 'http://themeforesters.com/',
				infourl : 'http://wiki.moxiecode.com/',
				version : "1.0"
			};
		}
	});
	tinymce.PluginManager.add('vkw_framework_shortcodes', tinymce.plugins.vkwFrameworkShortcodes);
})();