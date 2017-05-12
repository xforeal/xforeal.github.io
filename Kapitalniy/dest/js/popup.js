  $(document).ready(function($){
      //open popup
      $('[data-id="offer"]').on('click', function(e){
        e.preventDefault();
        $('.overlay--offer').addClass('overlay--active');
      });
      $('[data-id="callback"]').on('click', function(e){
        e.preventDefault();
        $('.overlay--callback').addClass('overlay--active');
      });

      //close popup
      $('.popup__header').click(function(){
        $('.overlay').removeClass('overlay--active');
      });
      $('.overlay').on('click', function(e){
        if( $(e.target).is('.overlay--close') || $(e.target).is('.overlay') ) {
          e.preventDefault();
          $(this).removeClass('overlay--active');
        }
      });
    });

  /* BEGIN comboselect js */
  $('.comboselect').on('click','.comboselect__placeholder',function(){
    var parent = $(this).closest('.comboselect');
    if ( ! parent.hasClass('comboselect--open')){
      parent.addClass('comboselect--open');
      $('.scomboselect.comboselect--open').not(parent).removeClass('comboselect--open');
    }else{
      parent.removeClass('comboselect--open');
    }
  }).on('click','ul>li',function(){
    var parent = $(this).closest('.comboselect');
    parent.removeClass('comboselect--open').find('.comboselect__placeholder').text( $(this).text() );
    parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
  });
/* END comboselect js */