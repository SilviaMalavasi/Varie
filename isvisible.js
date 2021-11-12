(function($) {
	$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + ($(window).height());
	return elementBottom > viewportTop && elementTop < (viewportBottom - ($(window).height() / 2));
	};

	$(window).on('resize scroll', function() {
			$('.animazione').each(function(){
				if ($(this).isInViewport()) {
					$(this).addClass('vai');
				}
		})
	})	
})(jQuery);


