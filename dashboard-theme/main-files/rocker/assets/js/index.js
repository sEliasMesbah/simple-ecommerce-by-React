$(function() {
    "use strict";

	
// chart 1

  var ctx = document.getElementById("chart1").getContext('2d');
   
  var gradientStroke1 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke1.addColorStop(0, '#6078ea');  
      gradientStroke1.addColorStop(1, '#17c5ea'); 
   
  var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientStroke2.addColorStop(0, '#ff8359');
      gradientStroke2.addColorStop(1, '#ffdf40');

      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [{
            label: 'Laptops',
            data: [65, 59, 80, 81, 65, 59, 80, 60, 59],
            borderColor: '#008cff',
            backgroundColor:  '#008cff',
            hoverBackgroundColor:  '#008cff',
            pointRadius: 0,
            fill: false,
            borderWidth: 0
          }, {
            label: 'Mobiles',
            data: [50, 48, 55, 45, 37, 58, 64, 50, 54],
            borderColor: '#ffc107',
            backgroundColor: '#ffc107',
            hoverBackgroundColor: '#ffc107',
            pointRadius: 0,
            fill: false,
            borderWidth: 0
          }]
        },
		 options:{
		  maintainAspectRatio: false,
		  legend: {
			  position: 'bottom',
              display: true,
			  labels: {
                boxWidth:40
              }
            },
			tooltips: {
			  displayColors:false,
			},	
		  scales: {
			  xAxes: [{
				  barPercentage: .5
			  }]
		     }
		}
      });
	  
	 
// chart 2

 var ctx = document.getElementById("chart2").getContext('2d');

      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ["Jeans", "T-Shirts", "Shoes"],
          datasets: [{
            backgroundColor: [
              '#008cff',
              '#fd3550',
              '#15ca20'
            ],
            hoverBackgroundColor: [
              '#008cff',
              '#fd3550',
              '#15ca20'
            ],
            data: [45, 40, 25],
			      borderWidth: [1, 1, 1]
          }]
        },
        options: {
			maintainAspectRatio: false,
			cutoutPercentage: 75,
            legend: {
			  position: 'bottom',
              display: true,
			  labels: {
                boxWidth:20
              }
            },
			tooltips: {
			  displayColors:false,
			}
        }
      });

   

// worl map

jQuery('#geographic-map-2').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    zoomOnScroll: false,
    color: '#009efb',
    regionStyle : {
        initial : {
          fill : '#008cff'
        }
      },
    markerStyle: {
      initial: {
				r: 9,
				'fill': '#fff',
				'fill-opacity':1,
				'stroke': '#000',
				'stroke-width' : 5,
				'stroke-opacity': 0.4
                },
                },
    enableZoom: true,
    hoverColor: '#009efb',
    markers : [{
        latLng : [21.00, 78.00],
        name : 'Lorem Ipsum Dollar'
      
      }],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
});




   });	 
   