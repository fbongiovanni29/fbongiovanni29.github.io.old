$( document ).ready(function() {
	var home = $('.home');
	var rightOne = $('.right.one');
	var rightTwo = $('.right.two');
	var leftOne = $('.left.one');
	var leftTwo = $('.left.two');
	var navhome = $('.navhome');
	var navright1 = $('.navright1')
	var navright2 = $('.navright2');
	

	var shuffle = [home, rightOne, rightTwo];
	var nav = [navhome, navright1, navright2];

	var i = shuffle.indexOf(home);
	var stopper = shuffle.length - 1;


 		// 	$("body").on("click",function(){
			//   alert($(this).text());
			// });	
			
			$("body").on("swipeleft",function(){
			  		 	if(i === stopper){
		 				i = stopper;
	        			$(shuffle[i]).show();
	    		 		 }	else {	              	              
	              		$(shuffle[i]).hide();
	              		i = i + 1;
	              		console.log(shuffle[i]);
	              		$(shuffle[i]).show();
	              		console.log(nav[i]);
	              		$(nav[i]).addClass('active');
	              		$(nav[i - 1]).removeClass('active');
	              		}
			});

			$("body").on("swiperight",function(){
	              		if(i <= 0){
	              			$(shuffle[0]).show();
	              		} else{	              
	              		$(shuffle[i]).hide();
	              		i = i - 1;
	              		console.log(shuffle[i]);
	              		$(shuffle[i]).show(); 
	              		$(nav[i]).addClass('active');
	              		$(nav[i + 1]).removeClass('active');	              		
	              		}
			});							


	 // for (var i = 0; i < shuffle.length; i++){
	 // 	console.log([i]);
	 // }
	 
		$(document).keydown(function(event){    
	    var key = event.which;			                           
	            switch(key) {
	              case 37:
		 				if(i === stopper){
		 					i = stopper;
	        				$(shuffle[i]).show();
	    		 		 }	else {	              	              
	              		$(shuffle[i]).hide();
	              		i = i + 1;
	              		console.log(shuffle[i]);
	              		$(shuffle[i]).show();
	              		console.log(nav[i]);
	              		$(nav[i]).addClass('active');
	              		$(nav[i - 1]).removeClass('active');
	              		}
              		 

	              		//key left.            			              	
	                   break;
	              case 38:
	                   //Key up.
	                  break;
	              case 39:
	              		if(i <= 0){
	              			$(shuffle[0]).show();
	              		} else{	              
	              		$(shuffle[i]).hide();
	              		i = i - 1;
	              		console.log(shuffle[i]);
	              		$(shuffle[i]).show(); 
	              		$(nav[i]).addClass('active');
	              		$(nav[i + 1]).removeClass('active');	              		
	              		}
	                   //Key right.
	                  break;
	              case 40:
	                   //Key down.
	                  break;
	        }  


			  // Bind the swipeleftHandler callback function to the swipe event on div.box
                   
		
		

   });

});


     //        if ($('.home:visible')){
     //        	console.log('none');
  			// 	$(home).hide();
  			// 	$(".right").show();
  			// };