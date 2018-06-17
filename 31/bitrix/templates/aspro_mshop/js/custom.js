$(document).ready(function() {
	// $(".counter_block").click(function(){
	// 	var x=$("this .text").text;
	// 	console.log(x);

	// });





    var counterBasket = 0;
    $(".opener").click(function() {
        // console.log(counterBasket);
        if (counterBasket == 0) {
            $("#basket_line .basket_fly").css({
                "right": "0",
                "transition": ".5s"
            })
            counterBasket = 1
        } else {
            $("#basket_line .basket_fly").css({
                "right": "-805px"
            })
            counterBasket = 0
        }
    });
    $("#basket_line .close").click(function() {
        $("#basket_line .basket_fly").css({
            "right": "-805px"
        })
        counterBasket = 0
    });
    $(".close").click(function() {
        $(".mainBg").fadeOut();
        $(".mainPopup").fadeOut()
    });
    $(".mainBg").click(function() {
        $(".mainBg").fadeOut();
        $(".mainPopup").fadeOut()
    });
    $(".callback_btn").click(function() {
        $(".mainBg").fadeIn();
        $(".mainPopup1").fadeIn()
    });
    $(".mainPopup1 button[type='reset']").click(function() {
        $(".mainBg").fadeOut();
        $(".mainPopup1").fadeOut()
    });
    $(".avtorization-call").click(function() {
        $(".mainBg").fadeIn();
        $(".mainPopup2").fadeIn()
    });
    $(".mainPopup2 button[type='reset']").click(function() {
        $(".mainBg").fadeOut();
        $(".mainPopup2").fadeOut()
    })

      $(".wrapp_one_click").click(function() {
        $(".mainBg").fadeIn();
        $(".mainPopup3").fadeIn()
    });

      $(".ask_btn").click(function() {
        $(".mainBg").fadeIn();
        $(".mainPopup4").fadeIn()
    });

        $(".mainPopup4 button[type='reset']").click(function() {
        $(".mainBg").fadeOut();
        $(".mainPopup4").fadeOut()
    })

    // $(".menu.adaptive .menu_opener").click(function() {
    // 	// console.log(1);
    //     $(".mainBg").fadeIn();
    //     $(".mainPopup2").fadeIn()
    // });
    //     var counterAdMenu = 0;
    // $(".menu.adaptive").click(function() {
    //     console.log(counterAdMenu);
    //     if (counterAdMenu == 0) {
    //         $(".menu.adaptive").toggleClass(".opened")
    //         $(".menu.full").toggleClass(".opened")
    //         counterAdMenu = 1
    //     } else {
    //         $("#basket_line .basket_fly").css({
    //             "right": "-805px"
    //         })
    //         counterAdMenu = 0
    //     }
    // });
    // $("#basket_line .close").click(function() {
    //     $("#basket_line .basket_fly").css({
    //         "right": "-805px"
    //     })
    //     counterAdMenu = 0
    // });

 //    $('.menu.adaptive').click(function () {
	// var menu = $('.menu.full');
	// if (!menu.is(':visible')) {
	// 	menu.slideDown(600);
	// } else {
	// 	menu.slideUp(600);
	// }
	// });

});
$(document).ready(function() {
    $('#custom_picker').spectrum({
        preferredFormat: 'hex',
        showButtons: !0,
        showInput: !0,
        showPalette: !1,
        chooseText: 'Выбрать',
        cancelText: 'Отмена',
        containerClassName: 'custom_picker_container',
        replacerClassName: 'custom_picker_replacer',
        clickoutFiresChange: !1,
        move: function(color) {
            var colorCode = color.toHexString();
            $('.custom_color_theme .color_block').attr('style', 'background:' + colorCode)
        },
        hide: function(color) {
            var colorCode = color.toHexString();
            $('.custom_color_theme .color_block').attr('style', 'background:' + colorCode)
        },
        change: function(color) {
            $('.custom_color_theme').addClass('active').siblings().removeClass('active');
            $('form[name=style-switcher] input[name=' + $('.custom_color_theme').data('option-id') + ']').val($('.custom_color_theme').data('option-value'));
            $('form[name=style-switcher]').submit()
        }
    });
    $('.custom_color_theme').click(function(e) {
        e.preventDefault();
        $('#custom_picker').spectrum('toggle');
        return !1
    });
    var curcolor = $('.color.active').data('color');
    if (curcolor != undefined && curcolor.length) {
        $('#custom_picker').spectrum('set', curcolor);
        $('.color.custom_color_theme .color_block').attr('style', 'background:' + curcolor)
    }
    $('.style-switcher .switch').click(function(e) {
        e.preventDefault();
        var styleswitcher = $(this).closest('.style-switcher');
        if (styleswitcher.hasClass('active')) {
            styleswitcher.animate({
                left: '-' + styleswitcher.outerWidth() + 'px'
            }, 300).removeClass('active')
        } else {
            styleswitcher.animate({
                left: '0'
            }, 300).addClass('active');
            var pos = styleswitcher.offset().top;
            if ($(window).scrollTop() > pos) {
                $('html, body').animate({
                    scrollTop: pos
                }, 500)
            }
        }
    });
    $('.style-switcher .reset').click(function(e) {
        $('form[name=style-switcher]').append('<input type="hidden" name="theme" value="default" />');
        $('form[name=style-switcher]').submit()
    });
    $('.style-switcher .options a:not(.custom_color_theme)').click(function(e) {
        $(this).addClass('active').siblings().removeClass('active');
        $('form[name=style-switcher] input[name=' + $(this).data('option-id') + ']').val($(this).data('option-value'));
        $('form[name=style-switcher]').submit()
    });
    $(".content_menu .menu > li:not(.current) > a").click(function() {
        $(this).parents("li").siblings().removeClass("current");
        $(this).parents("li").addClass("current")
    });
    $("#title-search-input3").focus(function() {
        $(this).parents("form").find("button[type='submit']").addClass("hover")
    });
    $("#title-search-input3").blur(function() {
        $(this).parents("form").find("button[type='submit']").removeClass("hover")
    });
    $("#title-search-input4").focus(function() {
        $(this).parents("form").find("button[type='submit']").addClass("hover")
    });
    $("#title-search-input4").blur(function() {
        $(this).parents("form").find("button[type='submit']").removeClass("hover")
    });
    $("#title-search-input2").focus(function() {
        $(this).parents("form").find("button[type='submit']").addClass("hover")
    });
    $("#title-search-input2").blur(function() {
        $(this).parents("form").find("button[type='submit']").removeClass("hover")
    });
    $(document).ready(function() {
        $(".main-nav .menu > li:not(.current):not(.menu_opener) > a").click(function() {
            $(this).parents("li").siblings().removeClass("current");
            $(this).parents("li").addClass("current")
        });
        $(".main-nav .menu .child_wrapp a").click(function() {
            $(this).siblings().removeClass("current");
            $(this).addClass("current")
        })
    });
    $("#title-search-input").focus(function() {
        $(this).parents("form").find("button[type='submit']").addClass("hover")
    });
    $("#title-search-input").blur(function() {
        $(this).parents("form").find("button[type='submit']").removeClass("hover")
    });
    var nodeCatalogMenu = document.querySelector('.catalog_menu .menu')
    nodeCatalogMenu.lastCalculatedWidth = !1
    var nodeMore = nodeCatalogMenu.querySelector('li.more')
    var moreWidth = nodeMore.offsetWidth
    var nodeMoreSubmenu = nodeMore.querySelector('.child_wrapp')
    var reCalculateMenu = function() {
        var menuWidth = nodeCatalogMenu.offsetWidth
        if (menuWidth !== nodeCatalogMenu.lastCalculatedWidth) {
            nodeCatalogMenu.lastCalculatedWidth = menuWidth
            nodeMoreSubmenu.innerHTML = ''
            nodeMore.classList.remove('visible')
            Array.prototype.slice.call(document.querySelectorAll('.catalog_menu .menu > li:not(.stretch)')).forEach(function(node) {
                node.style.display = 'inline-block'
            })
            nodeCatalogMenu.style.display = 'block'
            var lastIndex = $('.catalog_menu .menu > li:not(.more):not(.stretch)').length - 1
            var cntItemsInMore = 0;
            var cntMinItemsInMore = cntItemsInMore
            Array.prototype.slice.call(document.querySelectorAll('.catalog_menu .menu > li:not(.more):not(.stretch)')).forEach(function(node, i) {
                var bLast = lastIndex === i
                var itemWidth = node.offsetWidth
                if ((cntItemsInMore > cntMinItemsInMore) || (node.offsetLeft + itemWidth + (bLast ? 0 : moreWidth) > menuWidth)) {
                    if (!cntItemsInMore++) {
                        nodeMore.classList.add('visible')
                        nodeMore.style.display = 'inline-block'
                    }
                    var nodeClone = node.cloneNode(!0)
                    node.style.display = 'none'
                    var nodeWrap = document.createElement('div')
                    nodeWrap.appendChild(nodeClone)
                    delete node
                    node = nodeWrap.querySelector('.menu_item_l1')
                    var nodeLink = nodeWrap.querySelector('.menu_item_l1 > a')
                    if (nodeLink) {
                        var hrefLink = nodeLink.getAttribute('href')
                        var textLink = nodeLink.innerText
                        var p = nodeLink.parentNode
                        nodeLink.parentNode.removeChild(nodeLink)
                    }
                    Array.prototype.slice.call(nodeClone.querySelectorAll('.depth3 a:not(.title)')).forEach(function(_node) {
                        _node.parentNode.removeChild(_node)
                    })
                    $(node).wrapInner('<ul class="cloned"></ul>')
                    var nodeUL = node.querySelector('ul')
                    var nodeLI = document.createElement('li')
                    var addClass = node.className.replace('menu_item_l1', '').trim()
                    nodeLI.classList.add('menu_title')
                    if (addClass.length) {
                        nodeLI.classList.add(addClass)
                    }
                    nodeLI.innerHTML = '<a href="' + (hrefLink && hrefLink.trim().length ? hrefLink : '') + '">' + textLink + '</a>'
                    if (nodeUL.childNodes.length) {
                        nodeUL.insertBefore(nodeLI, nodeUL.childNodes[0])
                    } else {
                        nodeUL.appendChild(nodeLI)
                    }
                    Array.prototype.slice.call(node.querySelectorAll('.child_wrapp > a,.child_wrapp > .depth3 a.title')).forEach(function(_node) {
                        $(_node).wrap('<li class="menu_item"></li>')
                    })
                    var strLiBlock = '';
                    Array.prototype.slice.call(node.querySelectorAll('li.menu_item')).forEach(function(_node) {
                        if (nodeUL) {
                            var $a = $(_node).find('> a');
                            if ($a.length) {
                                var nodeA = $a[0]
                                var classA = nodeA.className
                                var styleA = nodeA.getAttribute('style')
                                strLiBlock += '<li class="menu_item' + ((classA && classA.trim().length) ? ' ' + classA.trim() : '') + '"' + ((styleA && styleA.trim().length) ? 'style="' + styleA.trim() + '"' : '') + '>' + _node.innerHTML + '</li>'
                            }
                        }
                    })
                    nodeUL.innerHTML += strLiBlock;
                    Array.prototype.slice.call(node.querySelectorAll('.child.submenu')).forEach(function(_node) {
                        _node.parentNode.removeChild(_node)
                    })
                    nodeMoreSubmenu.appendChild(nodeUL)
                } else {
                    if (i) {
                        var nodesSubmenu = node.getElementsByClassName('submenu')
                        if (nodesSubmenu.length) {
                            nodesSubmenu[0].style.marginLeft = (itemWidth - $(nodesSubmenu[0]).outerWidth()) / 2 + 'px'
                        }
                    }
                    node.style.display = 'inline-block'
                    if (bLast) {
                        node.style.borderLeftWidth = '0px'
                    }
                }
            });
            if (!cntItemsInMore) {
                nodeMore.style.display = 'none'
            } else {
                Array.prototype.slice.call(nodeMoreSubmenu.querySelectorAll('ul')).forEach(function(node, i) {
                    if (i % 3) {
                        node.classList.remove('last')
                    } else {
                        node.classList.add('last')
                    }
                })
            }
            Array.prototype.slice.call(nodeMore.querySelectorAll('.see_more a.see_more')).forEach(function(node) {
                node.classList.remove('see_more')
            })
            Array.prototype.slice.call(nodeMore.querySelectorAll('li.menu_item a')).forEach(function(node) {
                node.classList.remove('d')
            })
            Array.prototype.slice.call(nodeMore.querySelectorAll('li.menu_item a')).forEach(function(node) {
                node.removeAttribute('style')
            })
        }
    }

    function checkNavColor(slider) {
        var nav_color_flex = slider.find('.flex-active-slide').data('nav_color');
        if (nav_color_flex == 'dark')
            slider.find('.flex-control-nav').addClass('flex-dark');
        else slider.find('.flex-control-nav').removeClass('flex-dark')
    }
    $(document).ready(function() {
        if ($('.top_slider_wrapp .flexslider').length) {
            var config = {
                "controlNav": !0,
                "animationLoop": !0,
                "pauseOnHover": !0
            };
            if (typeof(arMShopOptions.THEME) != 'undefined') {
                var slideshowSpeed = Math.abs(parseInt(arMShopOptions.THEME.BANNER_SLIDESSHOWSPEED));
                var animationSpeed = Math.abs(parseInt(arMShopOptions.THEME.BANNER_ANIMATIONSPEED));
                config.directionNav = (arMShopOptions.THEME.BANNER_WIDTH == 'narrow' ? !1 : !0);
                config.slideshow = (slideshowSpeed && arMShopOptions.THEME.BANNER_ANIMATIONTYPE.length ? !0 : !1);
                config.animation = (arMShopOptions.THEME.BANNER_ANIMATIONTYPE === 'FADE' ? 'fade' : 'slide');
                if (animationSpeed >= 0) {
                    config.animationSpeed = animationSpeed
                }
                if (slideshowSpeed >= 0) {
                    config.slideshowSpeed = slideshowSpeed
                }
                if (arMShopOptions.THEME.BANNER_ANIMATIONTYPE !== 'FADE') {
                    config.direction = (arMShopOptions.THEME.BANNER_ANIMATIONTYPE === 'SLIDE_VERTICAL' ? 'vertical' : 'horizontal')
                }
                config.start = function(slider) {
                    checkNavColor(slider);
                    if (slider.count <= 1) {
                        slider.find('.flex-direction-nav li').addClass('flex-disabled')
                    }
                }
                config.after = function(slider) {
                    checkNavColor(slider)
                }
            }
            $(".top_slider_wrapp .flexslider").flexslider(config)
        }
    });
    $(document).ready(function() {
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
            slideshow: !1,
            animationSpeed: 600,
            directionNav: !0,
            controlNav: !1,
            pauseOnHover: !0,
            animationLoop: !0,
            itemWidth: flexsliderItemWidth,
            itemMargin: flexsliderItemMargin,
            minItems: flexsliderMinItems,
            start: function(slider) {
                slider.find('li').css('opacity', 1)
            },
            controlsContainer: '.tabs_slider_navigation.cur',
        });
        $('.tab_slider_wrapp.s_eY3XVX .tabs > li').click(function() {
            if (!$(this).hasClass('active')) {
                var sliderIndex = $(this).index();
                $(this).addClass('active').addClass('cur').siblings().removeClass('active').removeClass('cur');
                $('.tab_slider_wrapp.s_eY3XVX .slider_navigation > li:eq(' + sliderIndex + ')').addClass('cur').show().siblings().removeClass('cur');
                $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li:eq(' + sliderIndex + ')').addClass('cur').siblings().removeClass('cur');
                if (!$('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur .flex-viewport').length) {
                    $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').flexslider({
                        animation: 'slide',
                        selector: '.tabs_slider .catalog_item',
                        slideshow: !1,
                        animationSpeed: 600,
                        directionNav: !0,
                        controlNav: !1,
                        pauseOnHover: !0,
                        animationLoop: !0,
                        itemWidth: flexsliderItemWidth,
                        itemMargin: flexsliderItemMargin,
                        minItems: flexsliderMinItems,
                        start: function(slider) {
                            slider.find('li').css('opacity', 1)
                        },
                        controlsContainer: '.tabs_slider_navigation.cur',
                    })
                }
                $(window).resize()
            }
        });
        $(window).resize(function() {
            var sliderWidth = $('.tab_slider_wrapp.s_eY3XVX').outerWidth();
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').css('height', '');
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur .catalog_item .item-title').css('height', '');
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur .catalog_item .item_info').css('height', '');
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur .tabs_slider .buttons_block').hide();
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').equalize({
                children: '.item-title'
            });
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').equalize({
                children: '.item_info'
            });
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content > li.cur').equalize({
                children: '.catalog_item'
            });
            var itemsButtonsHeight = $('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur .tabs_slider > li .buttons_block').height();
            var tabsContentUnhover = $('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur').height() * 1;
            var tabsContentHover = tabsContentUnhover + itemsButtonsHeight + 50;
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur').attr('data-unhover', tabsContentUnhover);
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content .tab.cur').attr('data-hover', tabsContentHover);
            $('.tab_slider_wrapp.s_eY3XVX .tabs_content').height(tabsContentUnhover)
        });
        $(window).resize();
        $('.s_eY3XVX .tabs_slider li').hover(function() {
            var tabsContentHover = $(this).parents('.tab').attr('data-hover') * 1;
            $(this).parents('.tab').fadeTo(100, 1);
            $(this).parents('.tab').stop().css({
                'height': tabsContentHover
            });
            $(this).find('.buttons_block').fadeIn(750, 'easeOutCirc')
        }, function() {
            var tabsContentUnhoverHover = $(this).parents('.tab').attr('data-unhover') * 1;
            $(this).parents('.tab').stop().animate({
                'height': tabsContentUnhoverHover
            }, 100);
            $(this).find('.buttons_block').stop().fadeOut(103)
        })
    })
    $(".brands_slider_wrapp").flexslider({
        animation: "slide",
        selector: ".brands_slider > li",
        slideshow: !1,
        animationSpeed: 600,
        directionNav: !0,
        controlNav: !1,
        pauseOnHover: !0,
        itemWidth: 179,
        animationLoop: !0,
        controlsContainer: ".brands_slider_navigation",
    });
    $("form.sform").validate({
        rules: {
            "sf_EMAIL": {
                email: !0
            }
        }
    });
    $(window).scroll(function() {
        var x = $(window).scrollTop() / $(document).height();
        x = parseInt(x * 1000 - 400);
        if (x > -3) x = -3;
        $('.subscribe-form .wrap_bg').stop().animate({
            'background-position-x': '10%',
            'background-position-y': x + 'px'
        }, 500, 'swing')
    });
    var timeoutSlide;
    InitFlexSliderNews = function() {
        var flexsliderItemWidth = 268,
            flexsliderItemMargin = 20;
        $(".news_slider_wrapp").flexslider({
            animation: "slide",
            selector: ".news_slider > li",
            slideshow: !1,
            slideshowSpeed: 6000,
            animationSpeed: 600,
            directionNav: !0,
            pauseOnHover: !0,
            animationLoop: !0,
            controlsContainer: ".news_slider_navigation",
            itemWidth: flexsliderItemWidth,
            itemMargin: flexsliderItemMargin,
            start: function() {
                $('.news_slider_wrapp .flex-viewport .news_slider').equalize({
                    children: '.item .info'
                });
                $('.flex-control-nav li a').on('touchend', function() {
                    $(this).addClass('touch')
                });
                $('.news_slider_wrapp li').css('opacity', 1)
            }
        });
        $('.stores').equalize({
            children: '.wrapp_block',
            reset: !0
        })
    }
    $(window).resize(function() {
        clearTimeout(timeoutSlide);
        timeoutSlide = setTimeout(InitFlexSliderNews(), 50)
    })
    var flexsliderItemWidth = 268,
        flexsliderItemMargin = 20;
    $(".news_slider_wrapp").flexslider({
        animation: "slide",
        selector: ".news_slider > li",
        slideshow: !1,
        slideshowSpeed: 6000,
        animationSpeed: 600,
        directionNav: !0,
        pauseOnHover: !0,
        animationLoop: !0,
        controlsContainer: ".news_slider_navigation",
        itemWidth: flexsliderItemWidth,
        itemMargin: flexsliderItemMargin,
        manualControls: ".news_akc_block .flex-control-nav.flex-control-paging li a",
        start: function() {
            $('.news_slider_wrapp .flex-viewport .news_slider').equalize({
                children: '.item .info'
            })
        }
    });
    $(window).resize(function() {})
    var flexsliderItemWidth = 268,
        flexsliderItemMargin = 20;
    $(".stores .stores_list").flexslider({
        animation: "slide",
        selector: ".stores_list_wr > li",
        slideshow: !1,
        slideshowSpeed: 6000,
        animationSpeed: 600,
        directionNav: !0,
        pauseOnHover: !0,
        animationLoop: !0,
        controlsContainer: ".stores_navigation",
        itemWidth: flexsliderItemWidth,
        itemMargin: flexsliderItemMargin,
        manualControls: ".block_wr .flex-control-nav.flex-control-paging li a"
    });
    $('.stores').equalize({
        children: '.wrapp_block',
        reset: !0
    });
    $(window).resize(function() {
        $('.stores .flex-viewport .stores_list_wr').equalize({
            children: '.item'
        })
    })
    var timeoutSlide;
    InitFlexSlider = function() {
        var flexsliderItemWidth = 268,
            flexsliderItemMargin = 20;
        $(".stores .stores_list").flexslider({
            animation: "slide",
            selector: ".stores_list_wr > li",
            slideshow: !1,
            slideshowSpeed: 6000,
            animationSpeed: 600,
            directionNav: !0,
            pauseOnHover: !0,
            animationLoop: !0,
            controlsContainer: ".stores_navigation",
            itemWidth: flexsliderItemWidth,
            itemMargin: flexsliderItemMargin,
            start: function(slider) {
                $('.flex-control-nav li a').on('touchend', function() {
                    $(this).addClass('touch')
                })
                slider.find('li').css('opacity', 1)
            }
        });
        $('.stores').equalize({
            children: '.wrapp_block',
            reset: !0
        })
    }
    $(window).resize(function() {
        clearTimeout(timeoutSlide);
        timeoutSlide = setTimeout(InitFlexSlider(), 50);
        $('.stores .flex-viewport .stores_list_wr').equalize({
            children: '.item'
        })
    })
    $(document).ready(function() {
        $("form.sform_footer").validate({
            rules: {
                "sf_EMAIL": {
                    email: !0
                }
            }
        })
    })
    $(".bottom_submenu ul.submenu li").click(function() {
        $(".bottom_submenu ul.submenu li").removeClass("selected");
        $(this).addClass("selected")
    });
    $(".bottom_submenu ul.submenu li").click(function() {
        $(".bottom_submenu ul.submenu li").removeClass("selected");
        $(this).addClass("selected")
    });
    $(".bottom_submenu ul.submenu li").click(function() {
        $(".bottom_submenu ul.submenu li").removeClass("selected");
        $(this).addClass("selected")
    })
})

























		$(document).ready(function(){

			$('.tab_slider_wrapp.s_CxqOHg .tabs > li').first().addClass('cur');
			$('.tab_slider_wrapp.s_CxqOHg .slider_navigation > li').first().addClass('cur');
			$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li').first().addClass('cur');

			var flexsliderItemWidth = 210;
			var flexsliderItemMargin = 20;

			var sliderWidth = $('.tab_slider_wrapp.s_CxqOHg').outerWidth();
			var flexsliderMinItems = Math.floor(sliderWidth / (flexsliderItemWidth + flexsliderItemMargin));
			$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li.cur').flexslider({
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
				controlsContainer: '.tabs_slider_navigation.cur',
				start: function(slider){
					slider.find('li').css('opacity', 1);
				}
			});

			$('.tab_slider_wrapp.s_CxqOHg .tabs > li').on('click', function(){
				if(!$(this).hasClass('active')){
					var sliderIndex = $(this).index();
					$(this).addClass('active').addClass('cur').siblings().removeClass('active').removeClass('cur');
					$('.tab_slider_wrapp.s_CxqOHg .slider_navigation > li:eq(' + sliderIndex + ')').addClass('cur').show().siblings().removeClass('cur');
					$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li:eq(' + sliderIndex + ')').addClass('cur').siblings().removeClass('cur');
					if(!$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li.cur .flex-viewport').length){
						$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li.cur').flexslider({
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
							controlsContainer: '.tabs_slider_navigation.cur',
						});
					}
					$(window).resize();
				}
			});

			$(window).resize(function(){
				var sliderWidth = $('.tab_slider_wrapp.s_CxqOHg').outerWidth();
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li.cur').css('height', '');
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content .tab.cur .tabs_slider .buttons_block').hide();
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li.cur').equalize({children: '.item-title'});
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li.cur').equalize({children: '.item_info'});
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content > li.cur').equalize({children: '.catalog_item'});
				var itemsButtonsHeight = $('.tab_slider_wrapp.s_CxqOHg .tabs_content .tab.cur .tabs_slider li .buttons_block').height();
				var tabsContentUnhover = $('.tab_slider_wrapp.s_CxqOHg .tabs_content .tab.cur').height() * 1;
				var tabsContentHover = tabsContentUnhover + itemsButtonsHeight+50;
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content .tab.cur').attr('data-unhover', tabsContentUnhover);
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content .tab.cur').attr('data-hover', tabsContentHover);
				$('.tab_slider_wrapp.s_CxqOHg .tabs_content').height(tabsContentUnhover);
			});

			$(window).resize();
			$(document).on({
				mouseover: function(e){
					var tabsContentHover = $(this).closest('.tab').attr('data-hover') * 1;
					$(this).closest('.tab').fadeTo(100, 1);
					$(this).closest('.tab').stop().css({'height': tabsContentHover});
					$(this).find('.buttons_block').fadeIn(450, 'easeOutCirc');
				},
				mouseleave: function(e){
					var tabsContentUnhoverHover = $(this).closest('.tab').attr('data-unhover') * 1;
					$(this).closest('.tab').stop().animate({'height': tabsContentUnhoverHover}, 100);
					$(this).find('.buttons_block').stop().fadeOut(233);
				}
			}, '.s_CxqOHg .tabs_slider li');
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



