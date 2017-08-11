$(document).ready(function() {
    $("#name").blur(function() {
        var n = $("#name").text();
        var patrn = /^\s*[\u4e00-\u9fa5]{2,15}\s*$/;
        if (!patrn.exec(n)) {
            alert("请输入正确的姓名");
        }
    });
    //姓名验证
    $("#contact").blur(function() {
        var m = $(this).text();
        if (!(/^1[34578]\d{9}$/.test(m))) {
            alert("手机号码有误，请重填");
        }
    });
    //手机验证
    var xing = ["王", "李", "张", "余", "卢", "金", "熊", "顾", "丁", "夏"];
    setInterval(function() {
        var index = Math.floor(Math.random() * 10);
        var name = xing[index];
        $("#yishenqing span").text(name);
        $("#yishenqing").fadeIn(500);
        setTimeout(function() {
            $("#yishenqing").fadeOut(3000);
        }, 2000);
    }, 8000);
})