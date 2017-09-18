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
    $(".banner").find('a').click(function(e){
        e.preventDefault();
        var h=$("form.apply").offset().top;
        $('html,body').animate({
         scrollTop:h-45
        },500);
    });
    $("form.apply").find('.form_body').find('button').click(function(e) {
        e.preventDefault();
        var mobile=$("#mobile").val();
         if (!(/^1[34578]\d{9}$/.test(mobile))) {
            alert("请输入正确的手机号码");
            return false;
        };
        var address=$('#map_address').val();
        $.ajax({
            url: '/path/to/file',
            type: 'default GET (Other values: POST)',
            dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
            data: {param1: 'value1'},
            success:function(){
                layui.use(['layer', 'form'], function(){
                  var layer = layui.layer,
                    form = layui.form;
                  layer.alert('装修顾问将会致电了解您的需求，并告知您智能推荐的结果', {
                    icon: 6,
                    title:'申请成功',
                    shade:0.5,
                    time:3000
                    });
                });
            }
        })
    });
});