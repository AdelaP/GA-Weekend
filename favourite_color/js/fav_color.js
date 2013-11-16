$(document).ready(function() {

  	//Start to type below here. Make sure not to delete any "{}" braces. 

  	var favColor = prompt('What is your favorite color?');

  	if ((favColor == 'red') || (favColor == 'blue') || (favColor == 'yellow') || (favColor == 'green'))  // check if one of the colours has been input, dont need a semi-colon by an if clause either.
    {
  		$('body').css('background-color', favColor); // red needed to be quoted, or as I have done just use the varible which contains the colour. Otherwise would need lots of if, else stuff
  	} else {
		$('body').css('background-color', 'white'); // again the color needs to be quoted.

		$('h2').slideUp('fast').html('Sorry, we do not have that color').slideDown('slow'); // then we chain the the jQuery methods, so first slide up, then change the text, then slide backdown again.
 	}

	// stop typing here

});