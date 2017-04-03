//------------------------------------------js for the cube functioanlity


$(document).ready(function(){
    $('#close_out').click( close_info);
});

function highlight(side){

    var cube = $("#cube");
    var front = $("#cube .front");
    var right = $("#cube .right");
    var back = $("#cube .back");
    var left = $("#cube .left");

    var zoomDelay = 600;

    var side1 = $(".side1");
    var side2 = $(".side2");
    var side3 = $(".side3");
    var side4 = $(".side4");

    side1.hide();
    side2.hide();
    side3.hide();
    side4.hide();

    cube.removeClass();
    $(".cube").css("transform","translateX(-350px)");
    front.removeClass("highlight zoom_front");
    right.removeClass("highlight zoom_right");
    back.removeClass("highlight zoom_back");
    left.removeClass("highlight zoom_left");
    $(".side1_bubble").removeClass('bubble_highlight');
    $(".side2_bubble").removeClass('bubble_highlight');
    $(".side3_bubble").removeClass('bubble_highlight');
    $(".side4_bubble").removeClass('bubble_highlight');

    if(side == 1){
        cube.addClass("show-front");
        side1.fadeIn();
        setTimeout(function(){
            front.addClass("highlight zoom_front");
            $(".side1_bubble").addClass('bubble_highlight');
        },zoomDelay);
    }
    else if(side == 2){
        cube.addClass("show-right");
        side2.fadeIn();
        setTimeout(function(){
            right.addClass("highlight zoom_right");
            $(".side2_bubble").addClass('bubble_highlight');
        },zoomDelay);
    }
    else if(side == 3){
        cube.addClass("show-back");
        side3.fadeIn();
        setTimeout(function(){
            back.addClass("highlight zoom_back");
            $(".side3_bubble").addClass('bubble_highlight');
        },zoomDelay);
    }
    else{
        cube.addClass("show-left");
        side4.fadeIn();
        setTimeout(function(){
            left.addClass("highlight zoom_left");
            $(".side4_bubble").addClass('bubble_highlight');
        },zoomDelay);
    }
    highlight_info(side);
}

function highlight_info(side){
    setTimeout(function(){$("#info").slideDown()},600)
}

function close_info(){

    var cube = $("#cube");
    var front = $("#cube .front");
    var right = $("#cube .right");
    var back = $("#cube .back");
    var left = $("#cube .left");

    $("#info").slideUp();
    $(".side1").hide();
    $(".side2").hide();
    $(".side3").hide();
    $(".side4").hide();
    $(".side1_bubble").removeClass('bubble_highlight');
    $(".side2_bubble").removeClass('bubble_highlight');
    $(".side3_bubble").removeClass('bubble_highlight');
    $(".side4_bubble").removeClass('bubble_highlight');

    setTimeout(function(){

        front.removeClass("highlight zoom_front");
        right.removeClass("highlight zoom_right");
        back.removeClass("highlight zoom_back");
        left.removeClass("highlight zoom_left");

        setTimeout(function(){
            $(".cube").css("transform","translateX(0)");
            cube.addClass('rotate');
        },300);
    },300)

}