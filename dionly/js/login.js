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
		//去除输入框点击后样式
		delclick:(function(){
			$('.loginmain input').focus(function(){
				$(this).css('outline','none')				
			})
		})(),
		//验证登录界面
		checklogin:(function(){
			if(getCookie('userphone')&&getCookie('userpass')){
				$('.phonenum').val(getCookie('userphone'))
				$('.password').val(getCookie('userpass'))
				$('.logbtnimg').on('click',function(){
				var phone=$('.phonenum').val()
				var pass=$('.password').val()
				if(pass==''){
					$('.login-show3').css('display','block');
				}else{
					$('.login-show3').css('display','none');
					$.ajax({
					type:"post",
					url:"php/login.php",
					data:{
						phone:phone,
						pass:pass
						}
					}).done(function(d){
						if(d){
							$('.login-show2').css('display','none');
							//alert(1)
							if($('.passinput').is(':checked')) {
							   addCookie('userphone',phone,7);
							   addCookie('userpass',pass,7);
							}	
							$(location).attr('href','index.html')
						}else{
							$('.login-show2').css('display','block');						
						}
					})
				}
				
			})
			$('.logbtnimg').trigger('click')		
			}
			$('.phonenum').on('blur',function(){
				//alert(1)
				var phone=$('.phonenum').val()
				$.ajax({
					type:"post",
					url:"php/loginphone.php",
					data:{
						phone:phone
					}
				}).done(function(d){
					if(d){
						$('.login-show1').css('display','none');
					}else{
						$('.login-show1').css('display','block');						
					}
				})
			});
			$('.logbtnimg').on('click',function(){
				var phone=$('.phonenum').val()
				var pass=$('.password').val()
				if(pass==''){
					$('.login-show3').css('display','block');
				}else{
					$('.login-show3').css('display','none');
					$.ajax({
					type:"post",
					url:"php/login.php",
					data:{
						phone:phone,
						pass:pass
						}
					}).done(function(d){
						if(d){
							$('.login-show2').css('display','none');
							//alert(1)
							if($('.passinput').is(':checked')) {
							   addCookie('userphone',phone,7);
							   addCookie('userpass',pass,7);
							}	
							$(location).attr('href','index.html')
						}else{
							$('.login-show2').css('display','block');						
						}
					})
				}
				
			});				
		})()

	}
});









//$.ajax({
//					type:"post",
//					url:"http://127.0.0.1/DR/php/login.php?__hbt=1508155253145",
//					//addCookie('cartsid', sidarr.toString(), 7);
//					data:{
//							email:emailvalue,
//							pass:passvalue
//						}
//					
//				}).done(function(d){
//					if(!d){
//						alert("用户名或者密码错误")
//					}else{
//						location.href='index.html';
//					}
//				})
////、、登录


//$.ajax({
//							type:"post",
//							url:"http://127.0.0.1/DR/php/register.php?__hbt=1508141418356",
//							data:{
//								Email:email
//							}
//						}).done(function(d){
//							if(d){
//								$('form p').text('该邮箱已存在');
//								$(".register #email").focus();
//								return false;
//							}else{
//								$('form p').text('请输入密码');
//								$(this).next().css("visibility","visible");
//								$(".register #email").blur();
//								return true;
//							}
//						})