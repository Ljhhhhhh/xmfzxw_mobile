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
    new WOW().init();
    // 628/平方
    // 人工 58%
    $("#submit").click(function (e) {
        e.preventDefault();
        var mobile=$("#mobile").val();
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            alert("手机号码有误，请重填");
            return false;
        };
        var area=$("#area").val();
        if(!area||area==0){
            alert("请输入正确的平方数");
            return false
        }
        
        var total=(area*628/10000).toFixed(1);
        var Rg=(total*0.58).toFixed(1);
        var Cl=(total*0.42).toFixed(1);
        var Sj=0,Zj=0;
        $("strong.total").parent("h2").html("您家半包预估约为<strong>"+total+"</strong>万元");
        var promise=$(".promise");
        promise.eq(0).text("*稍后小蜜蜂装修网客服将回电您，免费提供装修咨询服务");
        promise.eq(1).text("*因材料品牌及工程量不同，具体报价以量房实测为准。");
        var back=$(".blackboard");
        back.find(".cl").text(Cl);
        back.find(".rg").text(Rg);
        back.find(".sj").text(0);
        back.find(".zj").text(0);
        $.ajax({
            //提交用户数据
            type:"POST",
            url:"yp.php",
            data:{
                mobile:mobile
            },
            success:function(data){
                console.log(data);
            },
            error:function(){
                alert("申请失败")
            }
        })
    });
    var timer=setInterval(function () {
        height();
    },300);
    function height() {
        var sheng=$(".sheng").find('article');
        if(sheng.eq(1).height()!==sheng.eq(0).height()){
            var arth=sheng.eq(0).height();
            sheng.eq(1).height(arth);
        }else {
            clearInterval(timer);
        }
    };
});