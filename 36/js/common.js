$(function() {

	$(".menu").click(function(){
		$(".menu-left").addClass("open");
	});

	$(".menu-left_close").click(function(){
		$(".menu-left").removeClass("open");
	});

});
