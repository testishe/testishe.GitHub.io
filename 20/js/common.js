$(function() {
// главное меню
	$(".nav1-item").click(function(){
		$(".nav1-bar__close").click();
	});

	$(".head-nav1").click(function(){
		$(".nav1-bar-wrap").addClass("show");
	});

	$(".nav1-bar__close").click(function(){
		$(".nav1-bar-wrap").removeClass("show");
	});

// модальная форма

	$('.js-link-popup').magnificPopup({

	});

// слайдеры

	$(".slider1__content").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: false,
	// autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	mouseDrag: false
	});


	$('.slider1__content').on('changed.owl.carousel', function(e) {
	if (!e.namespace || e.property.name != 'position') return
	$('.slider1-nav__counter').html('0'+(+e.relatedTarget.relative(e.item.index)+1) + '<sup> / '+'0'+ e.item.count +'</sup>')
	})


	$(".slider2__content").owlCarousel({
	items: 1,
	nav: false,
	dots: true,
	URLhashListener: true,
	startPosition: 'URLHash',
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	touchDrag: false,
	mouseDrag: false
	});

	$(".s2-nav__item").click(function(){
	$(".s2-nav__item").removeClass('active');
	$(this).addClass('active');
	});


	$(".slider3__content").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	mouseDrag: false
	});


	$('.slider3__content').on('changed.owl.carousel', function(e) {
	if (!e.namespace || e.property.name != 'position') return
	$('.slider3__counter').html('0'+(+e.relatedTarget.relative(e.item.index)+1) + '<sup> / '+'0'+ e.item.count +'</sup>')
	})



	$(".slider4__content").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	});

	$(".js-slider5").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	});

	$('.js-slider5').on('changed.owl.carousel', function(e) {
	if (!e.namespace || e.property.name != 'position') return
	$('.js-slider5__counter').html('0'+(+e.relatedTarget.relative(e.item.index)+1) + '<sup> / '+'0'+ e.item.count +'</sup>')
	})

	$(".js-slider5-1").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	});

	$('.js-slider5-1').on('changed.owl.carousel', function(e) {
	if (!e.namespace || e.property.name != 'position') return
	$('.js-sl5-c1').html('0'+(+e.relatedTarget.relative(e.item.index)+1) + '<sup> / '+'0'+ e.item.count +'</sup>')
	})

	$(".js-slider5-2").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	});

	$('.js-slider5-2').on('changed.owl.carousel', function(e) {
	if (!e.namespace || e.property.name != 'position') return
	$('.js-sl5-c2').html('0'+(+e.relatedTarget.relative(e.item.index)+1) + '<sup> / '+'0'+ e.item.count +'</sup>')
	})


	$(".slider6__content").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	});

	$('.slider6__content').on('changed.owl.carousel', function(e) {
	if (!e.namespace || e.property.name != 'position') return
	$('.slider6__counter').html('0'+(+e.relatedTarget.relative(e.item.index)+1) + '<sup> / '+'0'+ e.item.count +'</sup>')
	})

	$(".slider7__content").owlCarousel({
	items: 1,
	nav: true,
	navText: [ , ],
	dots: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	loop: true,
	});

	$('.slider7__content').on('changed.owl.carousel', function(e) {
	if (!e.namespace || e.property.name != 'position') return
	$('.slider7__counter').html('0'+(+e.relatedTarget.relative(e.item.index)+1) + '<sup> / '+'0'+ e.item.count +'</sup>')
	})

// плавный скролл

	$('a[href^="#"]').click(function (){
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
	});



	$('.route__link').click(function () {
	var comments = $('.other-directions');
	if (!comments.is(':visible')) {
		comments.slideDown(800);
	} else {
		comments.slideUp(800);
	}
	});

});

// табы

// первый

for(var i = 0; i < document.querySelectorAll(".tr6__btn").length; i++){

	document.querySelectorAll(".tr6__btn")[i].addEventListener('click', function(e) {

		for(var i = 0; i < document.querySelectorAll(".tr6__btn").length; i++){

			document.querySelectorAll(".tr6__btn")[i].classList.remove ('active');

		} 

		this.classList.add('active');

		for(var i = 0; i < document.querySelectorAll(".tr6__btn").length; i++){

			document.querySelectorAll(".js-sl5-tab")[i].classList.remove ('active');

		}

		document.getElementById(this.id.slice(4)).classList.add('active');

	}, false);

}

// второй

for(var i = 0; i < document.querySelectorAll(".tr6__btn").length; i++){

	document.querySelectorAll(".tr6__btn")[i].addEventListener('click', function(e) {

		for(var i = 0; i < document.querySelectorAll(".tr6__btn").length; i++){

			document.querySelectorAll(".tr6__btn")[i].classList.remove ('active');

		} 

		this.classList.add('active');

		for(var i = 0; i < document.querySelectorAll(".tr6__btn").length; i++){

			document.querySelectorAll(".js-sities-tab")[i].classList.remove ('active');

		}

		document.getElementById(this.id.slice(4)).classList.add('active');

	}, false);

}


// третий

for(var i = 0; i < document.querySelectorAll(".sentence__item").length; i++){

	document.querySelectorAll(".sentence__item")[i].addEventListener('click', function(e) {

		for(var i = 0; i < document.querySelectorAll(".sentence__item").length; i++){

			document.querySelectorAll(".sentence__item")[i].classList.remove ('active');

		} 

		this.classList.add('active');

		for(var i = 0; i < document.querySelectorAll(".sentence__item").length; i++){

			document.querySelectorAll(".bot-form-coop")[i].classList.remove ('active');

		}

		document.getElementById(this.id.slice(4)).classList.add('active');

	}, false);

}

