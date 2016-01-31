$(document).ready(function(){


 	$("form").submit(function(e){
        e.preventDefault();
		var correctAnswer = $(this).children().attr("alt");
		if($(this).children().val() == correctAnswer){
			alert("You are correct");
			$(this).html("<p>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + correctAnswer +"</p>");
			return false;
		} else {
			alert ("Try again");
			$("input").val("");
			return false;
		}
	});
});	



