$(document).ready(function(){
/*
news slider start
 */
 	// console.log("一张网页，要经历怎样的过程，才能抵达用户面前？一位新人，要经历怎样的成长，才能站在技术之巅？探寻这里的秘密；体验这里的挑战；成为这里的主人；一同加入华东交通大学日新网技术中心把！ http://hr.ecjtu.net/");
	var wrapper = $(".news_wrapper"),
		icons = $(".slider li");

	var newsSlider = function(){
		var w_left = parseInt(wrapper.css("left")),
			w_width = parseInt(wrapper.css("width"));
		//w_left 0,-1,-2
		w_left = (w_left / w_width);

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
	    currentPosition+=7;  
	    var	nav = document.getElementsByClassName("navbar2");
	    var newsTop = (news.offset().top)-nav[0].clientHeight;
	    if(currentPosition<newsTop+6)  
	    {  
	        window.scrollTo(0,currentPosition);  
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
 */
	function scrollShowNav(){
		var	navbar1 = $(".navbar1"),
	    	navbar2 = $(".navbar2");
		$(window).scroll(function () {
			//watch scroll distance timely
			var navTop = $(window).scrollTop();
        	if(navTop>=33){
        		navbar1.addClass('none');
        		navbar2.removeClass('none');
        	}else{
        		navbar1.removeClass('none');
        		navbar2.addClass('none');
        	}
		});

		var menu = $(".menu"),
			nav = $("#nav"),
			li = nav.find("ul").find("li");
		menu.bind("click",function(){
			$(this).toggleClass('closer');
			nav.slideToggle(600);
		})
		li.bind("click",function(){
			$(nav).slideUp(600);
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
    		wrapper = $("#map .wrapper");
    	map.bind('mouseover', function() {
    		$(wrapper).removeClass('blur');
    	}).bind("mouseout",function(){
			$(wrapper).addClass('blur');
    	});

    }())
/*
map end
 */
})