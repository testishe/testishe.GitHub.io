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

	// $(".slider1__content").owlCarousel({
	// items: 1,
	// nav: false,
	// navText: [ , ],
	// dots: true,
	// // autoplay: true,
	// autoplayTimeout: 3000,
	// autoplayHoverPause: true,
	// loop: true,
	// mouseDrag: true
	// });

	// $(".slider2__container").owlCarousel({
	// items: 1,
	// nav: false,
	// navText: [ , ],
	// dots: true,
	// // autoplay: true,
	// autoplayTimeout: 3000,
	// autoplayHoverPause: true,
	// loop: true,
	// mouseDrag: true
	// });

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



	// $(".sl-item").owlCarousel({
	// items: 1,
	// nav: false,
	// navText: [ , ],
	// dots: true,
	// // autoplay: true,
	// autoplayTimeout: 3000,
	// autoplayHoverPause: true,
	// loop: true,
	// mouseDrag: true
	// });




	$('.js-link-popup1').magnificPopup({
	    type: 'inline',
	    preloader: false,
	    removalDelay: 350,
		mainClass: 'mfp-fade',
	    callbacks: {
	      open: function() {
	        // Will fire when this exact popup is opened
	        // this - is Magnific Popup object
	        $(".sl-item1").owlCarousel({
				items: 1,
				nav: true,
				navText: ['<','>'],
				dots: true,
				// autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				mouseDrag: true
			});
	      },
	      close: function() {
	        // Will fire when popup is closed
	      }
	      // e.t.c.
	    }
	    // modal: true
	});

	$('.js-link-popup2').magnificPopup({
	    type: 'inline',
	    preloader: false,
	    removalDelay: 350,
		mainClass: 'mfp-fade',
	    callbacks: {
	      open: function() {
	        // Will fire when this exact popup is opened
	        // this - is Magnific Popup object
	        $(".sl-item2").owlCarousel({
				items: 1,
				nav: true,
				navText: ['<','>'],
				dots: true,
				// autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				mouseDrag: true
			});
	      },
	      close: function() {
	        // Will fire when popup is closed
	      }
	      // e.t.c.
	    }
	    // modal: true
	});

	$('.js-link-popup3').magnificPopup({
	    type: 'inline',
	    preloader: false,
	    removalDelay: 350,
		mainClass: 'mfp-fade',
	    callbacks: {
	      open: function() {
	        // Will fire when this exact popup is opened
	        // this - is Magnific Popup object
	        $(".sl-item3").owlCarousel({
				items: 1,
				nav: true,
				navText: ['<','>'],
				dots: true,
				// autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				mouseDrag: true
			});
	      },
	      close: function() {
	        // Will fire when popup is closed
	      }
	      // e.t.c.
	    }
	    // modal: true
	});

	$('.js-link-popup4').magnificPopup({
	    type: 'inline',
	    preloader: false,
	    removalDelay: 350,
		mainClass: 'mfp-fade',
	    callbacks: {
	      open: function() {
	        // Will fire when this exact popup is opened
	        // this - is Magnific Popup object
	        $(".sl-item4").owlCarousel({
				items: 1,
				nav: true,
				navText: ['<','>'],
				dots: true,
				// autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				mouseDrag: true
			});
	      },
	      close: function() {
	        // Will fire when popup is closed
	      }
	      // e.t.c.
	    }
	    // modal: true
	});

	$('.js-link-popup5').magnificPopup({
	    type: 'inline',
	    preloader: false,
	    removalDelay: 350,
		mainClass: 'mfp-fade',
	    callbacks: {
	      open: function() {
	        // Will fire when this exact popup is opened
	        // this - is Magnific Popup object
	        $(".sl-item5").owlCarousel({
				items: 1,
				nav: true,
				navText: ['<','>'],
				dots: true,
				// autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				mouseDrag: true
			});
	      },
	      close: function() {
	        // Will fire when popup is closed
	      }
	      // e.t.c.
	    }
	    // modal: true
	});

});



