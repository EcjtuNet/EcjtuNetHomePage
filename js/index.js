/*
college slider
 */
$(window).load(function () {
    $(".marquee_wrapper").flexisel({
        visibleItems: 3,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint: 480,
                visibleItems: 1
            },
            landscape: {
                changePoint: 768,
                visibleItems: 1
            },
            tablet: {
                changePoint: 992,
                visibleItems: 2
            }
        }
    });
});
$(document).ready(function(){	
	//$().UItoTop({ easingType: 'easeOutQuart' });
								
/*
news slider start
 */
 	console.log("Welcome To Rixin BIG FAMILY ^_^ http://hr.ecjtu.net/");
	var wrapper = $(".news_wrapper"),
		icons = $(".slider li");

	var newsSlider = function(){
		var w_left = parseInt(wrapper.css("left")),
			w_width = parseInt(wrapper.css("width"));
		w_left = (w_left / w_width);
		//w_left 0,-1,-2
		
		icons.each(function(){
			$(this).removeClass('active');
		})
		//icon change
		$(icons[-w_left]).next().addClass('active');
		if(parseInt(w_left) <= -2){
			w_left = 1;
			$(icons[0]).addClass('active');
		}
		//wrapper slide
		w_left = (w_left - 1)*100 + "%";
		wrapper.animate({left:w_left},700);				    
	}    

	var	timer = setInterval(newsSlider,3000);  	
	//icon click
	$(icons).click(function(){
		clearInterval(timer);
		icons.each(function(){
			$(this).removeClass('active');
		})
		$(this).addClass('active');
		var n = icons.index(this);
		wrapper.animate({left:-100*n+"%"},700);	
		timer = setInterval(newsSlider,3000);	
	})
	//wrapper mousemove
    $(wrapper).mouseover(function(){
    	clearInterval(timer);
    }).mouseout(function(){
	    timer = setInterval(newsSlider,3000); 	
	})   
/*
news slider end
 */

/*
runToNews start
 */	
    var more =$(".header_more"),
    	news = $('#news');

    $(more).click(function(){
    	timer2=setInterval(runToNews,1);
    })

    function runToNews(){  
	    currentPosition=document.documentElement.scrollTop || document.body.scrollTop;  
	    //console.log(currentPosition); 
	    currentPosition+=7;  
	    var	nav = document.getElementsByClassName("navbar2");
	    var newsTop = (news.offset().top)-nav[0].clientHeight;
	    if(currentPosition<newsTop+6)  
	    {  
	        window.scrollTo(0,currentPosition);
	        //console.log(currentPosition); 
	    }  
	    else  
	    {  
	        clearInterval(timer2);  
	    }  
	}
/*
runToNews end
 */

/*
scrollShowNav start
&& runToTop
 */
	function scrollShowNav(){
		var	navbar1 = $(".navbar1"),
	    	navbar2 = $(".navbar2"),
	    	toTop = $("#toTop"),
	    	windowHeight = $(window).height();
		$(window).scroll(function () {
			//watch scroll distance timely
			var navTop = $(document).scrollTop();
        	if(navTop>=33){
        		navbar1.addClass('none');
        		navbar2.removeClass('none');
        	}else{
        		navbar1.removeClass('none');
        		navbar2.addClass('none');
        	}
        	//console.log("a"+navTop);
        	//console.log("b"+windowHeight);
        	if(navTop>=windowHeight/2){
        		toTop.fadeIn(500);
        	}else{
        		toTop.fadeOut(500);
        	}
		});

		toTop.bind("click",function(event){
			event.preventDefault();
			timer3 = setInterval(runToTop,1);
		})
        var runToTop = function(){
        	var navTop2 = $(window).scrollTop();
        	//console.log(navTop2);
        	if(navTop2>0){
        		navTop2-=15;
        		//console.log("a"+navTop2);
				window.scrollTo(0,navTop2);
        	}else{
        		clearInterval(timer3);
        		//console.log("b"+navTop2);
        	}			 
		} 	
		
		var menu = $(".menu"),
			nav = $("#nav"),
			li = nav.find("ul").find("li"),
			navbar_right = $(".navbar2 .anv");
		menu.bind("click",function(){
			$(this).toggleClass('closer');
			nav.slideToggle(600);
		})
		li.bind("click",function(){
			$(nav).slideUp(600);
			$(menu).removeClass('closer');
			// navbar2.css('opacity',0);
			// $(window).bind("mousemove",function(){
			// 	navbar2.css('opacity',1);
			// })
		})
	}
	scrollShowNav();
/*
scrollShowNav end
 */

/*
map start
 */
    (function map(){
    	var map = $("#map"),
    		map2 = $("#map2"),
    		wrapper = $("#map .wrapper"),
    		btn_close = $(".map_close"),
    		btn_open = $(".mapGo");
    	map.bind('mouseover', function() {
    		$(wrapper).removeClass('blur');
    	}).bind("mouseout",function(){
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
    }())

/*
map end
 */

/*
hoverDisplayBlock start
 */
	function hoverDisplayBlock(elem, target,outer){
		var target = $(target);
		$(elem).bind("mouseover",function(){
			target.siblings('img').css("display","none");
			target.css("display","block");
			// $(target).siblings('img').fadeOut("100",function(){
			// 	$(target).fadeIn("400");
			// });
		})
		$(outer).bind("mouseover",function(){
			target.css("display","none");
			target.siblings('.iphone').css("display","block");
			
		})
	}
	hoverDisplayBlock(".qq_btn",".qq","#map,#service");
	hoverDisplayBlock(".sina_btn",".sina","#map,#service");

	var sample = $(".sample");
	$(sample).each(function(){
		$(this).bind("mouseover",function() {
			$(this).find(".mask").css("opacity",1);
		}).bind("mouseout",function(){
			$(this).find(".mask").css("opacity",0);
		})
	})

/*
hoverDisplayBlock end
 */
})