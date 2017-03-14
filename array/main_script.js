/*var names = [
"sam",
"aditi",
"someone else",
"third person"
];


var numbers = [];
console.log(make_array(30));
console.log(make_array(21));

function make_array(howmany) {

// forloop
for ( var i = 0; i < howmany; i ++){
	numbers.push(random_round(0,100));


}

return(numbers);
	
}


function get_a_name(whichone){
	var result = names[random_round (0,names.length)];
	return [result, "hello"];

	console.log("this will never happen");
}

function random_round (min, max){
	var range = max - min;
	var offset = min;

return Math.floor(Math.random()*range + offset);
}


/*function.bogus (whichone) {
	//var result = names[whichone];
	//console.log;
}

*/
var textfield = document.querySelector("#enteredText");
var submitbutton = document.querySelector("#textSubmit");

submitbutton.addEventListener("click", do_stuff);

console.log("reading")


function do_stuff() {
	var input_string = textfield.value;

	var the_four_letters = [];

	for (var counter = 0; counter < 4, counter++) {
		console.log("counter is: " = counter);
			the_four_letters.push(input_string.charAt(counter));

	}


for (var i = 0; i < 4, i++) {
	var the_file_I_want = "asl_";
	the_file_I_want = the_file_I_want + the_four_letters[i];
	console.log("the_file_I_want")
}

	console.log(the_four_letters)
	console.log("----------")
	 console.log(input_string);
	console.log(input_string.charAt(0));


