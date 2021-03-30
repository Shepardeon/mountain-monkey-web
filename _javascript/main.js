jQuery(() => {
    // Our jQuery context
    $(window).on('scroll', (e) => {
        let scrollValue = $(window).scrollTop()
        let navHeight = $('nav').height()+16

        // Gestion du scroll par rapport à l'intro
        if (scrollValue > 0){
            $('nav').addClass('fixed-top')
            $('#intro h1').css({'margin-top': navHeight})
            $('#intro').css({position: 'fixed'})
        }
        else{
            $('nav').removeClass('fixed-top')
            $('#intro h1').css({'margin-top': 0})
            $('#intro').css({position: 'static'})
        }

        // On prépare nos boutons
        $('.js-scrollTo').on('click', () => {
            let page = $(this).attr('href')
            console.log(page)
            scrollTo(page, 750)
            return false
        })
    });
})

function scrollTo(to, speed) {
    $('html, body').animate({ scrollTop: $(to).offset().top }, speed)
}