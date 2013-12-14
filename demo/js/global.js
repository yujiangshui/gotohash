// jQuery JS (compatible) begin

;(function($) {

$(document).ready( function() {

	$('a[href="#"]').click( function(e) { e.preventDefault(); return false; } );

	$.gohashurl({
		topfixed: '.header'
	});

	$('a').click(function(event) {
		$.gohashurl({
			target: $(this).attr('href'),
			topfixed: '.header',
			offset: 20,
		});
	});	

} );

})(jQuery);

