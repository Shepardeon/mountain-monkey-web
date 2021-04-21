jQuery(() => {
    // Our jQuery context

    // Reset du scroll au chargement
    $(window).on("load", () => {
        //scrollTo("#top", 10);
    })

    $(window).on('scroll', (e) => {
        let scrollValue = $(window).scrollTop()
        let navHeight = $('nav').height()+16

        let formationPos = $("#formation").offset().top

        // Gestion du scroll par rapport à l'intro
        if (scrollValue > 0){
            $('nav').addClass('fixed-top')
            $('#intro h1').css({'margin-top': navHeight})
            $('#intro').css({position: 'fixed', zIndex: -1})
        }
        else{
            $('nav').removeClass('fixed-top')
            $('#intro h1').css({'margin-top': 0})
            $('#intro').css({position: 'static', zIndex: 0})
        }

        if (scrollValue > formationPos) {
            console.log("first", scrollValue, formationPos)
            $('#intro').css({visibility: 'hidden'})
        }
        else {
            console.log("second", scrollValue, formationPos)
            $('#intro').css({visibility: 'visible'})
        }

        // On prépare nos boutons
        $('.js-scrollTo').off().on('click', function(e) { 
            // use "function() {}" instead of "() => {}" else babel will replace "this" with "undefined"
            let page = $(this).attr('href')
            scrollTo(page, 750)
            e.stopPropagation()
            e.preventDefault()
            return false
        })
    });
})

function scrollTo(to, speed) {
    $('html, body').animate({ scrollTop: $(to).offset().top }, speed)
}