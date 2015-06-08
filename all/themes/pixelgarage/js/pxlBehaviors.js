/**
 * This file contains all Drupal behaviours of the Apia theme.
 *
 * Created by ralph on 05.01.14.
 */

(function ($) {

    /**
     * This behavior adds shadow to header on scroll.
     *
     */
    Drupal.behaviors.addHeaderShadow = {
        attach: function (context) {
            $(window).on("scroll", function() {
                var $header = $("header.navbar .container");

                if ($(window).scrollTop() > 10) {
                    // add shadow to header
                    $header.css( "box-shadow", "0 4px 3px -4px gray");
                } else {
                    // remove shadow to header
                    $header.css( "box-shadow", "none");
                }
            });
        }
    };

    /**
     * This behavior adds shadow to header on scroll.
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
                $anchorMenus = $('a#menu-contact, a#menu-about, a#menu-submit'),
                _animatedScrollTo = function(anchor) {
                    $('html, body').stop().animate({
                        scrollTop: $(anchor).offset().top - $header.height() - 30
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