//variable types
// number, strings, boolean, undefined 
// typically written in camelCase, you can use numbers, $ and _. Favor Clarity over num1, num1 < userAge
//case matters!!! don't use reserved words = there is a list of these words that mean certain things, you can't use them as names for they will comeback as something else.
// var x = 2; y = 4 : two variables in one line 
// arrays can hold anything. var theArray = [1, 2, 3, 0.325, "hello", true, null]; 
// are zero-indexed. theArray[0]; = 1st variable in the array 
//one back from how it is because 0 = 1st in the set. So 4 = the 5th element ;) 
// conditions : if (something ==== true) { the stuff you wanna do if the conditions are true }
//else { if anything else} 
// if (sam === 5 ) {console.log ("it's true"); }
//  else { console.log ("no way")};
//expressions = mathematical equations that you can submit through 
// addition: + ; subtraction: - ; multiplication: * ; division: / ; modulo(remainder): % ; 
/*console.log("it works!!!");

var user_input = prompt("enter a number")
multiply_by_three(user_input);

function multiply_by_three(thing_to_multiply){ 

	var final_result = thing_to_multiply * 3;

	var output = " i got " + thing_to_multiply + " and the result is "; 


	var answer_paragraph = document.querySelector(".answer");

	answer_paragraph.textContent = final_result;

	console.log(output + final_result); // validation: if the number is greater than 6, than nope try again. 
}*/ 

	var Living = ['a city', 'a suburb', 'a farm', 'a ranch', 'The White House', 'a tower'];
	var Careers = ['an architect', 'a Senator', 'The President', 'a traveling clown', 'a creative director', 'a mortician'];
	var Pet = ['dog','cat','parrot','snake','hamster','fish'];
 
 
 	var fortune = prompt("enter a number between 0 and 5");
 	teller(fortune); 

	

	


	function teller(message) {

		var output = " you will live in/on" + Living[message] + " you will be " + Careers[message] +" you will have a pet " + Pet[message];
		console.log(output);
		 
		 var answer_paragraph = document.querySelector(".answer");
		answer_paragraph.textContent = output;
		 
		 }



	

