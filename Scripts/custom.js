(function ($) {
    /* 
    * Preloader 
    */
    $(window).load(function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
        $('#countdown').addClass('animated bounceInDown');
    });

    $(document).ready(function () {
        /* 
        * Animation scroll
        */
        $('a[href*=#]').bind('click', function (e) {
            var anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 500);
            e.preventDefault();
        });

        /*
        * Background slideshow
        */
        //$.backstretch('/Content/Tyumen/images/bg6.jpg');
        $.backstretch('https://unsplash.imgix.net/photo-1419064642531-e575728395f2?q=75&fm=jpg&s=490dffe2e11f468947891ab40651e176');
        /*
        * Reveal Animations When You Scroll
        */
        new WOW().init();
    });

})(jQuery);