//tran

var smartFilter = new JCSmartFilter('index.html', 'vertical', {'SEF_SET_FILTER_URL':'/catalog/avtoelektronika/filter/clear/apply/','SEF_DEL_FILTER_URL':'/catalog/avtoelektronika/filter/clear/apply/'});
				$(document).ready(function(){
			
			var checkClosed = function(item){
				$.cookie.json = true;
				var arClosed = $.cookie("MSHOP_FILTER_CLOSED");
				if (arClosed && typeof arClosed != "undefined"){
					if (typeof item != "undefined"){
						var propID = item.parents(".bx_filter_parameters_box").data("property_id");
						var delIndex = $.inArray(propID, arClosed);
						if (delIndex >= 0) { arClosed.splice(delIndex,1);} else {arClosed.push(propID);}
					}
				}else{
					var arClosed = [];
					if (typeof item != "undefined"){
						item = $(item);
						var propID = item.parents(".bx_filter_parameters_box").data("property_id");
						if (!item.parents(".bx_filter_parameters_box").is(".active")) { if (!$.inArray(propID, arClosed) >= 0) { arClosed.push(propID); } }
							else { if ($.inArray(propID, arClosed) >= 0) { arClosed.splice(delIndex,1); } } 
					}
				}
				$.cookie("MSHOP_FILTER_CLOSED", arClosed, {
					path: '/',
					domain: '',
					expires: 360
				});
				return true;
			}
			var checkOpened = function(item){
				$.cookie.json = true;
				var arOpened = $.cookie("KSHOP_FILTER_OPENED");
				if (arOpened && typeof arOpened != "undefined"){
					if (typeof item != "undefined"){
						var propID = item.parents(".bx_filter_parameters_box").data("property_id");
						var delIndex = $.inArray(propID, arOpened);
						if (delIndex >= 0) { arOpened.splice(delIndex,1); checkClosed(item); } 
							else { arOpened.push(propID); checkClosed(item); }
					}else{
						$(".bx_filter_parameters_box").each(function(){ 
							var propID = $(this).data("property_id");	
							if ($(this).is(".active")) { if ($.inArray(propID, arOpened) < 0) { arOpened.push(propID); checkClosed(item); } } 
						});
					}	
				}else{
					var arOpened = [];
					if (typeof item != "undefined"){
						item = $(item);
						var propID = item.parents(".bx_filter_parameters_box").data("property_id");
						if (item.parents(".bx_filter_parameters_box").is(".active")) { if (!$.inArray(propID, arOpened) >= 0) { arOpened.push(propID); checkClosed(item); }  }
							else { if ($.inArray(propID, arOpened) >= 0) { arOpened.splice(delIndex,1); checkClosed(item); } } 	
					}else{
						$(".bx_filter_parameters_box").each(function() 
						{ 
							var propID = $(this).data("property_id");
							if ($(this).is(".active")) { if ($.inArray(propID, arOpened) < 0) { arOpened.push(propID); checkClosed(item); } } 
						});
					}
				}
				$.cookie("MSHOP_FILTER_OPENED", arOpened,{
					path: '/',
					domain: '',
					expires: 360
				});
				return true;
			}
			//checkOpened();
			$(".bx_filter_parameters_box_title").click( function(){
				var active=2;
				if ($(this).closest(".bx_filter_parameters_box").hasClass("active")) { $(this).next(".bx_filter_block").slideUp(100); }
				else { $(this).next(".bx_filter_block").slideDown(200); }
				$(this).closest(".bx_filter_parameters_box").toggleClass("active");

				if($(this).closest(".bx_filter_parameters_box").hasClass("active")){
					active=3;
				}
				//checkOpened($(this));
				
				$.cookie.json = true;			
				$.cookie("MSHOP_filter_prop_"+$(this).closest(".bx_filter_parameters_box").data('prop_code'), active,{
					path: '/',
					domain: '',
					expires: 360
				});
			});
			$('.bx_filter_parameters_box').each(function(){
				if($.cookie("MSHOP_filter_prop_"+$(this).data('prop_code'))==2){
					$(this).removeClass('active');
					$(this).find('.bx_filter_block').hide();
				}else if($.cookie("MSHOP_filter_prop_"+$(this).data('prop_code'))==3){
					$(this).addClass('active');
					$(this).find('.bx_filter_block').show();
				}
			})
			$(".hint .icon").click(function(e){
				var tooltipWrapp = $(this).parents(".hint");
				tooltipWrapp.click(function(e){e.stopPropagation();})
				if (tooltipWrapp.is(".active"))
				{
					tooltipWrapp.removeClass("active").find(".tooltip").slideUp(200); 
				}
				else
				{
					tooltipWrapp.addClass("active").find(".tooltip").slideDown(200);
					tooltipWrapp.find(".tooltip_close").click(function(e) { e.stopPropagation(); tooltipWrapp.removeClass("active").find(".tooltip").slideUp(100);});	
					$(document).click(function() { tooltipWrapp.removeClass("active").find(".tooltip").slideUp(100);});				
				}
			});	
			//$('label.sku').equalizeWidths();
		})

		var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/',
	'CONTAINER_ID': 'title-search',
	'INPUT_ID': 'title-search-input',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/',
	'CONTAINER_ID': 'title-search2',
	'INPUT_ID': 'title-search-input2',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input2").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input2").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/',
	'CONTAINER_ID': 'title-search4',
	'INPUT_ID': 'title-search-input4',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input4").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input4").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/',
	'CONTAINER_ID': 'title-search3',
	'INPUT_ID': 'title-search-input3',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input3").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input3").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

		BX.Currency.setCurrencies([{'CURRENCY':'RUB','FORMAT':{'FORMAT_STRING':'# руб.','DEC_POINT':'.','THOUSANDS_SEP':' ','DECIMALS':2,'THOUSANDS_VARIANT':'S','HIDE_ZERO':'Y'}}]);

				BX.ready(function(){
								window['trackBarc4ca4238a0b923820dcc509a6f75849b'] = new BX.Iblock.SmartFilter({'leftSlider':'left_slider_c4ca4238a0b923820dcc509a6f75849b','rightSlider':'right_slider_c4ca4238a0b923820dcc509a6f75849b','tracker':'drag_tracker_c4ca4238a0b923820dcc509a6f75849b','trackerWrap':'drag_track_c4ca4238a0b923820dcc509a6f75849b','minInputId':'MSHOP_SMART_FILTER_P1_MIN','maxInputId':'MSHOP_SMART_FILTER_P1_MAX','minPrice':'1350.00','maxPrice':'23000.00','curMinPrice':'','curMaxPrice':'','fltMinPrice':'1350.00','fltMaxPrice':'23000.00','precision':'2','colorUnavailableActive':'colorUnavailableActive_c4ca4238a0b923820dcc509a6f75849b','colorAvailableActive':'colorAvailableActive_c4ca4238a0b923820dcc509a6f75849b','colorAvailableInactive':'colorAvailableInactive_c4ca4238a0b923820dcc509a6f75849b'});
							});



				BX.message({'PHONE':'Телефон','SOCIAL':'Социальные сети','DESCRIPTION':'Описание магазина','ITEMS':'Товары','LOGO':'Логотип','REGISTER_INCLUDE_AREA':'Текст о регистрации','AUTH_INCLUDE_AREA':'Текст об авторизации','FRONT_IMG':'Изображение компании','EMPTY_CART':'пуста','CATALOG_VIEW_MORE':'... Показать все','CATALOG_VIEW_LESS':'... Свернуть','JS_REQUIRED':'Заполните это поле!','JS_FORMAT':'Неверный формат!','JS_FILE_EXT':'Недопустимое расширение файла!','JS_PASSWORD_COPY':'Пароли не совпадают!','JS_PASSWORD_LENGTH':'Минимум 6 символов!','JS_ERROR':'Неверно заполнено поле!','JS_FILE_SIZE':'Максимальный размер 5мб!','JS_FILE_BUTTON_NAME':'Выберите файл','JS_FILE_DEFAULT':'Файл не найден','JS_DATE':'Некорректная дата!','JS_REQUIRED_LICENSES':'Согласитесь с условиями!','LICENSE_PROP':'Согласие с условиями','FANCY_CLOSE':'Закрыть','FANCY_NEXT':'Следующий','FANCY_PREV':'Предыдущий','TOP_AUTH_REGISTER':'Регистрация','CALLBACK':'Заказать звонок','UNTIL_AKC':'До конца акции','TITLE_QUANTITY_BLOCK':'Остаток','TITLE_QUANTITY':'штук','COUNTDOWN_SEC':'сек.','COUNTDOWN_MIN':'мин.','COUNTDOWN_HOUR':'час.','COUNTDOWN_DAY0':'дней','COUNTDOWN_DAY1':'день','COUNTDOWN_DAY2':'дня','COUNTDOWN_WEAK0':'Недель','COUNTDOWN_WEAK1':'Неделя','COUNTDOWN_WEAK2':'Недели','COUNTDOWN_MONTH0':'Месяцев','COUNTDOWN_MONTH1':'Месяц','COUNTDOWN_MONTH2':'Месяца','COUNTDOWN_YEAR0':'Лет','COUNTDOWN_YEAR1':'Год','COUNTDOWN_YEAR2':'Года','CATALOG_PARTIAL_BASKET_PROPERTIES_ERROR':'Заполнены не все свойства у добавляемого товара','CATALOG_EMPTY_BASKET_PROPERTIES_ERROR':'Выберите свойства товара, добавляемые в корзину в параметрах компонента','CATALOG_ELEMENT_NOT_FOUND':'Элемент не найден','ERROR_ADD2BASKET':'Ошибка добавления товара в корзину','CATALOG_SUCCESSFUL_ADD_TO_BASKET':'Успешное добавление товара в корзину','ERROR_BASKET_TITLE':'Ошибка корзины','ERROR_BASKET_PROP_TITLE':'Выберите свойства, добавляемые в корзину','ERROR_BASKET_BUTTON':'Выбрать','BASKET_TOP':'Корзина в шапке','ERROR_ADD_DELAY_ITEM':'Ошибка отложенной корзины','VIEWED_TITLE':'Ранее вы смотрели','VIEWED_BEFORE':'Ранее вы смотрели','BEST_TITLE':'Лучшие предложения','FROM':'от','TITLE_BLOCK_VIEWED_NAME':'Ранее вы смотрели','BASKET_CHANGE_TITLE':'Ваш заказ','BASKET_CHANGE_LINK':'Изменить','FULL_ORDER':'Оформление обычного заказа','BASKET_PRINT_BUTTON':'Распечатать заказ','BASKET_CLEAR_ALL_BUTTON':'Очистить','BASKET_QUICK_ORDER_BUTTON':'Быстрый заказ','BASKET_CONTINUE_BUTTON':'Продолжить покупки','BASKET_ORDER_BUTTON':'Оформить заказ','FRONT_STORES':'Заголовок со списком элементов','TOTAL_SUMM_ITEM':'Общая стоимость ','ITEM_ECONOMY':'Экономия ','JS_FORMAT_ORDER':'имеет неверный формат'})
