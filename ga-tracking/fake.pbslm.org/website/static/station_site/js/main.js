/*jslint browser:true, nomen: true, unparam:true */
/*global jQuery */

(function ($) {
    'use strict';

    if (window.hasOwnProperty('_gaq')) {
        $('.ga-xd-link').each(function (index, el) {
            var $el, href;

            if (el.tagName.toLowerCase() === 'a') {
                href = el.href;
                $el = $(el);
                $el.on('click', function (event) {
                    event.preventDefault();
                    window._gaq.push(['_link', href]);
                });
            }
        });
    }

}(jQuery));