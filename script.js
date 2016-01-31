
$(document).ready(function(){
	$("#contact-content").css({
	    		'display' : "none"
	    		}); 
	
	if (($('#about').offset().top - $(window).scrollTop()) < 400) {
		$("#about").css({
	    		'display' : "none"
	    		});
	};

	
	$(window).scroll(function() {
		// Fades my name out/in when page is scrolled
		console.log($('#about').offset().top - $(window).scrollTop());
	    $("#headline").css({
	    	'opacity' : 1-(($(this).scrollTop())/300)
	    }); 

	    
	    // Fades contact information in/out when page is scrolled
		// if($(window).scrollTop() + $(window).height() > $(document).height() - ($(document).height() * .08)) {
     	if (($('#contact').offset().top - $(window).scrollTop()) < 220) {
			$("#contact-content").fadeIn();
	    }
	    else {
	    	$("#contact-content").fadeOut();
	    };
	});


});

// $.stellar();