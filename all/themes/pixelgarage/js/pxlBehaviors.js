/**
 * This file contains all Drupal behaviours of the Apia theme.
 *
 * Created by ralph on 05.01.14.
 */

(function ($) {

    var fixedHeaderScrollPos = 100;

    /**
     * This behavior adds shadow to header on scroll.
     *
     */
    Drupal.behaviors.addHeaderShadow = {
        attach: function (context) {
            $(window).on("scroll", function() {
                var $header = $("header.navbar"),
                    $headerCont = $("header.navbar .container");

                if ($(window).scrollTop() > fixedHeaderScrollPos) {
                    // keep header fixed at this scroll position
                    $header.css({position: 'fixed', top: -fixedHeaderScrollPos + 'px'});
                    $header.removeClass('navbar-static-top').addClass('navbar-fixed-top');
                    $('body').removeClass('navbar-is-static-top').addClass('navbar-is-fixed-top');

                    // add shadow to header
                    $headerCont.css( "box-shadow", "0 4px 3px -4px gray");
                } else {
                    // set header to static in top scroll region (> 110px)
                    $header.css({position: 'static', top: 'auto'});
                    $header.removeClass('navbar-fixed-top').addClass('navbar-static-top');
                    $('body').removeClass('navbar-is-fixed-top').addClass('navbar-is-static-top');

                    // remove shadow to header
                    $headerCont.css( "box-shadow", "none");
                }
            });
        }
    };

    /**
     * Show / hide the carousel controls depending on the number of items.
     *
     */
    Drupal.behaviors.manageCarouselControls = {
        attach: function (context) {
            var $carousels = $('.node-kfartwork .field-name-field-images .carousel');

            $carousels.each(function() {
                var $carousel = $(this),
                    $items = $carousel.find('.item'),
                    $controls = $carousel.find('.carousel-control');

                if ($items.length <= 1) {
                    $controls.hide();
                }
            });
        }
    };

    /**
     * Scrolls smoothly to the url anchor, when menu is clicked.
     */
    Drupal.behaviors.smoothScrollingToAnchor = {
        attach: function () {
            var $header = $("header.navbar .container"),
                headerHeight = $header.height() - fixedHeaderScrollPos,
                $anchorMenus = $('a#menu-contact, a#menu-about, a#menu-submit'),
                _animatedScrollTo = function(anchor) {
                    $('html, body').stop().animate({
                        scrollTop: $(anchor).offset().top - headerHeight - 30
                    }, 600);
                };

            // anchor menu click (same page active)
            $header.once('click', function () {
                $anchorMenus.on('click', function () {
                    // animated scrolling to anchor
                    var anchor = "#" + $(this).attr('href').split("#")[1];
                    _animatedScrollTo(anchor);
                    return false;
                });
            });
        }
    };


})(jQuery);