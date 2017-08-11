$(function () {
    var area1 = new LArea();
    area1.init({
        'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#value1', //选择完毕后id属性输出到该位置
        'keys': {
            id: 'id',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    var area2 = new LArea();
    area2.init({
        'trigger': '#demo2',
        'valueTo': '#value2',
        'keys': {
            id: 'value',
            name: 'text'
        },
        'type': 2,
        'data': [provs_data, citys_data, dists_data]
    });
    <!--选地址插件end-->
    $("#submit").click(function () {
        var name = $.trim($("#name").val());
        var phone = $.trim($("#phone").val());
        /*获取类型、地址*/
        var patrn = /^[\u4E00-\u9FA5]{1,6}$/;
        if (!patrn.test(name)) {
            alert("请输入正确的姓名");
            return false;
        };
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            alert("手机号码有误，请重填");
            return false;
        }
        //        $.ajax
    });
    //用户提交信息
    var list_box = $("#list_box");
    var list = list_box.find('ul');
    var time=1;
    function t(time){
        time=Math.round(Math.random()*2000+1000);
        setTimeout(function () {
        list.animate({
            "margin-top": "-30px"
        }, 500, function () {
            list.find('li').eq(0).appendTo(list);
            list.css("margin-top", "0");
            t(time);
        });
    }, time);
    }
    t(time);
    //用户列表滚动
    $(".btn .btn_go").click(function(){
        $('html,body').animate({
            scrollTop:$("#form").offset().top-60
        },500)
    });
})