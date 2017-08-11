$(document).ready(function() {
    $("#lanmu-qiehuan li").click(function() {
        var index = $(this).index();
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).find("i").removeClass().addClass("icon-angle-down");
            $($("#lanmu-fenlei ul")[index]).stop(true).slideUp(500);
        } else {
            $(this).addClass("on").siblings().removeClass("on");
            $(this).find("i").removeClass().addClass("icon-angle-up");
            $($("#lanmu-fenlei ul")[index]).stop(true).slideDown(500).siblings().stop(true).slideUp(500);
        }
    });
    $("#lanmu-qiehuan-gz li").click(function() {
        var index = $(this).index();
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).find("i").removeClass().addClass("icon-angle-down");
            $($("#lanmu-fenlei-gz ul")[index]).stop(true).slideUp(500);
        } else {
            $(this).addClass("on").siblings().removeClass("on");
            $(this).find("i").removeClass().addClass("icon-angle-up");
            $($("#lanmu-fenlei-gz ul")[index]).stop(true).slideDown(500).siblings().stop(true).slideUp(500);
        }
    });
    $("#zxlx span a").click(function() {
        $(this).addClass("on").parent().siblings().find("a").removeClass("on");
        var index = $(this).parent().index();
        $($(".lanmu")[index]).slideDown(300).siblings(".lanmu").slideUp(300);
        if (index == 0) {
            $("#lanmu-fenlei").css("display", "block");
            $("#lanmu-fenlei-gz").css("display", "none");
        } else {
            $("#lanmu-fenlei").css("display", "none");
            $("#lanmu-fenlei-gz").css("display", "block");
        }
    });
    /*栏目切换*/
    var w = $(".picshow").css("width");
    var h = parseInt(w) * 0.80;
    var hei = h + "px";
    $(".picshow").css("height", hei);
    $(window).bind("orientationchange", function() {
        setTimeout(function() {
            var w = $(".picshow").css("width");
            var h = parseInt(w) * 0.80;
            var hei = h + "px";
            $(".picshow").css("height", hei);
        }, 100)
    });
    /*图片比例*/
});