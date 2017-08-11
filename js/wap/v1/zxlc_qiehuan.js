$(document).ready(function(){
    $("#zxlc .zxlcsx span").click(function(){
        var index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $($("#zxlc .zxlcbox div")[index]).stop(true).slideDown(500).siblings().stop(true).slideUp(500);
    });
});