
slidersStart();


let resizeId;
window.addEventListener('resize', function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 500);
});

function doneResizing(){
    //$('.functional__list').slick('unslick');
    //$('.cards__wrap').slick('unslick');
    //$('.tariffs__list').slick('unslick');
    //$('.reviews__list').slick('unslick');
    //$('.services__list').slick('unslick');
    slidersStart();
}



function slidersStart() {

  // инициализация плагина слайдера для блока с карточками в первом экране
  $('.cards__wrap').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold:50,
    adaptiveHeight: false,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 600,
          settings: "unslick"
        }
    ]
  });

  // инициализация плагина слайдера для блока с услугами
  $('.services__list').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold:50,
    adaptiveHeight: false,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 600,
          settings: "unslick"
        }
    ]
  });

  // инициализация плагина слайдера для блока с карточками функционала
  $('.functional__list').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold:50,
    adaptiveHeight: false,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 600,
          settings: "unslick"
        }
    ]
  });

  // инициализация плагина слайдера для блока с карточками тарифов
  $('.tariffs__list').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold:50,
    adaptiveHeight: false,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 600,
          settings: "unslick"
        }
    ]
  });

  // инициализация плагина слайдера для блока с отзывами
  $('.reviews__list').slick({
    dots: true,
    infinite: true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold:50,
    adaptiveHeight: false,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 600,
          settings: "unslick"
        }
    ]
  });

}
