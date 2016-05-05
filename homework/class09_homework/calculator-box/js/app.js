// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out

var x = 0

$('#a10').click(add10); 
	function add10 () {

		x = x + 10

		$('#out').html(x)
	}

$('#a20').click(add20);
	function add20 () {

		x = x + 20

		$('#out').html(x)
	}

$('#a30').click(add30);
	function add30 () {

		x = x + 30

		$('#out').html(x)
	}
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out

$('#n10').click(min10);
	function min10 () {

		x = x - 10

		$('#out').html(x)
	}

$('#n20').click(min20);
	function min20 () {

		x = x - 20

		$('#out').html(x)
	}


$('#n30').click(min30);
function min30 () {

	x = x - 30

	$('#out').html(x)
}

// - C) #red and #blue should change the background color of #out to red and blue, respectively

$('#red').click(turnRed); 

function turnRed () {

	$('#out').css('background', 'red')
}

$('#blue').click(turnBlue); 

function turnBlue () {

	$('#out').css('background', 'blue')
}

// - D) #out should change the background of #out to white, and set the value back to zero

$('#out').click(turnWhite); 

function turnWhite () {

	$('#out').css('background', 'white')
}


// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()
