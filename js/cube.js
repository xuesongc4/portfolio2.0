//------------------------------------------js for the cube functioanlity


function highlight(side){

    var cube = $("#cube");
    var front = $("#cube .front");
    var right = $("#cube .right");
    var back = $("#cube .back");
    var left = $("#cube .left");

    var zoomDelay = 400;

    cube.removeClass();
    $(".cube").css("transform","translateX(-350px)");
    front.removeClass("highlight zoom_front");
    right.removeClass("highlight zoom_right");
    back.removeClass("highlight zoom_back");
    left.removeClass("highlight zoom_left");

    if(side == 1){
        console.log("front");
        cube.addClass("show-front");
        setTimeout(function(){
            front.addClass("highlight zoom_front");
        },zoomDelay);
    }
    else if(side == 2){
        console.log("right");
        cube.addClass("show-right");
        setTimeout(function(){
            right.addClass("highlight zoom_right");
        },zoomDelay);
    }
    else if(side == 3){
        console.log("back");
        cube.addClass("show-back");
        setTimeout(function(){
            back.addClass("highlight zoom_back");
        },zoomDelay);
    }
    else{
        console.log("left");
        cube.addClass("show-left");
        setTimeout(function(){
            left.addClass("highlight zoom_left");
        },zoomDelay);
    }
}