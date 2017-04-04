var topPosition = 0,
  leftPosition = 0,
  red,
  green,
  blue,
  color,
  radius;

window.onload = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.onmousemove = function (e) {
    topPosition = e.pageY,
    leftPosition = e.pageX;

    radius = Math.random()*5+20;

function gradient(color0, color2){
fillColor = ctx.createLinearGradient(0, 0, 300, 150);
  fillColor.addColorStop(0, color0);  //starting corner
  fillColor.addColorStop(1, color2);  //ending Corner
  ctx.fillStyle=fillColor;
}

var colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple'];

//chose a number between 0 and 7
var randomNumber = Math.floor(Math.random()*colors.length);
var randomNumber2 = Math.floor(Math.random()*colors.length);

  //when the 2 random Numbers equal the same it creates another randomNumber2
if (randomNumber === randomNumber2) {
  randomNumber2 = randomNumber+1;
}else if(randomNumber === 7 && randomNumber2 === 7){
  console.log("seven");
  randomNumber2 = randomNumber-1;
};

//diagonal
gradient(colors[randomNumber], colors[randomNumber2]);


    ctx.arc(leftPosition, topPosition, radius, 0 , 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();


  } 
}