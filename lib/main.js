'use strict';

jQuery(function () {
    // Our jQuery context
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
            var page = $(this).attr('href')
            scrollTo(page, 750);
            e.stopPropagation();
            e.preventDefault();
            return false;
        });
    });
});

function scrollTo(to, speed) {
    console.log("Je scroll comme un bâtard")
    $('html, body').animate({ scrollTop: $(to).offset().top }, speed);
}