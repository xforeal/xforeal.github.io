$(function () {
	$('.slider-thumblers .thmb').on( 'click', function (e ) {
		e.preventDefault();
		var $thumb = $(this);
		var $preview = $thumb.closest('.slider').find('.slider-prev');
		var $clone = $(this).clone().removeClass('thmb').addClass('sld-img');
		var $img = $clone.find('img');
		if ( $img.data('full-src') ) {
			$img.attr('src', $img.data('full-src'));
		}
		$preview.html( $clone );
	} );	

	$('.slider-thumblers .thmb:eq(0)').click();

	$('.slider-controls a').on('click', function ( e ) {
		e.preventDefault();
		var $li = $(this);
		var direction = $li.hasClass('slider-controls-next') ? 1 : -1;
		var $thumblist = $('.slider-thumblers');
		var $thumbs = $thumblist.children('.thmb');
		if ( $thumbs.length < 2 ) return;		
		var interval = $thumbs[0].getBoundingClientRect().left - $thumbs[1].getBoundingClientRect().left;	
		var margin = interval * direction + ( parseFloat( $thumblist.prop('style').marginLeft ) || 0);
		margin = Math.min( 0, Math.max(interval * $thumbs.length + $thumblist.parent().width(), margin ));
		$thumblist.css('margin-left', margin + 'px' );
	} );
});