
// Переключение по клику на стрелку влево
$('.services__arrow-right').click(function(){
  slideToLeft(1);
});

// Переключение по клику на стрелку вправо
$('.services__arrow-left').click(function(){
  slideToRight(1);
});

if (window.matchMedia("(min-width: 600px)").matches) {


  // Переключение по свайпу (только для планшетов и выше)
  $('.services__item').hammer().on('swipeleft swiperight', function(e){
    e.gesture.srcEvent.preventDefault();

    if (e.type == 'swiperight') {
      slideToLeft(1);
    }

    if (e.type == 'swipeleft') {
      slideToRight(1);
    }

  });

  // Переключение по клику на фото слайдера (только для планшетов и выше)
  $('.services__item').click(function(){

    let totalServices = $('.services__item').length;
    let sliderNum =  $(this).attr('data-num');

    let shiftSlider = 3 - sliderNum; // 3 это постоянный номер центральной фото

    if ( shiftSlider > 0 ) slideToRight( shiftSlider );
    if ( shiftSlider < 0 ) slideToLeft( -1*shiftSlider );

  });

}



  // Переключение слайдера при кликах на точки под слайдером
$('.services__dot').click(function(){

  let totalServices = $('.services__item').length;
  let dotNum =  $(this).attr('data-num');
  let curPos = $('.services__item[data-dot=' + dotNum + ']').attr('data-num');

  let shiftSlider = 3 - curPos; // 3 это постоянный номер центральной фото

  if ( shiftSlider > 0 ) slideToRight( shiftSlider );
  if ( shiftSlider < 0 ) slideToLeft( -1*shiftSlider );

});


function slideToLeft (shift) {

  let totalServices = $('.services__item').length;

  $('.services__item').each(function(){

    let sortNum = parseInt( $(this).attr('data-num') ,10);

    if ( sortNum > shift ) {
      $(this).attr('data-num', sortNum - shift);

      // Если новый порядковый номер фото больше 5, скрываем это фото, иначе показываем
      if ( (sortNum - shift) > 5 ) {
        $(this).addClass('services__item_hidden');
      } else {
        $(this).removeClass('services__item_hidden');
      }

    } else {
      $(this).attr('data-num', sortNum - shift + totalServices );

      // Если новый порядковый номер фото больше 5, скрываем это фото, иначе показываем
      if ( (sortNum - shift + totalServices) > 5 ) {
        $(this).addClass('services__item_hidden');
      } else {
        $(this).removeClass('services__item_hidden');
      }

    }
  });

  setActiveDotServices();

}


function slideToRight(shift) { // shift - сдвиг слайдера

  let totalServices = $('.services__item').length;

  $('.services__item').each(function(){

    let sortNum = parseInt( $(this).attr('data-num') ,10);

    if ( sortNum <= ( totalServices - shift ) ) {
      $(this).attr('data-num', sortNum + shift);

      // Если новый порядковый номер фото больше 5, скрываем это фото, иначе показываем
      if ( (sortNum + shift) > 5 ) {
        $(this).addClass('services__item_hidden');
      } else {
        $(this).removeClass('services__item_hidden');
      }

    } else {
      // Отнимаем totalServices, чтобы перекинуть в начало слайдера
      $(this).attr('data-num', sortNum + shift - totalServices);

      // Если новый порядковый номер фото больше 5, скрываем это фото, иначе показываем
      if ( (sortNum + shift - totalServices) > 5 ) {
        $(this).addClass('services__item_hidden');
      } else {
        $(this).removeClass('services__item_hidden');
      }

    }
  });

  setActiveDotServices();
}

function setActiveDotServices(){ // Меняем активный кружок под слайдером
  let dotNum = $('.services__item[data-num=3]').data('dot');  // data-num=3 это всегда центральное фото
  $('.services__dot').removeClass('services__dot_active');
  $('.services__dot[data-num=' + dotNum + ']').addClass('services__dot_active');
}

