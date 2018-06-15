/*
You can use this file with your scripts.
It will not be overwritten when you upgrade solution.
*/
$(document).ready(function(){



// $("body").click(function(){
// 	console.log(1);
// 	$(".basket_fly").css({ "right": "0"});
// });

var counterBasket = 0;
$(".opener").click(function(){
	console.log(counterBasket);
	if(counterBasket == 0) {
		$("#basket_line .basket_fly").css({ "right": "0", "transition":".5s"})
		counterBasket = 1;

	} else {
		$("#basket_line .basket_fly").css({ "right": "-805px"})
		counterBasket = 0;
	}
});
$("#basket_line .close").click(function(){
	$("#basket_line .basket_fly").css({ "right": "-805px"})
	counterBasket = 0;
});



$(".close").click(function(){
	$(".mainBg").fadeOut();
	$(".mainPopup").fadeOut();
});

$(".mainBg").click(function(){
	$(".mainBg").fadeOut();
	$(".mainPopup").fadeOut();
});

$(".callback_btn").click(function(){
	$(".mainBg").fadeIn();
	$(".mainPopup1").fadeIn();
});
$(".mainPopup1 button[type='reset']").click(function(){
	$(".mainBg").fadeOut();
	$(".mainPopup1").fadeOut();
});

$(".avtorization-call").click(function(){
	$(".mainBg").fadeIn();
	$(".mainPopup2").fadeIn();
});
$(".mainPopup2 button[type='reset']").click(function(){
	$(".mainBg").fadeOut();
	$(".mainPopup2").fadeOut();
});




});


// transference


$(document).ready(function(){
			
			
			$('#custom_picker').spectrum({
				preferredFormat: 'hex',
				showButtons: true,
				showInput: true,
				showPalette: false, 
				chooseText: 'Выбрать',
				cancelText: 'Отмена',
				containerClassName: 'custom_picker_container',
				replacerClassName: 'custom_picker_replacer',
				clickoutFiresChange: false,
				move: function(color) {
					var colorCode = color.toHexString();
					$('.custom_color_theme .color_block').attr('style', 'background:' + colorCode);
				},
				hide: function(color) {
					var colorCode = color.toHexString();
					$('.custom_color_theme .color_block').attr('style', 'background:' + colorCode);
				},
				change: function(color) {
					$('.custom_color_theme').addClass('active').siblings().removeClass('active');
					$('form[name=style-switcher] input[name=' + $('.custom_color_theme').data('option-id') + ']').val($('.custom_color_theme').data('option-value'));
					$('form[name=style-switcher]').submit();
				}
			});
			
			$('.custom_color_theme').click(function(e) {
				e.preventDefault();
				$('#custom_picker').spectrum('toggle');
				return false;
			});
			
			var curcolor = $('.color.active').data('color');
			if (curcolor != undefined && curcolor.length){
				$('#custom_picker').spectrum('set', curcolor);
				$('.color.custom_color_theme .color_block').attr('style', 'background:' + curcolor);
			}
			
			$('.style-switcher .switch').click(function(e){
				e.preventDefault();
				var styleswitcher = $(this).closest('.style-switcher');
				if(styleswitcher.hasClass('active')){
					styleswitcher.animate({left: '-' + styleswitcher.outerWidth() + 'px'}, 300).removeClass('active');
					// $.removeCookie('styleSwitcher', {path: '/'});
				}
				else{
					styleswitcher.animate({left: '0'}, 300).addClass('active');
					var pos = styleswitcher.offset().top;
					if($(window).scrollTop() > pos){
						$('html, body').animate({scrollTop: pos}, 500);
					}
					
				}
			});
			
			$('.style-switcher .reset').click(function(e){
				$('form[name=style-switcher]').append('<input type="hidden" name="theme" value="default" />');
				$('form[name=style-switcher]').submit();
			});
	
			
			$('.style-switcher .options a:not(.custom_color_theme)').click(function(e){
				$(this).addClass('active').siblings().removeClass('active');
				$('form[name=style-switcher] input[name=' + $(this).data('option-id') + ']').val($(this).data('option-value'));
				$('form[name=style-switcher]').submit();
			});
			









		var flexsliderItemWidth = 268,
			flexsliderItemMargin = 20;
		$(".stores .stores_list").flexslider({
			animation: "slide",
			selector: ".stores_list_wr > li",
			slideshow: false,
			slideshowSpeed: 6000,
			animationSpeed: 600,
			directionNav: true,
			//controlNav: false,
			pauseOnHover: true,
			animationLoop: true, 
			controlsContainer: ".stores_navigation",
			itemWidth: flexsliderItemWidth,
			itemMargin: flexsliderItemMargin, 
			manualControls: ".block_wr .flex-control-nav.flex-control-paging li a"
		});
		$('.stores').equalize({children: '.wrapp_block', reset: true});
		$(window).resize(function(){
			$('.stores .flex-viewport .stores_list_wr').equalize({children: '.item'});
		})

var timeoutSlide;
	InitFlexSlider = function() {
		var flexsliderItemWidth = 268,
			flexsliderItemMargin = 20;
		$(".stores .stores_list").flexslider({
			animation: "slide",
			selector: ".stores_list_wr > li",
			slideshow: false,
			slideshowSpeed: 6000,
			animationSpeed: 600,
			directionNav: true,
			//controlNav: false,
			pauseOnHover: true,
			animationLoop: true, 
			controlsContainer: ".stores_navigation",
			itemWidth: flexsliderItemWidth,
			itemMargin: flexsliderItemMargin, 
			// manualControls: ".block_wr .flex-control-nav.flex-control-paging li a"
			start:function(slider){
				$('.flex-control-nav li a').on('touchend', function(){
					// $(this).closest('.flex-control-nav').find('a').removeClass('touch');
					$(this).addClass('touch');
				})
				slider.find('li').css('opacity', 1);
			}
		});
		$('.stores').equalize({children: '.wrapp_block', reset: true});
	}

		$(window).resize(function(){
			clearTimeout(timeoutSlide);
			timeoutSlide = setTimeout(InitFlexSlider(),50);
			$('.stores .flex-viewport .stores_list_wr').equalize({children: '.item'});
		})
		



	$(document).ready(function(){
		$("form.sform_footer").validate({
			rules:{ "sf_EMAIL": {email: true} }
		});
	})

	$(".bottom_submenu ul.submenu li").click(function()
	{
		$(".bottom_submenu ul.submenu li").removeClass("selected");
		$(this).addClass("selected");
	});


	$(".bottom_submenu ul.submenu li").click(function()
	{
		$(".bottom_submenu ul.submenu li").removeClass("selected");
		$(this).addClass("selected");
	});

$(".bottom_submenu ul.submenu li").click(function()
	{
		$(".bottom_submenu ul.submenu li").removeClass("selected");
		$(this).addClass("selected");
	});

		});














