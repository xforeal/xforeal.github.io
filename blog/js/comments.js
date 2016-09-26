$(function () {
	$(document).on('click', '.delete-comment', function ( e ) {
		e.preventDefault();

		$(this).closest('.comment').remove();
	});	

	$(document).on('click', '.edit-comment', function ( e ) {
		e.preventDefault();

		var $comment = $(this).closest('.comment').addClass('comment-edit');		
		$comment.find('textarea').val( $comment.find('.comment-body').text() ).focus();
	});	

	$(document).on('click', '.save-comment', function ( e ) {
		e.preventDefault();

		var $comment = $(this).closest('.comment').removeClass('comment-edit');		
		$comment.find('.comment-body').text( $comment.find('textarea').val() );		
	});	

	$(document).on('click', '.close-comment', function ( e ) {
		e.preventDefault();

		$(this).closest('.comment').removeClass('comment-edit');				
	});

	$('#close').on('click', function(e) {
        $('#overlay').css('display', 'none');
	});    

	var email = null;

	$('#overlay input[type="submit"]').on('click', function (e) {
		e.preventDefault();				
		email = $('#email').val();
		$('#close').click();
		$('#btn-cmnt').click();
	} );

	$('#btn-cmnt').on( 'click', function ( e ) {
		e.preventDefault();

		if ( !email ) {
			$('#overlay').css('display', 'block').find('input[name=email]').focus();		
			return;
		}
		

		var $template = $('#comment-template');
		var $comment = $template.clone().removeAttr('id');
		var $textarea = $('.new-cmnt textarea');
		$comment.find('.comment-head a').text( email );
		$comment.find('.comment-body').text( $textarea.val() );
		$template.after( $comment );

		$textarea.val('');		
	} );	
});