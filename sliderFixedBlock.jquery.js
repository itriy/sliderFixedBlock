(function( $ ){

  var methods = {
     init : function( options ) {

      var settings = $.extend( {

      }, options);

       return this.each(function(){

        var sliderWrapper = $(this);

        var firstElem, secondElem, activeElem;

        setInterval(function(){

          firstElem = sliderWrapper.find('.sl-elements').eq(0);
          secondElem = sliderWrapper.find('.sl-elements').eq(1);

          $('.sl-elements').removeClass('sl-elements-active');

          if ( parseInt(firstElem.data('id')) < parseInt(secondElem.data('id')) ) {
            activeElem = firstElem;
          } else {
            activeElem = secondElem;
          }
          firstElem.addClass('sl-elements-active');
          methods.slide(activeElem);

        },2000)

        
       });
     },

     slide: function(elem){
        

        elem.animate({
          marginLeft: '-220px'

        }, 1000, function(){

         var activeElem = $(this).detach();

         activeElem.appendTo('.sl-wrapper').css({'margin-left': ''});

      });

     },

  };

  $.fn.slider = function( method ) {
    
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.slider' );
    }    
  
  };

})( jQuery );