


//------------------------------------------------//

/*This is js part for blog.html part */
$(".mySearch").focusin( function(){
    $(this).css("border", "1px solid red")
}).focusout(function(){
    $(this).css("border", "1px solid transparent")
})

/*This is where js part for blog.html end*/ 

//-------------------------------------------//

/*This part is the scroll to top function for all pages*/
window.onscroll = function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop > 50){
        $(".car-slide").css(
            "bottom", "5%"
        )
  
    }
    else{
        $(".car-slide").css(
            "bottom", "-150px"
        )
    }
}


$(".car-slide").click( function(){
    toTop();
    var self=$(this);
    $(this).addClass("activeCar")
    setTimeout(function(){
        $(self).removeClass("activeCar")
    },1000)

})
function toTop(){
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*This is where scoll to top function for all pages end*/ 