
var graphics = _.where(collection,{disciplines:{main: "Graphic Design", secondary: "typography"}});
console.log(graphics); 

var found = _.where(collection, {Daynumber:1}); 
console.log(found);


var foundTwo = _.where(collection, {Daynumber:2}); 
console.log(foundTwo);

var wrapper = document.getElementById("wrapper");
var wrapperTwo = document.getElementById("wrapper2");
var wrapperThree = document.getElementById("wrapper3");
var wrapperFour = document.getElementById("wrapper4");

///create more images and give them more images to be obtained per page 





/////images for each day
/////switch for 1st found 

/*var temp 

	switch (tag) {

		case "Graphic Design":
			temp = graphics
			break;

		default:temp=found
		break;
	} */

for (var i = 0; i < found.length; i++) { 
	console.log(found[i]);
	var image = document.createElement("img");
	wrapper.appendChild(image);
	image.src = found[i].image;
	image.style.top =  Math.random() *450 + "px";
	image.style.right =  Math.random() *150 + "px";
	image.style.left =  Math.random() *150 + "px";

}





	for (var i = 0; i < foundTwo.length; i++) { 
		console.log(foundTwo[i]);
		var image = document.createElement("img");
		wrapperTwo.appendChild(image);
		image.src = foundTwo[i].image;
		

// var allTheDivs = document.createElement("div");
// document.body.appendChild(allTheDivs);
// allTheDivs.className = "photo"; 

	}

////tabs 


/*function (){

	var ip = document.getElementById('ip'); 
	console.log("ip found" + ip); 
	var images = ip.getElementsByTagName()
	.src = IP1[0].image
///}

*/ 
