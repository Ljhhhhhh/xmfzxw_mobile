$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',
    });
    //  swiper
    function ulChange(eq, left) {
        var ul = $('.menu').find('ul');
        var triangle = $('.triangle');
        triangle.stop(true).animate({
            'left': left + '%'
        });
        ul.eq(eq).css('display', 'block').siblings('ul').css('display', 'none');
    }

    $('.menu_control').find('span').click(function () {
        $(this).addClass('on').siblings('span').removeClass('on');
        var index = $(this).index();
        switch (index) {
            case 0:
                ulChange(0, 13);
                break;
            case 2:
                ulChange(1, 47);
                break;
            case 4:
                ulChange(2, 82);
                break;
        }
        //13 47 82
    });
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var height = $(window).height();
        if (scroll > height) {
            $('#goTop').addClass('show');
        } else {
            $('#goTop').removeClass('show');
        }
    });
    $('#goTop').click(function () {
        var height = $(window).height();
        $('body,html').stop(true).animate({
            scrollTop:0
        }, height)
    });
    $('#container').find('.tabHead').find('span').eq(0).trigger('click');
});