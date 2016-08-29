(function( $ ){

  var methods = {
     init : function( options ) {

      var settings = $.extend( {

      }, options);

       return this.each(function(){

        var sliderWrapper = $(this);
        var firstElem;

        setInterval(function(){
          firstElem = sliderWrapper.find('.sl-elements').first();
          methods.slide(firstElem)
        },3000)
 
       });
     },
     slide: function(elem){
        
        console.log(elem);
        elem.animate({
          marginLeft: '-220px'
        }, 1000, function(){
         var activeElem = $(this).detach();

         activeElem.appendTo('.sl-wrapper').css({'margin-left': ''});

      })
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