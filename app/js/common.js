$(document).ready(function() {

	$('.slider3').mobilyslider({
		transition: 'fade',
		animationSpeed: 800,
		bullets: false,
		autoplay: true,
		arrowsHide: false
	});


});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback (если не грузится, то загружается png)
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
