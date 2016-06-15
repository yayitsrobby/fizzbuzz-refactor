
// count from 1 to that number
function fizzBuzzCount(input) {
	
	for(var i = 1; i <= input; i++) {
		var wordToPrint = "";
		// replace divis by 3 with fizz
		if(!(i % 3)) {
			wordToPrint += "Fizz";
		} 
		// replace divis by 5 with buzz
		// replace divis by 3 AND 5 with fizzbuzz
		if (!(i % 5)) {
			wordToPrint += "Buzz";
		}
		if ((i % 3) && (i % 5)) {
			wordToPrint += i;
		}
		// print this all to html
		$("body").append("<p>" + wordToPrint + "</p>");
	}
}

$(document).ready(function() {
// prompt for a number
	var userInput = parseInt(prompt("Please enter a number"));
	console.log(userInput);
// prompts to make sure its a number
	while (isNaN(userInput)) {
		userInput = parseInt(prompt("Not a number, Please enter a number"));
		console.log(userInput);
	}

	fizzBuzzCount(userInput);

});