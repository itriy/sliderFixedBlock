(function( $ ){

  var methods = {
     init : function(options) {

      var settings = $.extend( {

      }, options);

       return this.each(function(){

        var sliderWrapper = $(this);

        methods.detachElement(sliderWrapper)
        
       });
     },

     slideElement: function(elem){
        
        elem.animate({
          marginLeft: '-220px'

        }, 1000, function(){

         var activeElem = $(this).detach();

         activeElem.appendTo('.sl-wrapper').css({'margin-left': ''});

      });

     },

     detachElement: function(sliderWrapper){

      var firstElem, secondElem, activeElem;

      setInterval(function(){

        firstElem = sliderWrapper.find('.sl-elements').eq(0);
        secondElem = sliderWrapper.find('.sl-elements').eq(1);

        sliderWrapper.find('.sl-elements').removeClass('sl-elements-active');

        if ( parseInt(firstElem.data('id')) < parseInt(secondElem.data('id')) ) {
          activeElem = firstElem;
        } else {
          activeElem = secondElem;
        }

        firstElem.addClass('sl-elements-active');
        methods.slideElement(activeElem);

      },2000)
     },

     addElements: function(sliderWrapper){
      sliderWrapper.find('.sl-wrapper').append(data)
     }

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