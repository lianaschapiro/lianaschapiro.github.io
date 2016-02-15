$(document).ready(function() {

    $("form").submit(function(e){
    	e.preventDefault();
    	var text = $("input").val();
    	$("ul").append("<li>" + text + "</li>");
    	$("#itemDescription").val("");
  	 });

    $('ul').on('click', 'li', function(){
	    $(this).toggleClass('complete');
	});

	$('ul').on('dblclick', "li", function(){
		var complete = confirm("Are you sure you want to remove this item?");
	    if (complete == true){
	    	$(this).remove();
	    } else {
	    	return false;
	    }
	});
});