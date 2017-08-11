$(document).ready(function(){
    $("#qiehuan span").click(function(){
        var index=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        if(index==0){
            $(".wt-list").stop(true).fadeIn(500);
            $(".fenlei").stop(true).fadeOut(500);
        }else{
            $(".wt-list").stop(true).fadeOut(500);
            $(".fenlei").stop(true).fadeIn(500);
        }
    });
})