BX.setCSSList(['/bitrix/js/main/core/css/core.css','../../bitrix/js/main/core/css/core_popup.css','../../bitrix/js/main/core/css/core_date.css','../../bitrix/templates/aspro_mshop/components/bitrix/catalog.smart.filter/main_ajax/style.css','../../bitrix/templates/aspro_mshop/css/jquery.fancybox.css','../../bitrix/templates/aspro_mshop/css/styles.css','../../bitrix/templates/aspro_mshop/css/animation/animation_ext.css','../../bitrix/templates/aspro_mshop/ajax/ajax.css','../../bitrix/templates/aspro_mshop/css/spectrum.css','../../bitrix/components/aspro/theme.mshop/templates/.default/style.css','../../bitrix/templates/aspro_mshop/styles.css','../../bitrix/templates/aspro_mshop/template_styles.css','../../bitrix/templates/aspro_mshop/themes/yellow/theme.css','../../bitrix/templates/aspro_mshop/css/media.min.css','/bitrix/templates/aspro_mshop/css/custom.css']); 
BX.setJSList(['/bitrix/js/main/core/core.js','../../bitrix/js/main/core/core_ajax.js','../../bitrix/js/main/json/json2.min.js','../../bitrix/js/main/core/core_ls.js','../../bitrix/js/main/core/core_fx.js','../../bitrix/js/main/core/core_popup.js','../../bitrix/js/main/core/core_window.js','../../bitrix/js/main/core/core_date.js','../../bitrix/js/main/session.js','../../bitrix/js/main/utils.js','../../bitrix/js/currency/core_currency.js','../../bitrix/templates/aspro_mshop/components/bitrix/catalog.smart.filter/main_ajax/script.js','../../bitrix/templates/aspro_mshop/js/jquery.actual.min.js','../../bitrix/templates/aspro_mshop/js/jqModal.js','../../bitrix/templates/aspro_mshop/js/jquery.fancybox.js','../../bitrix/templates/aspro_mshop/js/jquery.history.js','../../bitrix/templates/aspro_mshop/js/jquery.flexslider.js','../../bitrix/templates/aspro_mshop/js/jquery.validate.min.js','../../bitrix/templates/aspro_mshop/js/jquery.inputmask.bundle.min.js','../../bitrix/templates/aspro_mshop/js/jquery.easing.1.3.js','../../bitrix/templates/aspro_mshop/js/equalize.min.js','../../bitrix/templates/aspro_mshop/js/jquery.alphanumeric.js','../../bitrix/templates/aspro_mshop/js/jquery.cookie.js','../../bitrix/templates/aspro_mshop/js/jquery.plugin.min.js','../../bitrix/templates/aspro_mshop/js/jquery.countdown.min.js','../../bitrix/templates/aspro_mshop/js/jquery.countdown-ru.js','../../bitrix/templates/aspro_mshop/js/jquery.ikSelect.js','../../bitrix/templates/aspro_mshop/js/sly.js','../../bitrix/templates/aspro_mshop/js/equalize_ext.js','../../bitrix/templates/aspro_mshop/js/main.js','../../bitrix/templates/aspro_mshop/js/spectrum.js','../../bitrix/components/bitrix/search.title/script.js','../../bitrix/templates/aspro_mshop/js/custom.js','../../bitrix/templates/aspro_mshop/components/bitrix/catalog.section/catalog_block/script.js','/bitrix/templates/aspro_mshop/components/bitrix/news.list/landings_list/script.js']); 

(window.BX||top.BX).message({'LANGUAGE_ID':'ru','FORMAT_DATE':'DD.MM.YYYY','FORMAT_DATETIME':'DD.MM.YYYY HH:MI:SS','COOKIE_PREFIX':'BITRIX_SM','SERVER_TZ_OFFSET':'10800','SITE_ID':'s1','SITE_DIR':'/','USER_ID':'','SERVER_TIME':'1528713712','USER_TZ_OFFSET':'0','USER_TZ_AUTO':'Y','bitrix_sessid':'5ff03d6064bdc38781772f214aecc1fe'});

