$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        loopedSlides: 3,
    });
    /*swiper*/

    var w = $(".picshow").css("width");
            var h = parseInt(w) * 0.544;
            var hei = h + "px";
            $(".picshow").css("height", hei);
            $(window).bind("orientationchange", function () {
                    setTimeout(function () {
                        var w = $(".picshow").css("width");
                        var h = parseInt(w) * 0.544;
                        var hei = h + "px";
                        $(".picshow").css("height", hei);
                    },100)
                });
                /*图片比例*/
});
