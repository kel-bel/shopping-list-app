$(document).ready(function() {
	$('.additem').on("click", function(event) {
		alert("Hi");
		event.preventDefault();
		console.log("Hi" + event);
	});
		
});