///console.log ("hello, this is the console.."); 

///$("body").css("background-color","blue");

///var clicks = 0 
 
///$ ("button").click(function() {
    //clicks ++
    ///console.log ("you clicked it")
    /// you can log the variable by adding the ++ which means clicks = clicks + 1 
//}); 

//syntac for a loop always begin with for 

for (var increment = 0; increment < 100; increment++) {  
    console.log(increment);
    $("body").append("<div class='box'></div")
}

var rounding = 0

$(".box").each(function(){
    console.log("I found box")
    console.log(rounding)
    var radius = rounding + "px";
    $(this).css("border-radius", radius);
    rounding ++; 
    
});

$(".box").click(function(){
    $(this).css("background-color","blue");
});
