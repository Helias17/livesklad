$('.btn_clients').click(function(){
  let hiddenLogos = $('.clients__item_hidden');
  let totalHiddenLogos = hiddenLogos.length;
  let logosToShow = 6; // Опция сколько показывать лого за 1 клик

  if ( totalHiddenLogos > logosToShow ) {
    // Показываем по 6 лого за 1 клик
    hiddenLogos.slice(0,logosToShow).slideDown('fast').removeClass('clients__item_hidden');
    // если осталось лого меньше чем 6 то показываем все и удаляем кнопку
  } else {
    hiddenLogos.slideDown('fast').removeClass('clients__item_hidden');
    $(this).slideUp('fast');
  }
});