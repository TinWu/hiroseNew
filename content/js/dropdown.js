
// 下拉特效
var $dropbtn = $(".dropdown-toggle"),
    dropcontent = ".dropdown-content";
$dropbtn.click(function(event){
    // event.preventDefault();
    event.stopPropagation();
    $(this).next(dropcontent).slideToggle("300");
});

$(window).click(function() {
    //Hide the menus if visible
    $(dropcontent).slideUp("300")
});