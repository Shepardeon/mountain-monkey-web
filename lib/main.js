'use strict';

jQuery(function () {
    // Our jQuery context

    // Reset du scroll au chargement
    $(window).on("load", function () {
        //scrollTo("#top", 10);
    });

    $(window).on('scroll', function (e) {
        var scrollValue = $(window).scrollTop();
        var navHeight = $('nav').height() + 16;

        // Gestion du scroll par rapport à l'intro
        if (scrollValue > 0) {
            $('nav').addClass('fixed-top');
            $('#intro h1').css({ 'margin-top': navHeight });
            $('#intro').css({ position: 'fixed' });
        } else {
            $('nav').removeClass('fixed-top');
            $('#intro h1').css({ 'margin-top': 0 });
            $('#intro').css({ position: 'static' });
        }

        // On prépare nos boutons
        $('.js-scrollTo').off().on('click', function (e) {
            // use "function() {}" instead of "() => {}" else babel will replace "this" with "undefined"
            var page = $(this).attr('href');
            scrollTo(page, 750);
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
    });
});

function scrollTo(to, speed) {
    $('html, body').animate({ scrollTop: $(to).offset().top }, speed);
}