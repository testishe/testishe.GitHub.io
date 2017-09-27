$('.reviews').slick({
    arrows: false,
    autoplay: true,
    dots: true
});

$(document).ready(function(){
    $('.link-to-form').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
        }
        return false; 
    });
});

