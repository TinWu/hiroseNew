
var $gotoTop = $('.goTop');

$(window).scroll(function(){
    // 沒有卷軸時不出現 goTop 按鈕
    if ( $(this).scrollTop() != 0 ) {
        $gotoTop.addClass('fadeIn').removeClass('fadeOut');
    } else {
        $gotoTop.addClass('fadeOut').removeClass('fadeIn');
    }
});

// 點選後跳到 href 指向的位置
$('.scroll').click(function () {
    var scrollToAnchor = $(this).attr('href');
    $('html, body').stop(true).animate({
        scrollTop: $(scrollToAnchor).offset().top - 40
    }, 750);
    return false;
});
$gotoTop.click(function() {
    $('body, html').stop(true).animate({scrollTop:0},800);
    return false;
});

