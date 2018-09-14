$(function() {

	// Custom JS
	$('.slick').slick({
		arrows: true,
		dots: true,
		prevArrow: '<div type="button" class="prev-ar"></div>',
		nextArrow: '<div type="button" class="next-ar"></div>'
	});

	$(".mobile-menu").click(function(){
		$(".mobile-nav").toggleClass("show");
	});

});