(window.BX||top.BX).message({'JS_CORE_LOADING':'Загрузка...','JS_CORE_NO_DATA':'- Нет данных -','JS_CORE_WINDOW_CLOSE':'Закрыть','JS_CORE_WINDOW_EXPAND':'Развернуть','JS_CORE_WINDOW_NARROW':'Свернуть в окно','JS_CORE_WINDOW_SAVE':'Сохранить','JS_CORE_WINDOW_CANCEL':'Отменить','JS_CORE_WINDOW_CONTINUE':'Продолжить','JS_CORE_H':'ч','JS_CORE_M':'м','JS_CORE_S':'с','JSADM_AI_HIDE_EXTRA':'Скрыть лишние','JSADM_AI_ALL_NOTIF':'Показать все','JSADM_AUTH_REQ':'Требуется авторизация!','JS_CORE_WINDOW_AUTH':'Войти','JS_CORE_IMAGE_FULL':'Полный размер'});
if(!window.BX)window.BX={};if(!window.BX.message)window.BX.message=function(mess){if(typeof mess=='object') for(var i in mess) BX.message[i]=mess[i]; return true;};
var _ba = _ba || []; _ba.push(["aid", "97b68240f50c09f67402d9cc2a1b7e25"]); _ba.push(["host", "market.aspro-demo.ru"]); (function() {var ba = document.createElement("script"); ba.type = "text/javascript"; ba.async = true;ba.src = (document.location.protocol == "https:" ? "https://" : "http://") + "bitrix.info/ba.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ba, s);})();

var arMShopOptions = {};

		BX.message({'MIN_ORDER_PRICE_TEXT':'<b>Минимальная сумма заказа #PRICE#<\/b><br/>\nПожалуйста, добавьте еще товаров в корзину ','LICENSES_TEXT':'Я согласен на <a href=\"/include/licenses_detail.php\" target=\"_blank\">обработку персональных данных<\/a>'});

		
			var arBasketAspro = {'BASKET':[],'DELAY':[],'SUBSCRIBE':[],'COMPARE':[]};
			$(document).ready(function() {
				setBasketAspro();
			});

		var arMShopOptions = ({
			"SITE_ID" : "s1",
			"SITE_DIR" : "/",
			"FORM" : ({
				"ASK_FORM_ID" : "ASK",
				"SERVICES_FORM_ID" : "SERVICES",
				"FEEDBACK_FORM_ID" : "FEEDBACK",
				"CALLBACK_FORM_ID" : "CALLBACK",
				"RESUME_FORM_ID" : "RESUME",
				"TOORDER_FORM_ID" : "TOORDER"
			}),
			"PAGES" : ({
				"FRONT_PAGE" : "",
				"BASKET_PAGE" : "",
				"ORDER_PAGE" : "",
				"PERSONAL_PAGE" : "",
				"CATALOG_PAGE" : "1"
			}),
			"PRICES" : ({
				"MIN_PRICE" : "8000",
			}),
			"THEME" : ({
				"THEME_SWITCHER" : "y",
				"COLOR_THEME" : "yellow",
				"CUSTOM_COLOR_THEME" : "01aae3",
				"LOGO_IMAGE" : "/include/logo_color.png",
				"FAVICON_IMAGE" : "/include/favicon.ico?1517403307",
				"APPLE_TOUCH_ICON_57_IMAGE" : "/include/favicon_57.png",
				"APPLE_TOUCH_ICON_72_IMAGE" : "/include/favicon_72.png",
				"BANNER_WIDTH" : "auto",
				"BANNER_ANIMATIONTYPE" : "SLIDE_HORIZONTAL",
				"BANNER_SLIDESSHOWSPEED" : "5000",
				"BANNER_ANIMATIONSPEED" : "2600",
				"HEAD" : ({
					"VALUE" : "type_1",
					"MENU" : "type_1",
					"MENU_COLOR" : "none",
					"HEAD_COLOR" : "white",
				}),
				"BASKET" : "fly",
				"STORES" : "light",
				"STORES_SOURCE" : "stores",
				"TYPE_SKU" : "type_1",
				"TYPE_VIEW_FILTER" : "vertical",
				"SHOW_BASKET_ONADDTOCART" : "Y",
				"SHOW_ONECLICKBUY_ON_BASKET_PAGE" : "Y",
				"SHOW_BASKET_PRINT" : "Y",
				"PHONE_MASK" : "+7 (999) 999-99-99",
				"VALIDATE_PHONE_MASK" : "^[+][7] [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$",
				"SCROLLTOTOP_TYPE" : "ROUND_COLOR",
				"SCROLLTOTOP_POSITION" : "PADDING",
				"SHOW_LICENCE" : "Y",
				"LICENCE_CHECKED" : "N",
				"SHOW_TOTAL_SUMM" : "N",
				"CHANGE_TITLE_ITEM" : "N",
			}),
			"COUNTERS":({
				"USE_YA_COUNTER" : "Y",
				"YANDEX_COUNTER" : "0",
				"YA_COUNTER_ID" : "",
				"YANDEX_ECOMERCE" : "N",
				"USE_FORMS_GOALS" : "COMMON",
				"USE_BASKET_GOALS" : "Y",
				"USE_1CLICK_GOALS" : "Y",
				"USE_FASTORDER_GOALS" : "Y",
				"USE_FULLORDER_GOALS" : "Y",
				"USE_DEBUG_GOALS" : "N",
				"GOOGLE_COUNTER" : "154",
				"GOOGLE_ECOMERCE" : "N",
				"TYPE":{
					"ONE_CLICK":"Покупка в 1 клик",
					"QUICK_ORDER":"Быстрый заказ",
				},
				"GOOGLE_EVENTS":{
					"ADD2BASKET": "addToCart",
					"REMOVE_BASKET": "removeFromCart",
					"CHECKOUT_ORDER": "checkout",
					"PURCHASE": "gtm.dom",
				}
				/*
				"GOALS" : {
					"TO_BASKET": "TO_BASKET",
					"ORDER_START": "ORDER_START",
					"ORDER_SUCCESS": "ORDER_SUCCESS",
					"QUICK_ORDER_SUCCESS": "QUICK_ORDER_SUCCESS",
					"ONE_CLICK_BUY_SUCCESS": "ONE_CLICK_BUY_SUCCESS",
				}
				*/
			}),
			"JS_ITEM_CLICK":({
				"precision" : 6,
				"precisionFactor" : Math.pow(10,6)
			})
		});

		$(document).ready(function(){
			$.extend( $.validator.messages, {
				required: BX.message('JS_REQUIRED'),
				email: BX.message('JS_FORMAT'),
				equalTo: BX.message('JS_PASSWORD_COPY'),
				minlength: BX.message('JS_PASSWORD_LENGTH'),
				remote: BX.message('JS_ERROR')
			});

			$.validator.addMethod(
				'regexp', function( value, element, regexp ){
					var re = new RegExp( regexp );
					return this.optional( element ) || re.test( value );
				},
				BX.message('JS_FORMAT')
			);

			$.validator.addMethod(
				'filesize', function( value, element, param ){
					return this.optional( element ) || ( element.files[0].size <= param )
				},
				BX.message('JS_FILE_SIZE')
			);

			$.validator.addMethod(
				'date', function( value, element, param ) {
					var status = false;
					if(!value || value.length <= 0){
						status = false;
					}
					else{
						// html5 date allways yyyy-mm-dd
						var re = new RegExp('^([0-9]{4})(.)([0-9]{2})(.)([0-9]{2})$');
						var matches = re.exec(value);
						if(matches){
							var composedDate = new Date(matches[1], (matches[3] - 1), matches[5]);
							status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[5]) && (composedDate.getFullYear() == matches[1]));
						}
						else{
							// firefox
							var re = new RegExp('^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$');
							var matches = re.exec(value);
							if(matches){
								var composedDate = new Date(matches[5], (matches[3] - 1), matches[1]);
								status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[1]) && (composedDate.getFullYear() == matches[5]));
							}
						}
					}
					return status;
				}, BX.message('JS_DATE')
			);

			$.validator.addMethod(
				'extension', function(value, element, param){
					param = typeof param === 'string' ? param.replace(/,/g, '|') : 'png|jpe?g|gif';
					return this.optional(element) || value.match(new RegExp('.(' + param + ')$', 'i'));
				}, BX.message('JS_FILE_EXT')
			);

			$.validator.addMethod(
				'captcha', function( value, element, params ){
					return $.validator.methods.remote.call(this, value, element,{
						url: arMShopOptions['SITE_DIR'] + 'ajax/check-captcha.php',
						type: 'post',
						data:{
							captcha_word: value,
							captcha_sid: function(){
								return $(element).closest('form').find('input[name="captcha_sid"]').val();
							}
						}
					});
				},
				BX.message('JS_ERROR')
			);

			$.validator.addClassRules({
				'phone':{
					regexp: arMShopOptions['THEME']['VALIDATE_PHONE_MASK']
				},
				'confirm_password':{
					equalTo: 'input[name="REGISTER\[PASSWORD\]"]',
					minlength: 6
				},
				'password':{
					minlength: 6
				},
				'inputfile':{
					extension: arMShopOptions['THEME']['VALIDATE_FILE_EXT'],
					filesize: 5000000
				},
				'captcha':{
					captcha: ''
				}
			});

			if(arMShopOptions['THEME']['PHONE_MASK']){
				$('input.phone').inputmask('mask', {'mask': arMShopOptions['THEME']['PHONE_MASK']});
			}

			jqmEd('feedback', arMShopOptions['FORM']['FEEDBACK_FORM_ID']);
			jqmEd('ask', arMShopOptions['FORM']['ASK_FORM_ID'], '.ask_btn');
			jqmEd('services', arMShopOptions['FORM']['SERVICES_FORM_ID'], '.services_btn','','.services_btn');
			if($('.resume_send').length){
				$('.resume_send').live('click', function(e){
					$("body").append("<span class='resume_send_wr' style='display:none;'></span>");
					jqmEd('resume', arMShopOptions['FORM']['RESUME_FORM_ID'], '.resume_send_wr','', this);
					$("body .resume_send_wr").click();
					$("body .resume_send_wr").remove();
				})
			}
			jqmEd('callback', arMShopOptions['FORM']['CALLBACK_FORM_ID'], '.callback_btn');
		});
	BX.message({
		QUANTITY_AVAILIABLE: 'Есть в наличии',
		QUANTITY_NOT_AVAILIABLE: 'Нет в наличии',
		ADD_ERROR_BASKET: 'Ошибка добавления товара в корзину',
		ADD_ERROR_COMPARE: 'Ошибка добавления товара в список сравнения',
	})
			BX.Currency.setCurrencies([{'CURRENCY':'RUB','FORMAT':{'FORMAT_STRING':'# руб.','DEC_POINT':'.','THOUSANDS_SEP':' ','DECIMALS':2,'THOUSANDS_VARIANT':'S','HIDE_ZERO':'Y'}}]);
					BX.Currency.setCurrencies([{'CURRENCY':'RUB','FORMAT':{'FORMAT_STRING':'# руб.','DEC_POINT':'.','THOUSANDS_SEP':' ','DECIMALS':2,'THOUSANDS_VARIANT':'S','HIDE_ZERO':'Y'}}]);

						touchItemBlock('.catalog_item a');

		BX.ready(function(){
			bx_rcm_get_from_cloud(
				'bigdata_recommended_products_Zz2YMH',
				{'uid':'','aid':'97b68240f50c09f67402d9cc2a1b7e25','count':'30','op':'simitems','eid':'222','type':'order','ib':'13'},
				{
					'parameters':'YTo1Mjp7czoxODoiTElORV9FTEVNRU5UX0NPVU5UIjtpOjU7czoxNDoiVEVNUExBVEVfVEhFTUUiO3M6MDoiIjtzOjEwOiJERVRBSUxfVVJMIjtzOjQyOiIvY2F0YWxvZy8jU0VDVElPTl9DT0RFX1BBVEgjLyNFTEVNRU5UX0lEIy8iO3M6MTA6IkJBU0tFVF9VUkwiO3M6ODoiL2Jhc2tldC8iO3M6MTU6IkFDVElPTl9WQVJJQUJMRSI7czoxMToiYWN0aW9uX2NiZHAiO3M6MTk6IlBST0RVQ1RfSURfVkFSSUFCTEUiO3M6MjoiaWQiO3M6MjU6IlBST0RVQ1RfUVVBTlRJVFlfVkFSSUFCTEUiO3M6ODoicXVhbnRpdHkiO3M6MjQ6IkFERF9QUk9QRVJUSUVTX1RPX0JBU0tFVCI7czoxOiJOIjtzOjIyOiJQUk9EVUNUX1BST1BTX1ZBUklBQkxFIjtzOjQ6InByb3AiO3M6MjY6IlBBUlRJQUxfUFJPRFVDVF9QUk9QRVJUSUVTIjtzOjE6Ik4iO3M6MTQ6IlNIT1dfT0xEX1BSSUNFIjtzOjE6IlkiO3M6MjE6IlNIT1dfRElTQ09VTlRfUEVSQ0VOVCI7czoxOiJZIjtzOjEwOiJQUklDRV9DT0RFIjthOjI6e2k6MDtzOjQ6IkJBU0UiO2k6MTtzOjM6Ik9QVCI7fXM6MTY6IlNIT1dfUFJJQ0VfQ09VTlQiO3M6MToiMSI7czoyMDoiUFJPRFVDVF9TVUJTQ1JJUFRJT04iO047czoxNzoiUFJJQ0VfVkFUX0lOQ0xVREUiO3M6MToiWSI7czoyMDoiVVNFX1BST0RVQ1RfUVVBTlRJVFkiO3M6MToiWSI7czo5OiJTSE9XX05BTUUiO3M6MToiWSI7czoxMDoiU0hPV19JTUFHRSI7czoxOiJZIjtzOjEyOiJTSE9XX01FQVNVUkUiO3M6MToiWSI7czoxMjoiTUVTU19CVE5fQlVZIjtOO3M6MTU6Ik1FU1NfQlROX0RFVEFJTCI7TjtzOjE4OiJNRVNTX0JUTl9TVUJTQ1JJQkUiO047czoxODoiTUVTU19OT1RfQVZBSUxBQkxFIjtOO3M6MTg6IlBBR0VfRUxFTUVOVF9DT1VOVCI7czoyOiIxMCI7czoxNzoiU0hPV19GUk9NX1NFQ1RJT04iO3M6MToiTiI7czoxMToiSUJMT0NLX1RZUEUiO3M6MTk6ImFzcHJvX21zaG9wX2NhdGFsb2ciO3M6OToiSUJMT0NLX0lEIjtzOjI6IjEzIjtzOjU6IkRFUFRIIjtzOjE6IjIiO3M6MTA6IkNBQ0hFX1RZUEUiO3M6MToiQSI7czoxMDoiQ0FDSEVfVElNRSI7czo2OiIyNTAwMDAiO3M6MTI6IkNBQ0hFX0dST1VQUyI7czoxOiJZIjtzOjEyOiJDQUNIRV9GSUxURVIiO3M6MToiWSI7czoxNjoiU0hPV19QUk9EVUNUU18xMyI7czoxOiJZIjtzOjIzOiJBRERJVElPTkFMX1BJQ1RfUFJPUF8xMyI7czoxMDoiTU9SRV9QSE9UTyI7czoxMzoiTEFCRUxfUFJPUF8xMyI7czoxOiItIjtzOjE4OiJISURFX05PVF9BVkFJTEFCTEUiO3M6MToiTiI7czoyNToiSElERV9OT1RfQVZBSUxBQkxFX09GRkVSUyI7czoxOiJOIjtzOjE2OiJDT05WRVJUX0NVUlJFTkNZIjtzOjE6IlkiO3M6MTE6IkNVUlJFTkNZX0lEIjtzOjM6IlJVQiI7czoxMDoiU0VDVElPTl9JRCI7TjtzOjEyOiJTRUNUSU9OX0NPREUiO3M6MTQ6Imdwc19uYXZpZ2F0b3J5IjtzOjE4OiJTRUNUSU9OX0VMRU1FTlRfSUQiO047czoyMDoiU0VDVElPTl9FTEVNRU5UX0NPREUiO3M6MTQ6Imdwc19uYXZpZ2F0b3J5IjtzOjI6IklEIjtpOjIyMjtzOjE2OiJQUk9QRVJUWV9DT0RFXzEzIjthOjIxOntpOjA7czo1OiJCUkFORCI7aToxO3M6OToiUFJPUF8yMDMzIjtpOjI7czoxMDoiQ09MT1JfUkVGMiI7aTozO3M6ODoiUFJPUF8xNTkiO2k6NDtzOjk6IlBST1BfMjA1MiI7aTo1O3M6OToiUFJPUF8yMDI3IjtpOjY7czo5OiJQUk9QXzIwNTMiO2k6NztzOjk6IlBST1BfMjA4MyI7aTo4O3M6OToiUFJPUF8yMDQ5IjtpOjk7czo5OiJQUk9QXzIwMjYiO2k6MTA7czo5OiJQUk9QXzIwNDQiO2k6MTE7czo4OiJQUk9QXzE2MiI7aToxMjtzOjk6IlBST1BfMjA2NSI7aToxMztzOjk6IlBST1BfMjA1NCI7aToxNDtzOjk6IlBST1BfMjAxNyI7aToxNTtzOjk6IlBST1BfMjA1NSI7aToxNjtzOjk6IlBST1BfMjA2OSI7aToxNztzOjk6IlBST1BfMjA2MiI7aToxODtzOjk6IlBST1BfMjA2MSI7aToxOTtzOjk6IkNNTDJfTElOSyI7aToyMDtzOjA6IiI7fXM6MTg6IkNBUlRfUFJPUEVSVElFU18xMyI7YTowOnt9czo4OiJSQ01fVFlQRSI7czoxMToiYW55X3NpbWlsYXIiO3M6MjA6IkRJU1BMQVlfV0lTSF9CVVRUT05TIjtzOjE6IlkiO3M6MTU6IkRJU1BMQVlfQ09NUEFSRSI7czoxOiJZIjtzOjE3OiJSQ01fQ1VSX0JBU0VfUEFHRSI7czo0NDoiL2NhdGFsb2cvYXZ0b2VsZWt0cm9uaWthL2dwc19uYXZpZ2F0b3J5LzIyMi8iO3M6MTc6IlVOSVFfQ09NUE9ORU5UX0lEIjtzOjM1OiJiaWdkYXRhX3JlY29tbWVuZGVkX3Byb2R1Y3RzX1p6MllNSCI7fQ==.9a2a583edd098241709c8c06799e490353028babc193d018cde3d2597e0f5060',
					'template': 'main_new.439262285bdd4dfcca8d69dbd783b6b3338af83b6512a19b864249d11a46953b',
					'site_id': 's1',
					'rcm': 'yes'
				}
			);
		});

BX.addCustomEvent(window, "onAjaxSuccess", function(){
		var arAjaxPageData = {'TITLE':'Навигатор Garmin Nuvi 40','WINDOW_TITLE':'Навигатор Garmin Nuvi 40 в Москве по доступным ценам - Аспро:Маркет','NAV_CHAIN':'<div class=\"breadcrumbs\" id=\"navigation\" itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\"><div class=\"bx-breadcrumb-item\" id=\"bx_breadcrumb_0\" itemprop=\"itemListElement\" itemscope itemtype=\"http://schema.org/ListItem\"><a href=\"/\" title=\"Главная\" itemprop=\"item\"><span itemprop=\"name\">Главная<\/span><meta itemprop=\"position\" content=\"1\"><\/a><\/div><span class=\"separator\">-<\/span><div class=\"bx-breadcrumb-item\" id=\"bx_breadcrumb_1\" itemprop=\"itemListElement\" itemscope itemtype=\"http://schema.org/ListItem\"><a href=\"/catalog/\" title=\"Каталог\" itemprop=\"item\"><span itemprop=\"name\">Каталог<\/span><meta itemprop=\"position\" content=\"2\"><\/a><\/div><span class=\"separator\">-<\/span><div class=\"bx-breadcrumb-item drop\" id=\"bx_breadcrumb_2\" itemprop=\"itemListElement\" itemscope itemtype=\"http://schema.org/ListItem\"><a class=\"number\" href=\"/catalog/avtoelektronika/\" itemprop=\"item\"><span itemprop=\"name\">Автоэлектроника<\/span><b class=\"space\"><\/b><span class=\"separator\"><\/span><meta itemprop=\"position\" content=\"3\"><\/a><div class=\"dropdown_wrapp\"><div class=\"dropdown\"><a href=\"/catalog/avtoelektronika/\">Автоэлектроника<\/a><a href=\"/catalog/bytovaya_tekhnika/\">Бытовая техника<\/a><a href=\"/catalog/napolnye_pokrytiya/\">Напольные покрытия<\/a><a href=\"/catalog/sadovaya_tekhnika/\">Садовая техника<\/a><a href=\"/catalog/santekhnika/\">Сантехника<\/a><a href=\"/catalog/stroitelnye_materialy/\">Строительные материалы<\/a><a href=\"/catalog/foto_i_video/\">Фото и видео<\/a><a href=\"/catalog/odezhda/\">Одежда<\/a><a href=\"/catalog/sport/\">Спортивные товары<\/a><a href=\"/catalog/elektroinstrument/\">Электроинструмент<\/a><\/div><\/div><\/div><span class=\"separator\">-<\/span><div class=\"bx-breadcrumb-item drop\" id=\"bx_breadcrumb_3\" itemprop=\"itemListElement\" itemscope itemtype=\"http://schema.org/ListItem\"><a class=\"number\" href=\"/catalog/avtoelektronika/gps_navigatory/\" itemprop=\"item\"><span itemprop=\"name\">GPS-навигаторы<\/span><b class=\"space\"><\/b><span class=\"separator\"><\/span><meta itemprop=\"position\" content=\"4\"><\/a><div class=\"dropdown_wrapp\"><div class=\"dropdown\"><a href=\"/catalog/avtoelektronika/videoregistratory/\">Видеорегистраторы<\/a><a href=\"/catalog/avtoelektronika/magnitoly/\">Магнитолы<\/a><a href=\"/catalog/avtoelektronika/akustika/\">Акустика<\/a><a href=\"/catalog/avtoelektronika/radary_detektory/\">Радары-детекторы<\/a><\/div><\/div><\/div><span class=\"separator\">-<\/span><span itemprop=\"itemListElement\" itemscope itemtype=\"http://schema.org/ListItem\"><span itemprop=\"item\"><span itemprop=\"name\">Навигатор Garmin Nuvi 40<\/span><meta itemprop=\"position\" content=\"5\"><\/span><\/span><\/div>'};
		
		//set title from offers
		if(typeof ItemObj == 'object' && Object.keys(ItemObj).length)
		{
			if('TITLE' in ItemObj && ItemObj.TITLE)
			{
				arAjaxPageData.TITLE = ItemObj.TITLE;
				arAjaxPageData.WINDOW_TITLE = ItemObj.WINDOW_TITLE;
			}
		}
		
		// if (arAjaxPageData.TITLE)
		// 	BX.ajax.UpdatePageTitle(arAjaxPageData.TITLE);
		// if (arAjaxPageData.WINDOW_TITLE || arAjaxPageData.TITLE)
		// 	BX.ajax.UpdateWindowTitle(arAjaxPageData.WINDOW_TITLE || arAjaxPageData.TITLE);
		// if (arAjaxPageData.NAV_CHAIN)
		// 	BX.ajax.UpdatePageNavChain(arAjaxPageData.NAV_CHAIN);
		// top.BX.ajax.UpdatePageData(arAjaxPageData);
	});

