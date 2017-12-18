$(function() {

	$(".burger").click(function(){
		$(".burger").toggleClass("open");
		$(".nav-bg").toggleClass("open");
		$(".nav-wrap").toggleClass("open");
	});

	$(".nav-bg").click(function(){
		$(".burger").toggleClass("open");
		$(".nav-bg").toggleClass("open");
		$(".nav-wrap").toggleClass("open");
	});

	$(".slider1__content").owlCarousel({
	items: 1,
	nav: false,
	navText: [ , ],
	dots: true,
	// autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	mouseDrag: true
	});

	$(".slider2__container").owlCarousel({
	items: 1,
	nav: false,
	navText: [ , ],
	dots: true,
	// autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	mouseDrag: true
	});

	$('a[href^="#"]').click(function (){
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
	});

	$('.js-link-popup').magnificPopup({
		removalDelay: 350,
		mainClass: 'mfp-fade'
	});

});
