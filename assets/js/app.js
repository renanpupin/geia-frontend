$(document).ready(function(){
	$(".dropdown-menu").find("li a").click(function(e){
		e.stopPropagation();
	})
});