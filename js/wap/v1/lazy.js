$(window).on('load', function() {
    waterFall();
    var dataInt = {
        "data": [
            { "src": "1.png", "title": "hello", "href": "http://www.baidu.com" },
            { "src": "01.jpg", "title": "hi", "href": "http://www.baidu.com" },
            { "src": "03.jpg", "title": "hello", "href": "http://www.baidu.com" },
            { "src": "logo.png", "title": "hi", "href": "http://www.baidu.com" }
        ]
    };
    $(window).on('scroll', function() {
        if (checkScrollSlide()) {
            $.each(dataInt.data, function(key, value) {
                var title = $(value).attr('title');
                var href = $(value).attr('href');
                var oBox = $('<div>').addClass('box').appendTo($('#main'));
                var oPic = $('<div>').addClass('pic').appendTo(oBox);
                var oA = $('<a>').attr('href', href).appendTo(oPic);
                $('<img>').attr('src', 'images/wap/v1/' + $(value).attr('src')).appendTo(oA);
                $('<p>').text(title).appendTo(oA);
            });
            waterFall();
        }
    });
});

function waterFall() {
    var $boxs = $('#main>div');
    var w = $boxs.eq(0).outerWidth();
    var cols = Math.floor($(window).width() / w);
    $("#main").width("100%").css('margin', '0 auto');
    var hArr = [];
    $boxs.each(function(index, value) {
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr.push(h);
        } else {
            minH = Math.min.apply(null, hArr);
            var minHeightIndex = $.inArray(minH, hArr);
            // console.log(value);
            $(value).css({
                'position': 'absolute',
                'top': minH + 'px',
                'left': minHeightIndex * w + 'px'
            });
            hArr[minHeightIndex] += $boxs.eq(index).outerHeight();
        }
    });
    // console.log(hArr);
}

function checkScrollSlide() {
    var $lastBox = $('#main>div').last();
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return (lastBoxDis < scrollTop + documentH) ? true : false;

}