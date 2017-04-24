var one = document.getElementById("one");


 window.addEventListener("keydown", function(e){
	if (e.keyCode == "32") {
		console.log("hi");
		one.style.width = "20px";
	}
});