var viewedCounter = {
		path: '/bitrix/components/bitrix/catalog.element/ajax.php',
		params: {
			AJAX: 'Y',
			SITE_ID: "s1",
			PRODUCT_ID: "222",
			PARENT_ID: "222"
		}
	};
	BX.ready(
		BX.defer(function(){
			$('body').addClass('detail_page');
							BX.ajax.post(
					viewedCounter.path,
					viewedCounter.params
				);
						if( $('.stores_tab').length ){
				$.ajax({
					type:"POST",
					url:arMShopOptions['SITE_DIR']+"ajax/productStoreAmount.php",
					data:{'USE_STORE_PHONE':'Y','SCHEDULE':'','USE_MIN_AMOUNT':'N','MIN_AMOUNT':'10','ELEMENT_ID':222,'STORE_PATH':'/contacts/stores/#store_id#/','MAIN_TITLE':'Наличие на складах','MAX_AMOUNT':'20','USE_ONLY_MAX_AMOUNT':'Y','SHOW_EMPTY_STORE':'Y','SHOW_GENERAL_STORE_INFORMATION':'N','USER_FIELDS':['',''],'FIELDS':['',''],'STORES':['','1','2','3','4','5','']},
					success: function(data){
						var arSearch=parseUrlQuery();
						$('.tabs_content .stores_tab').html(data);
						if("oid" in arSearch)
							$('.stores_tab .sku_stores_'+arSearch.oid).show();
						else
							$('.stores_tab > div:first').show();
					}
				});
			}
		})
	);

				BX.Currency.setCurrencies([{'CURRENCY':'RUB','FORMAT':{'FORMAT_STRING':'# руб.','DEC_POINT':'.','THOUSANDS_SEP':' ','DECIMALS':2,'THOUSANDS_VARIANT':'S','HIDE_ZERO':'Y'}}]);

			if($(".specials_tabs_section.specials_slider_wrapp").length && $("#reviews_content").length){
			$("#reviews_content").after($(".specials_tabs_section.specials_slider_wrapp"));
		}
		if($("#ask_block_content").length && $("#ask_block").length){
			$("#ask_block_content").appendTo($("#ask_block"));
		}
		if($(".gifts").length && $("#reviews_content").length){
			$(".gifts").insertAfter($("#reviews_content"));
		}
		if($("#reviews_content").length && !$(".tabs_section ul.tabs_content li.current").length){
			$(".shadow.common").hide();
			$("#reviews_content").show();
		}
		if(!$(".stores_tab").length){
			$('.item-stock .store_view').removeClass('store_view');
		}
		viewItemCounter('222','BASE');


function _processform_8BACKi(){
	var obForm = top.BX('bxajaxid_db78d452891e89cbad30c21730c932f4_8BACKi').form;
	top.BX.bind(obForm, 'submit', function() {BX.ajax.submitComponentForm(this, 'comp_db78d452891e89cbad30c21730c932f4', true)});
	top.BX.removeCustomEvent('onAjaxSuccess', _processform_8BACKi);
}
if (top.BX('bxajaxid_db78d452891e89cbad30c21730c932f4_8BACKi'))
	_processform_8BACKi();
else
	top.BX.addCustomEvent('onAjaxSuccess', _processform_8BACKi);

BX.ready(function(){
	window["UC"] = (!!window["UC"] ? window["UC"] : {});
	window["UC"]["lREPLIERZZtH"] = new FTRList({
		id : [],
		form : BX('REPLIERZZtH'),
		preorder : 'Y',
		pageNumber : 1,
		pageCount : 0	});
	window["UC"]["fREPLIERZZtH"] = new FTRForm({
		form : BX('REPLIERZZtH'),
		editorName : 'oLHE',
		editorId : 'idLHEZZtH'
	});
		BX.addCustomEvent(this.form, 'onBeforeShow', function(obj) {
		var link = BX('swREPLIERZZtH');
		if (link) {
			link.innerHTML = BX.message('MINIMIZED_EXPAND_TEXT');
			BX.removeClass(BX.addClass(link.parentNode, "reviews-expanded"), "reviews-minimized");
		}
	});
	BX.addCustomEvent(this.form, 'onBeforeHide', function(obj) {
		var link = BX('swREPLIERZZtH');
		if (link) {
			link.innerHTML = BX.message('MINIMIZED_MINIMIZE_TEXT');
			BX.removeClass(BX.addClass(link.parentNode, "reviews-minimized"), "reviews-expanded");
		}
	});
	});

		function LoadLHE_idLHEZZtH()
		{
			function _lheScriptloaded()
			{
				if (!window.JCLightHTMLEditor)
					return setTimeout(_lheScriptloaded, 10);

								// User's customization scripts here
				try{
	LHEButtons['Translit'].handler = function(pBut)
	{
		var but = pBut;
		var translit = function(textbody)
		{
			if (typeof but.pLEditor.bTranslited == 'undefined')
				but.pLEditor.bTranslited = false;

			var arStack = new Array();
			var i = 0;

			function bPushTag(str, p1, offset, s)
			{
				arStack.push(p1);
				return "\001";
			}

			function bPopTag(str, p1, offset, s)
			{
				return arStack.shift();
			}


			var r = new RegExp("(\\[[^\\]]*\\])", 'gi');
			textbody = textbody.replace(r, bPushTag);

			if ( but.pLEditor.bTranslited == false)
			{
				for (i=0; i<capitEngLettersReg.length; i++) textbody = textbody.replace(capitEngLettersReg[i], capitRusLetters[i]);
				for (i=0; i<smallEngLettersReg.length; i++) textbody = textbody.replace(smallEngLettersReg[i], smallRusLetters[i]);
				but.pLEditor.bTranslited = true;
			}
			else
			{
				for (i=0; i<capitRusLetters.length; i++) textbody = textbody.replace(capitRusLettersReg[i], capitEngLetters[i]);
				for (i=0; i<smallRusLetters.length; i++) textbody = textbody.replace(smallRusLettersReg[i], smallEngLetters[i]);
				but.pLEditor.bTranslited = false;
			}

			textbody = textbody.replace(new RegExp("\001", "g"), bPopTag);

			return textbody;
		}

		pBut.pLEditor.SaveContent();
		var content = translit(pBut.pLEditor.GetContent());

		BX.defer(function()
		{
			if (window.oLHE.sEditorMode == 'code')
				window.oLHE.SetContent(content);
			else
				window.oLHE.SetEditorContent(content);
		})();
	}
	LHEButtons['SmileList']['SetSmile'] = function(k, pList)
	{
		//pList.pLEditor.RestoreSelectionRange();
		var oSmile = pList.oSmiles[k];

		if (pList.pLEditor.sEditorMode == 'code') // In BB or in HTML
			pList.pLEditor.WrapWith(' ', ' ', oSmile.code);
		else // WYSIWYG
			pList.pLEditor.InsertHTML('<img id="' + pList.pLEditor.SetBxTag(false, {tag: "smile", params: oSmile}) + '" src="' + oSmile.path + '" title="' + oSmile.name + '"/>');

		if (pList.bOpened)
			pList.Close();
	};
	LHEButtons['SmileList']['parser']['obj']['UnParse'] = function(bxTag, pNode, pLEditor)
	{
		if (!bxTag.params || !bxTag.params.code)
			return '';
		return ' ' + bxTag.params.code + ' ';
	};
	LHEButtons['ForumVideo'] = {
		id : 'ForumInputVideo',
		src : '/bitrix/components/bitrix/forum/templates/.default/images/bbcode/font_video.gif',
		name : 'Вставить видео',
		handler: function(pBut)
		{
			pBut.pLEditor.OpenDialog({id : 'ForumVideo', obj: false});
		},
		OnBeforeCreate: function(pLEditor, pBut)
			{
				// Disable in non BBCode mode in html
				pBut.disableOnCodeView = !pLEditor.bBBCode || pLEditor.arConfig.bConvertContentFromBBCodes;
				return pBut;
			},
		parser: {
			name: 'forumvideo',
			obj: {
				Parse: function(sName, sContent, pLEditor)
				{
					sContent = sContent.replace(/\[VIDEO\s*?width=(\d+)\s*?height=(\d+)\s*\]((?:\s|\S)*?)\[\/VIDEO\]/ig, function(str, w, h, src)
					{
						var
							w = parseInt(w) || 400,
							h = parseInt(h) || 300,
							src = BX.util.trim(src);

						return '<img id="' + pLEditor.SetBxTag(false, {tag: "forumvideo", params: {value : src}}) + '" src="/bitrix/images/1.gif" class="bxed-video" width=' + w + ' height=' + h + ' title="' + BX.message.Video + ": " + src + '" />';
					});
					return sContent;
				},
				UnParse: function(bxTag, pNode, pLEditor)
				{
					if (bxTag.tag == 'forumvideo')
					{
						return "[VIDEO WIDTH=" + pNode.arAttributes["width"] + " HEIGHT=" + pNode.arAttributes["height"] + "]" + bxTag.params.value + "[/VIDEO]";
					}
					return "";
				}
			}
		}
	}
	if (!LHEButtons['InputVideo'])
		LHEButtons['InputVideo'] = LHEButtons['ForumVideo'];

	window.LHEDailogs['ForumVideo'] = function(pObj)
	{
		var str = '<table width="100%"><tr>' +
			'<td class="lhe-dialog-label lhe-label-imp"><label for="' + pObj.pLEditor.id + 'lhed_forum_video_path"><b>Путь к видео:</b></label></td>' +
			'<td class="lhe-dialog-param">' +
			'<input id="' + pObj.pLEditor.id + 'lhed_forum_video_path" value="" size="30"/>' +
			'</td>' +
		'</tr><tr>' +
			'<td></td>' +
			'<td style="padding: 0!important; font-size: 11px!important;">Например: <i>http://www.youtube.com/watch?v=j8YcLyzJOEg<\/i> <br/> или  <i>www.mysite.com/video/my_video.mp4<\/i></td>' +
		'</tr><tr>' +
			'<td class="lhe-dialog-label lhe-label-imp"><label for="' + pObj.pLEditor.id + 'lhed_forum_video_width">' + BX.message.ImageSizing + ':</label></td>' +
			'<td class="lhe-dialog-param">' +
				'<input id="' + pObj.pLEditor.id + 'lhed_forum_video_width" value="" size="4"/>' +
				' x ' +
				'<input id="' + pObj.pLEditor.id + 'lhed_forum_video_height" value="" size="4" />' +
			'</td>' +
		'</tr></table>';

		return {
			title: "Вставить видео",
			innerHTML : str,
			width: 480,
			OnLoad: function()
			{
				pObj.pPath = BX(pObj.pLEditor.id + "lhed_forum_video_path");
				pObj.pWidth = BX(pObj.pLEditor.id + "lhed_forum_video_width");
				pObj.pHeight = BX(pObj.pLEditor.id + "lhed_forum_video_height");

				pObj.pLEditor.focus(pObj.pPath);
			},
			OnSave: function()
			{
				pLEditor = window.oLHE;

				var
					src = BX.util.trim(pObj.pPath.value),
					w = parseInt(pObj.pWidth.value) || 400,
					h = parseInt(pObj.pHeight.value) || 300;

				if (src == "")
					return;

				if (pLEditor.sEditorMode == 'code' && pLEditor.bBBCode) // BB Codes
				{
					pLEditor.WrapWith("", "", "[VIDEO WIDTH=" + w + " HEIGHT=" + h + "]" + src + "[/VIDEO]");
				}
				else if(pLEditor.sEditorMode == 'html') // WYSIWYG
				{
					pLEditor.InsertHTML('<img id="' + pLEditor.SetBxTag(false, {tag: "forumvideo", params: {value : src}}) +
							'" src="/bitrix/images/1.gif" class="bxed-video" width=' + w + ' height=' + h +
							' title="' + BX.message.Video + ": " + src + '" />');
				}
			}
		};
	};
	}
				catch(e){alert('Errors in customization scripts! ' + e);}
				
				if (
					true || 
					JCLightHTMLEditor.items['idLHEZZtH'] == undefined ||
					!document.body.contains(JCLightHTMLEditor.items['idLHEZZtH'].pFrame)
				)
				{
					top.oLHE = window.oLHE = new window.JCLightHTMLEditor({'id':'idLHEZZtH','content':'','bBBCode':true,'bUseFileDialogs':false,'bUseMedialib':false,'arSmiles':[{'set_id':'5','name':'С улыбкой','image':'/bitrix/images/main/smiles/5/icon_smile.png','typing':':) :-)','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_smile.png','code':':)'},{'set_id':'5','name':'Шутливо','image':'/bitrix/images/main/smiles/5/icon_wink.png','typing':';) ;-)','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_wink.png','code':';)'},{'set_id':'5','name':'Широкая улыбка','image':'/bitrix/images/main/smiles/5/icon_biggrin.png','typing':':D :-D','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_biggrin.png','code':':D'},{'set_id':'5','name':'Здорово','image':'/bitrix/images/main/smiles/5/icon_cool.png','typing':'8) 8-)','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_cool.png','code':'8)'},{'set_id':'5','name':'Печально','image':'/bitrix/images/main/smiles/5/icon_sad.png','typing':':( :-(','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_sad.png','code':':('},{'set_id':'5','name':'Нет слов','image':'/bitrix/images/main/smiles/5/icon_neutral.png','typing':':| :-|','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_neutral.png','code':':|'},{'set_id':'5','name':'Озадаченно','image':'/bitrix/images/main/smiles/5/icon_confuse.png','typing':':\\  :-\\  :/ :-/','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_confuse.png','code':':\\'},{'set_id':'5','name':'Очень грустно','image':'/bitrix/images/main/smiles/5/icon_cry.png','typing':':cry: :~(','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_cry.png','code':':cry:'},{'set_id':'5','name':'Со злостью','image':'/bitrix/images/main/smiles/5/icon_evil.png','typing':':evil: &gt;:-&lt;','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_evil.png','code':':evil:'},{'set_id':'5','name':'Удивленно','image':'/bitrix/images/main/smiles/5/icon_eek.png','typing':':o :-o :shock:','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_eek.png','code':':o'},{'set_id':'5','name':'Смущенно','image':'/bitrix/images/main/smiles/5/icon_redface.png','typing':':oops:','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_redface.png','code':':oops:'},{'set_id':'5','name':'Поцелуй','image':'/bitrix/images/main/smiles/5/icon_kiss.png','typing':':{} :-{}','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_kiss.png','code':':{}'},{'set_id':'5','name':'Вопрос','image':'/bitrix/images/main/smiles/5/icon_question.png','typing':':?:','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_question.png','code':':?:'},{'set_id':'5','name':'Восклицание','image':'/bitrix/images/main/smiles/5/icon_exclaim.png','typing':':!:','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_exclaim.png','code':':!:'},{'set_id':'5','name':'Идея','image':'/bitrix/images/main/smiles/5/icon_idea.png','typing':':idea:','width':'16','height':'16','path':'/bitrix/images/main/smiles/5/icon_idea.png','code':':idea:'}],'arFonts':['Arial','Verdana','Times New Roman','Courier','Tahoma','Georgia','Optima','Impact','Geneva','Helvetica'],'arFontSizes':{'1':'xx-small','2':'x-small','3':'small','4':'medium','5':'large','6':'x-large','7':'xx-large'},'inputName':'REVIEW_TEXT','inputId':'','videoSettings':{'maxWidth':'640','maxHeight':'480','WMode':'transparent','windowless':true,'bufferLength':'20','skin':'/bitrix/components/bitrix/player/mediaplayer/skins/bitrix.swf','logo':''},'bSaveOnBlur':true,'bResizable':true,'autoResizeSaveSize':true,'bManualResize':true,'bAutoResize':true,'bReplaceTabToNbsp':true,'bSetDefaultCodeView':false,'bBBParseImageSize':true,'smileCountInToolbar':'3','bQuoteFromSelection':true,'bConvertContentFromBBCodes':false,'oneGif':'/bitrix/images/1.gif','imagePath':'/bitrix/images/fileman/light_htmledit/','width':'100%','height':'200px','toolbarConfig':['Bold','Italic','Underline','Strike','Spoiler','ForeColor','FontList','FontSizeList','Quote','Code','CreateLink','DeleteLink','Image','InputVideo','Table','Justify','InsertOrderedList','InsertUnorderedList','SmileList','MentionUser','UploadFile','RemoveFormat','Source','Translit'],'bParceBBImageSize':true,'ctrlEnterHandler':'reviewsCtrlEnterHandlerZZtH'});
					BX.onCustomEvent(window, 'LHE_ConstructorInited', [window.oLHE]);
				}
			}

			if (!window.JCLightHTMLEditor)
			{
				BX.loadCSS("../../../../bitrix/js/fileman/light_editor/light_editor4914.css?1517403312");
								LHE_MESS = window.LHE_MESS = "{'Image':'Изображение','Video':'Видео','ImageSizing':'Размеры (Ш х В)'}"; (window.BX||top.BX).message({'CreateLink':'Ссылка','EditLink':'Редактировать ссылку','DialogSave':'Сохранить','DialogCancel':'Отменить','DialogClose':'Закрыть','Width':'Ширина','Height':'Высота','Source':'Режим HTML-кода','BBSource':'Режим BB-Code','On':'включено','Off':'выключено','Anchor':'Якорь','DeleteLink':'Удалить ссылку','Image':'Изображение','EditImage':'Редактировать изображение','SpecialChar':'Вставить спецсимвол','Bold':'Жирный','Italic':'Курсив','Underline':'Подчеркнутый','Strike':'Зачеркнутый','RemoveFormat':'Удалить форматирование','InsertHr':'Вставить горизонтальный разделитель','JustifyLeft':'По левому краю','JustifyCenter':'По центру','JustifyRight':'По правому краю','JustifyFull':'По ширине','Outdent':'Уменьшить отступ','Indent':'Увеличить отступ','OrderedList':'Нумерованный список','UnorderedList':'Список с маркерами','InsertTable':'Таблица','SmileList':'Смайлы','HeaderList':'Формат','FontList':'Шрифт','FontSizeList':'Размер шрифта','BackColor':'Цвет фона','ForeColor':'Цвет шрифта','Video':'Видео','InsertVideo':'Вставить видео','EditVideo':'Редактировать видео','VideoProps':'Параметры видео','VideoPath':'Путь к видеофайлу','VideoPreviewPath':'Путь к рисунку предпросмотра','VideoAutoplay':'Автоматически начать проигрывать','VideoVolume':'Уровень громкости','LinkProps':'Параметры ссылки','LinkText':'Текст ссылки','LinkHref':'Адрес ссылки','LinkTitle':'Всплывающая подсказка','LinkTarget':'Открыть ссылку в ','LinkTarget_def':'- не указывать - ','LinkTarget_blank':'новом окне','LinkTarget_parent':'родительском окне','LinkTarget_self':'этом окне','LinkTarget_top':'самом наружном','AnchorProps':'Параметры якоря','AnchorName':'Название якоря','ImageProps':'Параметры изображения','ImageSrc':'Путь к изображению','ImageTitle':'Всплывающая подсказка','ImgAlign':'Выравнивание','ImgAlignTop':'по верхней границе','ImgAlignRight':'справа','ImgAlignBottom':'по нижней границе','ImgAlignLeft':'слева','ImgAlignMiddle':'по центру','ImageSizing':'Размеры (Ш х В)','ImageSaveProp':'Сохранять пропорции','ImagePreview':'Предпросмотр','Normal':'Обычный','Heading':'Заголовок','Preformatted':'Преформатирован','DefaultColor':'По умолчанию','DragFloatingToolbar':'Панель инструментов','Quote':'Оформление текста в виде цитаты','InsertCode':'Оформление текста в виде кода','InsertCut':'Оформление текста предпросмотра','Translit':'Перекодировка транслит/латиница','CutTitle':'Ограничение текста предпросмотра','TableRows':'Строк','TableCols':'Столбцов','TableModel':'Макет','ListItems':'Элементы списка','AddLI':'Добавить пункт','AddLITitle':'Добавить пункт в список (Enter)','DelListItem':'Удалить пункт из списка','ResizerTitle':'Изменить размер','CodeDel':'Нажмите (Shift + Del) чтобы удалить весь фрагмент кода','OnPasteProcessing':'Идет обработка вставленного текста...'});
								BX.loadScript(["/bitrix/js/fileman/light_editor/le_dialogs.js?1517403312", "../../../../bitrix/js/fileman/light_editor/le_controls4914.js?1517403312", "../../../../bitrix/js/fileman/light_editor/le_toolbarbuttons4914.js?1517403312", "/bitrix/js/fileman/light_editor/le_core.js?1517403312"], _lheScriptloaded);
			}
			else
			{
				_lheScriptloaded();
			}
		}

					BX.ready(function(){LoadLHE_idLHEZZtH();});
