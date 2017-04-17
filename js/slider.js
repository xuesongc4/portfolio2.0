/**
 * Created by xueso on 3/27/2017.
 */
var logo_array = ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Sass', 'WordPress', 'AngularJS', 'Foundation', 'Bootstrap', 'php', "Firebase", "MySQL"];
var tools_array = ['Chrome DevTools ','GitHub','Bitbucket','git','PhpStorm'];

$(document).ready(function () {
    shrinking_bg();
    create_board(3, 4);
    create_board2();
    hover_effect();

    if ($(window).scrollTop() > 1800) {
        $('#skill-section').css('background-size', "56.43%");
    }
});

function create_board(rows, columns) {

    var landing = $(".skills_picture_container");
    var logo_counter=0;

    for (var i = 0; i < rows; i++) {
        landing.append("<div class='logo_row logo_row" + i + "'></div>");
        for (var j = 0; j < columns; j++) {
            if ((i + j) % 2 == 0) {
                $('.logo_row' + i).append("<div class='logo_column even position" + logo_counter + "'></div>");
            }
            else {
                $('.logo_row' + i).append("<div class='logo_column odd position" + logo_counter + "'></div>");
            }
            $('.logo_column.position' + logo_counter).append("<div class='front_side position"+logo_counter+" fposition" + logo_counter + "'>");
            $('.logo_column.position' + logo_counter).append("<div class='back_side position"+logo_counter+" bposition" + logo_counter + "'>");
            $('.fposition' + logo_counter).append("<img src='images/logo_white/" + logo_array[logo_counter] + ".png'>");

            if(logo_counter <8){
                $('.skills_info ul.col1').append("<li class='position"+logo_counter+"'>" + logo_array[logo_counter] + "</li>");
            }
            if(logo_counter >=8){
                $('.skills_info ul.col2').append("<li class='position"+logo_counter+"'>" + logo_array[logo_counter] + "</li>");
            }
            logo_counter++;
        }
    }
}

function create_board2(){
    for (var i=0; i<tools_array.length;i++){
        $('.skills_info ul.col1b').append("<li>" + tools_array[i] + "</li>");
    }
}

function hover_effect() {
    var li = $('.skills_info ul li');
    var logo = $('.front_side');

    li.mouseover(function () {
        console.log(this.className);
        $(this).css({
            'text-shadow': '5px 3px 20px white',
            'padding-left': '50px'});
        $(".f"+this.className).addClass("hover");
        $(".f"+this.className).parent().addClass("zindex");
    });
    li.mouseout(function () {
        $(this).css({
            'text-shadow': 'none',
            'padding-left': '0'});
        $(".f"+this.className).removeClass("hover");
        $(".f"+this.className).parent().removeClass("zindex");
    });

    logo.mouseover(function () {
        var temp_class = $(this).attr('class').split(' ')[1];
        $(this).addClass("hover");
        $(this).parent().addClass("zindex");
        $("li."+temp_class).css({
            'text-shadow': '5px 3px 20px white',
            'padding-left': '50px'});
    });
    logo.mouseout(function () {
        var temp_class = $(this).attr('class').split(' ')[1];
        $(this).removeClass("hover");
        $(this).parent().removeClass("zindex");
        $("li."+temp_class).css({
            'text-shadow': 'none',
            'padding-left': '0'});
    });
}

function slide(slide){
    if(slide == 1){
        $('.skills-container .tracker .skills_bubble2').removeClass("bubble_highlight");
        $('.skills-container .tracker .skills_bubble1').addClass("bubble_highlight");
        slide_action('.bg2','.bg1');
        flip(2);
    }
    if(slide == 2){
        $('.skills-container .tracker .skills_bubble2').addClass("bubble_highlight");
        $('.skills-container .tracker .skills_bubble1').removeClass("bubble_highlight");
        slide_action('.bg1','.bg2');
        flip(1);
    }
}

function slide_action(slide_off,slide_on){
    $(slide_off).addClass("slide_off");
    setTimeout(function(){
        $(slide_on).removeClass("slide_off");
    },500);
}

function flip(side){
    logo_array_length = logo_array.length;
    position_array=[];


    for(var i=0;i<logo_array_length;i++){
        position_array.push(i);
    }

    if(side == 1){
        while(position_array.length>0){
            var random1 = Math.floor(Math.random() * position_array.length);
            var flip_position1=position_array.splice(random1,1);
            var random2 = Math.floor(Math.random() * position_array.length);
            var flip_position2=position_array.splice(random2,1);
            flip_action(flip_position1,flip_position2,1);

        }
    }
    else{
        while(position_array.length>0){
            var random1 = Math.floor(Math.random() * position_array.length);
            var flip_position1=position_array.splice(random1,1);
            var random2 = Math.floor(Math.random() * position_array.length);
            var flip_position2=position_array.splice(random2,1);
            flip_action(flip_position1,flip_position2,2);

        }
    }
}

function flip_action(square1,square2,flip){
    var square = '.logo_column.position'

    setTimeout(function(){
        console.log("flipping time");
        if(flip == 2){
            $(square+square1).removeClass("transform");
            $(square+square2).removeClass("transform");
        }
        else{
            $(square+square1).addClass("transform");
            $(square+square2).addClass("transform");
        }
    },500);
}

function shrinking_bg() {
    $(window).scroll(function () {
        var win = $(this);
        if (win.scrollTop() > 1177 && win.scrollTop() < 1800) {
            var scale = 100 - ((win.scrollTop() - 1177) / 12);
            $('#skill-section').css('background-size', scale + '%');
        }
    });
}


