
$(document).ready(function(){
	
	if (($('#about').offset().top - $(window).scrollTop()) < 400) {
		$("#headine").css({
	    		'opacity' : 0
	    		});
	};

	
	
	$(window).scroll(function() {
		var y = $(this).scrollTop();

		// Fades my name out/in when page is scrolled
	    $("#headline").css({
	    	'opacity' : 1-(y/300)
	    });

	    //Fades the nav bar in when page is scrolled
	    if ($("nav").css('opacity') < 1){
	 	  	$("nav").css({
	     	'opacity': 0+(y/300)
			});
		}
	
		//Fades in the portfolio projects when page is scrolled
		if (y > 800) {
      		$('#fumblr').show("clip", 1000);
    	}
    	if (y > 1150) {
      		$('#corvus').show("clip", 1000);
    	}
    	if (y > 1500) {
      		$('#list').show("clip", 1000);
    	}
    	if (y > 1850) {
      		$('#brain').show("clip", 1000);
    	}
    	if (y > 2200) {
      		$('#petlounge').show("clip", 1000);
    	}






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