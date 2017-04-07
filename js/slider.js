/**
 * Created by xueso on 3/27/2017.
 */
var global_position = [];
var logo_array = ['#html5', '#angular', '#javascript', '#css3', '#jquery', '#php', '#bootstrap', '#wordpress', '#firebase','#foundation',"#sass"];


$(document).ready(function () {
    populate();
    shrinking_bg();
    if ($(window).scrollTop() > 1800) {
        $('#skill-section').css('background-size', "56.43%");
    }
});

function populate() {

    function doScaledTimeout(i) {
        setTimeout(function () {
            assign_position(logo_array[i], i);
        }, i * 300);
    }

    for (i = 0; i < logo_array.length; i++) {
        doScaledTimeout(i);
    }
}

function assign_position(sel, num) {
    var margin = 5;
    var go_flag = 0;
    var logo = $(sel);
    var size = random_size();
    var position = random_position();

    if (global_position.length != 0) {
        for (j = 0; j < global_position.length; j++) {
            if ((position[0] >= global_position[j][0] + margin || position[0] <= global_position[j][0] - margin) && (position[1] >= global_position[j][1] + margin || position[1] <= global_position[j][1] - margin)) {
               go_flag++;
            }
        }
        if(go_flag == global_position.length){
            global_position.push(position);
            logo.css({
                'top': position[1] + "%",
                'left': position[0] + "%",
                'height': size,
                'width': size,
                'z-index': num
            });
            logo.parent().fadeIn();
        }
        else{
            console.log("spot taken rerun...")
            assign_position(sel, num);
        }
    }
    if (global_position.length == 0) {
        global_position.push(position);
        logo.css({
            'top': position[0] + "%",
            'left': position[1] + "%",
            'height': size,
            'width': size,
            'z-index': num
        });
        logo.parent().fadeIn();
    }
};


function random_position() {
    var result = [];
    result[0] = Math.floor(Math.random() * 85)-5;
    result[1] = Math.floor(Math.random() * 80)-5;
    return result;
};

function random_size() {
    var result = (Math.floor(Math.random() * 150) + 150);
    return result;
}

function shrinking_bg() {
    $(window).scroll(function () {
        var win = $(this);
        if (win.scrollTop() > 1177 && win.scrollTop() < 1800) {
            var scale = 100 - ((win.scrollTop() - 1177) / 12);
            $('#skill-section').css('background-size', scale + '%');
        }
        ;
    });
};

function regen(){
    global_position=[];
    populate();
}