BX.ready(function(){
		BX.message({
			no_topic_name : 'Вы должны ввести название темы. ',
			no_message : 'Вы должны ввести сообщение. ',
			max_len : 'Максимальная длина сообщения #MAX_LENGTH# символов. Всего символов: #LENGTH#.',
			f_author : ' пишет:\n',
			f_cdm : 'Сообщение будет удалено без возможности восстановления. Удалить? ',
			f_show : 'Показать',
			f_hide : 'Скрыть',
			f_wait : 'Подождите...',
			MINIMIZED_EXPAND_TEXT : 'Оставить отзыв',
			MINIMIZED_MINIMIZE_TEXT : 'Свернуть форму'
		});
		BX.viewElementBind(BX('REPLIERZZtHcontainer'), {},
			function(node){
				return BX.type.isElementNode(node) && (node.getAttribute('data-bx-viewer') || node.getAttribute('data-bx-image'));
			}
		);
		$('a.blog-p-user-name').on('click', function(e){
			e.preventDefault();
		})
			});

var smallEngLettersReg = new Array(/e'/g, /ch/g, /sh/g, /yo/g, /jo/g, /zh/g, /yu/g, /ju/g, /ya/g, /ja/g, /a/g, /b/g, /v/g, /g/g, /d/g, /e/g, /z/g, /i/g, /j/g, /k/g, /l/g, /m/g, /n/g, /o/g, /p/g, /r/g, /s/g, /t/g, /u/g, /f/g, /h/g, /c/g, /w/g, /~/g, /y/g, /'/g);
var smallRusLetters = new Array("э", "ч", "ш", "ё", "ё", "ж", "ю", "ю", "я", "я", "а", "б", "в", "г", "д", "е", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "щ", "ъ", "ы", "ь");

