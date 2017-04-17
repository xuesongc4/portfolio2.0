/**
 * Created by xueso on 3/27/2017.
 */
var global_position = [];
var logo_array = ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass', 'WordPress', 'AngularJS', 'Foundation', 'Bootstrap', 'php', "Firebase", "MySQL"];
$(document).ready(function () {
    shrinking_bg();
    create_board(3, 4);
    if ($(window).scrollTop() > 1800) {
        $('#skill-section').css('background-size', "56.43%");
    }
    hover_effect();
});

function create_board(rows, columns) {
    var logo_counter = 0;
    var landing = $(".skills_picture_container");

    for (var i = 0; i < rows; i++) {
        landing.append("<div class='logo_row logo_row" + i + "'></div>");
        for (var j = 0; j < columns; j++) {
            if ((i + j) % 2 == 0) {
                $('.logo_row' + i).append("<div class='logo_column even position" + logo_counter + "'></div>");
            }
            else {
                $('.logo_row' + i).append("<div class='logo_column odd position" + logo_counter + "'></div>");
            }
            $('.position' + logo_counter).append("<div class='front_side_position" + logo_counter + "'>");
            $('.front_side_position' + logo_counter).append("<img src='images/logo_white/" + logo_array[logo_counter] + ".png'>");

            $('.skills_info ul').append("<li class='position"+logo_counter+"'>" + logo_array[logo_counter] + "</li>");
            logo_counter++;
        }
    }
}

function hover_effect() {
    var li = $('.skills_info ul li');
    li.mouseover(function () {
        $(this).css('text-shadow', '2px 2px 10px white');
    });
    li.mouseout(function () {
        $(this).css('text-shadow', 'none');
    });
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


