/*!
 * jquery.scrollLoading.js
 * by zhangxinxu  http://www.zhangxinxu.com
 * 2010-11-19 v1.0
 * 2012-01-13 v1.1 偏移值计算修改 position → offset
 * 2012-09-25 v1.2 增加滚动容器参数, 回调参数
 * 2015-11-17 v1.3 只对显示元素进行处理
*/
(function($) {
	$.fn.scrollLoading = function(options) {
		var defaults = {
			attr: "data-url",
			container: $(window),
			callback: $.noop
		};
		var params = $.extend({}, defaults, options || {});
		params.cache = [];
		$(this).each(function() {
			var node = this.nodeName.toLowerCase(), url = $(this).attr(params["attr"]);
			//重组
			var data = {
				obj: $(this),
				tag: node,
				url: url
			};
			params.cache.push(data);
		});
		
		var callback = function(call) {
			if ($.isFunction(params.callback)) {
				params.callback.call(call.get(0));
			}
		};
		//动态显示数据
		var loading = function() {
			
			var contHeight = params.container.height();
			if ($(window).get(0) === window) {
				contop = $(window).scrollTop();
			} else {
				contop = params.container.offset().top;
			}		
			
			$.each(params.cache, function(i, data) {
				var o = data.obj, tag = data.tag, url = data.url, post, posb;

				if (o) {
					post = o.offset().top - contop, post + o.height();
	
					if (o.is(':visible') && (post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
						if (url) {
							//在浏览器窗口内
							if (tag === "img") {
								//图片，改变src
								callback(o.attr("src", url));		
							} else {
								o.load(url, {}, function() {
									callback(o);
								});
							}		
						} else {
							// 无地址，直接触发回调
							callback(o);
						}
						data.obj = null;	
					}
				}
			});	
		};
		
		//事件触发
		//加载完毕即执行
		loading();
		//滚动执行
		params.container.bind("scroll", loading);
	};
})(jQuery);

$('.scrollLoading').scrollLoading();

$(document).ready(function(){	
/*
 runToTop start
 */
 	function run(){
		var	navbar1 = $(".navbar1");
	    var	toTop = $("#toTop");
	    var timer3;
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
			timer3 = setInterval(runToTop,16.7);
		})
	    var runToTop = function(){
	    	var navTop2 = $(window).scrollTop();
	    	if(navTop2>0){
	    		navTop2-=70;
				window.scrollTo(0,navTop2);//x,y
	    	}else{
	    		clearInterval(timer3);
	    	}			 
		}
	} 	
	run();

/*
map start
 */
    function map(){
    	var map = $("#map");
    	var	wrapper = $("#map .wrapper");
    	map.bind('mouseover', function() {
    		$(wrapper).removeClass('blur');
    	}).bind("mouseout", function(){
			$(wrapper).addClass('blur');
    	});
    }
    map();
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
})