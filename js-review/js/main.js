$("body").css("background-color", "blue");
console.log("Sup")

var clicks = 0; 

$("button").click(function() {
    clicks++;
    console.log("clicked")
    $("body").css("background-color", "yellow")
}); 

for (var i = 0; i < 50; i++) {
    $("body").append("<div class ='dot'></div>");
}

var counter = 0;
$(".dot").each(function() {
    counter++;
    $(this).html(counter); 
    
});


$(".dot").click(function(){
    $(this).toggleClass("whatever");
    
});