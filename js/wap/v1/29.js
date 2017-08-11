$(document).ready(function() {
    $("#submit").click(function(){
        var n = $("#name").val();
        var patrn = /^[\u4E00-\u9FA5]{1,6}$/;
        if (!patrn.test(n)) {
            alert("请输入正确的姓名");
            return false;
        };
        var m = $("#contact").val();
        if (!(/^1[34578]\d{9}$/.test(m))) {
            alert("手机号码有误，请重填");
            return false;
        }
    })
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