$(document).ready(function () {
    //    setTimeout(function () {
    //        $(".header").fadeOut(1000);
    //    }, 5000);    图片隐藏
    $("#zxzl em").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    //按钮切换
    $("#zxdc em").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    //按钮切换
    $("#btn").click(function () {
        var name = "姓名：" + $("#xingming input").val();
        var n = $("#xingming input").val();
        var mobile = "手机号码：" + $("#mobile input").val();
        var m = $("#mobile input").val()
        var patrn = /^\s*[\u4e00-\u9fa5]{2,15}\s*$/;
        if (!patrn.exec(n)) {
            alert("请输入正确的姓名");
            return false;
        }
        //姓名验证
        if (!(/^1[34578]\d{9}$/.test(m))) {
            alert("手机号码有误，请重填");
            return false;
        }
        //手机验证
        var zxzl = "装修种类：" + $("#zxzl em.selected").text();
        var zxdc = "装修档次：" + $("#zxdc em.selected").text();
        var szcs = "所在城市：" + $("#provinceDiv option:selected").text() + " " + $("#cityDiv option:selected").text();
        var zxsj = "装修时间：" + $("#decorationtime option:selected").text();
        var hx = "房屋户型：" +
            $("#shi option:selected").text() +
            $("#ting option:selected").text() +
            $("#chu option:selected").text() +
            $("#wei option:selected").text() +
            $("#yangtai option:selected").text();
        var mianji = $("#fwmj input").val();
        var yhxx = name + "\n" + mobile + "\n" + zxzl + "\n" + zxdc + "\n" + szcs + "\n" + zxsj + "\n" + hx;
        var money = null;
        var RG = 0.58;
        var CL = 0.42;
        if ($("#zxzl em.selected").text() == "家装") {
            if ($("#zxdc em.selected").text() == "简装") {
                money = 588
            }
            ;
            if ($("#zxdc em.selected").text() == "精装") {
                money = 688
            }
            ;
            if ($("#zxdc em.selected").text() == "豪装") {
                money = 888
            }
            ;
        } else if ($("#zxzl em.selected").text() == "公装") {
            if ($("#zxdc em.selected").text() == "简装") {
                money = 498
            }
            ;
            if ($("#zxdc em.selected").text() == "精装") {
                money = 698
            }
            ;
            if ($("#zxdc em.selected").text() == "豪装") {
                money = 1080
            }
            ;
        }
        var total = (money * mianji / 10000).toFixed(1);
        $("#total").text(total);
        $("#cl").text((money * mianji * CL).toFixed(0));
        $("#rg").text((money * mianji * RG).toFixed(0));
        $("#sj").text("0");


    });
    //提交按钮
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',
    })
    //  swiper
    // $("html,body").stop(true, true).animate({
    //     "scrollTop": $(".bjsq-header").offset().top - 35
    // }, 1000); //滚动到报价神器
    var fenleiw = $(".fenlei li").css("width");
    $(".fenlei li").css("paddingTop", fenleiw);
    var margin = Math.floor(($(window).width() * 0.8 - 60 * 3) / 2);
    $(".fenlei li").css("marginLeft", margin);
    $(".fenlei li:eq(0)").css("marginLeft", "0");
    $(".fenlei li:eq(3)").css("marginLeft", "0");
    $(window).bind("orientationchange", function () {
        setTimeout(function () {
            var margin = Math.floor(($(window).width() * 0.8 - 60 * 3) / 2);
            $(".fenlei li").css("marginLeft", margin);
            $(".fenlei li:eq(0)").css("marginLeft", "0");
            $(".fenlei li:eq(3)").css("marginLeft", "0");
        }, 200)
    });
    //    圆分类边距与上内边距的计算
    $("#jpal-btn span").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index() - 1
        $($("#jpalbox>div")[index]).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
    });
    //精品案例
    var xing = ["李", "高", "顾", "吴", "余", "熊", "丁", "张", "陈", "金", "赵", "曹", "王", "范", "郑", "周", "严", "段", "陆", "孙"];
    var sex = ["先生", "小姐"];
    var m = ["3", "5", "7", "8"];
    var ul = $("#ysq");
    for (var i = 0; i < 3; i++) {
        var name = xing[Math.floor(Math.random() * 20)] + sex[Math.floor(Math.random() * 2)];
        var mobile = "1" + m[Math.floor(Math.random() * 4)] + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + "*******";
        var li = $("<li>");
        $("<em>").text(name).appendTo(li);
        $("<span>").text(mobile).appendTo(li);
        li.html(li.html() + "已成功申请报价");
        li.appendTo(ul);
    }
    setInterval(function () {
        name = xing[Math.floor(Math.random() * 20)] + sex[Math.floor(Math.random() * 2)];
        mobile = "1" + m[Math.floor(Math.random() * 4)] + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + "*******";
        li = $("<li>");
        var top = parseInt(ul.css("top"));
        $("<em>").text(name).appendTo(li);
        $("<span>").text(mobile).appendTo(li);
        li.html(li.html() + "已成功申请报价");
        li.appendTo(ul);
        ul.animate({
            top: top - 40 + "px"
        }, 500);
    }, 5000);
    $('.jpal-circle').find('li').each(function () {
        var href=$(this).find('a').attr('href');
        $(this).click(function(){
            window.location.href=href;
        })
    });
})