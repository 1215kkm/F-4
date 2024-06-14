
setInterval(function(){
    $('#slide ul').animate({top:-350},1000, function(){
        $('#slide li').eq(0).appendTo($('#slide ul'));
        $('#slide ul').css({top:0})
    })
}, 2000)


$('.notice_box li').eq(0).click(function(){
    $('.modal').show();
});

$('.popup a').click(function(){
    $('.modal').hide();
});