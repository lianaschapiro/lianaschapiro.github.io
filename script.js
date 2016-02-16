$(document).ready(function(){
	
	if (($('#about').offset().top - $(window).scrollTop()) < 400) {
		$("#headine").css({
	    		'opacity' : 0
	    		});
	};

	// Events that happen when page is scrolled	
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
      		$('.one').fadeIn(500);
      		$('.two').delay(300).fadeIn(500);
      		$('.three').delay(800).fadeIn(500);
      		$('.four').delay(1300).fadeIn(500);
      		$('.five').delay(1800).fadeIn(500);
      		$('.six').delay(2300).fadeIn(500);
      		// $('.six').delay(4000).show('slide', {direction: 'left'}, 800);
		}

		// Fades contact information in/out when page is scrolled
		// if(y + $(window).height() > $(document).height() - ($(document).height() * .08)) {
		if ($('#contact').offset().top - y < 220) {
			$("#contact-content").fadeIn();
	    }
	    else {
	    	$("#contact-content").fadeOut();
	    };
	});

});