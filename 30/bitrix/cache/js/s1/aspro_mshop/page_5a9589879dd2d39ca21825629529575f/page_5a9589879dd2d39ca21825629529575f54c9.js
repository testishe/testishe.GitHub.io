
; /* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/aspro_mshop/components/bitrix/catalog.element/landing/script.js?152455765395";s:6:"source";s:81:"/bitrix/templates/aspro_mshop/components/bitrix/catalog.element/landing/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).on('click', ".scroll_btn", function(){
	scroll_block($('#right_block_ajax'));
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/bitrix/templates/aspro_mshop/components/bitrix/news.list/landings_list/script.min.js?1524557653346";s:6:"source";s:81:"/bitrix/templates/aspro_mshop/components/bitrix/news.list/landings_list/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){$(".landings_list .more>span").on("click",function(){var e=$(this),t=e.data("opened"),d=e.data("text"),n=e.text(),a=e.closest(".landings_list").find(".nvisible");"N"==t?(a.slideDown(400),e.addClass("opened").data("opened","Y")):(a.slideUp(400),e.removeClass("opened").data("opened","N")),e.data("text",n).text(d)})});
/* End */
;; /* /bitrix/templates/aspro_mshop/components/bitrix/catalog.element/landing/script.js?152455765395*/
; /* /bitrix/templates/aspro_mshop/components/bitrix/news.list/landings_list/script.min.js?1524557653346*/
