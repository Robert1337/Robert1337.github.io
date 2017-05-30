// JavaScript Document

var yttreSSH = document.getElementsByClassName('yttreSSH');

[].forEach.call(yttreSSH, function (c) {
	'use strict';
var next = c.getElementsByClassName('next')[0],
prev = c.getElementsByClassName('prev')[0],
inner = c.getElementsByClassName('inreSSH')[0],
imgs = inner.getElementsByTagName('img'),
currentImageIndex = 0;
var w = 100;
var unit = 'vw';

			function showNext() {
    			currentImageIndex++;

    			if (currentImageIndex >= imgs.length) 
					{
     					currentImageIndex = 0;
    				}

    			switchImg();
  			}		
	
  
  
		function switchImg() 
		{
			inner.style.left = -w * currentImageIndex + unit;
			
		}

			 function showPrev() {
   			 	currentImageIndex--;

    			if (currentImageIndex < 0) 
					{
      					currentImageIndex = imgs.length - 1;
   					}
	
   				switchImg();
 			}
			
		next.addEventListener('click', showNext);
		prev.addEventListener('click', showPrev);
		
		 switchImg();

		var t = setInterval(showNext, 5000); 
		
		c.addEventListener('mouseover', function () 
		{ 
			clearInterval(t); 
		}); 
		
		c.addEventListener('mouseout', function () { 
			t = setInterval(showNext, 5000); 
		});
		
		switchImg();

});