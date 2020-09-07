if (window.matchMedia("(max-width: 999px)").matches) {

  $('.footer-menu__item-link').click(function(e){
    e.stopPropagation()
  });

  $('.footer-menu__item').click(function(){

      if ( !$(this).hasClass('js-shown') ) {
        $(this).addClass('js-shown');
        $(this).find('.footer-menu__item-link-box').slideDown('fast');
        $(this).find('.footer-menu__item-arrow').addClass('footer-menu__item-arrow_up');
      } else {
        $(this).removeClass('js-shown');
        $(this).find('.footer-menu__item-link-box').slideUp('fast');
        $(this).find('.footer-menu__item-arrow').removeClass('footer-menu__item-arrow_up');
      }

  });

}
