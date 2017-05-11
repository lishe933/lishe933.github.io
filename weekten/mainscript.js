
//var graphics = _.where(collection,{disciplines:{main: "Graphic Design", secondary: "typography", }});
//console.log(graphics); 

//////collection for each day


////box for photos
var wrapper = document.getElementById("wrapper");
var wrapperTwo = document.getElementById("wrapper2");
var wrapperThree = document.getElementById("wrapper3");
var wrapperFour = document.getElementById("wrapper4");
var wrapperFive = document.getElementById("wrapper2");
var wrapperSix = document.getElementById("wrapper3");

/////reveal for each day







//////filter and dropdown 

          var holder = document.getElementById("holder");
            var filter = "None";

            function emptyHolder() {
            for (var i = 1; i <= 7; i++) {

            document.getElementById("wrapper" + i).innerHTML = "";

            }

                
            }

            function renderArray(arr) {
/*for (var i = 0; i < found.length; i++) { 
console.log(found[i]);
var image = document.createElement("img");
wrapper.appendChild(image);
image.src = found[i].image;
image.style.top =  Math.random() *450 + "px";
image.style.right =  Math.random() *150 + "px";
image.style.left =  Math.random() *150 + "px";

}*/

                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];

                   var image = document.createElement("img");
image.src = arr[i].image;
image.style.top =  Math.random() *450 + "px";
image.style.right =  Math.random() *150 + "px";
image.style.left =  Math.random() *150 + "px";
                    document.getElementById("wrapper" + item.Daynumber).appendChild(image);
                }
            }

            function update() {
                console.log(filter);

                var filtered = _.filter(collection, function(p) {
                    if (filter == "None") {
                        return true;
                    } else {
                        return p.disciplines.indexOf(filter) >= 0;
                    }
                });

                console.log(filtered);

                emptyHolder();
                renderArray(filtered);
            }

            document.getElementById("filter").addEventListener("change", function(e) {
                filter = e.target.value;
                update();
            });

            update();

            

//Get the modal
// Get the modal
/*var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
document.getElementById("img");
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}



          /*  function renderArray(arr) {
                for (var i = 0; i < arr.length; i++) {
                    var item = arr[i];

                    var newElement = document.createElement("div");
                    newElement.innerHTML = "<h1>" + item.id + ": " + item.name + "</h1>";

                    holder.appendChild(newElement);
                }
            }

            function update() {
                console.log(sort, filter);

                var sorted = _.sortBy(collection, function(p) {
                    if (sort == "Name") {
                        return p.name;
                    } else if (sort == "Number") {
                        return p.id;
                    }
                });

                var filtered = _.filter(sorted, function(p) {
                    if (filter == "None") {
                        return true;
                    } else {
                        return p.type.indexOf(filter) >= 0;
                    }
                });

                emptyHolder();
                renderArray(filtered);
            }

            document.getElementById("filter").addEventListener("change", function(e) {
                filter = e.target.value;
                update();
            });

            update();
        */ 
        
/*var dropdown = document.getElementById ("filter");

dropdown.addEventListener("change",runFilter);


day = item.Daynumber 

&& 

item.disciplines.indexOf(selectedDisciplines) >= 0; 

function runFilter(theEvent){ 
console.log(theEvent);

console.log(theEvent.target.value);

var filtered = _.filter(collection, function (individual) { 

if (individual.disciplines.main == theEvent.target.value) {

return true; 
}

else return false; 



});

console.log(filtered); 

} 


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



// var allTheDivs = document.createElement("div");
// document.body.appendChild(allTheDivs);
// allTheDivs.className = "photo"; 


////tabs 


/*function (){

var ip = document.getElementById('ip'); 
console.log("ip found" + ip); 
var images = ip.getElementsByTagName()
.src = IP1[0].image
///}

*/ 
