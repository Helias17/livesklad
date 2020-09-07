$('.registration__input').on('blur', function(){
    if ( $(this).val().length > 0 ) {
      $(this).next().addClass('registration__placeholder_filled'); //
    } else {
      $(this).next().removeClass('registration__placeholder_filled');
    }
});
