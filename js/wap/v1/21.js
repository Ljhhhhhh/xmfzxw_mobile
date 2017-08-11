$(document).ready(function(){
    $("#qiehuan span").click(function(){
        var index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        if(index==0){
            $(".jzsj").stop(true).fadeIn(500);
            $(".zxfg").stop(true).fadeOut(500);
        }else{
            $(".jzsj").stop(true).fadeOut(500);
            $(".zxfg").stop(true).fadeIn(500);
        }
    });
})