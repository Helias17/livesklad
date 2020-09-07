$('.reviews__arrow-right').click(function(){

  slideToLeftReviews(1);

});

$('.reviews__arrow-left').click(function(){

  slideToRightReviews(1);

});

if (window.matchMedia("(min-width: 600px)").matches) {

  // Переключение по свайпу (только для планшетов и выше)
  $('.reviews__item').hammer().on('swipeleft swiperight', function(e){
    e.gesture.srcEvent.preventDefault();

    if (e.type == 'swiperight') {
      slideToLeftReviews(1);
    }

    if (e.type == 'swipeleft') {
      slideToRightReviews(1);
    }

  });

}


  // Переключение слайдера при кликах на точки под слайдером
$('.reviews__dot').click(function(){

  let dotNum =  $(this).attr('data-num');
  let curPos = $('.reviews__item[data-dot=' + dotNum + ']').attr('data-num');

  let shiftSlider = 2 - curPos; // 2 это постоянный номер центрального отзыва

  if ( shiftSlider > 0 ) slideToRightReviews(shiftSlider);
  if ( shiftSlider < 0 ) slideToLeftReviews(-1*shiftSlider);

});



function slideToRightReviews(shift){
  console.log('Перемотка вправо!');

  let totalReviews = $('.reviews__item').length;

  $('.reviews__item').each(function(){

    let sortNum = parseInt( $(this).attr('data-num') ,10);
    let newSortNum = sortNum + shift;

    if (newSortNum <= totalReviews) {
      $(this).attr('data-num', newSortNum);
      if ( newSortNum > 3 ) {
        $(this).addClass('reviews__item_hidden');
      } else {
        $(this).removeClass('reviews__item_hidden');
      }
    } else {
      newSortNum -= totalReviews;
      $(this).attr('data-num', newSortNum);
      if ( newSortNum > 3 ) {
        $(this).addClass('reviews__item_hidden');
      } else {
        $(this).removeClass('reviews__item_hidden');
      }
    }
  });

  setActiveDotReviews();

}


function slideToLeftReviews(shift){
  console.log('Перемотка влево!');
  let totalReviews = $('.reviews__item').length;

  $('.reviews__item').each(function(){

    let sortNum = $(this).attr('data-num');
    let newSortNum = sortNum - shift;

    if (newSortNum < 1) {
      newSortNum += totalReviews;
      $(this).attr('data-num', newSortNum);

      if ( newSortNum > 3 ) {
        $(this).addClass('reviews__item_hidden');
      } else {
        $(this).removeClass('reviews__item_hidden');
      }

    } else {
      $(this).attr('data-num', newSortNum);

      if ( newSortNum > 3 ) {
        $(this).addClass('reviews__item_hidden');
      } else {
        $(this).removeClass('reviews__item_hidden');
      }

    }
  });

  setActiveDotReviews();

}

function setActiveDotReviews(){ // Меняем активный кружок под слайдером
  let dotNum = $('.reviews__item[data-num=2]').data('dot');
  $('.reviews__dot').removeClass('reviews__dot_active');
  $('.reviews__dot[data-num=' + dotNum + ']').addClass('reviews__dot_active');
}