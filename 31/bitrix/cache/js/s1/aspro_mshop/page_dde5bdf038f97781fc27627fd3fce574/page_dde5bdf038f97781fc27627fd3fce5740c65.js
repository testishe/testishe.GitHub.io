
; /* Start:"a:4:{s:4:"full";s:108:"/bitrix/templates/aspro_mshop/components/bitrix/catalog.smart.filter/main_ajax/script.min.js?152455765318922";s:6:"source";s:88:"/bitrix/templates/aspro_mshop/components/bitrix/catalog.smart.filter/main_ajax/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function JCSmartFilter(t,e,i){this.ajaxURL=t,this.form=null,this.timer=null,this.cacheKey="",this.cache=[],this.viewMode=e,this.normal_url=!1,this.bindUrlToButton("set_filter",i.SEF_SET_FILTER_URL),this.sef=!0,this.bindUrlToButton("del_filter",i.SEF_DEL_FILTER_URL),i.SEF_DEL_FILTER_URL||(this.normal_url=!0)}JCSmartFilter.prototype.keyup=function(t){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(BX.delegate(function(){this.reload(t)},this),500)},JCSmartFilter.prototype.click=function(t){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(BX.delegate(function(){this.reload(t)},this),500)},JCSmartFilter.prototype.reload=function(t){if(""!==this.cacheKey)return this.timer&&clearTimeout(this.timer),void(this.timer=setTimeout(BX.delegate(function(){this.reload(t)},this),1e3));if(this.cacheKey="|",this.position=BX.pos(t,!0),this.form=BX.findParent(t,{tag:"form"}),this.form){var e=[];e[0]={name:"ajax",value:"y"},this.gatherInputsValues(e,BX.findChildren(this.form,{tag:new RegExp("^(input|select)$","i")},!0));for(var i=0;i<e.length;i++)this.cacheKey+=e[i].name+":"+e[i].value+"|";if(this.cache[this.cacheKey])this.curFilterinput=t,this.postHandler(this.cache[this.cacheKey],!0);else{if(this.sef){var r=BX("set_filter"),s=BX("del_filter");r.disabled=!0,s.disabled=!0}this.curFilterinput=t,BX.ajax.loadJSON(this.ajaxURL,this.values2post(e),BX.delegate(this.postHandler,this))}}},JCSmartFilter.prototype.updateItem=function(t,e,i){if("N"===e.PROPERTY_TYPE||e.PRICE){var r=window["trackBar"+t];!r&&e.ENCODED_ID&&(r=window["trackBar"+e.ENCODED_ID]),r&&e.VALUES&&(e.VALUES.MIN&&(e.VALUES.MIN.FILTERED_VALUE?r.setMinFilteredValue(e.VALUES.MIN.FILTERED_VALUE):r.setMinFilteredValue(e.VALUES.MIN.VALUE)),e.VALUES.MAX&&(e.VALUES.MAX.FILTERED_VALUE?r.setMaxFilteredValue(e.VALUES.MAX.FILTERED_VALUE):r.setMaxFilteredValue(e.VALUES.MAX.VALUE)),"Y"==i&&(r.leftPercent=r.rightPercent=0,$("#"+e.VALUES.MIN.CONTROL_ID).val(""),$("#"+e.VALUES.MAX.CONTROL_ID).val(""),$("#left_slider_"+e.ENCODED_ID).css({left:"0%"}),$("#colorUnavailableActive_"+e.ENCODED_ID).css({left:"0%",right:"0%"}),$("#colorAvailableInactive_"+e.ENCODED_ID).css({left:"0%",right:"0%"}),$("#colorAvailableActive_"+e.ENCODED_ID).css({left:"0%",right:"0%"}),$("#right_slider_"+e.ENCODED_ID).css({right:"0%"})))}else if(e.VALUES)for(var s in e.VALUES)if(e.VALUES.hasOwnProperty(s)){var l=e.VALUES[s],n=BX(l.CONTROL_ID);if(n){var a=document.querySelector('[data-role="label_'+l.CONTROL_ID+'"]');input=document.querySelector('[name="'+l.CONTROL_ID+'"]'),l.DISABLED?a?(BX.addClass(a,"disabled"),input&&(input.setAttribute("disabled","disabled"),BX.addClass(input,"disabled"))):BX.addClass(n.parentNode,"disabled"):a?(BX.removeClass(a,"disabled"),input&&(input.removeAttribute("disabled"),BX.removeClass(input,"disabled")),$(n)&&($(n).prop("disabled",!1),$(n).removeClass("disabled")),$(a).find("span").removeClass("disabled")):BX.removeClass(n.parentNode,"disabled"),"Y"==i&&("checkbox"!=$(n).attr("type")&&"radio"!=$(n).attr("type")||$(n).attr("checked")&&$(n).prop("checked",!1)),l.hasOwnProperty("ELEMENT_COUNT")&&(a=document.querySelector('[data-role="count_'+l.CONTROL_ID+'"]'))&&(a.innerHTML=l.ELEMENT_COUNT)}}},JCSmartFilter.prototype.postHandlerAjax=function(t,e){$("#content").html(t)},JCSmartFilter.prototype.setUrlSortDisplay=function(t){var e="",i="";$(".sort_btn").each(function(){(e=$(this).attr("href").split("?"))[0]=t,i=e.join("?"),$(this).attr("href",i)})},JCSmartFilter.prototype.filterCatalog=function(t,e){window.History.enabled||null!=window.history.pushState?history.pushState(null,document.title,t):location.href=t,this.setUrlSortDisplay(t),$.ajax({url:t,type:"GET",data:{ajax_get:"Y",ajax_get_filter:"Y"},success:function(t){if($(".countdown").countdown("toggle"),$("#right_block_ajax").html(t),jqmEd("ask",arMShopOptions.FORM.ASK_FORM_ID,".ask_btn"),$(".catalog_block").ready(function(){touchItemBlock(".catalog_item a"),$(".catalog_block").equalize({children:".catalog_item .cost",reset:!0}),$(".catalog_block").equalize({children:".catalog_item .item-title",reset:!0}),$(".catalog_block").equalize({children:".catalog_item .counter_block",reset:!0}),$(".catalog_block").equalize({children:".catalog_item_wrapp",reset:!0})}),setStatusButton(),BX.onCustomEvent("onAjaxSuccessFilter"),"Y"==e){var i=BX("set_filter"),r=BX("del_filter");i.disabled=!1,r.disabled=!1}}})},JCSmartFilter.prototype.postHandler=function(t,e){var i,r,s=BX("modef"),l=BX("modef_mobile"),n=BX("modef_num"),a=BX("modef_num_mobile"),o="N";if("RESET_FORM"in t&&(document.getElementById("smartfilter").reset(),o="Y"),t&&t.ITEMS){for(var c in t.ITEMS)t.ITEMS.hasOwnProperty(c)&&this.updateItem(c,t.ITEMS[c],o);"Y"==o&&$(".bx_filter_select_block").length&&$(".bx_filter_select_block").each(function(){$(this).closest(".bx_filter_parameters_box").attr("property_id");var t=$(this).find(".input_wr_all input:first-child").data("title");$(this).find(".bx_filter_select_text").text(t),$(this).find(".bx_filter_select_popup li label").removeClass("selected")}),s&&n&&(n.innerHTML=t.ELEMENT_COUNT,a.innerHTML=t.ELEMENT_COUNT,i=BX.findChildren(s,{tag:"A"},!0),hrefFILTER_mobile=BX.findChildren(l,{tag:"A"},!0),t.FILTER_URL&&i&&(i[0].href=BX.util.htmlspecialcharsback(t.FILTER_URL),hrefFILTER_mobile[0].href=BX.util.htmlspecialcharsback(t.FILTER_URL)),t.FILTER_AJAX_URL&&t.COMPONENT_CONTAINER_ID&&(BX.unbindAll(i[0]),BX.unbindAll(hrefFILTER_mobile[0]),BX.bind(i[0],"click",function(e){return r=BX.util.htmlspecialcharsback(t.FILTER_AJAX_URL),BX.ajax.insertToNode(r,t.COMPONENT_CONTAINER_ID),BX.PreventDefault(e)})),t.INSTANT_RELOAD&&t.COMPONENT_CONTAINER_ID?(r=BX.util.htmlspecialcharsback(t.FILTER_AJAX_URL),BX.ajax.insertToNode(r,t.COMPONENT_CONTAINER_ID)):(r=BX.util.htmlspecialcharsback(t.FILTER_AJAX_URL),this.filterCatalog(r,"N"),t.SEF_SET_FILTER_URL?this.bindUrlToButton("set_filter",t.SEF_SET_FILTER_URL):this.bindUrlToButton("set_filter",r)))}if(this.sef){var h=BX("set_filter"),f=BX("del_filter");h.disabled=!1,f.disabled=!1}e||""===this.cacheKey||(this.cache[this.cacheKey]=t),this.cacheKey=""},JCSmartFilter.prototype.bindUrlToButton=function(t,e){var i=BX(t);if(i){"submit"==i.type&&(i.type="button"),$(i).data("href",e),BX.unbindAll(i),BX.bind(i,"click",BX.proxy(function(){var t=$(i).data("href");if("del_filter"==$(i).attr("id")){var e=[],r=this.normal_url?$("form.smartfilter").attr("action"):this.ajaxURL;if(e[0]={name:"ajax",value:"y"},this.normal_url||this.gatherInputsValues(e,BX.findChildren(document.getElementById("smartfilter"),{attribute:"hidden"},!0)),e[1]={name:"reset_form",value:"y"},this.sef){var s=BX("set_filter"),l=BX("del_filter");s.disabled=!0,l.disabled=!0}BX.ajax.loadJSON(r,this.values2post(e),BX.delegate(this.postHandler,this))}else if(t){if(this.sef){s=BX("set_filter"),l=BX("del_filter");s.disabled=!0,l.disabled=!0}this.filterCatalog(t,"Y")}},this))}},JCSmartFilter.prototype.gatherInputsValues=function(t,e){if(e)for(var i=0;i<e.length;i++){var r=e[i];if(!r.disabled&&r.type)switch(r.type.toLowerCase()){case"text":case"textarea":case"password":case"hidden":case"select-one":r.value.length&&(t[t.length]={name:r.name,value:r.value});break;case"radio":case"checkbox":r.checked&&(t[t.length]={name:r.name,value:r.value});break;case"select-multiple":for(var s=0;s<r.options.length;s++)r.options[s].selected&&(t[t.length]={name:r.name,value:r.options[s].value})}}},JCSmartFilter.prototype.values2post=function(t){for(var e=[],i=e,r=0;r<t.length;){var s=t[r].name.indexOf("[");if(-1==s)i[t[r].name]=t[r].value,i=e,r++;else{var l=t[r].name.substring(0,s),n=t[r].name.substring(s+1);i[l]||(i[l]=[]);var a=n.indexOf("]");-1==a?(i=e,r++):0==a?(i=i[l],t[r].name=""+i.length):(i=i[l],t[r].name=n.substring(0,a)+n.substring(a+1))}}return e},JCSmartFilter.prototype.hideFilterProps=function(t){var e=t.parentNode,i=e.querySelector("[data-role='bx_filter_block']"),r=e.querySelector("[data-role='prop_angle']");if(BX.hasClass(e,"bx-active"))new BX.easing({duration:300,start:{opacity:1,height:i.offsetHeight},finish:{opacity:0,height:0},transition:BX.easing.transitions.quart,step:function(t){i.style.opacity=t.opacity,i.style.height=t.height+"px"},complete:function(){i.setAttribute("style",""),BX.removeClass(e,"bx-active")}}).animate(),BX.addClass(r,"fa-angle-down"),BX.removeClass(r,"fa-angle-up");else{i.style.display="block",i.style.opacity=0,i.style.height="auto";var s=i.offsetHeight;i.style.height=0,new BX.easing({duration:300,start:{opacity:0,height:0},finish:{opacity:1,height:s},transition:BX.easing.transitions.quart,step:function(t){i.style.opacity=t.opacity,i.style.height=t.height+"px"},complete:function(){}}).animate(),BX.addClass(e,"bx-active"),BX.removeClass(r,"fa-angle-down"),BX.addClass(r,"fa-angle-up")}},JCSmartFilter.prototype.showDropDownPopup=function(t,e){var i=t.querySelector('[data-role="dropdownContent"]'),r=$(t).offset();BX.PopupWindowManager.create("smartFilterDropDown"+e,t,{autoHide:!0,offsetLeft:0,offsetTop:0,overlay:!1,draggable:{restrict:!0},closeByEsc:!0,content:i}).show(),$("#smartFilterDropDown"+e).css({top:r.top+30,left:r.left})},JCSmartFilter.prototype.selectDropDownItem=function(t,e){BX.hasClass(t,"disabled")||(this.keyup(BX(e)),BX.findParent(BX(e),{className:"bx_filter_select_container"},!1).querySelector('[data-role="currentOption"]').innerHTML=t.innerHTML,$(t).closest(".bx_filter_select_popup").find("label").removeClass("selected"),BX.addClass(t,"selected"),BX.PopupWindowManager.getCurrentPopup().close())},BX.namespace("BX.Iblock.SmartFilter"),BX.Iblock.SmartFilter=function(){var t=function(t){"object"==typeof t&&(this.leftSlider=BX(t.leftSlider),this.rightSlider=BX(t.rightSlider),this.tracker=BX(t.tracker),this.trackerWrap=BX(t.trackerWrap),this.minInput=BX(t.minInputId),this.maxInput=BX(t.maxInputId),this.minPrice=parseFloat(t.minPrice),this.maxPrice=parseFloat(t.maxPrice),this.curMinPrice=parseFloat(t.curMinPrice),this.curMaxPrice=parseFloat(t.curMaxPrice),this.fltMinPrice=t.fltMinPrice?parseFloat(t.fltMinPrice):parseFloat(t.curMinPrice),this.fltMaxPrice=t.fltMaxPrice?parseFloat(t.fltMaxPrice):parseFloat(t.curMaxPrice),this.precision=t.precision||0,this.priceDiff=this.maxPrice-this.minPrice,this.leftPercent=0,this.rightPercent=0,this.fltMinPercent=0,this.fltMaxPercent=0,this.colorUnavailableActive=BX(t.colorUnavailableActive),this.colorAvailableActive=BX(t.colorAvailableActive),this.colorAvailableInactive=BX(t.colorAvailableInactive),this.isTouch=!1,this.init(),"ontouchstart"in document.documentElement||"ontouchstart"in window?(this.isTouch=!0,BX.bind(this.leftSlider,"touchstart",BX.proxy(function(t){this.onMoveLeftSlider(t)},this)),BX.bind(this.rightSlider,"touchstart",BX.proxy(function(t){this.onMoveRightSlider(t)},this)),BX.bind(this.colorAvailableActive,"touchstart",BX.proxy(function(t){this.onChangeLeftSlider(t)},this)),BX.bind(this.colorUnavailableActive,"touchstart",BX.proxy(function(t){this.onChangeLeftSlider(t)},this)),BX.bind(this.colorAvailableInactive,"touchstart",BX.proxy(function(t){this.onChangeLeftSlider(t)},this))):(BX.bind(this.leftSlider,"mousedown",BX.proxy(function(t){this.onMoveLeftSlider(t)},this)),BX.bind(this.rightSlider,"mousedown",BX.proxy(function(t){this.onMoveRightSlider(t)},this)),BX.bind(this.colorAvailableActive,"mousedown",BX.proxy(function(t){this.onChangeLeftSlider(t)},this)),BX.bind(this.colorUnavailableActive,"mousedown",BX.proxy(function(t){this.onChangeLeftSlider(t)},this)),BX.bind(this.colorAvailableInactive,"mousedown",BX.proxy(function(t){this.onChangeLeftSlider(t)},this))),BX.bind(this.minInput,"keyup",BX.proxy(function(t){this.onInputChange()},this)),BX.bind(this.maxInput,"keyup",BX.proxy(function(t){this.onInputChange()},this)))};return t.prototype.init=function(){var t;this.curMinPrice>this.minPrice&&(t=this.curMinPrice-this.minPrice,this.leftPercent=100*t/this.priceDiff,this.leftSlider.style.left=this.leftPercent+"%",this.colorUnavailableActive.style.left=this.leftPercent+"%"),this.setMinFilteredValue(this.fltMinPrice),this.curMaxPrice<this.maxPrice&&(t=this.maxPrice-this.curMaxPrice,this.rightPercent=100*t/this.priceDiff,this.rightSlider.style.right=this.rightPercent+"%",this.colorUnavailableActive.style.right=this.rightPercent+"%"),this.setMaxFilteredValue(this.fltMaxPrice)},t.prototype.setMinFilteredValue=function(t){if(this.fltMinPrice=parseFloat(t),this.fltMinPrice>=this.minPrice){var e=this.fltMinPrice-this.minPrice;this.fltMinPercent=100*e/this.priceDiff,this.leftPercent>this.fltMinPercent?this.colorAvailableActive.style.left=this.leftPercent+"%":this.colorAvailableActive.style.left=this.fltMinPercent+"%",this.colorAvailableInactive.style.left=this.fltMinPercent+"%"}else this.colorAvailableActive.style.left="0%",this.colorAvailableInactive.style.left="0%"},t.prototype.setMaxFilteredValue=function(t){if(this.fltMaxPrice=parseFloat(t),this.fltMaxPrice<=this.maxPrice){var e=this.maxPrice-this.fltMaxPrice;this.fltMaxPercent=100*e/this.priceDiff,this.rightPercent>this.fltMaxPercent?this.colorAvailableActive.style.right=this.rightPercent+"%":this.colorAvailableActive.style.right=this.fltMaxPercent+"%",this.colorAvailableInactive.style.right=this.fltMaxPercent+"%"}else this.colorAvailableActive.style.right="0%",this.colorAvailableInactive.style.right="0%"},t.prototype.getXCoord=function(t){var e=t.getBoundingClientRect(),i=document.body,r=document.documentElement,s=window.pageXOffset||r.scrollLeft||i.scrollLeft,l=r.clientLeft||i.clientLeft||0,n=e.left+s-l;return Math.round(n)},t.prototype.getPageX=function(t){t=t||window.event;var e=null;if(this.isTouch&&null!=t.targetTouches[0])e=t.targetTouches[0].pageX;else if(null!=t.pageX)e=t.pageX;else if(null!=t.clientX){var i=document.documentElement,r=document.body;e=t.clientX+(i.scrollLeft||r&&r.scrollLeft||0),e-=i.clientLeft||0}return e},t.prototype.recountMinPrice=function(){var t=this.priceDiff*this.leftPercent/100;(t=(this.minPrice+t).toFixed(this.precision))!=this.minPrice?this.minInput.value=t:this.minInput.value="",smartFilter.keyup(this.minInput)},t.prototype.recountMaxPrice=function(){var t=this.priceDiff*this.rightPercent/100;(t=(this.maxPrice-t).toFixed(this.precision))!=this.maxPrice?this.maxInput.value=t:this.maxInput.value="",smartFilter.keyup(this.maxInput)},t.prototype.onInputChange=function(){var t;if(this.minInput.value){var e=this.minInput.value;e<this.minPrice&&(e=this.minPrice),e>this.maxPrice&&(e=this.maxPrice),t=e-this.minPrice,this.leftPercent=100*t/this.priceDiff,this.makeLeftSliderMove(!1)}if(this.maxInput.value){var i=this.maxInput.value;i<this.minPrice&&(i=this.minPrice),i>this.maxPrice&&(i=this.maxPrice),t=this.maxPrice-i,this.rightPercent=100*t/this.priceDiff,this.makeRightSliderMove(!1)}},t.prototype.makeLeftSliderMove=function(t){t=!1!==t,this.leftSlider.style.left=this.leftPercent+"%",this.colorUnavailableActive.style.left=this.leftPercent+"%";var e=!1;this.leftPercent+this.rightPercent>=100&&(e=!0,this.rightPercent=100-this.leftPercent,this.rightSlider.style.right=this.rightPercent+"%",this.colorUnavailableActive.style.right=this.rightPercent+"%"),this.leftPercent>=this.fltMinPercent&&this.leftPercent<=100-this.fltMaxPercent?(this.colorAvailableActive.style.left=this.leftPercent+"%",e&&(this.colorAvailableActive.style.right=100-this.leftPercent+"%")):this.leftPercent<=this.fltMinPercent?(this.colorAvailableActive.style.left=this.fltMinPercent+"%",e&&(this.colorAvailableActive.style.right=100-this.fltMinPercent+"%")):this.leftPercent>=this.fltMaxPercent&&(this.colorAvailableActive.style.left=100-this.fltMaxPercent+"%",e&&(this.colorAvailableActive.style.right=this.fltMaxPercent+"%")),t&&(this.recountMinPrice(),e&&this.recountMaxPrice())},t.prototype.countNewLeft=function(t){var e=this.getPageX(t),i=this.getXCoord(this.trackerWrap),r=this.trackerWrap.offsetWidth,s=e-i;return s<0?s=0:s>r&&(s=r),s},t.prototype.onMoveLeftSlider=function(t){if(this.isTouch||(this.leftSlider.ondragstart=function(){return!1}),this.isTouch){var e=BX.proxy(function(t){this.leftPercent=100*this.countNewLeft(t)/this.trackerWrap.offsetWidth,this.makeLeftSliderMove()},this),i=BX.proxy(function(t){window.removeEventListener("touchmove",e,!1),window.removeEventListener("touchend",i,!1),e=i=null},this);window.addEventListener("touchmove",e,!1),window.addEventListener("touchend",i,!1)}else document.onmousemove=BX.proxy(function(t){this.leftPercent=100*this.countNewLeft(t)/this.trackerWrap.offsetWidth,this.makeLeftSliderMove()},this),document.onmouseup=function(){document.onmousemove=document.onmouseup=null};return!1},t.prototype.makeRightSliderMove=function(t){t=!1!==t,this.rightSlider.style.right=this.rightPercent+"%",this.colorUnavailableActive.style.right=this.rightPercent+"%";var e=!1;this.leftPercent+this.rightPercent>=100&&(e=!0,this.leftPercent=100-this.rightPercent,this.leftSlider.style.left=this.leftPercent+"%",this.colorUnavailableActive.style.left=this.leftPercent+"%"),100-this.rightPercent>=this.fltMinPercent&&this.rightPercent>=this.fltMaxPercent?(this.colorAvailableActive.style.right=this.rightPercent+"%",e&&(this.colorAvailableActive.style.left=100-this.rightPercent+"%")):this.rightPercent<=this.fltMaxPercent?(this.colorAvailableActive.style.right=this.fltMaxPercent+"%",e&&(this.colorAvailableActive.style.left=100-this.fltMaxPercent+"%")):100-this.rightPercent<=this.fltMinPercent&&(this.colorAvailableActive.style.right=100-this.fltMinPercent+"%",e&&(this.colorAvailableActive.style.left=this.fltMinPercent+"%")),t&&(this.recountMaxPrice(),e&&this.recountMinPrice())},t.prototype.onMoveRightSlider=function(t){if(this.isTouch||(this.rightSlider.ondragstart=function(){return!1}),this.isTouch){var e=BX.proxy(function(t){this.rightPercent=100-100*this.countNewLeft(t)/this.trackerWrap.offsetWidth,this.makeRightSliderMove()},this),i=BX.proxy(function(t){window.removeEventListener("touchmove",e,!1),window.removeEventListener("touchend",i,!1),e=i=null},this);window.addEventListener("touchmove",e,!1),window.addEventListener("touchend",i,!1)}else document.onmousemove=BX.proxy(function(t){this.rightPercent=100-100*this.countNewLeft(t)/this.trackerWrap.offsetWidth,this.makeRightSliderMove()},this),document.onmouseup=function(){document.onmousemove=document.onmouseup=null};return!1},t.prototype.onChangeLeftSlider=function(t){if(this.isTouch||(this.leftSlider.ondragstart=function(){}),this.isTouch){var e=100*this.countNewLeft(t)/this.trackerWrap.offsetWidth;if($(t.target).is(".bx_ui_slider_handle"))return;e<50?(this.leftPercent=e,this.makeLeftSliderMove()):(this.rightPercent=100-e,this.makeRightSliderMove())}else document.onmousedown=BX.proxy(function(t){var e=100*this.countNewLeft(t)/this.trackerWrap.offsetWidth;!$(t.target).is(".bx_ui_slider_handle")&&$(t.target).is("[class^=bx_ui_slider]")&&(e<50?(this.leftPercent=e+1,this.makeLeftSliderMove()):(this.rightPercent=100-e,this.makeRightSliderMove()))},this),document.onmouseup=function(){document.onmousemove=document.onmouseup=null};return!1},t}();
/* End */
;; /* /bitrix/templates/aspro_mshop/components/bitrix/catalog.smart.filter/main_ajax/script.min.js?152455765318922*/
