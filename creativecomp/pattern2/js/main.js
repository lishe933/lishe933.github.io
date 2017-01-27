$("body").css
("background-color", "blue");

for (var i=0; i < 1; i++) { 

$("body").append("<div class = 'dot'></div>");

}

$(".dot").click(function() {
    $(".dot4").css("opacity", "1");
  
}); 

$(".dot2").click(function() {
    $(".dot4").css("opacity", "0");

}); 

$(".dot3").click(function() {
    $(".dot7").css("opacity", "1");
  
}); 

$(".dot6").click(function() {
    $(".dot7").css("opacity", "0");

}); 

$(".dot5").click(function() {
    $(".dot").css("opacity", "1");
  
}); 

$(".dot9").click(function() {
    $(".dot").css("opacity", "0");

}); 

$(".dot7").click(function() {
    $(".dot").css({
        'left': '50%',
        'top': '50%',
        'transform' : 'translate(-50%,-50%);'
    });

});

$(".dot7").click(function() {
    $(".dot4").css({
        'left': '50%',
        'top': '50%',
        'transform' : 'translate(-50%,-50%);'
    });
    
  });
  
 $(".dot7").click(function() {
    $(".dot5").css({
        'left': '50%',
        'top': '50%',
        'transform' : 'translate(-50%,-50%);'
    });
    
  });
  
 $(".dot7").click(function() {
    $(".dot9").css({
        'left': '50%',
        'top': '50%',
        'transform' : 'translate(-50%,-50%);'
    });
    
  });


$(document).ready(function(){
    $('.dot').mouseover(function(){
        
 $(this).animate({left:"-42px"},{duration:400}).delay(0)
               .animate({zIndex:"4"},{duration:1})
               .animate({left:"0px"},{duration:1});       
       
    });
    
});

$(document).ready(function(){
    $('.dot5').mouseover(function(){
        
 $(this).animate({left:"-42px"},{duration:400}).delay(0)
               .animate({zIndex:"7"},{duration:1})
               .animate({left:"0px"},{duration:1});       
       
    });
    
});

$(document).ready(function(){
    $('.dot4').mouseover(function(){
        
 $(this).animate({left:"-42px"},{duration:400}).delay(0)
               .animate({zIndex:"8"},{duration:1})
               .animate({right:"0px"},{duration:1});       
       
    });
    
});
    
$(document).ready(function(){
    $('.dot9').mouseover(function(){
        
 $(this).animate({left:"-42px"},{duration:400}).delay(0)
               .animate({zIndex:"2"},{duration:1})
               .animate({right:"0px"},{duration:1});       
       
    });
    
});
    