// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $("a.page-scroll").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$("body").scrollspy({
    target: ".navbar-fixed-top"
})// Closes the responsive menu on menu item click
$(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
});
