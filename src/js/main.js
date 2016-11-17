var css = require('../sass/main.scss');

var $ = require('jquery');

var $body = $("body");
setTimeout(function() {
    
    $("#preloader").slideUp(function(){
        $(this).remove();
        $body.removeClass("disable-scroll");
    });

}, 2500);

var $nav = $(".header__nav");
var $
$("#burger-menu").on('click', function(){
    $nav.toggleClass("header__nav--visible");
    $body.toggleClass("disable-scroll");
});
