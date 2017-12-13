define(['jquery'], function($) {
	return {
		showlistnum:(function(){
			if(getCookie('name')&&getCookie('clicknum')){
				var n=getCookie('name').split(',');
				var cn=getCookie('clicknum').split(',');
				var cartnumall =0;
				for(var nn=0;nn<cn.length;nn++){
					cartnumall+=cn[nn]
				}
				$('.topbar .cart').find('span').html(cartnumall)
			}
		})(),
		//点击切换
		detClickswitch:(function(){
			$('.leftbtn').attr('disabled','disabled');
			$('.rightbtn').on('click',function(){
				$('.ulwrap ul').animate({left:'-192px'});
				$('.rightbtn').attr('disabled','disabled');
				$('.leftbtn').removeAttr('disabled')
			});			
			$('.leftbtn').on('click',function(){
				$('.ulwrap ul').animate({left:'0px'});
				$('.leftbtn').attr('disabled','disabled');
				$('.rightbtn').removeAttr('disabled')
			});
			$('.ulwrap ul').find('li').hover(function(){				
				$(this).addClass('redborder')				
			},function(){
				$(this).removeClass('redborder')
			});
			$('.ulwrap ul').find('li').on('click',function(){
				//alert($(this).find('img').attr('src'))
				var changesrc=$(this).find('img').attr('src');
				$('.smalltu').find('img').attr("src", changesrc); 
				$('.bigtu').find('img').attr("src", changesrc)
			})			
		})(),
		//放大镜效果
		big:(function(){
			$('.smalltu').hover(function(){				
				var smalltuwidth=parseInt($('.smalltu').css('width'));
				//console.log(smalltuwidth)
				var bigtuwidth = parseInt($('.bigtu').css('width')) ;
				var imgwidth = parseInt($('.bigtu img').css('width')) ;
				var smalltuheight=parseInt($('.smalltu').css('height')) ;
				var bigtuheight = parseInt($('.bigtu').css('height')) ;
				var imgheight = parseInt($('.bigtu img').css('height')) ;
				var wshow = smalltuwidth*bigtuwidth/imgwidth;
				var hshow=smalltuheight*bigtuheight/imgheight;	
				//console.log(hshow)
				$('.smalfang').css('width',wshow);
				$('.smalfang').css('height',hshow);
				$('.smalfang').css('visibility','visible');
				$('.bigtu').css('display','block');
				var bili = bigtuwidth/wshow;
				$('.smalfang').mousemove(function(e){
					console.log($('.smalltu').offset().left)
					var stopLeft = e.pageX - $('.smalltu').offset().left - parseInt($('.smalfang').css('width')) /2;
					var stopTop = e.pageY - $('.smalltu').offset().top - parseInt($('.smalfang').css('height')) /2;
					console.log(stopLeft);
					console.log(stopTop)
					if(stopLeft < 0) {
						stopLeft = 0
					} else if(stopLeft >= smalltuwidth-$('.smalfang').innerWidth()) {
						stopLeft = smalltuwidth-$('.smalfang').innerWidth()
					};
					if(stopTop < 0) {
						stopTop = 0
					} else if(stopTop >= smalltuheight-$('.smalfang').innerHeight()) {
						stopTop = smalltuheight-$('.smalfang').innerHeight()
					};
					$('.smalfang').css('left',stopLeft);
					$('.smalfang').css('top',stopTop);
					$('.bigtu img').css('left',-stopLeft*bili);
					$('.bigtu img').css('top',-stopTop*bili)
				})
			},function(){
				$('.smalfang').css('visibility','hidden');
				$('.bigtu').css('display','none');
			})
		})(),
		//存入cookie
		setcookie:(function(){
			var clicknum=0
			var name = $('.rightsthing').find('strong').html();
			var str1 = $('.rightsthing').find('span').html();
			var str2 = $('.rightsthing').find('s').html(); 
			var imgurl = $('.ulwrap ul').find('li:first').find('img').attr('src');
			var lastval = str2.substr(1);
			//alert(imgurl)
			//alert(str)
			var price = str1.substr(1);
			//alert(price)
			$('.btncart img').on('click',function(){
				clicknum++;
				addCookie("name",name,7);
				addCookie("price",price,7);
				addCookie("url",imgurl,7);
				addCookie('lastval',lastval,7);
				addCookie('clicknum',clicknum,7);
			})
			$('.gotocart').on('click',function(){
				$(location).attr('href','cart.html')
			})
		})()
		
	}
});	
