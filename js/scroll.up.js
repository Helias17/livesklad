if (window.matchMedia("(min-width: 1000px)").matches) {

  $('.scroll-up').click(function(){
    $('html, body').animate({ scrollTop: 0 }, '900');
  });

  // Показываем или скрываем блок, если второй экран
  $('#about').waypoint(function(direction){

    if ( direction == 'down' ) {
      $('.scroll-up').show('fast');
    }

    if ( direction == 'up' ) {
      $('.scroll-up').hide('fast');
    }


  });

}