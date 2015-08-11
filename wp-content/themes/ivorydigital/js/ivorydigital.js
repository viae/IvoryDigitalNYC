jQuery(document).ready(function($){
    
    $('a[href^=#]').on('click', function(event){     		
	
	if($(this).attr('href') != "#") {
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 500);
	}
    });
    
    if(window.location.hash != "") {
		
	$('html,body').animate({scrollTop:$(window.location.hash.replace('#', '#a-')).offset().top-70}, 500);
    }
    
});
