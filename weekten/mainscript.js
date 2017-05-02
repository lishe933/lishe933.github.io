

var found = _.where(collection, {Daynumber:1}); 
console.log(found);


var foundTwo = _.where(collection, {Daynumber:2}); 
console.log(foundTwo);

var wrapper = document.getElementById("wrapper");
var wrapperTwo = document.getElementById("wrapper2");


///create more images and give them more images to be obtained per page 







for (var i = 0; i < found.length; i++) { 
	console.log(found[i]);
	var image = document.createElement("img");
	image.src = found[i].image;
	image.style.top = "60px";
	wrapper.appendChild(image);

}

	for (var i = 0; i < foundTwo.length; i++) { 
		console.log(foundTwo[i]);
		var image = document.createElement("img");
		image.src = foundTwo[i].image;
		wrapperTwo.appendChild(image);

// var allTheDivs = document.createElement("div");
// document.body.appendChild(allTheDivs);
// allTheDivs.className = "photo"; 

	}



if(window.ltIE9) {
  (function($) {
    $('.tabs input[type="radio"]:checked')
    .closest('.tab')
    .addClass('checked');
    $('html').on('click', '.tabs input', function() {
      $('input[name="' + this.name + '"]')
      .closest('.tab')
      .removeClass('checked');
      $(this)
      .closest('.tab')
      .addClass('checked');
    });
  })(window.jQuery);
}



/*function (){

	var ip = document.getElementById('ip'); 
	console.log("ip found" + ip); 
	var images = ip.getElementsByTagName()
	.src = IP1[0].image
///}

*/ 
