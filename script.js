(function(){
	class SliderFixedBlock {
		constructor(container, options){
			this.container = document.querySelector(container);
			this.wrapper = this.container.querySelector('.sl-wrapper');

			this.setSlider(this.wrapper);

			//setInterval(this.setSlider.bind(this, this.wrapper), 2000)
		}
		setSlider(wrapper){

			let firstElem = wrapper.querySelector('.sl-elements');

			let start = Date.now(); // сохранить время начала

			let timer = setInterval(() => {
			  // вычислить сколько времени прошло из opts.duration
			  let timePassed = Date.now() - start;

			  firstElem.style.marginLeft = timePassed / 5 + 'px';

			  if (timePassed > 2000) clearInterval(timer);

			}, 20000);
			this.wrapper.removeChild(firstElem);

			//let oldElement = firstElem.cloneNode(true);
			//firstElem.classList.add('s200');
			//this.removeBlock(firstElem);
			//firstElem.classList.add('s200');
			//firstElem.style.display = 'none';
			//setTimeout(this.animateBlock(firstElem), 2000)
			
			
			//wrapper.insertAdjacentHTML("beforeEnd", firstElem.outerHTML)

			//firstElem.style.marginLeft = '';
			
			//console.dir(oldElement.firstElem);



		}
		removeBlock(elem){
			this.wrapper.removeChild(elem);
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