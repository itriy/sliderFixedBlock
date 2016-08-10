(function(){
	class SliderFixedBlock {
		constructor(container, options){
			this.container = document.querySelector(container);
			this.wrapper = this.container.querySelector('.sl-wrapper');

			this.setSlider(this.wrapper);

			setInterval(this.setSlider.bind(this, this.wrapper), 3000)
		}
		setSlider(wrapper){
			let left = 0;
			let elems = wrapper.querySelectorAll('.sl-elements');

			for(let i = 0; i < elems.length; i++) {
				console.log(left);
				elems[i].style.left = left + 'px';

				let elemWIidth = this.elementSize(elems[i]).width;

				left += elemWIidth;

				
			}
		}

		getScrollWidth(){
		  let div = document.createElement('div');

		  div.style.overflowY = 'scroll';
		  div.style.width = '50px';
		  div.style.height = '50px';
		  div.style.visibility = 'hidden';
		  div.style.position = 'absolute';
		  div.style.top = '0px';
		  div.style.left = '0px';



		  document.body.appendChild(div);
		  let scrollWidth = div.offsetWidth - div.clientWidth;
		  let scrollHeight = div.offsetHeight - div.clientHeight;
		  document.body.removeChild(div);

		  return {width: scrollWidth, height: scrollHeight};
		}

		elementSize(element) {

		  let elem = getComputedStyle(element);

		  // this.scrollWidth = this.getScrollWidth();

		  return {
		    width: parseInt(elem.width, 10) + parseInt(elem.marginLeft, 10) + parseInt(elem.marginRight, 10),// + this.scrollWidth.width,
		    height: parseInt(elem.height, 10) + parseInt(elem.marginBottom, 10) + parseInt(elem.marginTop, 10)// + this.scrollWidth.height
		  }

		}
	}
	window.SliderFixedBlock = SliderFixedBlock;
})();
new SliderFixedBlock('#slider', {});