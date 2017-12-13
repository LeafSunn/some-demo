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
				//alert(cartnumall)
				$('.topbar .cart').find('span').html(cartnumall)
			}
		})(),
		//去除输入框点击后样式
		delclick:(function(){
			$('.registermain input').focus(function(){
				$(this).css('outline','none')				
			})
		})(),
		//告诉你个小秘密
		tellyou:(function(){
			$('.registermain .just-sth-tell-you').hover(function(){
				$(this).css('opacity','1')
			},function(){
				$(this).css('opacity','0')
			})
		})(),
		//注册校检
		regcheck:(function(){
			var codenum = parseInt(Math.random() * 8999 + 1000);
			$('.codestyle').html(codenum);
			$('.codestyle').on('click',function(){
				codenum = parseInt(Math.random() * 8999 + 1000);
				$('.codestyle').html(codenum);				
			});
			$('.changecode').on('click',function(){
				codenum = parseInt(Math.random() * 8999 + 1000);
				$('.codestyle').html(codenum);				
			});
			$('.checkipt').on('click',function(){				
				if($('.checkipt').prop('checked')){
					var num=0;
					var num1=0;
					var num2=0;
					var num3=0;
					var num4=0;
					$('.regbtn').removeClass('grayreg');
					$('.regbtn').addClass('redreg');					
										
				}
				else{
					$('.regbtn').addClass('grayreg')
					$('.regbtn').removeClass('redreg')
				};					
			});
			$('.code').on('blur',function(){
//				console.log($('.codestyle').html());
//				console.log($(this).val());
//				console.log(codenum);
				if($(this).val() == codenum) {
					$('.reg-redword2').css('display','none')
					num1=1
				} else {
					$('.reg-redword2').css('display','block')
				}
			});
			$('.fstpassword').on('blur',function(){
				if(/^\w(.{5,19})$/g.test($(this).val())) {
					$('.reg-redword3').css('display','none');
					num2=1
				} else {
					$('.reg-redword3').css('display','block')
				}
			})
			$('.secpassword').on('blur',function(){
				if(($(this).val())==$('.fstpassword').val()) {
					$('.reg-redword4').css('display','none');
					num3=1
				} else {
					$('.reg-redword4').css('display','block')
				}
			})
		$('.regbtn').on('click',function(){
				var phone = $('.registermain .phone').val();
				var pass = $('.fstpassword').val();
				if(phone==''){$('.reg-redword1').css('display','block')}
				if(phone!=''){
					if(/^(1)[0-9]{10}$/g.test(phone)){																
							$.ajax({
								type:"post",
								url:"php/register.php",
								data:{
									phone:phone,
									pass:pass
								}
							}).done(function(d){
								if(d){
									$('.reg-redword1-1').css('display','block');
								}else{
									$('.reg-redword1-1').css('display','none');
									num4=1;
									num=num1+num2+num3+num4;
									if(num==4){
										$(location).attr('href', 'login.html');
										$.ajax({
										type:"post",
										url:"php/save.php",
										data:{
											phone:phone,
											pass:pass
										}												
									})
										
									}
								}
							})								
						$('.reg-redword1').css('display','none');								
					}
					else{
						$('.reg-redword1').css('display','block')
					}
				}		
			});
		})(),
		//协议弹窗
		movebox:(function(){			
			$('.registermain').find('.showsth').on('click',function(){
				$('.boxinner').css('display','block')
			});
			$('.boxinner .toptitle').find('a').on('click',function(){
				$('.boxinner').css('display','none')
			});
			$('.boxinner').find('.toptitle').mousedown(function(e){
				var shortx=e.offsetX;
	   			var shorty=e.offsetY;
				$(document).mouseover(function(ev){					
					$('.boxinner').css({
   						left:ev.clientX-shortx-250,
   						top:ev.clientY-shorty	
   					});	
   					return false;
				});
				$(document).mouseup(function(){
					$(document).off('mouseup');
					$(document).off('mouseover')
				})
			})						
		})(),

	}
});