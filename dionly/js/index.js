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
		//轮播图
		lunbo: (function() {
			$('.btns .secondbtn').on('click', function() {
				$('.scroll .secondimg').animate({
					opacity: 1
				});
				$('.scroll .firstimg').animate({
					opacity: 0
				});
				$('.btns .secondbtn').addClass('orange');
				$('.btns .firstbtn').removeClass('orange')
			});
			$('.btns .firstbtn').on('click', function() {
				$('.scroll .firstimg').animate({
					opacity: 1
				});
				$('.scroll .secondimg').animate({
					opacity: 0
				});
				$('.btns .firstbtn').addClass('orange');
				$('.btns .secondbtn').removeClass('orange');
			});
			var $timer = setInterval(function(){
				if($('.scroll .firstimg').css('opacity')==1){
//					alert(1)
					(function() {
						$('.scroll .secondimg').animate({
							opacity: 1
						});
						$('.scroll .firstimg').animate({
							opacity: 0
						});
						$('.btns .secondbtn').addClass('orange');
						$('.btns .firstbtn').removeClass('orange')
					})();
					
				}
				else if($('.scroll .firstimg').css('opacity')==0){
//					alert(1)
					(function() {
						$('.scroll .secondimg').animate({
							opacity: 0
						});
						$('.scroll .firstimg').animate({
							opacity: 1
						});
						$('.btns .firstbtn').addClass('orange');
						$('.btns .secondbtn').removeClass('orange')
					})();
				}	
				
			},2000);
			$('.banner').hover(function(){
				clearInterval($timer)
			},function(){
				clearInterval($timer)
				$timer = setInterval(function(){
				if($('.scroll .firstimg').css('opacity')==1){
//					alert(1)
					(function() {
						$('.scroll .secondimg').animate({
							opacity: 1
						});
						$('.scroll .firstimg').animate({
							opacity: 0
						});
						$('.btns .secondbtn').addClass('orange');
						$('.btns .firstbtn').removeClass('orange')
					})();
					
				}
				else if($('.scroll .firstimg').css('opacity')==0){
//					alert(1)
					(function() {
						$('.scroll .secondimg').animate({
							opacity: 0
						});
						$('.scroll .firstimg').animate({
							opacity: 1
						});
						$('.btns .firstbtn').addClass('orange');
						$('.btns .secondbtn').removeClass('orange')
					})();
				}	
				
			},2000)
			})
		})(),
		//菜单
		menu:(function(){
			$('.bottom .list').hover(function(){
				$('.subMenu').css('display','block')
			},function(){
				$('.subMenu').css('display','none')
			});
			$('.bottom .subMenu').hover(function(){
				$('.subMenu').css('display','block')
			},function(){
				$('.subMenu').css('display','none')
			});
			$('.subMenu li').each(function(){				
				$(this).mouseover(function(){
					$(this).css('background-color','#1C1919')
				});
				$(this).mouseout(function(){
					if($(this).index()==0||$(this).index()==2||$(this).index()==4||$(this).index()==5){
						$(this).css('background-color','#383333')
					}
					else if($(this).index()==1||$(this).index()==3||$(this).index()==6){
						$(this).css('background-color','#312d2d')
					}					
				});				
			})
		})(),
		//吸顶菜单
		topmenu:(function(){
			var $scrolltop=$(window).scrollTop()
				if($scrolltop>148||$scrolltop==148){
					$('.nav .list').css('position','fixed');
					$('.nav .list').css('z-index','99');
					$('.nav .list').css({top:0});
					$('.nav .subNav').css('position','fixed');
					$('.nav .subNav').css({top:0});
					$('.nav .subNav').css('background-color','white');
					$('.nav .subNav').css('left','242px');
					$('.nav .subNav').css('z-index','99');
					$('.subMenu').css('position','fixed');
					$('.nav .subMenu').css({top:38});
				}
				if($scrolltop<148){
					$('.nav .list').css('position','static');
					$('.nav .subNav').css('position','static');
					$('.nav .subMenu').css('position','absolute');
					$('.nav .subMenu').css({top:33})
				}	
			$(window).scroll(function(){
				var $scrolltop=$(window).scrollTop()
				if($scrolltop>148||$scrolltop==148){
					$('.nav .list').css('position','fixed');
					$('.nav .list').css('z-index','99');
					$('.nav .list').css({top:0});
					$('.nav .subNav').css('position','fixed');
					$('.nav .subNav').css({top:0});
					$('.nav .subNav').css('background-color','white');
					$('.nav .subNav').css('left','242px');
					$('.nav .subNav').css('z-index','99');
					$('.subMenu').css('position','fixed');
					$('.nav .subMenu').css({top:38});
				}
				if($scrolltop<148){
					$('.nav .list').css('position','static');
					$('.nav .subNav').css('position','static');
					$('.nav .subMenu').css('position','absolute');
					$('.nav .subMenu').css({top:33})
				}			
			})			
		})(),
		//移动切换
		moveswitch:(function(){
			$('.footer .footertopright').find('ul li').hover(function(){
//				console.log($(this))
				$(this).addClass('select')
				var $shopsindex = $(this).index()
				//console.log($shopsindex)
				$('.footer .shops').removeClass('divshow')
					//console.log($('.footer .shops').eq($shopsindex).find('.topword').html())
				$('.footer .shops').eq($shopsindex).addClass('divshow')
			},function(){
				$(this).removeClass('select')				
			});
		})(),
		//按钮切换
		btnsswithch:(function(){			
			$('.rightsearch .color').find('a').on('click',function(){				
				var $colorindex = $(this).index()+1
				//console.log($colorindex) 
				$('.rightsearch .color').find('a').each(function(index){
					$(this).find('img').attr('src','img/'+(index+1)+'.png')
				})
				$(this).find('img').attr('src','img/'+$colorindex+'_1.png')
			});
			$('.rightsearch .burnishing').find('a').on('click',function(){				
				var $burnishingindex = $(this).index()+8
				//console.log($colorindex) 
				$('.rightsearch .burnishing').find('a').each(function(index){
					$(this).find('img').attr('src','img/'+(index+8)+'.png')
				})
				$(this).find('img').attr('src','img/'+$burnishingindex+'_1.png')
			});
			$('.rightsearch .neatness').find('a').on('click',function(){				
				var $neatnessindex = $(this).index()+12
				//console.log($colorindex) 
				$('.rightsearch .neatness').find('a').each(function(index){
					$(this).find('img').attr('src','img/'+(index+12)+'.png')
				})
				$(this).find('img').attr('src','img/'+$neatnessindex+'_1.png')
			})
		})(),
		//图片导入
		imglist:(function(){
			$.ajax({
				url:'http://127.0.0.1:8088/dionly/php/php.php',
				dataType:'json'
			}).done(function(d){
				//console.log(d)
				for(var i=0;i<d.length;i++){					
					$('.ajaximg').eq(i).attr('src',d[i].url)					
				}
				
			})
			
		})(),
		//右侧悬浮窗
		rightlist:(function(){
			$('.sidebar .ervm').hover(function(){
				$('.sidebar .vm').css('display','block')
			},function(){
				$('.sidebar .vm').css('display','none')
			});
			$('.sidebar .vm').hover(function(){
				$('.sidebar .vm').css('display','block')
			},function(){
				$('.sidebar .vm').css('display','none')
			})
		})(),
		//拖拽窗口
		movewindow:(function(){			
			$('.sidebar ul').find('.showclick').on('click',function(){
				$('.movewindow').css('display','block')
			});
			$('.movewindow').find('i').on('click',function(){
				$('.movewindow').css('display','none')
			});
			$('.movewindow').find('.topline').mousedown(function(e){
				var shortx=e.offsetX;
	   			var shorty=e.offsetY;
				$(document).mouseover(function(ev){					
					$('.movewindow').css({
   						left:ev.clientX-shortx,
   						top:ev.clientY-shorty	
   					});	
   					return false;
				});
				$(document).mouseup(function(){
					$(document).off('mouseup');
					$(document).off('mouseover')
				})
			});
			$('.movewindow button').on('click',function(){
				var name = $('.inf-name input').val();
				var tel = $('.inf-tel input').val();
				var email = $('.inf-email input').val();
				var message = $('.inf-message textarea').val();
				var num=0;
				var num1=0;
				var num2=0;
				var num3=0;
				//alert(email)
				if(name==''){
					$('.rederror1').css('display','block')
				}
				if(name!=''){
					$('.rederror1').css('display','none ');
					num1 = 1
				}
				if(tel==''){
					$('.rederror2').css('display','block')
				}
				if(tel!=''){
					if(/^[0-9]{11}$/g.test(tel)){
						$('.rederror2').css('display','none');
						num2 = 1
					}
					else{
						$('.rederror2').css('display','block')
					}
				}
				if(message==''){
					$('.rederror4').css('display','block')
				}
				if(message!=''){
					$('.rederror4').css('display','none');
					num3 = 1
				}
				num = num1+num2+num3
				if(email==''){
					if(num==3){
						$('.movewindow button').css('display','none');
						$('.movewindow .submitsuccess').css('display','block')
					}
				}
				if(email!=''){
					if(/^(\w)+(\.\w+)*@(\w)+(\.\w+)+$/g.test(email)){
						$('.rederror3').css('display','none')
						if(num==3){
							$('.movewindow button').css('display','none');
							$('.movewindow .submitsuccess').css('display','block')
						}
					}
					else{
						$('.rederror3').css('display','block')
					}
				}
			})			
		})(),
		//点击就送屠龙宝刀
		clicksendTuLongSword:(function(){
			$('.sidebar .gotop').on('click',function(){
				$('html,body').animate({
				scrollTop:0
				});
			});
		})()
	}
});

