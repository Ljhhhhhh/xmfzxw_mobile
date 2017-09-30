
;$(function(){
    function scrollDo() {
        var scroll=$(document).scrollTop();
        $("html,body").scrollTop(scroll+1);
        scroll=$(document).scrollTop();
        $("html,body").scrollTop(scroll-1);
    };
    var tab=new Tab({
        "obj":"#ksj",
        'triggreType':'click',
        'effect':0,
        'callback':scrollDo
    });
    var tab1=new Tab({
        "obj":"#kgl",
        'triggreType':'click',
        'effect':0,
        'callback':scrollDo
    });
    $("img").lazyload({
        effect: "show",
        threshold : 300,
        skip_invisible : false,
    });
    //图片懒加载 图片不添加src属性，添加data-original属性为src的值即可。
    new Carou({
        id:'#ysq_list',
        speed:10
    });
    $("#mfsj_btn").bind('click',function(e){
        e.preventDefault();
        var name=$("#name").val();
        var mobile=$("#mobile");
        var province=$("#province").find("option:selected").text();
        var city=$("#city").find("option:selected").text();
        var tishi=null;
        var tishi_box=$("#modal").find(".modal-body");
        if (!(/^1[34578]\d{9}$/.test(mobile))) {
            tishi="手机号码有误，请重新填写！"
            tishi_box.text(tishi);
            $('#modal').modal();
            return false;
        };
        $.ajax({
            /* 提交用户信息 */
        })
    });
});