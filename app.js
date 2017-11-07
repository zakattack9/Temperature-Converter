/*
Create a conversion table using the following format:
    C = (F32) / 1.8;
Start with Fahrenheit temperature of 20 degrees and end with a temperature of 120 degrees; use an increment value of 5.  The table will have two columns, one for Fahrenheit and one for those same temperatures converted to Celsius.
*/



var convert = (startTemp, endTemp, increment) => {
	var loopAmt = ((endTemp - startTemp) / increment) + 1;

	for(var i = 0; i < loopAmt; i++) {
		let toCelcius = (5 / 9) * (startTemp - 32);
		let tableStart = startTemp - increment;
		startTemp += increment;
		console.log(startTemp, endTemp, increment)

		$('#table').append($(`
		  <tr>
		    <td>${tableStart += increment}</td>
		    <td>${toCelcius.toFixed(3)}</td>
		  </tr>`));
	}
}
//convert(20, 120, 5);

$('button').click(function(){
	let inputOne = $('#startVal')[0].value;
	let inputTwo = $('#endVal')[0].value;
	let inputThree = $('#increment')[0].value;

	$('#table').empty();
	$('#table').append($(`<tr><th>Fahrenheit</th><th>Celcius</th></tr>`));

	convert(+inputOne, +inputTwo, +inputThree); // "+"" is unary operator to convert to value to a number data type
});


//more on unary converters: https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful