$(document).ready(function() {

	$('.slider3').mobilyslider({
		transition: 'fade',
		animationSpeed: 800,
		bullets: false,
		autoplay: true,
		arrowsHide: false
	});

	$('.asortiment-drop_show').each(function(){
		$(this).click(function(){
			$('.asortiment-drop_drop').each(function(){
				$(this).hide();
			});
			$(this).parent('.asortiment-drop').find('.asortiment-drop_drop').show();
		});
	});
	$('.asortiment-drop_close').click(function(e){
		e.preventDefault();
		$(this).parents('.asortiment-drop_drop').hide();
	});
	$('.asortiment-drop_drop li').click(function(e){
		e.preventDefault();
		$(this).parents('.asortiment-drop_drop').hide();
	});

	$('.bxslider').bxSlider({
		controls: false,
	  pagerCustom: '#bx-pager'
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
