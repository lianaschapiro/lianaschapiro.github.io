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
      		$('.one').animate({opacity: 1}, 1000);
      		$('.two').delay(300).animate({opacity: 1}, 1000);
      		$('.three').delay(600).animate({opacity: 1}, 1000);
      		$('.four').delay(900).animate({opacity: 1}, 1000);
      		$('.five').delay(1200).animate({opacity: 1}, 1000);
      		$('.six').delay(1500).animate({opacity: 1}, 1000);

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