var capitEngLettersReg = new Array(
	/Ch/g, /Sh/g, 
	/Yo/g, /Zh/g, 
	/Yu/g, /Ya/g, 
	/E'/g, /CH/g, /SH/g, /YO/g, /JO/g, /ZH/g, /YU/g, /JU/g, /YA/g, /JA/g, /A/g, /B/g, /V/g, /G/g, /D/g, /E/g, /Z/g, /I/g, /J/g, /K/g, /L/g, /M/g, /N/g, /O/g, /P/g, /R/g, /S/g, /T/g, /U/g, /F/g, /H/g, /C/g, /W/g, /Y/g);
var capitRusLetters = new Array(
	"Ч", "Ш",
	"Ё", "Ж",
	"Ю", "Я",
	"Э", "Ч", "Ш", "Ё", "Ё", "Ж", "Ю", "Ю", "\Я", "\Я", "А", "Б", "В", "Г", "Д", "Е", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Щ", "Ы");

var smallRusLettersReg = new Array(/э/g, /ч/g, /ш/g, /ё/g, /ё/g,/ж/g, /ю/g, /ю/g, /я/g, /я/g, /а/g, /б/g, /в/g, /г/g, /д/g, /е/g, /з/g, /и/g, /й/g, /к/g, /л/g, /м/g, /н/g, /о/g, /п/g, /р/g, /с/g, /т/g, /у/g, /ф/g, /х/g, /ц/g, /щ/g, /ъ/g, /ы/g, /ь/g );
var smallEngLetters = new Array("e", "ch", "sh", "yo", "jo", "zh", "yu", "ju", "ya", "ja", "a", "b", "v", "g", "d", "e", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "w", "~", "y", "'");

var capitRusLettersReg = new Array(
	/Ч(?=[^А-Я])/g, /Ш(?=[^А-Я])/g, 
	/Ё(?=[^А-Я])/g, /Ж(?=[^А-Я])/g, 
	/Ю(?=[^А-Я])/g, /Я(?=[^А-Я])/g, 
	/Э/g, /Ч/g, /Ш/g, /Ё/g, /Ё/g, /Ж/g, /Ю/g, /Ю/g, /Я/g, /Я/g, /А/g, /Б/g, /В/g, /Г/g, /Д/g, /Е/g, /З/g, /И/g, /Й/g, /К/g, /Л/g, /М/g, /Н/g, /О/g, /П/g, /Р/g, /С/g, /Т/g, /У/g, /Ф/g, /Х/g, /Ц/g, /Щ/g, /Ъ/g, /Ы/g, /Ь/g);
var capitEngLetters = new Array(
	"Ch", "Sh",
	"Yo", "Zh",
	"Yu", "Ya",
	"E", "CH", "SH", "YO", "JO", "ZH", "YU", "JU", "YA", "JA", "A", "B", "V", "G", "D", "E", "Z", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "W", "~", "Y", "'");

BX.message({
		QUANTITY_AVAILIABLE: 'Есть в наличии',
		QUANTITY_NOT_AVAILIABLE: 'Нет в наличии',
		ADD_ERROR_BASKET: '',
		ADD_ERROR_COMPARE: '',
		ONE_CLICK_BUY: 'Купить в 1 клик',
		SITE_ID: 's1'
	})

BX(function () {
	BX.Sale['GiftMainProductsClass_dHPVd2'] = new BX.Sale.GiftMainProductsClass({
		contextAjaxData:  {
			parameters:'YTo1NTp7czoxODoiUEFHRV9FTEVNRU5UX0NPVU5UIjtzOjE6IjMiO3M6MTE6IkJMT0NLX1RJVExFIjtzOjQyOiLP7uvz9+jy5SD98u7yIPLu4uDwIOIg7+7k4PDu6iDv8Ogg7+7q8+/q5ToiO3M6MTc6Ik9GRkVSU19GSUVMRF9DT0RFIjthOjM6e2k6MDtzOjQ6Ik5BTUUiO2k6MTtzOjE1OiJQUkVWSUVXX1BJQ1RVUkUiO2k6MjtzOjE1OiJERVRBSUxfUEFHRV9VUkwiO31zOjIwOiJPRkZFUlNfUFJPUEVSVFlfQ09ERSI7YTo1OntpOjA7czo3OiJBUlRJQ0xFIjtpOjE7czo1OiJTSVpFUyI7aToyO3M6OToiQ09MT1JfUkVGIjtpOjQ7czoxNToiUFJFVklFV19QSUNUVVJFIjtpOjU7czoxNDoiREVUQUlMX1BJQ1RVUkUiO31zOjk6IkFKQVhfTU9ERSI7TjtzOjExOiJJQkxPQ0tfVFlQRSI7czoxOToiYXNwcm9fbXNob3BfY2F0YWxvZyI7czo5OiJJQkxPQ0tfSUQiO2k6MTM7czoxODoiRUxFTUVOVF9TT1JUX0ZJRUxEIjtzOjI6IklEIjtzOjE4OiJFTEVNRU5UX1NPUlRfT1JERVIiO3M6NDoiREVTQyI7czoxMToiRklMVEVSX05BTUUiO3M6MTI6InNlYXJjaEZpbHRlciI7czoxMToiU0VDVElPTl9VUkwiO3M6Mjk6Ii9jYXRhbG9nLyNTRUNUSU9OX0NPREVfUEFUSCMvIjtzOjEwOiJERVRBSUxfVVJMIjtzOjQyOiIvY2F0YWxvZy8jU0VDVElPTl9DT0RFX1BBVEgjLyNFTEVNRU5UX0lEIy8iO3M6MTA6IkJBU0tFVF9VUkwiO3M6ODoiL2Jhc2tldC8iO3M6MTU6IkFDVElPTl9WQVJJQUJMRSI7czo2OiJhY3Rpb24iO3M6MTk6IlBST0RVQ1RfSURfVkFSSUFCTEUiO3M6MjoiaWQiO3M6MTk6IlNFQ1RJT05fSURfVkFSSUFCTEUiO3M6MTA6IlNFQ1RJT05fSUQiO3M6MTA6IkNBQ0hFX1RZUEUiO3M6MToiQSI7czoxMDoiQ0FDSEVfVElNRSI7czo2OiIyNTAwMDAiO3M6MTI6IkNBQ0hFX0dST1VQUyI7czoxOiJZIjtzOjk6IlNFVF9USVRMRSI7YjoxO3M6MTM6IlBST1BFUlRZX0NPREUiO2E6MTc6e2k6MDtzOjU6IkJSQU5EIjtpOjE7czoxMjoiQ01MMl9BUlRJQ0xFIjtpOjI7czoxMzoiVklERU9fWU9VVFVCRSI7aTozO3M6OToiUFJPUF8yMDMzIjtpOjQ7czoxMDoiQ09MT1JfUkVGMiI7aTo1O3M6ODoiUFJPUF8xNTkiO2k6NjtzOjk6IlBST1BfMjA1MiI7aTo3O3M6OToiUFJPUF8yMDI3IjtpOjg7czo5OiJQUk9QXzIwNTMiO2k6OTtzOjk6IlBST1BfMjA4MyI7aToxMDtzOjk6IlBST1BfMjA0OSI7aToxMTtzOjk6IlBST1BfMjAyNiI7aToxMjtzOjk6IlBST1BfMjA0NCI7aToxMztzOjg6IlBST1BfMTYyIjtpOjE0O3M6OToiUFJPUF8yMDY1IjtpOjE1O3M6OToiUFJPUF8yMDU0IjtpOjE2O3M6OToiUFJPUF8yMDE3Ijt9czoxMDoiUFJJQ0VfQ09ERSI7YToyOntpOjA7czo0OiJCQVNFIjtpOjE7czozOiJPUFQiO31zOjE1OiJVU0VfUFJJQ0VfQ09VTlQiO2I6MDtzOjE2OiJTSE9XX1BSSUNFX0NPVU5UIjtpOjE7czoyNzoiU0hPV19ESVNDT1VOVF9USU1FX0VBQ0hfU0tVIjtOO3M6MTc6IlBSSUNFX1ZBVF9JTkNMVURFIjtiOjE7czoxNjoiQ09OVkVSVF9DVVJSRU5DWSI7czoxOiJZIjtzOjExOiJDVVJSRU5DWV9JRCI7czozOiJSVUIiO3M6MTg6IkhJREVfTk9UX0FWQUlMQUJMRSI7czoxOiJOIjtzOjE0OiJURU1QTEFURV9USEVNRSI7czowOiIiO3M6MTM6IkFERF9QSUNUX1BST1AiO3M6MTA6Ik1PUkVfUEhPVE8iO3M6MTA6IkxBQkVMX1BST1AiO3M6MDoiIjtzOjE5OiJPRkZFUl9BRERfUElDVF9QUk9QIjtzOjEwOiJNT1JFX1BIT1RPIjtzOjE2OiJPRkZFUl9UUkVFX1BST1BTIjthOjI6e2k6MDtzOjU6IlNJWkVTIjtpOjE7czo5OiJDT0xPUl9SRUYiO31zOjIxOiJTSE9XX0RJU0NPVU5UX1BFUkNFTlQiO3M6MToiWSI7czoxNDoiU0hPV19PTERfUFJJQ0UiO3M6MToiWSI7czoxMjoiTUVTU19CVE5fQlVZIjtzOjA6IiI7czoyMjoiTUVTU19CVE5fQUREX1RPX0JBU0tFVCI7czowOiIiO3M6MTU6Ik1FU1NfQlROX0RFVEFJTCI7czowOiIiO3M6MTg6Ik1FU1NfTk9UX0FWQUlMQUJMRSI7czowOiIiO3M6MjA6IkFERF9UT19CQVNLRVRfQUNUSU9OIjthOjE6e2k6MDtzOjM6IkFERCI7fXM6MTY6IlNIT1dfQ0xPU0VfUE9QVVAiO3M6MToiTiI7czoxNToiRElTUExBWV9DT01QQVJFIjtiOjE7czoxMjoiQ09NUEFSRV9QQVRIIjtzOjA6IiI7czoxODoiU0hPV19ESVNDT1VOVF9USU1FIjtOO3M6MTE6IlNBTEVfU1RJS0VSIjtOO3M6MTI6IlNIT1dfTUVBU1VSRSI7czoxOiJZIjtzOjEyOiJESVNQTEFZX1RZUEUiO3M6NToiYmxvY2siO3M6MTE6IlNIT1dfUkFUSU5HIjtOO3M6MjA6IkRJU1BMQVlfV0lTSF9CVVRUT05TIjtzOjE6IlkiO3M6MTM6IkRFRkFVTFRfQ09VTlQiO3M6MToiMSI7czo4OiJPRkZFUl9JRCI7aToyMjI7czoxMDoiU0VDVElPTl9JRCI7czoyOiIxMCI7czoxMDoiRUxFTUVOVF9JRCI7aToyMjI7czoxODoiU0dNUF9DVVJfQkFTRV9QQUdFIjtzOjQ0OiIvY2F0YWxvZy9hdnRvZWxla3Ryb25pa2EvZ3BzX25hdmlnYXRvcnkvMjIyLyI7fQ==.3bc2ed02d8bf393998797dc6d5e31721b3300cb579b665a9ef562925d449b63c',
			template: 'main.0e655c9bf1cac4c0e91f44cf8fc313ffbe90af467b0932edcfeedd9102aa9117',
			site_id: 's1'
		},
		injectId:  'sale_gift_main_products_1793847466',
		mainProductState:  'YToyOntpOjA7YTowOnt9aToxO2E6MDp7fX0=.2a763de9c1e084318efd541d8732cdea63c9012972c3e7df65e9b632781b0708',
		isGift:  false,
		productId:  222,
		offerId: 222	});
	if(!$('.bx_item_list_you_looked_horizontal .all_wrapp').length){
		$('.bx_item_list_you_looked_horizontal').remove();
	}
});
BX.message({});

		BX.ready(function(){

			var currentProductId = 222;
			var giftAjaxData = {
				'parameters':'YTo1MTp7czoyMToiU0hPV19VTkFCTEVfU0tVX1BST1BTIjtOO3M6MTk6IlBST0RVQ1RfSURfVkFSSUFCTEUiO3M6MjoiaWQiO3M6MTU6IkFDVElPTl9WQVJJQUJMRSI7czo2OiJhY3Rpb24iO3M6MTY6IkJVWV9VUkxfVEVNUExBVEUiO3M6NjM6Ii9jYXRhbG9nL2F2dG9lbGVrdHJvbmlrYS9ncHNfbmF2aWdhdG9yeS8yMjIvP2FjdGlvbj1CVVkmaWQ9I0lEIyI7czoxNjoiQUREX1VSTF9URU1QTEFURSI7czo3MDoiL2NhdGFsb2cvYXZ0b2VsZWt0cm9uaWthL2dwc19uYXZpZ2F0b3J5LzIyMi8/YWN0aW9uPUFERDJCQVNLRVQmaWQ9I0lEIyI7czoyMjoiU1VCU0NSSUJFX1VSTF9URU1QTEFURSI7czo3NzoiL2NhdGFsb2cvYXZ0b2VsZWt0cm9uaWthL2dwc19uYXZpZ2F0b3J5LzIyMi8/YWN0aW9uPVNVQlNDUklCRV9QUk9EVUNUJmlkPSNJRCMiO3M6MjA6IkNPTVBBUkVfVVJMX1RFTVBMQVRFIjtzOjc5OiIvY2F0YWxvZy9hdnRvZWxla3Ryb25pa2EvZ3BzX25hdmlnYXRvcnkvMjIyLz9hY3Rpb249QUREX1RPX0NPTVBBUkVfTElTVCZpZD0jSUQjIjtzOjIxOiJPRkZFUl9ISURFX05BTUVfUFJPUFMiO3M6MToiTiI7czoyMToiU0hPV19ESVNDT1VOVF9QRVJDRU5UIjtzOjE6IlkiO3M6MTQ6IlNIT1dfT0xEX1BSSUNFIjtzOjE6IlkiO3M6MTg6IlBBR0VfRUxFTUVOVF9DT1VOVCI7czoxOiIzIjtzOjE4OiJMSU5FX0VMRU1FTlRfQ09VTlQiO3M6MToiMyI7czoxNjoiSElERV9CTE9DS19USVRMRSI7czoxOiJOIjtzOjExOiJCTE9DS19USVRMRSI7czoyNToiwvvh5fDo8uUg7uTo7SDo5yDv7uTg8Oru4iI7czoxNToiVEVYVF9MQUJFTF9HSUZUIjtzOjc6Is/u5ODw7uoiO3M6OToiU0hPV19OQU1FIjtzOjE6IlkiO3M6MTA6IlNIT1dfSU1BR0UiO3M6MToiWSI7czoxMjoiTUVTU19CVE5fQlVZIjtzOjc6IsL74fDg8vwiO3M6MTY6IlNIT1dfUFJPRFVDVFNfMTMiO3M6MToiWSI7czoxODoiSElERV9OT1RfQVZBSUxBQkxFIjtzOjE6Ik4iO3M6MjA6IlBST0RVQ1RfU1VCU0NSSVBUSU9OIjtzOjE6Ik4iO3M6MTU6Ik1FU1NfQlROX0RFVEFJTCI7TjtzOjE4OiJNRVNTX0JUTl9TVUJTQ1JJQkUiO3M6MDoiIjtzOjE0OiJURU1QTEFURV9USEVNRSI7TjtzOjEwOiJQUklDRV9DT0RFIjthOjI6e2k6MDtzOjQ6IkJBU0UiO2k6MTtzOjM6Ik9QVCI7fXM6MTY6IlNIT1dfUFJJQ0VfQ09VTlQiO2k6MTtzOjE3OiJQUklDRV9WQVRfSU5DTFVERSI7YjoxO3M6MTY6IkNPTlZFUlRfQ1VSUkVOQ1kiO3M6MToiWSI7czoxMToiQ1VSUkVOQ1lfSUQiO3M6MzoiUlVCIjtzOjEwOiJCQVNLRVRfVVJMIjtzOjg6Ii9iYXNrZXQvIjtzOjI0OiJBRERfUFJPUEVSVElFU19UT19CQVNLRVQiO3M6MToiWSI7czoyMjoiUFJPRFVDVF9QUk9QU19WQVJJQUJMRSI7czo0OiJwcm9wIjtzOjI2OiJQQVJUSUFMX1BST0RVQ1RfUFJPUEVSVElFUyI7czoxOiJOIjtzOjIwOiJVU0VfUFJPRFVDVF9RVUFOVElUWSI7czoxOiJOIjtzOjE3OiJPRkZFUl9UUkVFX1BST1BTXyI7YToyOntpOjA7czo1OiJTSVpFUyI7aToxO3M6OToiQ09MT1JfUkVGIjt9czoxNjoiQ0FSVF9QUk9QRVJUSUVTXyI7YToyOntpOjA7czo1OiJTSVpFUyI7aToxO3M6OToiQ09MT1JfUkVGIjt9czoyNToiUFJPRFVDVF9RVUFOVElUWV9WQVJJQUJMRSI7czo4OiJxdWFudGl0eSI7czoxMjoiQ0FDSEVfR1JPVVBTIjtzOjE6IlkiO3M6MTg6IlNIT1dfRElTQ09VTlRfVElNRSI7TjtzOjExOiJTQUxFX1NUSUtFUiI7TjtzOjEyOiJTSE9XX01FQVNVUkUiO3M6MToiWSI7czoxMjoiRElTUExBWV9UWVBFIjtzOjU6ImJsb2NrIjtzOjExOiJTSE9XX1JBVElORyI7TjtzOjE1OiJESVNQTEFZX0NPTVBBUkUiO2I6MTtzOjIwOiJESVNQTEFZX1dJU0hfQlVUVE9OUyI7czoxOiJZIjtzOjEzOiJERUZBVUxUX0NPVU5UIjtzOjE6IjEiO3M6ODoiVFlQRV9TS1UiO3M6MToiWSI7czoyNzoiU0hPV19ESVNDT1VOVF9USU1FX0VBQ0hfU0tVIjtOO3M6MjQ6IlBPVEVOVElBTF9QUk9EVUNUX1RPX0JVWSI7YTo3OntzOjI6IklEIjtpOjIyMjtzOjY6Ik1PRFVMRSI7czo3OiJjYXRhbG9nIjtzOjIyOiJQUk9EVUNUX1BST1ZJREVSX0NMQVNTIjtzOjIzOiJDQ2F0YWxvZ1Byb2R1Y3RQcm92aWRlciI7czo4OiJRVUFOVElUWSI7TjtzOjk6IklCTE9DS19JRCI7aToxMztzOjE2OiJQUklNQVJZX09GRkVSX0lEIjtOO3M6NzoiU0VDVElPTiI7YTo0OntzOjI6IklEIjtzOjI6IjEwIjtzOjk6IklCTE9DS19JRCI7czoyOiIxMyI7czoxMToiTEVGVF9NQVJHSU4iO3M6MToiMiI7czoxMjoiUklHSFRfTUFSR0lOIjtzOjE6IjMiO319czoxMDoiQ0FDSEVfVFlQRSI7czoxOiJBIjtzOjE3OiJTR1BfQ1VSX0JBU0VfUEFHRSI7czo0NDoiL2NhdGFsb2cvYXZ0b2VsZWt0cm9uaWthL2dwc19uYXZpZ2F0b3J5LzIyMi8iO30=.d25ff530ca93245e27a9c9f4f359d9a9c7b3b07cf38e745dc92b66a0f3504ead',
				'template': 'main.75a4bd6f3521afff3e8f14700ae1bea2bdfb42bd4585c29a4e290db8be291aaf',
				'site_id': 's1'
			};

			bx_sale_gift_product_load(
				'sale_gift_product_51315750',
				giftAjaxData
			);

			BX.addCustomEvent('onCatalogStoreProductChange', function(offerId){
				if(currentProductId == offerId)
				{
					return;
				}
				currentProductId = offerId;
				bx_sale_gift_product_load(
					'sale_gift_product_51315750',
					giftAjaxData,
					{offerId: offerId}
				);
			});
		});

$(".thumbs").flexslider({
					animation: "slide",
					selector: ".slides_block > li",
					slideshow: false,
					animationSpeed: 600,
					directionNav: true,
					controlNav: false,
					pauseOnHover: true,
					itemWidth: 60,
					itemMargin: 10,
					animationLoop: true,
					controlsContainer: ".thumbs_navigation",
				});

				$(".item_slider.flex").flexslider({
					animation: "slide",
					slideshow: true,
					slideshowSpeed: 10000,
					animationSpeed: 600,
					directionNav: false,
					pauseOnHover: true,
					animationLoop: false,
				});

				$('.item_slider .thumbs li').first().addClass('current');

				$('.item_slider .thumbs').delegate('li:not(.current)', 'click', function(){
					$(this).addClass('current').siblings().removeClass('current').parents('.item_slider').find('.slides li').fadeOut(333);
					$(this).parents('.item_slider').find('.slides li').eq($(this).index()).addClass('current').stop().fadeIn(333);
				});

	setViewedProduct(222, {'PRODUCT_ID':'222','IBLOCK_ID':'13','NAME':'Навигатор Garmin Nuvi 40','DETAIL_PAGE_URL':'/catalog/avtoelektronika/gps_navigatory/222/','PICTURE_ID':'531','CATALOG_MEASURE_NAME':'шт','MIN_PRICE':{'PRICE_ID':'1','ID':'51','CAN_ACCESS':'Y','CAN_BUY':'Y','MIN_PRICE':'Y','VALUE_NOVAT':'5990','VALUE_VAT':'5990','VATRATE_VALUE':'0','DISCOUNT_VALUE_NOVAT':'5391','DISCOUNT_VALUE_VAT':'5391','DISCOUNT_VATRATE_VALUE':'0','CURRENCY':'RUB','ROUND_VALUE_VAT':'5391','ROUND_VALUE_NOVAT':'5391','ROUND_VATRATE_VALUE':'0','VALUE':'5990','UNROUND_DISCOUNT_VALUE':'5391','DISCOUNT_VALUE':'5391','DISCOUNT_DIFF':'599','DISCOUNT_DIFF_PERCENT':'10','PRINT_VALUE_NOVAT':'5 990 руб.','PRINT_VALUE_VAT':'5 990 руб.','PRINT_VATRATE_VALUE':'0 руб.','PRINT_DISCOUNT_VALUE_NOVAT':'5 391 руб.','PRINT_DISCOUNT_VALUE_VAT':'5 391 руб.','PRINT_DISCOUNT_VATRATE_VALUE':'0 руб.','PRINT_VALUE':'5 990 руб.','PRINT_DISCOUNT_VALUE':'5 391 руб.','PRINT_DISCOUNT_DIFF':'599 руб.'},'CAN_BUY':'Y','IS_OFFER':'N','WITH_OFFERS':'N'});

var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/gps_navigatory/222/',
	'CONTAINER_ID': 'title-search',
	'INPUT_ID': 'title-search-input',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/gps_navigatory/222/',
	'CONTAINER_ID': 'title-search2',
	'INPUT_ID': 'title-search-input2',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input2").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input2").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/gps_navigatory/222/',
	'CONTAINER_ID': 'title-search4',
	'INPUT_ID': 'title-search-input4',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input4").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input4").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

