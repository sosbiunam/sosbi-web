
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

// Motor de animaciones que se activa SOLO UNA VEZ
document.addEventListener("DOMContentLoaded", function() {
    
    // Configuramos el sensor
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            
            // Si el elemento entra a la pantalla...
            if (entry.isIntersecting) {
                // 1. Lo hacemos aparecer
                entry.target.classList.add('active'); 
                
                // 2. EL CANDADO: Le quitamos el sensor para que NO se vuelva a animar
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando asoma el 15% del elemento
    });

    // Buscamos todas las piezas con la clase 'reveal' y les ponemos el sensor
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
