var convert = (startTemp, endTemp, increment) => {
	for(var i = startTemp; i <= endTemp; i += increment) {
		let toCelcius = (5 / 9) * (startTemp - 32);
		let tableStart = startTemp - increment;
		startTemp += increment;   
		$('#table').append($(`<tr><td>${tableStart += increment}</td><td>${toCelcius.toFixed(3)}</td></tr>`));
	}
};

$('button').click(function(){
	let inputOne = $('#startVal')[0].value;
	let inputTwo = $('#endVal')[0].value;
	let inputThree = $('#increment')[0].value;

	$('#table').empty();
	$('#table').append($(`<tr><th>Fahrenheit</th><th>Celcius</th></tr>`));
	convert(+inputOne, +inputTwo, +inputThree); // "+"" is unary operator to convert to value to a number data type
});
//more on unary converters: https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful