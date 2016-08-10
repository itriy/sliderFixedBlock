(function(){
	class SliderFixedBlock {
		constructor(container, options){
			this.container = document.querySelector(container);
			this.wrapper = this.container.querySelector('.sl-wrapper');

			this.setSlider(this.wrapper);
		}
		setSLider(wrapper){
			let elems = wrapper.querySelectorAll('.sl-elements');
		}

		elementSize(element) {

		  let elem = getComputedStyle(element);

		  this.scrollWidth = this.getScrollWidth();

		  return {
		    width: parseInt(elem.width, 10) + parseInt(elem.marginLeft, 10) + parseInt(elem.marginRight, 10) + this.scrollWidth.width,
		    height: parseInt(elem.height, 10) + parseInt(elem.marginBottom, 10) + parseInt(elem.marginTop, 10) + +this.scrollWidth.height
		  }

		}
	}
	window.SliderFixedBlock = SliderFixedBlock;
})();
new SliderFixedBlock('#slider', {});