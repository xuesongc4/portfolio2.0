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

$(document).on('click', '.scroll', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});