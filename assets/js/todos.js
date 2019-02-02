//cross out todo when clicked
$("li").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//remove list element
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span> " + todoText +"</li>");
	};
});