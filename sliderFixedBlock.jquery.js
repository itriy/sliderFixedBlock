(function( $ ){

  var methods = {
     init : function( options ) {

      // var settings = $.extend( {

      // }, options);

       return this.each(function(){

        console.log('test');
         
         // var $this = $(this),
         //     data = $this.data('tooltip'),
         //     tooltip = $('<div />', {
         //       text : $this.attr('title')
         //     });
         
         // // Если плагин ещё не проинициализирован
         // if ( ! data ) {
         
         //   /*
         //    * Тут выполняем инициализацию
         //   */

         //   $(this).data('tooltip', {
         //       target : $this,
         //       tooltip : tooltip
         //   });

         // }
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