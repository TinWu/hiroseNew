
$(".includeHead").load( "../_include/header.html" );
$(".includeFoot").load( "../_include/footer.html" );
$(".includeSubNav").load( "sub-nav.html" );

// $('meta[name=keywords]').attr('content', 'test');
// $('meta[name=description]').attr('content', 'test');

$("#refresh").each(function() {
    $(this).attr("href", $(this).attr("href") + "?v=" + new Date().getMilliseconds());
});