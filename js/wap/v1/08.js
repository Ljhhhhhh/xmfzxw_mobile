$(document).ready(function() {
    $("#back").click(function() {
        window.history.back();
    });
    var l = $(".swiper-slide").length
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        loopedSlides: l,
    });
    /*swiper*/
    $(window).bind("orientationchange", function() {
        setTimeout(function() {
            var w = window.innerWidth;
            var h = window.innerHeight;
            if (w > h) {
                $(".swiper-slide img").css({
                    "height": "150px",
                    "width": "auto",
                })
            } else {
                $(".swiper-slide img").css({
                    "height": "auto",
                    "width": "100%",
                })
            }
        }, 100)
    });
    $("#img").swipe({
        //Generic swipe handler for all directions
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            // alert("You swiped " + direction)
            if (direction == "left") {
                alert("左")
            } else {
                alert("右");
            }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold: 100
    });
});