(function ($) {
    /* 
    * Preloader 
    */
    $(window).load(function () {

        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
        $('#countdown').addClass('animated bounceInDown');
        $.backstretch('https://unsplash.imgix.net/reserve/URG2BbWQQ9SAcqLuTOLp_BP7A9947.jpg?q=75&fm=jpg&s=604dc379bd8749d90ca2b9c8ec270f63');
    });

    $(document).ready(function () {
        /* 
        * Animation scroll
        */
        function setMenu() { setTimeout(function () { $("#list").fadeOut(2000); }, 20000); }

        $("#menu").click(function () {
            var l = $("#list");
            if (l.is(":hidden")) { l.fadeIn(2000); setMenu(); } else { l.fadeOut(2000); }
        });
        setMenu();
        //$('a[href*=#]').bind('click', function (e) {
        //    var anchor = $(this);

        //    $('html, body').stop().animate({
        //        scrollTop: $(anchor.attr('href')).offset().top
        //    }, 500);
        //    e.preventDefault();
        //});

        /*
        * Background slideshow
        */
        //$.backstretch('/Content/Tyumen/images/bg6.jpg');
       
        /*
        * Reveal Animations When You Scroll
        */
        new WOW().init();
    });

})(jQuery);
