/*============================
   js index
==============================

==========================================*/

(function($) {
    "use strict";
 

    /*================================
    Preloader
    ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function() {
        preloader.fadeOut('slow', function() { $(this).remove(); });
    });


    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('.header-bottom');

        if (scroll > 50) {
            mainHeader.addClass("sticky-header");
        } else {
            mainHeader.removeClass("sticky-header");
        }
    });


    /*================================
    offste search
    ==================================*/
    var offsetSearch = $('.offset-search');
    var bodyOverlay = $('.body_overlay');
    $('.search_btn').on('click', function() {
        $(offsetSearch).addClass('show_hide');
        $(bodyOverlay).addClass('show_hide');
    });
    bodyOverlay.on('click', function() {
        $(offsetSearch).removeClass('show_hide');
        $(bodyOverlay).removeClass('show_hide');
    });


    /*================================
    Owl Carousel
    ==================================*/


    // commn_carousel carousel active
    function commn_carousel() {
        $('.commn-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            dots: true,
            margin: 0,
            autoplayTimeout: 4000,
            nav: false,
            dotsEach: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1, 
                },
                768: {
                    items: 2, 
                },
                1024: {
                    items: 3,
                }
            }
        });
    };
    commn_carousel();


    // testimonial-carousel active
    function blog_carousel() {
        $('.testimonial-carousel').owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            dots: true,
            margin: 0,
            autoplayTimeout: 4000,
            nav: false,
            dotsEach: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1, 
                },
                768: {
                    items: 2, 
                },
                1024: {
                    items: 3,
                }
            }
        });
    };
    blog_carousel();


    $('.expand-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });


    /*================================
    slicknav
    ==================================*/
    $('ul#m_menu_active').slicknav({
        prependTo: "#mobile_menu"
    });

})(jQuery);



// google map activation
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('google_map'), {
        center: { lat: 40.674, lng: -73.945 },
        scrollwheel: false,
        zoom: 12,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map
    });
}