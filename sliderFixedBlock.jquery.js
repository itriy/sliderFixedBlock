(function( $ ){

  var methods = {
     init : function(options) {

      var settings = $.extend( {
        elemWidth: 220,
        animateDuration: 1000,
        animateInterval: 2000,
        elemLife: 60000
      }, options);

      

       return this.each(function(){

        var sliderWrapper = $(this);

        methods.selectElement(sliderWrapper, settings)
        
       });
     },

     selectElement: function(sliderWrapper, settings){

      var firstElem, secondElem, activeElem, li ;


      setInterval(function(){

        var elemDelete = false;

        li = sliderWrapper.find('li');

        firstElem = li.eq(0);
        secondElem = li.eq(1);

        li.removeClass('active');

        if(( parseInt(firstElem.data('timer')) + settings.elemLife ) < Date.parse(new Date())) {
          //elemDelete = true;
        }

        if ( parseInt(firstElem.data('range')) < parseInt(secondElem.data('range')) || elemDelete == true) {
          activeElem = firstElem;
        } else {
          activeElem = secondElem;
        }

        firstElem.addClass('active');
        methods.moveElement(sliderWrapper, activeElem, settings, elemDelete);

      }, settings.animateInterval)

     },

     moveElement: function(wrapper, elem, settings, elemDelete){

        var ul = wrapper.find('ul');
        
        elem.animate({
          marginLeft: '-' + settings.elemWidth + 'px'

        }, settings.animateDuration, function(){

          if(elemDelete == true){
             return $(this).remove();
          }

          activeElem = $(this).detach();
          activeElem.appendTo(ul).css({'margin-left': ''});

      });

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