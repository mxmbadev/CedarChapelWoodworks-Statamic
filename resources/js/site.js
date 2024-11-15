// This is all you.
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import 'bootstrap';

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar.fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});