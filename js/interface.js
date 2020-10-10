(function ($) {



    const loaderTime = 50;
    const animateTime = 100;
    const scrollingSpeed = 280;
    
    const anchors = ['home','about','experience','skills','projects','services', 'graduations','contact'];//'recommendation'
    


    /**
     * Format String 
     * "Hello, {0}! My name is {1}.".format("World", "Drion")
    */
    String.prototype.format = function () {
        const fmt = this; 
        if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
            throw new Error('The format string is invalid.');
        }
        return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
            if (str) {
                return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
            } else {
                if (index >= arguments.length) {
                    throw new Error('The index is out of range in format!');
                }
                return arguments[index];
            }
        });
    }

    var variavel_labels = {};
    
    /* Window Load */
    $(window).on('load', function () {
        $('.loader').fadeOut(loaderTime);
        $('.line').addClass('active');
    });


    /* Navbar scroll*/
    $('.navbar-nav ul li a').on('click', function () {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top)
            }, animateTime);
            $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            return false;
        }
    });


    /* Full page scroll*/
    if ($('#pagepiling').length > 0) {

        $('#pagepiling').pagepiling({
            scrollingSpeed: scrollingSpeed,
            navigation: false,
            menu: '.navbar-nav',
            anchors: Array.from(anchors),
            afterRender: function (anchorLink, index) {
                NavbarColor();

            },
            afterLoad: function (anchorLink, index) {
                $('.pp-section .intro').removeClass('animate');
                $('.active .intro').addClass('animate');
                NavbarColor();
            }
        });



        function NavbarColor() {
            if ($('.pp-section.active').hasClass('navbar-is-white')) {
                $('.navbar-desctop').addClass('navbar-white');
                $('.progress-nav').addClass('progress-nav-white');
                $('.navbar-bottom').addClass('navbar-bottom-white');
            }
            else {
                $('.navbar-desctop').removeClass('navbar-white');
                $('.progress-nav').removeClass('progress-nav-white');
                $('.navbar-bottom').removeClass('navbar-bottom-white');
            }
        }
    }


    /* Navbar toggler */
    $('.toggler').on('click', function () {
        $('body').addClass('menu-is-open');
    });

    $('.close, .click-capture').on('click', function () {
        $('body').removeClass('menu-is-open');
    });


    /* Navbar mobile */
    $('.navbar-nav-mobile li a').on('click', function () {
        $('body').removeClass('menu-is-open');
        $('.navbar-nav-mobile li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    /* Change bacgkround on project section*/
    $('.project-box').on('mouseover', function () {
        var index = $('.project-box').index(this);
        $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });


    /* Carousel experience*/
    $('.carousel-experience').owlCarousel({
        loop: true,
        margin: 45,
        dots: true,
        nav: true,
        smartSpeed: 1000,
        items: 1
    });

    /* Carousel recommendation 
    $('.carousel-recommendation').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        items: 1
    });*/


   



})(jQuery);
