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
			






function checkNavColor(slider){
	var nav_color_flex = slider.find('.flex-active-slide').data('nav_color');
	if(nav_color_flex == 'dark')
		slider.find('.flex-control-nav').addClass('flex-dark');
	else
		slider.find('.flex-control-nav').removeClass('flex-dark');
}
$(document).ready(function(){
	if($('.top_slider_wrapp .flexslider').length){
		var config = {"controlNav": true, "animationLoop": true, "pauseOnHover" : true};
		if(typeof(arMShopOptions['THEME']) != 'undefined'){
			var slideshowSpeed = Math.abs(parseInt(arMShopOptions['THEME']['BANNER_SLIDESSHOWSPEED']));
			var animationSpeed = Math.abs(parseInt(arMShopOptions['THEME']['BANNER_ANIMATIONSPEED']));
			config["directionNav"] = (arMShopOptions['THEME']['BANNER_WIDTH'] == 'narrow' ? false : true);
			config["slideshow"] = (slideshowSpeed && arMShopOptions['THEME']['BANNER_ANIMATIONTYPE'].length ? true : false);
			config["animation"] = (arMShopOptions['THEME']['BANNER_ANIMATIONTYPE'] === 'FADE' ? 'fade' : 'slide');
			if(animationSpeed >= 0){
				config["animationSpeed"] = animationSpeed;
			}
			if(slideshowSpeed >= 0){
				config["slideshowSpeed"] = slideshowSpeed;
			}
			if(arMShopOptions['THEME']['BANNER_ANIMATIONTYPE'] !== 'FADE'){
				config["direction"] = (arMShopOptions['THEME']['BANNER_ANIMATIONTYPE'] === 'SLIDE_VERTICAL' ? 'vertical' : 'horizontal');
			}
			
			config.start = function(slider){
				checkNavColor(slider);
				
				if(slider.count <= 1){
					slider.find('.flex-direction-nav li').addClass('flex-disabled');
				}
			}
			config.after = function(slider){
				checkNavColor(slider);
			}
		}

		$(".top_slider_wrapp .flexslider").flexslider(config);
	}
});


