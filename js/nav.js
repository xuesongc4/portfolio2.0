//-------------------- js for the navigation bar
$(document).ready(navSlide());

function navSlide(){

    $(window).scroll(function(){
        if($(this).scrollTop()> 45){
            $("#pop-nav").addClass("slidedown");
        }
        if($(this).scrollTop()< 45){
            $("#pop-nav").removeClass("slidedown");
        }
    });
}
