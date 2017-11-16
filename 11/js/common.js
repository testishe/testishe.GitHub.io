$(document).ready(function() {

	$('.slider1').slick({

		arrows: true,
		dots: true,
		prevArrow: '<div type="button" class="prev-ar"></div>',
		nextArrow: '<div type="button" class="next-ar"></div>'

	});

	$('.slider2').slick({

		arrows: true,
		dots: false,
		prevArrow: '<div type="button" class="prev-ar"></div>',
		nextArrow: '<div type="button" class="next-ar"></div>'

	});

});

(function counterBook() {
	var left = document.getElementById("left"),
		right = document.getElementById("right"),
		number = document.getElementById("number"),
		counter = 1;

	console.log(left);


	left.onclick = function() {
		counter--;
		if(counter < 0){counter = 0};
		number.innerHTML = counter;
	};

	right.onclick = function() {
		counter++;
		number.innerHTML = counter;
	};
})();

(function popup() {
	var link = document.getElementsByClassName('button-buy')
	// var link = document.querySelectorAll('.button-buy');
	// var link = document.getElementById("a");
	var bg = document.getElementById("bg");
	var close = document.getElementById("close");
	// var submit = document.getElementById("submit");
	console.log(link);
	for (var i = 0; i < link.length; i++){
		console.log(link[i]);
		link[i].onclick = function() {
			console.log(5);
			bg.classList.add("open");
		}
	}
	link.onclick = function() {
		console.log(2);
		bg.classList.add("open");
	}
	close.onclick = function() {
		bg.classList.remove("open");
	}
})();