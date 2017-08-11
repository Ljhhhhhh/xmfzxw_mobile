$(document).ready(function(){
    $("#btn").click(function(){
        $("#xuanxiang").stop(true).slideToggle(500);
    });
    $("#xuanxiang>ul>li").click(function(){
        $(this).children("ul").stop(true).slideToggle(500).parent().siblings().children("ul").slideUp(500);
    });
    $("#xuanxiang>ul>li>ul>li").click(function(){
        var text=$(this).text();
        $("#leibie").text(text);
        $("#xuanxiang").slideUp(500);
    });
})