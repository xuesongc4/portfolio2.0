/**
 * Created by xueso on 3/27/2017.
 */
var logo_array = ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass', 'WordPress', 'AngularJS', 'Foundation', 'Bootstrap', 'php', "Firebase", "MySQL"];
var tools_array = ['Chrome DevTools', 'GitHub', 'Bitbucket', 'git', 'PhpStorm'];
var tools_logo = ['phpstorm1','phpstorm2','phpstorm3','bita','github1a','github2a','chrome','bitb','github1b','github2b','git1','git2'];

$(document).ready(function () {
    shrinking_bg();
    create_board(3, 4);
    create_board2();
    hover_effect();
    hover_effect_back();

    if ($(window).scrollTop() > 1800) {
        $('#skill-section').css('background-size', "56.43%");
    }
});


function shrinking_bg() {
    $(window).scroll(function () {
        var win = $(this);
        if (win.scrollTop() > 1177 && win.scrollTop() < 1800) {
            var scale = 100 - ((win.scrollTop() - 1177) / 12);
            $('#skill-section').css('background-size', scale + '%');
        }
    });
}

function create_board(rows, columns) {

    var landing = $(".skills_picture_container");
    var logo_counter = 0;

    for (var i = 0; i < rows; i++) {
        landing.append("<div class='logo_row logo_row" + i + "'></div>");
        for (var j = 0; j < columns; j++) {
            if ((i + j) % 2 == 0) {
                $('.logo_row' + i).append("<div class='logo_column even position" + logo_counter + "'></div>");
            }
            else {
                $('.logo_row' + i).append("<div class='logo_column odd position" + logo_counter + "'></div>");
            }
            $('.logo_column.position' + logo_counter).append("<div class='front_side position" + logo_counter + " fposition" + logo_counter + "'>");
            $('.logo_column.position' + logo_counter).append("<div class='back_side position" + logo_counter + " bposition" + logo_counter + "'>");
            $('.fposition' + logo_counter).append("<img src='images/logo_white/" + logo_array[logo_counter] + ".png'>");
            $('.bposition' + logo_counter).append("<img src='images/logo_black/" + tools_logo[logo_counter] + ".png'>");

            if (logo_counter < 8) {
                $('.skills_info ul.col1').append("<li class='position" + logo_counter + "'>" + logo_array[logo_counter] + "</li>");
            }
            if (logo_counter >= 8) {
                $('.skills_info ul.col2').append("<li class='position" + logo_counter + "'>" + logo_array[logo_counter] + "</li>");
            }
            logo_counter++;
        }
    }
}

function create_board2() {
    for (var i = 0; i < tools_array.length; i++) {
        $('.skills_info ul.col1b').append("<li class='bposition"+i+"'>" + tools_array[i] + "</li>");
    }
}

function hover_effect() {
    var li = $('.skills_info ul li');
    var logo = $('.front_side');

    li.mouseover(function () {
        var self_text=$(this).text();
        $(this).css({
            'text-shadow': '5px 3px 20px white',
            'padding-left': '50px'
        });
        $(".f" + this.className).addClass("hover");
        $(".f" + this.className).parent().addClass("zindex");
        flashing_logo(self_text);

    });
    li.mouseout(function () {
        $(this).css({
            'text-shadow': 'none',
            'padding-left': '0'
        });
        $(".f" + this.className).removeClass("hover");
        $(".f" + this.className).parent().removeClass("zindex");
        clearInterval(flashing_logo_temp);
    });

    logo.mouseover(function () {
        var temp_class = $(this).attr('class').split(' ')[1];
        $(this).addClass("hover");
        $(this).parent().addClass("zindex");
        $("li." + temp_class).css({
            'text-shadow': '5px 3px 20px white',
            'padding-left': '50px'
        });
    });
    logo.mouseout(function () {
        var temp_class = $(this).attr('class').split(' ')[1];
        $(this).removeClass("hover");
        $(this).parent().removeClass("zindex");
        $("li." + temp_class).css({
            'text-shadow': 'none',
            'padding-left': '0'
        });
    });
}


function slide(slide) {
    var skills_bg = $('.skills-container .skills_picture_container, #skills-area');
    var bubble1 = $('.skills-container .tracker .skills_bubble1');
    var bubble2 =  $('.skills-container .tracker .skills_bubble2');

    if (slide == 1) {
        skills_bg.addClass("red-bg");
        skills_bg.removeClass("blue-bg");
        bubble1.addClass("bubble_highlight");
        slide_action('.bg2', '.bg1');
        $('.tech1').css('color', '#A42327');
        flip(2);
        setTimeout(function(){
            bubble2.removeClass("bubble_highlight");
        },500)
    }
    if (slide == 2) {
        skills_bg.addClass("blue-bg");
        skills_bg.removeClass("red-bg");
        bubble2.addClass("bubble_highlight");
        slide_action('.bg1', '.bg2');
        $('.tech1').css('color', '#00CEE0');
        flip(1);
        setTimeout(function(){
            bubble1.removeClass("bubble_highlight");
        },500)
    }
}

