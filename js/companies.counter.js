
  $('.wrapper_counter').waypoint(function(direction){

    CompaniesCounter();
    this.destroy();

  }, {offset:"70%"});


 // Авто счетчик числа компаний
 function CompaniesCounter() {

    $({ countNum: $('.counter__value').html() }).animate({ countNum: 1000 }, {
        duration: 1000,
        easing: 'linear',
        step: function () {
        $('.counter__value').html(Math.floor(this.countNum));
    },
    complete: function () {
        $('.counter__value').html(this.countNum);
        //alert('finished');
    }
    });

 }
