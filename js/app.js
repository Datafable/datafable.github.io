// Page scrolling feature. Requires jQuery Easing plugin
// Menu item highlighting is done using Bootstrap ScrollSpy.js, using data attributes
$(function() {
    $("a.page-scroll").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: ($($anchor.attr("href")).offset().top - 50) // 50px offset for navbar-fixed-top
        }, 1000, "easeInOutExpo");
        event.preventDefault();
    });
});

// Closes the responsive menu on menu item click
$(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
});
