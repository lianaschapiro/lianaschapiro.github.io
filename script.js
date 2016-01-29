$(document).ready(function(){


	// Fades out my name when page is scrolled
	$(window).scroll(function() {
	    $("#headline").css({
	    'opacity' : 1-(($(this).scrollTop())/300)
	    });         
	});  





}); 	   


// $.stellar();