$(document).ready(function(){
				$('.tab_slider_wrapp.s_eY3XVX .tabs > li').first().addClass('cur');
				$('.tab_slider_wrapp.s_eY3XVX .slider_navigation > li').first().addClass('cur');
				$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li').first().addClass('cur');
				
				var flexsliderItemWidth = 210;
				var flexsliderItemMargin = 20;
				
				var sliderWidth = $('.tab_slider_wrapp.s_eY3XVX').outerWidth();
				var flexsliderMinItems = Math.floor(sliderWidth / (flexsliderItemWidth + flexsliderItemMargin));
				$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').flexslider({
					animation: 'slide',
					selector: '.tabs_slider .catalog_item',
					slideshow: false,
					animationSpeed: 600,
					directionNav: true,
					controlNav: false,
					pauseOnHover: true,
					animationLoop: true, 
					itemWidth: flexsliderItemWidth,
					itemMargin: flexsliderItemMargin, 
					minItems: flexsliderMinItems,
					start: function(slider){
						slider.find('li').css('opacity', 1);
					},
					controlsContainer: '.tabs_slider_navigation.cur',
				});
				
				$('.tab_slider_wrapp.s_eY3XVX .tabs > li').click(function(){
					if(!$(this).hasClass('active')){
						var sliderIndex = $(this).index();
						$(this).addClass('active').addClass('cur').siblings().removeClass('active').removeClass('cur');
						$('.tab_slider_wrapp.s_eY3XVX .slider_navigation > li:eq(' + sliderIndex + ')').addClass('cur').show().siblings().removeClass('cur');
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li:eq(' + sliderIndex + ')').addClass('cur').siblings().removeClass('cur');
						if(!$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur .flex-viewport').length){
							$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').flexslider({
								animation: 'slide',
								selector: '.tabs_slider .catalog_item',
								slideshow: false,
								animationSpeed: 600,
								directionNav: true,
								controlNav: false,
								pauseOnHover: true,
								animationLoop: true, 
								itemWidth: flexsliderItemWidth,
								itemMargin: flexsliderItemMargin, 
								minItems: flexsliderMinItems,
								start: function(slider){
									slider.find('li').css('opacity', 1);
								},
								controlsContainer: '.tabs_slider_navigation.cur',
							});
						}
						$(window).resize();
					}
				});
				$(window).resize(function(){
						var sliderWidth = $('.tab_slider_wrapp.s_eY3XVX').outerWidth();
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').css('height', '');
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur .catalog_item .item-title').css('height', '');
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur .catalog_item .item_info').css('height', '');
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur .tabs_slider .buttons_block').hide();
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').equalize({children: '.item-title'}); 
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').equalize({children: '.item_info'}); 
					//setTimeout(function(){
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').equalize({children: '.catalog_item'});
						var itemsButtonsHeight = $('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur .tabs_slider > li .buttons_block').height();
						var tabsContentUnhover = $('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur').height() * 1;
						/*if(tabsContentUnhover<350)
							tabsContentUnhover=400;*/
						var tabsContentHover = tabsContentUnhover + itemsButtonsHeight+50;
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur').attr('data-unhover', tabsContentUnhover);
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur').attr('data-hover', tabsContentHover);
						$('.tab_slider_wrapp.s_eY3XVX .tabs_content').height(tabsContentUnhover);
					//},250);
				});
				$(window).resize();
				$('.s_eY3XVX .tabs_slider li').hover(
					function(){
						var tabsContentHover = $(this).parents('.tab').attr('data-hover') * 1;
						$(this).parents('.tab').fadeTo(100, 1);
						$(this).parents('.tab').stop().css({'height': tabsContentHover});
						$(this).find('.buttons_block').fadeIn(750, 'easeOutCirc');
					},
					function(){
						var tabsContentUnhoverHover = $(this).parents('.tab').attr('data-unhover') * 1;
						$(this).parents('.tab').stop().animate({'height': tabsContentUnhoverHover}, 100);
						$(this).find('.buttons_block').stop().fadeOut(103);
					}
				);
			})

	$(".brands_slider_wrapp").flexslider({
		animation: "slide",
		selector: ".brands_slider > li",
		slideshow: false,
		animationSpeed: 600,
		directionNav: true,
		controlNav: false,
		pauseOnHover: true,
		itemWidth: 179,                
		animationLoop: true,
		controlsContainer: ".brands_slider_navigation",
	});

		$("form.sform").validate({
			rules:{ "sf_EMAIL": {email: true} }
		});


	$(window).scroll(function() {
		var x = $(window).scrollTop()/$(document).height();		
		x = parseInt(x * 1000-400);
		if (x>-3) x=-3;		
		$('.subscribe-form .wrap_bg').stop().animate({'background-position-x': '10%', 'background-position-y':  x + 'px' }, 500, 'swing');		
		
	});

		var timeoutSlide;
		InitFlexSliderNews = function() {
			var flexsliderItemWidth = 268,
				flexsliderItemMargin = 20;
			$(".news_slider_wrapp").flexslider({
				animation: "slide",
				selector: ".news_slider > li",
				slideshow: false,
				slideshowSpeed: 6000,
				animationSpeed: 600,
				directionNav: true,
				//controlNav: false,
				pauseOnHover: true,
				animationLoop: true, 
				controlsContainer: ".news_slider_navigation",
				itemWidth: flexsliderItemWidth,
				itemMargin: flexsliderItemMargin, 
				// manualControls: ".block_wr .flex-control-nav.flex-control-paging li a"
				start:function(){
					$('.news_slider_wrapp .flex-viewport .news_slider').equalize({children: '.item .info'});
					$('.flex-control-nav li a').on('touchend', function(){
						$(this).addClass('touch');
					});
					$('.news_slider_wrapp li').css('opacity', 1);
				}
			});
			$('.stores').equalize({children: '.wrapp_block', reset: true});
		}

			$(window).resize(function(){
				clearTimeout(timeoutSlide);
				timeoutSlide = setTimeout(InitFlexSliderNews(),50);
			})


			var flexsliderItemWidth = 268,
				flexsliderItemMargin = 20;
			$(".news_slider_wrapp").flexslider({
				animation: "slide",
				selector: ".news_slider > li",
				slideshow: false,
				slideshowSpeed: 6000,
				animationSpeed: 600,
				directionNav: true,
				//controlNav: true,
				pauseOnHover: true,
				animationLoop: true, 
				controlsContainer: ".news_slider_navigation",
				itemWidth: flexsliderItemWidth,
				itemMargin: flexsliderItemMargin, 
				manualControls: ".news_akc_block .flex-control-nav.flex-control-paging li a",
				start: function(){
					$('.news_slider_wrapp .flex-viewport .news_slider').equalize({children: '.item .info'});
				}
			});
			$(window).resize(function(){
				//$('.news_slider_wrapp .flex-viewport .news_slider').equalize({children: '.item'});
			})


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














