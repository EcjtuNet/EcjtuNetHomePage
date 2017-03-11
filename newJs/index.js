$(document).ready(function(){	
/*
 runToTop start
 */
 	function run(){
		var	navbar1 = $(".navbar1");
	    var	toTop = $("#toTop");
	    var	windowHeight = $(window).height();
		$(window).scroll(function () {
			//watch scroll distance timely
			var navTop = $(document).scrollTop();
	    	if(navTop>=windowHeight/2){
	    		toTop.fadeIn(500);
	    	}else{
	    		toTop.fadeOut(500);
	    	}
		});

		toTop.bind("click", function(event){
			event.preventDefault();
			timer3 = setInterval(runToTop,1);
		})
	    var runToTop = function(){
	    	var navTop2 = $(window).scrollTop();
	    	if(navTop2>0){
	    		navTop2-=15;
				window.scrollTo(0,navTop2);
	    	}else{
	    		clearInterval(timer3);
	    	}			 
		}
	} 	
	run();
/*
runToTop end
 */
/*
map start
 */
    function map(){
    	var map = $("#map");
    	var	map2 = $("#map2");
    	var	wrapper = $("#map .wrapper");
    	var	btn_close = $(".map_close");
    	var	btn_open = $(".mapGo");
    	map.bind('mouseover', function() {
    		$(wrapper).removeClass('blur');
    	}).bind("mouseout", function(){
			$(wrapper).addClass('blur');
    	});
    	// btn_close.bind("click",function(event){
    	// 	event.preventDefault();
    	// 	$(map2).fadeOut(600);
    	// });
    	// btn_open.bind("click",function(event){
    	// 	event.preventDefault();
    	// 	$(map2).fadeIn(600);
    	// });
    }
    map();

/*
map end
 */

/*
hoverDisplayBlock start
 */
	function hoverDisplayBlock(inTrigger, target, outTrigger){
		var target = $(target);
		$(inTrigger).bind("mouseover", function(){
			target.siblings('img').css("display","none");
				$(target).fadeIn("1000");
		})
		$(outTrigger).bind("mouseover", function(){
			$(target).css("display","none");
			$(target).siblings('.iphone').fadeIn("1000");
			$(target).siblings('.iphone2').fadeIn("1000");
		})
	}
	hoverDisplayBlock(".qq_btn",".qq, .qq2","#map,#service");
	hoverDisplayBlock(".sina_btn",".sina, .sina2","#map,#service");
	hoverDisplayBlock(".wechat_btn",".wechat, .wechat2","#map,#service");
/*
hoverDisplayBlock end
 */
})