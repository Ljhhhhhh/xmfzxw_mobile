$(document).ready(function() {
    $(".search").click(function() {
        $("#search-menu").slideToggle(300);
        return false;
    });
    $("body").click(function() {
        $("#search-menu").slideUp(300);
    });
    $(document).on("touchmove", function() {
        $("#search-menu").fadeOut(300);
    });
    var $win = $(document);
    try{
        var itemOffsetTop = $("#noheadernofooter").offset().top;
    }catch(e){
        
    }

    var itemOuterHeight = $("#noheadernofooter").outerHeight();
    var winHeight = $win.height();
    $win.on("touchmove", function() {
        var winScrollTop = $win.scrollTop();
        if (!(winScrollTop > itemOffsetTop + itemOuterHeight) && !(winScrollTop < itemOffsetTop - winHeight)) {
            //console.log("哈哈哈哈");
        } else {
            $(".footerbtn").css("position", "fixed");
            $(".header").css("position", "fixed");
        }
    })


    $("#noheadernofooter").click(function() {
        $(".footerbtn").css("position", "inherit");
        $(".header").css("position", "inherit");
    });

});