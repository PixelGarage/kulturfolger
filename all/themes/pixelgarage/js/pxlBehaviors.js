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

    /**
     * Allows full size clickable items.
    Drupal.behaviors.fullSizeClickableItems = {
        attach: function () {
            var $clickableItems = $('.node-link-item.node-teaser .field-group-div')
                .add('.node-team-member.node-teaser .field-group-div');

            $clickableItems.once('click', function () {
                $clickableItems.on('click', function () {
                    window.location = $(this).find("a:first").attr("href");
                    return false;
                });
            });
        }
    };
     */

    /**
     * Swaps images from black/white to colored on mouse hover.
    Drupal.behaviors.hoverImageSwap = {
        attach: function () {
            $('.node-project.node-teaser .field-name-field-images a img').hover(
                function () {
                    // mouse enter
                    src = $(this).attr('src');
                    $(this).attr('src', src.replace('teaser_bw', 'teaser_normal'));
                },
                function () {
                    // mouse leave
                    src = $(this).attr('src');
                    $(this).attr('src', src.replace('teaser_normal', 'teaser_bw'));
                }
            );
        }
    }
     */

    /**
     * Open file links in its own tab. The file field doesn't implement this behaviour right away.
    Drupal.behaviors.openDocumentsInTab = {
        attach: function () {
            $(".field-name-field-documents").find(".field-item a").attr('target', '_blank');
        }
    }
     */



})(jQuery);