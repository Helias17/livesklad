$('.features__item').click(function(){

  if ( $(this).find('.features__icon').hasClass('features__icon_up') ) {
    $(this).find('.features__text').slideUp('fast');
    $(this).find('.features__icon').removeClass('features__icon_up');
  } else  {
    $(this).find('.features__text').slideDown('fast');
    $(this).find('.features__icon').addClass('features__icon_up');
  }
});
