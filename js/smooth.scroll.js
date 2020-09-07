$(document).ready(function(){
    $( ".js-smooth-scroll" ).click(function( event ) {
        event.preventDefault();

        let anchor = '';
        let hrefAttr = $(this).attr('href');

        // Считываем якорь либо из атрибута href ссылки либо из атрибута data-anchor
        if ( typeof hrefAttr !== typeof undefined && hrefAttr !== false) {
          anchor = $(this).attr("href");
        } else {
          anchor = $(this).attr("data-anchor");
        }

        $("html, body").animate({ scrollTop: $(anchor).offset().top }, 900);
    });
});

