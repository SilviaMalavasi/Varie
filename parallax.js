(function($) {

	$(function() {
		$('.parallax').each(function() {
			var src = $(this).find( "img" ).attr('src');
			var srcurl = "url('"+src+"')";
			$(this).css({"background-image": srcurl,
						 "background-attachment": "fixed",
						 "background-position": "100 center",
						 "background-repeat": "no-repeat",
						 "background-size": "cover"});
		});
	});

})(jQuery);
