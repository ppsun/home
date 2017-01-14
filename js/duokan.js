/**
 * Created by web on 16/12/18.
 */
$(function () {

    $('#center-nav li').mousemove(function () {

        $(this).css('backgroundColor','rgb(241,99,0)').siblings('li').css('backgroundColor','rgb(250,122,32)');

    });

    $('#center-left li').mouseover(function () {

        $(this).css('backgroundColor','rgb(250,122,32)').siblings('li').css('backgroundColor','black');

    });




})