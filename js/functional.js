$('.functional__item').click(function(){

  if ( !$(this).hasClass('functional__item_active') ) {
    $(this).addClass('functional__item_active');
  } else {
    $(this).removeClass('functional__item_active');
  }

});