function slide_action(slide_off, slide_on) {
    $(slide_off).addClass("slide_off");
    $(slide_on).removeClass("slide_on");
    setTimeout(function () {
        $(slide_on).addClass("zindex");
        $(slide_off).removeClass("zindex");
        $(slide_off).removeClass("slide_off");
        $(slide_off).addClass("slide_on");
    }, 500);
}

function flip(side) {
    logo_array_length = logo_array.length;
    position_array = [];


    for (var i = 0; i < logo_array_length; i++) {
        position_array.push(i);
    }

    if (side == 1) {
        var interval = setInterval(function () {

            var random1 = Math.floor(Math.random() * position_array.length);
            var flip_position1 = position_array.splice(random1, 1);
            var random2 = Math.floor(Math.random() * position_array.length);
            var flip_position2 = position_array.splice(random2, 1);

            flip_action(flip_position1, flip_position2, 1);

            if (position_array.length == 0) {
                clearInterval(interval);
            }
        }, 100);
    }
    else {
        var interval2 = setInterval(function () {

            var random1 = Math.floor(Math.random() * position_array.length);
            var flip_position1 = position_array.splice(random1, 1);
            var random2 = Math.floor(Math.random() * position_array.length);
            var flip_position2 = position_array.splice(random2, 1);

            flip_action(flip_position1, flip_position2, 2);

            if (position_array.length == 0) {
                clearInterval(interval2);
            }
        }, 100);
    }
}

function flip_action(square1, square2, flip) {
    var square = '.logo_column.position'
    if (flip == 2) {
        $(square + square1).removeClass("transform");
        $(square + square2).removeClass("transform");
    }
    else {
        $(square + square1).addClass("transform");
        $(square + square2).addClass("transform");
    }
}

function hover_effect_back(){
    var logo = $('.back_side');

    logo.mouseover(function(){
        var position = $(this).attr('class').split(' ')[2];

        if(position == "bposition0" || position == "bposition1" || position == "bposition2"){
            flashing_logo("PhpStorm");
            $(".col1b .bposition4").css({
                'text-shadow': '5px 3px 20px white',
                'padding-left': '50px'
            });
        }
        if(position == "bposition3" || position == "bposition7"){
            flashing_logo("Bitbucket");
            $(".col1b .bposition2").css({
                'text-shadow': '5px 3px 20px white',
                'padding-left': '50px'
            });
        }
        if(position == "bposition4" || position == "bposition5" || position == "bposition8" || position == "bposition9"){
            flashing_logo("GitHub");
            $(".col1b .bposition1").css({
                'text-shadow': '5px 3px 20px white',
                'padding-left': '50px'
            });
        }
        if(position == "bposition6"){
            flashing_logo("Chrome DevTools");
            $(".col1b .bposition0").css({
                'text-shadow': '5px 3px 20px white',
                'padding-left': '50px'
            });
        }
        if(position == "bposition10" || position == "bposition11"){
            flashing_logo("git");
            $(".col1b .bposition3").css({
                'text-shadow': '5px 3px 20px white',
                'padding-left': '50px'
            });
        }
    });
    logo.mouseout(function () {
        clearInterval(flashing_logo_temp);
        $(".col1b li").css({
            'text-shadow': 'none',
            'padding-left': '0'
        });
    });
}

function flashing_logo(logo){

     flashing_logo_temp = setInterval(function(){
        if(logo=="PhpStorm"){
            $('.bposition0 img').fadeOut(200).fadeIn(200);
            $('.bposition1 img').fadeOut(200).fadeIn(200);
            $('.bposition2 img').fadeOut(200).fadeIn(200);
        }
         if(logo=="Bitbucket"){
             $('.bposition3 img').fadeOut(200).fadeIn(200);
             $('.bposition7 img').fadeOut(200).fadeIn(200);
         }
         if(logo=="git"){
             $('.bposition10 img').fadeOut(200).fadeIn(200);
             $('.bposition11 img').fadeOut(200).fadeIn(200);
         }
         if(logo=="GitHub"){
             $('.bposition5 img').fadeOut(200).fadeIn(200);
             $('.bposition4 img').fadeOut(200).fadeIn(200);
             $('.bposition9 img').fadeOut(200).fadeIn(200);
             $('.bposition8 img').fadeOut(200).fadeIn(200);
         }
         if(logo=="Chrome DevTools"){
             $('.bposition6 img').fadeOut(200).fadeIn(200);
         }
    },400);
}


