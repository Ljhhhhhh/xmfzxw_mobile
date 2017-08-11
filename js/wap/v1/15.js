$(document).ready(function () {
    $('.recommend').find('span').click(function () {
        var index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        var like = $('.recommend').find('div.like');
        var hot = $('.recommend').find('div.hot');
        switch (index) {
            case 0:
                like.show();
                hot.hide();
                break;
            case 1:
                like.hide();
                hot.show();
                break;
        }
    })
})