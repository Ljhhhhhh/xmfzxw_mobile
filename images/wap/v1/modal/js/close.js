$(document).ready(function(){
    $(".modal").show(500);
    var $myselectshi = $(".myselectshi");
        $myselectshi.goSelectInput({
            height: 30,
            width: 120
        });
        var $myselectqu = $(".myselectqu");
        $myselectqu.goSelectInput({
            height: 30,
            width: 125
        });
    $("#close").click(function(){
        $(this).parent().hide(500);
    });
})
