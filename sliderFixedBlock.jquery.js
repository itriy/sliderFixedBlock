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

     detachElement: function(sliderWrapper){

      var firstElem, secondElem, activeElem;

      

      setInterval(function(){
        
        var li = sliderWrapper.find('li');

        firstElem = li.eq(0);
        secondElem = li.eq(1);

        li.removeClass('active');

        if ( parseInt(firstElem.data('range')) < parseInt(secondElem.data('range')) ) {
          activeElem = firstElem;
        } else {
          activeElem = secondElem;
        }

        firstElem.addClass('active');
        methods.slideElement(sliderWrapper, activeElem);

      },2000)
     },

     slideElement: function(wrapper, elem){

        var ul = wrapper.find('ul');
        
        elem.animate({
          marginLeft: '-220px'

        }, 1000, function(){

         var activeElem = $(this).detach();

          activeElem.appendTo(ul).css({'margin-left': ''});

      });

     },

     // addElements: function(sliderWrapper){
     //  sliderWrapper.find('.sl-wrapper').append(data)
     // },
     // template: function(element){
     //  element.nodeName
     // }

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