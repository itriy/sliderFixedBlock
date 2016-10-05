(function( $ ){

  var methods = {
     init : function(options) {

      var settings = $.extend( {
        elemWidth: 220,
        animateDuration: 1000,
        animateInterval: 2000,
        elemLife: 60000,
        minRange: 0
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

        if(( parseInt(firstElem.data('life')) + settings.elemLife ) < Date.parse(new Date())) {
          elemDelete = true;
        }


        if ( elemDelete == true
             || parseInt(firstElem.data('range')) <= settings.minRange
             || parseInt(firstElem.data('range')) < parseInt(secondElem.data('range')) ) 
        {
          activeElem = firstElem;
        } else {

          activeElem = secondElem;
        }

        firstElem.addClass('active');

        if(!firstElem.attr("data-life")){
          firstElem.attr("data-life", Date.parse(new Date()));
        }

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