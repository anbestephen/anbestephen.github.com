$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 50) {
        //clearHeader, not clearheader - caps H
        $(".menu").addClass("navbar");
    }
    if (scroll <= 50) {
        //clearHeader, not clearheader - caps H
        $(".menu").removeClass("navbar");
    }
});

$(function() {
    $('.scroll').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
})();
       