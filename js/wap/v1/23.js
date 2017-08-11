$(document).ready(function(){
    $(".qiehuan ul li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        switch(index){
            case 0:
                $(".shejifangan").stop(true).fadeOut(500);
                $(".sheji").stop(true).fadeOut(500);
                $(".companyindex").stop(true).fadeIn(500);
                break;
            case 1:
                $(".companyindex").stop(true).fadeOut(500);
                $(".sheji").stop(true).fadeOut(500);
                $(".shejifangan").stop(true).fadeIn(500);
                break;
            case 2:
                $(".companyindex").stop(true).fadeOut(500);
                $(".shejifangan").stop(true).fadeOut(500);
                $(".sheji").stop(true).fadeIn(500);
                break;  
        }
    });
    $('.gsjj').find('.gsjj_ms').find('i').on('click',function(){
        $('.gsjj').find('.gsjj_ms').toggleClass('more');
        $(this).toggleClass('icon-angle-up');
        $(this).toggleClass('icon-angle-down');
    });
    $('.gsdz').find('small').click(function(){
        alert($(this).text());
    });
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationType: 'fraction',
        loop:true
    });

    //弹窗-----------------------------------start
    var mfsj_btn=$('.team_box').find('.team1').find('a.btn');
    var sjs_modal=$('.sjs_modal');
    mfsj_btn.click(function(e){
        e.preventDefault();
        sjs_modal.show();
    });
    var sjs_modal_close_btn=$('.sjs_modal_close_btn');
    sjs_modal_close_btn.click(function(){
        sjs_modal.hide();
    });
    $('.sjs_modal').find('form').find('button').click(function(e){
        e.defaultPrevented;
        $.ajax(
            //验证姓名/手机以及上传数据
        );
        sjs_modal.hide();
        $('.sjs_modal_result').show();
    });
    $('.sjs_modal_result').find('i.icon-remove-circle').click(function () {
        $('.sjs_modal_result').hide();
    })
    //弹窗-----------------------------------end
});