$(function () {

    var itemIndex = 0;

    var tabLoadEndArray = [false, false, false, false];
    var tabLenghtArray = [100, 105, 147, 200];
    var tabScroolTopArray = [0, 0, 0, 0];

    // dropload
    var dropload = $('.khfxWarp').dropload({
        scrollArea: window,
        //domDown: {
        //    domClass: 'dropload-down',
        //    domRefresh: '<div class="dropload-refresh">上拉加载更多</div>',
        //    domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        //    domNoData: '<div class="dropload-noData">已无数据</div>'
        //},
        loadDownFn: function (me) {
            setTimeout(function () {
                if (tabLoadEndArray[itemIndex]) {
                    me.resetload();
                    me.lock();
                    me.noData();
                    me.resetload();
                    return;
                }
                var result = '';
                for (var index = 0; index < 10; index++) {
                    if (tabLenghtArray[itemIndex] > 0) {
                        tabLenghtArray[itemIndex]--;
                    } else {
                        tabLoadEndArray[itemIndex] = true;
                        break;
                    }
                    if (itemIndex == 0) {
                        result
                            += ''
                            + '<a><img src="images/wap/v1/07xgt.jpg" alt=""><h5>室内设计</h5><p>设计时应该考虑满足人的使用要求以及对人的行为进行限制，住宅是人温馨的港湾，让人生活起来舒服应该是装修的。</p></a>'
                    } else if (itemIndex == 1) {
                        result
                            += ''
                            + '<a><img src="images/wap/v1/07xgt.jpg" alt=""><h5>室内设计</h5><p>设计时应该考虑满足人的使用要求以及对人的行为进行限制，住宅是人温馨的港湾，让人生活起来舒服应该是装修的。</p></a>'
                    } else if (itemIndex == 2) {
                        result
                            += ''
                            + '<a><img src="images/wap/v1/07xgt.jpg" alt=""><h5>室内设计</h5><p>设计时应该考虑满足人的使用要求以及对人的行为进行限制，住宅是人温馨的港湾，让人生活起来舒服应该是装修的。</p></a>'
                    } else if (itemIndex == 3) {
                        result
                            += ''
                            + '<a><img src="images/wap/v1/07xgt.jpg" alt=""><h5>室内设计</h5><p>设计时应该考虑满足人的使用要求以及对人的行为进行限制，住宅是人温馨的港湾，让人生活起来舒服应该是装修的。</p></a>'
                    }
                }
                $('.khfxPane').eq(itemIndex).append(result);
                me.resetload();
            }, 500);
        }
    });


    $('.tabHead span').on('click', function () {

        tabScroolTopArray[itemIndex] = $(window).scrollTop();
        var $this = $(this);
        itemIndex = $this.index();
        $(window).scrollTop(tabScroolTopArray[itemIndex]);

        $(this).addClass('active').siblings('.tabHead span').removeClass('active');
        $('.tabHead .border').css('left', $(this).offset().left + 'px');
        $('.khfxPane').eq(itemIndex).show().siblings('.khfxPane').hide();

        if (!tabLoadEndArray[itemIndex]) {
            dropload.unlock();
            dropload.noData(false);
        } else {
            dropload.lock('down');
            dropload.noData();
        }
        dropload.resetload();
    });
});