//-------------------- js for the navigation bar
$(document).ready(function(){
    navSlide();
    scrollThumb();
});

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
    }, 2000);
});

function scrollThumb(){
    var thumb = $(".scroll-thumb");
    var win = $(this);
    var deltaScroll = null;

    $(window).scroll(function(){
        if(win.scrollTop() < 500){
            deltaScroll = 357+(win.scrollTop()/2.2);
            thumb.css("left",deltaScroll+"px");
            thumb.css("display","block");
        }
        if(win.scrollTop()>500){
            deltaScroll = 920+(win.scrollTop()/5.5);
            thumb.css("left",deltaScroll+"px");
            thumb.css("display","block");
        }
        console.log(win.scrollTop());
    });
}
