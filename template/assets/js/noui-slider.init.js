var W3CartUiSlider = function(){
	
	"use strict"

	// Basic Slider ============ 
	var handleBasicSlide = function() {
		if(jQuery('#basic-slider').length > 0){
			let basicSlide = document.getElementById('basic-slider');
			noUiSlider.create(basicSlide, {
				start: [20, 80],
				connect: true,
				range: {
					'min': 0,
					'max': 100
				}
			});
		}
	}
	
	// Slider Tooltips ============ 
	var handleSliderTooltips = function() {
		if(jQuery('#slider-tooltips').length > 0){
			var tooltipSlider = document.getElementById('slider-tooltips');
			noUiSlider.create(tooltipSlider, {
				start: [20, 80, 120],
				tooltips: [false, wNumb({decimals: 1}), true],
				range: {
					'min': 0,
					'max': 200
				}
			});
		}
	}
	
	// Slider behaviour snap ============ 
	var handleSnap = function() {
		if(jQuery('#snap').length > 0){
			var snapSlider2 = document.getElementById('snap');
			noUiSlider.create(snapSlider2, {
				start: 40,
				behaviour: 'snap',
				connect: [true, false],
				range: {
					'min': 20,
					'max': 80
				}
			});
		}
	}
	
	// Slider behaviour combined  ============ 
	var handleCombined = function() {
		if(jQuery('#combined').length > 0){
			var dragTapSlider = document.getElementById('combined');
			noUiSlider.create(dragTapSlider, {
				start: [40, 60],
				behaviour: 'drag-tap',
				connect: true,
				range: {
					'min': 20,
					'max': 80
				}
			});
		}
	}
	
	
	// disable slider  ============ 
	var handleDisable = function() {
		if(jQuery('#disable1').length > 0){
			//disable slider
			var disSlider1 = document.getElementById('disable1');
			var checkbox1 = document.getElementById('checkbox1');
			function toggle(element) {

				// If the checkbox is checked, disabled the slider.
				// Otherwise, re-enable it.
				if (this.checked) {
					element.setAttribute('disabled', true);
				} else {
					element.removeAttribute('disabled');
				}
			}

			noUiSlider.create(disSlider1, {
				start: 80,
				connect: [true, false],
				range: {
					min: 0,
					max: 100
				}
			});

			checkbox1.addEventListener('click', function () {
				toggle.call(this, disSlider1);
			});
		}
	}
	
	// Moving the slider by clicking pips  ============ 
	var handleSliderpips = function() {
		if(jQuery('#slider-pips').length > 0){
			var pipsSlider = document.getElementById('slider-pips');
			noUiSlider.create(pipsSlider, {
				range: {
					min: 0,
					max: 100
				},
				start: [50],
				pips: {mode: 'count', values: 5}
			});

			var pips = pipsSlider.querySelectorAll('.noUi-value');
			function clickOnPip() {
				var value = Number(this.getAttribute('data-value'));
				pipsSlider.noUiSlider.set(value);
			}

			for (var i = 0; i < pips.length; i++) {

				// For this example. Do this in CSS!
				pips[i].style.cursor = 'pointer';
				pips[i].addEventListener('click', clickOnPip);
			}
		}
	}
	
	// keypress slider  ============ 
	var handleKeypress = function() {
		if(jQuery('#keypress').length > 0){
			var keypressSlider = document.getElementById('keypress');
			var input0 = document.getElementById('input-with-keypress-0');
			var input1 = document.getElementById('input-with-keypress-1');
			var inputs = [input0, input1];

			noUiSlider.create(keypressSlider, {
				start: [20, 80],
				connect: true,
				tooltips: [true, wNumb({decimals: 1})],
				range: {
					'min': [0],
					'10%': [10, 10],
					'50%': [80, 50],
					'80%': 150,
					'max': 200
				}
			});

			keypressSlider.noUiSlider.on('update', function (values, handle) {
				inputs[handle].value = values[handle];
			});
		}
	}
	
	// soft limits  ============ 
	var handleSoft = function() {
		if(jQuery('#soft').length > 0){
			var softSlider = document.getElementById('soft');
			noUiSlider.create(softSlider, {
				start: 50,
				range: {
					min: 0,
					max: 100
				},
				pips: {
					mode: 'values',
					values: [20, 80],
					density: 4
				}
			});

			softSlider.noUiSlider.on('change', function (values, handle) {
				if (values[handle] < 20) {
					softSlider.noUiSlider.set(20);
				} else if (values[handle] > 80) {
					softSlider.noUiSlider.set(80);
				}
			});
		}
	}
	
	// slider direction  ============ 
	var handleSliderDirection = function() {
		if(jQuery('#slider-direction').length > 0){
			var directionSlider = document.getElementById('slider-direction');
			noUiSlider.create(directionSlider, {
				start: 20,
				direction: 'rtl',
				range: {
					'min': 0,
					'max': 100
				}
			});

			var directionField = document.getElementById('field');
			directionSlider.noUiSlider.on('update', function (values, handle) {
				directionField.innerHTML = values[handle];
			});
		}
	}
	
	/* Function ============ */
	return{
		
		init:function(){
			handleBasicSlide();
			handleSliderTooltips();
			handleSnap();
			handleCombined();
			handleSliderpips();
			handleDisable();
			handleKeypress();
			handleSoft();
			handleSliderDirection();
		},
		
		load:function(){
			
		},
		
		resize:function(){
			
		},
		
	}

}();

/* Document.ready Start */	
jQuery(document).ready(function() {
	'use strict';
	W3CartUiSlider.init();
});
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	W3CartUiSlider.load();
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	W3CartUiSlider.resize();
});
/*  Window Resize END */