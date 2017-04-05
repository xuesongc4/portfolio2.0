/**
 * Created by xueso on 3/27/2017.
 */

$(document).ready(function () {
    populate();
    shrinking_bg();
    if ($(window).scrollTop() >1800){
        $('#skill-section').css('background-size', "56.43%");
    }
});

function populate() {

    logo_array = ['#html5', '#angular', '#javascript', '#css3', '#jquery', '#php', '#bootstrap', '#wordpress', '#firebase'];

    function doScaledTimeout(i) {
        setTimeout(function () {
            assign_position(logo_array[i], i);
        }, i * 400);
    }

    for (i = 0; i < logo_array.length; i++) {
        doScaledTimeout(i);
    }
}

function assign_position(sel, num) {
    var logo = $(sel);
    setTimeout(function () {
        var size = random_size();
        logo.css({
            'top': random_position(),
            'left': random_position(),
            'height': size,
            'width': size,
            'z-index': num
        });
        logo.parent().fadeIn(1000);
    }, 500);
};


function random_position() {
    var result = (Math.floor(Math.random() * 320) + 30);
    return result;
};

function random_size() {
    var result = (Math.floor(Math.random() * 125) + 75);
    return result;
}

function shrinking_bg() {
    $(window).scroll(function () {
        var win = $(this);
        if (win.scrollTop() > 1177 && win.scrollTop() <1800) {
            var scale = 100-((win.scrollTop() - 1177) / 12);
            $('#skill-section').css('background-size', scale+'%');
        };
    });
};