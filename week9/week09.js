var wrapper = document.querySelector(".saranwrap");

for (i = 0; i < 23; i++) {
	console.log(i);
	var divtoinsert = document.createElement("div");
	divtoinsert.classList.add("box", "divnumber" + i);
	

	// if (i % 2 === 0) {
	// 	divtoinsert.classList.add("hovered");
	// } 

	wrapper.appendChild(divtoinsert);
}
var flag = 0;
var allthedivs = document.querySelectorAll(".box");

allthedivs.forEach(addlisteners);

function addlisteners(thething, itsindex) {

	// console.log(thething);

	thething.addEventListener("mousedown", toggle_state);
	thething.addEventListener("mouseenter", addhover);
	thething.addEventListener("mouseleave", removehover);

} 


function toggle_state(theevent) {
	if (this.classList.contains("active")) {
		this.classList.remove("active");
	}
	else this.classList.add("active");
}

function addhover (e) {
	this.classList.add("hovered");
}

function removehover(e) {
	this.classList.remove("hovered")
}