var jsControl = new JCTitleSearch({
	//'WAIT_IMAGE': '/bitrix/themes/.default/images/wait.gif',
	'AJAX_PAGE' : '/catalog/avtoelektronika/gps_navigatory/222/',
	'CONTAINER_ID': 'title-search3',
	'INPUT_ID': 'title-search-input3',
	'MIN_QUERY_LEN': 2
});
$("#title-search-input3").focus(function() { $(this).parents("form").find("button[type='submit']").addClass("hover"); });
$("#title-search-input3").blur(function() { $(this).parents("form").find("button[type='submit']").removeClass("hover"); });

		var arMShopOptions = {};

		BX.message({'MIN_ORDER_PRICE_TEXT':'<b>Минимальная сумма заказа #PRICE#<\/b><br/>\nПожалуйста, добавьте еще товаров в корзину ','LICENSES_TEXT':'Я согласен на <a href=\"/include/licenses_detail.php\" target=\"_blank\">обработку персональных данных<\/a>'});


		var arMShopOptions = ({
			"SITE_ID" : "s1",
			"SITE_DIR" : "/",
			"FORM" : ({
				"ASK_FORM_ID" : "ASK",
				"SERVICES_FORM_ID" : "SERVICES",
				"FEEDBACK_FORM_ID" : "FEEDBACK",
				"CALLBACK_FORM_ID" : "CALLBACK",
				"RESUME_FORM_ID" : "RESUME",
				"TOORDER_FORM_ID" : "TOORDER"
			}),
			"PAGES" : ({
				"FRONT_PAGE" : "",
				"BASKET_PAGE" : "",
				"ORDER_PAGE" : "",
				"PERSONAL_PAGE" : "",
				"CATALOG_PAGE" : "1"
			}),
			"PRICES" : ({
				"MIN_PRICE" : "8000",
			}),
			"THEME" : ({
				"THEME_SWITCHER" : "y",
				"COLOR_THEME" : "yellow",
				"CUSTOM_COLOR_THEME" : "01aae3",
				"LOGO_IMAGE" : "/include/logo_color.png",
				"FAVICON_IMAGE" : "/include/favicon.ico?1517403307",
				"APPLE_TOUCH_ICON_57_IMAGE" : "/include/favicon_57.png",
				"APPLE_TOUCH_ICON_72_IMAGE" : "/include/favicon_72.png",
				"BANNER_WIDTH" : "auto",
				"BANNER_ANIMATIONTYPE" : "SLIDE_HORIZONTAL",
				"BANNER_SLIDESSHOWSPEED" : "5000",
				"BANNER_ANIMATIONSPEED" : "2600",
				"HEAD" : ({
					"VALUE" : "type_1",
					"MENU" : "type_1",
					"MENU_COLOR" : "none",
					"HEAD_COLOR" : "white",
				}),
				"BASKET" : "fly",
				"STORES" : "light",
				"STORES_SOURCE" : "stores",
				"TYPE_SKU" : "type_1",
				"TYPE_VIEW_FILTER" : "vertical",
				"SHOW_BASKET_ONADDTOCART" : "Y",
				"SHOW_ONECLICKBUY_ON_BASKET_PAGE" : "Y",
				"SHOW_BASKET_PRINT" : "Y",
				"PHONE_MASK" : "+7 (999) 999-99-99",
				"VALIDATE_PHONE_MASK" : "^[+][7] [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$",
				"SCROLLTOTOP_TYPE" : "ROUND_COLOR",
				"SCROLLTOTOP_POSITION" : "PADDING",
				"SHOW_LICENCE" : "Y",
				"LICENCE_CHECKED" : "N",
				"SHOW_TOTAL_SUMM" : "N",
				"CHANGE_TITLE_ITEM" : "N",
			}),
			"COUNTERS":({
				"USE_YA_COUNTER" : "Y",
				"YANDEX_COUNTER" : "0",
				"YA_COUNTER_ID" : "",
				"YANDEX_ECOMERCE" : "N",
				"USE_FORMS_GOALS" : "COMMON",
				"USE_BASKET_GOALS" : "Y",
				"USE_1CLICK_GOALS" : "Y",
				"USE_FASTORDER_GOALS" : "Y",
				"USE_FULLORDER_GOALS" : "Y",
				"USE_DEBUG_GOALS" : "N",
				"GOOGLE_COUNTER" : "154",
				"GOOGLE_ECOMERCE" : "N",
				"TYPE":{
					"ONE_CLICK":"Покупка в 1 клик",
					"QUICK_ORDER":"Быстрый заказ",
				},
				"GOOGLE_EVENTS":{
					"ADD2BASKET": "addToCart",
					"REMOVE_BASKET": "removeFromCart",
					"CHECKOUT_ORDER": "checkout",
					"PURCHASE": "gtm.dom",
				}
				/*
				"GOALS" : {
					"TO_BASKET": "TO_BASKET",
					"ORDER_START": "ORDER_START",
					"ORDER_SUCCESS": "ORDER_SUCCESS",
					"QUICK_ORDER_SUCCESS": "QUICK_ORDER_SUCCESS",
					"ONE_CLICK_BUY_SUCCESS": "ONE_CLICK_BUY_SUCCESS",
				}
				*/
			}),
			"JS_ITEM_CLICK":({
				"precision" : 6,
				"precisionFactor" : Math.pow(10,6)
			})
		});

		$(document).ready(function(){
			$.extend( $.validator.messages, {
				required: BX.message('JS_REQUIRED'),
				email: BX.message('JS_FORMAT'),
				equalTo: BX.message('JS_PASSWORD_COPY'),
				minlength: BX.message('JS_PASSWORD_LENGTH'),
				remote: BX.message('JS_ERROR')
			});

			$.validator.addMethod(
				'regexp', function( value, element, regexp ){
					var re = new RegExp( regexp );
					return this.optional( element ) || re.test( value );
				},
				BX.message('JS_FORMAT')
			);

			$.validator.addMethod(
				'filesize', function( value, element, param ){
					return this.optional( element ) || ( element.files[0].size <= param )
				},
				BX.message('JS_FILE_SIZE')
			);

			$.validator.addMethod(
				'date', function( value, element, param ) {
					var status = false;
					if(!value || value.length <= 0){
						status = false;
					}
					else{
						// html5 date allways yyyy-mm-dd
						var re = new RegExp('^([0-9]{4})(.)([0-9]{2})(.)([0-9]{2})$');
						var matches = re.exec(value);
						if(matches){
							var composedDate = new Date(matches[1], (matches[3] - 1), matches[5]);
							status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[5]) && (composedDate.getFullYear() == matches[1]));
						}
						else{
							// firefox
							var re = new RegExp('^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$');
							var matches = re.exec(value);
							if(matches){
								var composedDate = new Date(matches[5], (matches[3] - 1), matches[1]);
								status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[1]) && (composedDate.getFullYear() == matches[5]));
							}
						}
					}
					return status;
				}, BX.message('JS_DATE')
			);

			$.validator.addMethod(
				'extension', function(value, element, param){
					param = typeof param === 'string' ? param.replace(/,/g, '|') : 'png|jpe?g|gif';
					return this.optional(element) || value.match(new RegExp('.(' + param + ')$', 'i'));
				}, BX.message('JS_FILE_EXT')
			);

			$.validator.addMethod(
				'captcha', function( value, element, params ){
					return $.validator.methods.remote.call(this, value, element,{
						url: arMShopOptions['SITE_DIR'] + 'ajax/check-captcha.php',
						type: 'post',
						data:{
							captcha_word: value,
							captcha_sid: function(){
								return $(element).closest('form').find('input[name="captcha_sid"]').val();
							}
						}
					});
				},
				BX.message('JS_ERROR')
			);

			$.validator.addClassRules({
				'phone':{
					regexp: arMShopOptions['THEME']['VALIDATE_PHONE_MASK']
				},
				'confirm_password':{
					equalTo: 'input[name="REGISTER\[PASSWORD\]"]',
					minlength: 6
				},
				'password':{
					minlength: 6
				},
				'inputfile':{
					extension: arMShopOptions['THEME']['VALIDATE_FILE_EXT'],
					filesize: 5000000
				},
				'captcha':{
					captcha: ''
				}
			});

			if(arMShopOptions['THEME']['PHONE_MASK']){
				$('input.phone').inputmask('mask', {'mask': arMShopOptions['THEME']['PHONE_MASK']});
			}

			jqmEd('feedback', arMShopOptions['FORM']['FEEDBACK_FORM_ID']);
			jqmEd('ask', arMShopOptions['FORM']['ASK_FORM_ID'], '.ask_btn');
			jqmEd('services', arMShopOptions['FORM']['SERVICES_FORM_ID'], '.services_btn','','.services_btn');
			if($('.resume_send').length){
				$('.resume_send').live('click', function(e){
					$("body").append("<span class='resume_send_wr' style='display:none;'></span>");
					jqmEd('resume', arMShopOptions['FORM']['RESUME_FORM_ID'], '.resume_send_wr','', this);
					$("body .resume_send_wr").click();
					$("body .resume_send_wr").remove();
				})
			}
			jqmEd('callback', arMShopOptions['FORM']['CALLBACK_FORM_ID'], '.callback_btn');
		});

		BX.ready(function(){
			bx_rcm_get_from_cloud(
				'bigdata_recommended_products_Zz2YMH',
				{'uid':'e272c05000f749e95daad25094a4f436','aid':'97b68240f50c09f67402d9cc2a1b7e25','count':'30','op':'simitems','eid':'222','ib':'13'},
				{
					'parameters':'YTo1Mjp7czoxODoiTElORV9FTEVNRU5UX0NPVU5UIjtpOjU7czoxNDoiVEVNUExBVEVfVEhFTUUiO3M6MDoiIjtzOjEwOiJERVRBSUxfVVJMIjtzOjQyOiIvY2F0YWxvZy8jU0VDVElPTl9DT0RFX1BBVEgjLyNFTEVNRU5UX0lEIy8iO3M6MTA6IkJBU0tFVF9VUkwiO3M6ODoiL2Jhc2tldC8iO3M6MTU6IkFDVElPTl9WQVJJQUJMRSI7czoxMToiYWN0aW9uX2NiZHAiO3M6MTk6IlBST0RVQ1RfSURfVkFSSUFCTEUiO3M6MjoiaWQiO3M6MjU6IlBST0RVQ1RfUVVBTlRJVFlfVkFSSUFCTEUiO3M6ODoicXVhbnRpdHkiO3M6MjQ6IkFERF9QUk9QRVJUSUVTX1RPX0JBU0tFVCI7czoxOiJOIjtzOjIyOiJQUk9EVUNUX1BST1BTX1ZBUklBQkxFIjtzOjQ6InByb3AiO3M6MjY6IlBBUlRJQUxfUFJPRFVDVF9QUk9QRVJUSUVTIjtzOjE6Ik4iO3M6MTQ6IlNIT1dfT0xEX1BSSUNFIjtzOjE6IlkiO3M6MjE6IlNIT1dfRElTQ09VTlRfUEVSQ0VOVCI7czoxOiJZIjtzOjEwOiJQUklDRV9DT0RFIjthOjI6e2k6MDtzOjQ6IkJBU0UiO2k6MTtzOjM6Ik9QVCI7fXM6MTY6IlNIT1dfUFJJQ0VfQ09VTlQiO3M6MToiMSI7czoyMDoiUFJPRFVDVF9TVUJTQ1JJUFRJT04iO047czoxNzoiUFJJQ0VfVkFUX0lOQ0xVREUiO3M6MToiWSI7czoyMDoiVVNFX1BST0RVQ1RfUVVBTlRJVFkiO3M6MToiWSI7czo5OiJTSE9XX05BTUUiO3M6MToiWSI7czoxMDoiU0hPV19JTUFHRSI7czoxOiJZIjtzOjEyOiJTSE9XX01FQVNVUkUiO3M6MToiWSI7czoxMjoiTUVTU19CVE5fQlVZIjtOO3M6MTU6Ik1FU1NfQlROX0RFVEFJTCI7TjtzOjE4OiJNRVNTX0JUTl9TVUJTQ1JJQkUiO047czoxODoiTUVTU19OT1RfQVZBSUxBQkxFIjtOO3M6MTg6IlBBR0VfRUxFTUVOVF9DT1VOVCI7czoyOiIxMCI7czoxNzoiU0hPV19GUk9NX1NFQ1RJT04iO3M6MToiTiI7czoxMToiSUJMT0NLX1RZUEUiO3M6MTk6ImFzcHJvX21zaG9wX2NhdGFsb2ciO3M6OToiSUJMT0NLX0lEIjtzOjI6IjEzIjtzOjU6IkRFUFRIIjtzOjE6IjIiO3M6MTA6IkNBQ0hFX1RZUEUiO3M6MToiQSI7czoxMDoiQ0FDSEVfVElNRSI7czo2OiIyNTAwMDAiO3M6MTI6IkNBQ0hFX0dST1VQUyI7czoxOiJZIjtzOjEyOiJDQUNIRV9GSUxURVIiO3M6MToiWSI7czoxNjoiU0hPV19QUk9EVUNUU18xMyI7czoxOiJZIjtzOjIzOiJBRERJVElPTkFMX1BJQ1RfUFJPUF8xMyI7czoxMDoiTU9SRV9QSE9UTyI7czoxMzoiTEFCRUxfUFJPUF8xMyI7czoxOiItIjtzOjE4OiJISURFX05PVF9BVkFJTEFCTEUiO3M6MToiTiI7czoyNToiSElERV9OT1RfQVZBSUxBQkxFX09GRkVSUyI7czoxOiJOIjtzOjE2OiJDT05WRVJUX0NVUlJFTkNZIjtzOjE6IlkiO3M6MTE6IkNVUlJFTkNZX0lEIjtzOjM6IlJVQiI7czoxMDoiU0VDVElPTl9JRCI7TjtzOjEyOiJTRUNUSU9OX0NPREUiO3M6MTQ6Imdwc19uYXZpZ2F0b3J5IjtzOjE4OiJTRUNUSU9OX0VMRU1FTlRfSUQiO047czoyMDoiU0VDVElPTl9FTEVNRU5UX0NPREUiO3M6MTQ6Imdwc19uYXZpZ2F0b3J5IjtzOjI6IklEIjtpOjIyMjtzOjE2OiJQUk9QRVJUWV9DT0RFXzEzIjthOjIxOntpOjA7czo1OiJCUkFORCI7aToxO3M6OToiUFJPUF8yMDMzIjtpOjI7czoxMDoiQ09MT1JfUkVGMiI7aTozO3M6ODoiUFJPUF8xNTkiO2k6NDtzOjk6IlBST1BfMjA1MiI7aTo1O3M6OToiUFJPUF8yMDI3IjtpOjY7czo5OiJQUk9QXzIwNTMiO2k6NztzOjk6IlBST1BfMjA4MyI7aTo4O3M6OToiUFJPUF8yMDQ5IjtpOjk7czo5OiJQUk9QXzIwMjYiO2k6MTA7czo5OiJQUk9QXzIwNDQiO2k6MTE7czo4OiJQUk9QXzE2MiI7aToxMjtzOjk6IlBST1BfMjA2NSI7aToxMztzOjk6IlBST1BfMjA1NCI7aToxNDtzOjk6IlBST1BfMjAxNyI7aToxNTtzOjk6IlBST1BfMjA1NSI7aToxNjtzOjk6IlBST1BfMjA2OSI7aToxNztzOjk6IlBST1BfMjA2MiI7aToxODtzOjk6IlBST1BfMjA2MSI7aToxOTtzOjk6IkNNTDJfTElOSyI7aToyMDtzOjA6IiI7fXM6MTg6IkNBUlRfUFJPUEVSVElFU18xMyI7YTowOnt9czo4OiJSQ01fVFlQRSI7czoxMToiYW55X3NpbWlsYXIiO3M6MjA6IkRJU1BMQVlfV0lTSF9CVVRUT05TIjtzOjE6IlkiO3M6MTU6IkRJU1BMQVlfQ09NUEFSRSI7czoxOiJZIjtzOjE3OiJSQ01fQ1VSX0JBU0VfUEFHRSI7czo0NDoiL2NhdGFsb2cvYXZ0b2VsZWt0cm9uaWthL2dwc19uYXZpZ2F0b3J5LzIyMi8iO3M6MTc6IlVOSVFfQ09NUE9ORU5UX0lEIjtzOjM1OiJiaWdkYXRhX3JlY29tbWVuZGVkX3Byb2R1Y3RzX1p6MllNSCI7fQ==.9a2a583edd098241709c8c06799e490353028babc193d018cde3d2597e0f5060',
					'template': 'main_new.439262285bdd4dfcca8d69dbd783b6b3338af83b6512a19b864249d11a46953b',
					'site_id': 's1',
					'rcm': 'yes'
				}
			);
		});

			touchItemBlock('.catalog_item a');

				if (!window.GLOBAL_arMapObjects)
		window.GLOBAL_arMapObjects = {};

	function initCustomControls(map){
		$('.map-wr').each(function(){
			var zoomIn = $(this).find('.zoomIn'),
				zoomOut = $(this).find('.zoomOut');
			zoomIn.on('click', function(){
				map.setZoom(map.getZoom() + 1);
			});
			zoomOut.on('click', function() {
				map.setZoom(map.getZoom() - 1);
			});
		});
	}

	function init_MAP_PxWcPa(){
		if (!window.google && !window.google.maps)
			return;

		var opts = {
			zoom: 18,
			center: new google.maps.LatLng(55.755672158728, 37.607617247221),
					scrollwheel: false,
		disableDoubleClickZoom: false,
		draggable: true,
		keyboardShortcuts: false,
		mapTypeControl: false,
		zoomControl: false,
		scaleControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			streetViewControl: false,
			panControl : false,

		};
		
		window.GLOBAL_arMapObjects['MAP_PxWcPa'] = new window.google.maps.Map(BX("BX_GMAP_MAP_PxWcPa"), opts);
		initCustomControls(window.GLOBAL_arMapObjects['MAP_PxWcPa']);
		
		google.maps.event.addDomListener(window, "resize", function() {
		   var center = window.GLOBAL_arMapObjects['MAP_PxWcPa'].getCenter();
		   google.maps.event.trigger(window.GLOBAL_arMapObjects['MAP_PxWcPa'], "resize");
		   window.GLOBAL_arMapObjects['MAP_PxWcPa'].setCenter(center); 
		});

			}

			BX.ready(init_MAP_PxWcPa);
	
	/* if map inits in hidden block (display:none),
	*  after the block showed,
	*  for properly showing map this function must be called
	*/
	function BXMapGoogleAfterShow(mapId){
		if(google.maps !== undefined && window.GLOBAL_arMapObjects[mapId] !== undefined)
			google.maps.event.trigger(window.GLOBAL_arMapObjects[mapId],'resize');
	}