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