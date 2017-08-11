$(document).ready(function () {
    $("#lanmu-qiehuan li").click(function () {
        var index = $(this).index();
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(this).find("i").removeClass().addClass("icon-angle-down");
            $($("#lanmu-fenlei ul")[index]).stop(true).slideUp(500);
        } else {
            $(this).addClass("on").siblings().removeClass("on");
            $(this).find("i").removeClass().addClass("icon-angle-up");
            $(this).siblings().find('i').removeClass("icon-angle-up").addClass("icon-angle-down");
            $($("#lanmu-fenlei ul")[index]).stop(true).slideDown(500).siblings().stop(true).slideUp(500);
            $('.gslb').click(function () {
                return false;
            })
        }
    });
    //$("#lanmu-qiehuan-gz li").click(function() {
    //    var index = $(this).index();
    //    if ($(this).hasClass("on")) {
    //        $(this).removeClass("on");
    //        $(this).find("i").removeClass().addClass("icon-angle-down");
    //        $($("#lanmu-fenlei-gz ul")[index]).stop(true).slideUp(500);
    //    } else {
    //        $(this).addClass("on").siblings().removeClass("on");
    //        $(this).find("i").removeClass().addClass("icon-angle-up");
    //        $($("#lanmu-fenlei-gz ul")[index]).stop(true).slideDown(500).siblings().stop(true).slideUp(500);
    //    }
    //});
    $("#zxlx span a").click(function () {
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
    function scroll() {
        $("#lanmu-fenlei ul").slideUp();
        $("#lanmu-qiehuan li").removeClass("on");
        $("#lanmu-qiehuan li").find("i").removeClass().addClass("icon-angle-down");
    }

    $(document).scroll(function () {
        scroll();
    });
    $('.gslb').click(function () {
        scroll();
    });
});