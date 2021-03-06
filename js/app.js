$(document).ready(function() {
	$('.additem').on("click", function(event) {
		event.preventDefault();
		var something = $('.inputbox').val();
		//if user inputs nothing and hits enter alert will pop up
		if (something === "") {
			alert('Please enter an item!')
		}
		//otherwise text appended as a li to shopping list
		else {
			console.log(something);
			$('.listcontainer ul').append("<li class='current-item'><img class='checked' src='images/check-mark.png'/>" + "" + something + "" + "<img class='crossed' src='images/cross.png'/></li>");
		};
		

	//resets the textbox after item entered
	$('#useradd')[0].reset();
	});
	//enter key hit 
	// $(document).keydown(function(e, something) {
			// if (e.keyCode == 13) {
				// console.log('two-' + something);
				// $('.listcontainer ul').append("<li class='current-item'><img class='checked' src='images/check-mark.png'/>" + "" + something + "" + "<img class='crossed' src='images/cross.png'/></li>");
			// };			
	// });
});

//functions to delete and striketrough code
assignlisteners();
function assignlisteners () {
	 $('ul').on('click', '.crossed', function(event) {
	 	console.log('trash clicked');
		$(this).closest('li').remove();
	});
	$('ul').on('click', '.checked', function(event) {
		$(this).closest('li').toggleClass('linethrough');
	});
}