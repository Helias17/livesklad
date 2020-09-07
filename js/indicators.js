
$('.js-screen').waypoint(function(direction){

  if (direction == "down") {
    $('.indicators__item').removeClass('indicators__item_active');
    let screenNum = $(this.element).data('screen');
    $('.indicators__item[data-screen=' + screenNum + ']').addClass('indicators__item_active');
  }

},{ offset: 150 });

$('.js-screen').waypoint(function(direction){

  if (direction == "up") {
    $('.indicators__item').removeClass('indicators__item_active');
    let screenNum = $(this.element).data('screen');
    $('.indicators__item[data-screen=' + screenNum + ']').addClass('indicators__item_active');
  }

},{ offset: -100 });
