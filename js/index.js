$(document).ready(function(){
	/*
	news slider
	 */
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
    click .header_more goto #news
     */
    var more =$(".header_more"),
    	news = $('#news');

    $(more).click(function(){
    	timer2=setInterval(runToNews,1);
    })
    function runToNews(){  
	    currentPosition=document.documentElement.scrollTop || document.body.scrollTop;  
	    currentPosition+=7;  
	    var newsTop = news.offset().top;
	    if(currentPosition<newsTop+6)  
	    {  
	        window.scrollTo(0,currentPosition);  
	    }  
	    else  
	    {  
	        clearInterval(timer2);  
	    }  
	}
})