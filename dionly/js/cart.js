define(['jquery'], function($) {
	return {
		//图标显示
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
		//购物车
		cookiecart:(function(){
			//alert(1);		
			if(getCookie('name') && getCookie('price')&&getCookie('url')&&getCookie('lastval')&&getCookie('clicknum')){
				$('.boximg').css('display','none');
				$('.cartlist').css('display','block');
				var n=getCookie('name').split(',');//先转数组，方便后面的遍历创建
				var cn=getCookie('clicknum').split(',');
				//alert(1)
				var d=0;
				var num=0;
				var newnum=0;
				$.ajax({
				async:false,
				url:'php/cartphp.php',
				dataType:'json'
				}).done(function(data){
					//console.log(data)
					for(var i=0;i<data.length;i++){
						//console.log(data[i].name)
						for(var j=0;j<n.length;j++){
							if(n[j]==data[i].name){
								/*alert(1)*/
								for(var k=0 ;k<cn[j];k++ ){
									newnum = cn[j];
									var inhtml='';
									d=data[i].lastval-data[i].price;
									inhtml+=
										'<div class="cartli">'+
						                    '<div class="cartliimg">'+'<a href="details.html"><img src="'+data[i].url+'" alt=""  /></a>'+'</div>'+
						                    '<div class="cartliname">'+data[i].name+'</div>'+
						                    '<div class="cartwriteword"></div>'+
						                    '<div class="cartlastval">'+data[i].lastval+'</div>'+
						                    '<div class="cartprice">'+data[i].price+'</div>'+
						                    '<div class="cartgetmoney">'+d+'</div>'+
						                    '<div class="cartdel">删除</div>'+
					            		'</div>';	
					            	$('.listbox').append(inhtml)									
								}
								
								num+=data[i].price*cn[j];	
							}
						}
					}
					$('.allList').find('span').html(newnum)					
					$('.account').find('span').html(num);
					$('.nomoney').on('click',function(){
					addCookie("name",'',-1);
					addCookie("price",'',-1);
					addCookie("url",'',-1);
					addCookie('lastval','',-1);
					addCookie('clicknum','',-1)
					$('.cartlist').css('display','none');
					window.location.reload();
					});	
					return newnum;
				})		
				//alert(newnum);
				$('.cartdel').on('click',function(){
					$(this).parent('.cartli').remove();
					addCookie('clicknum',newnum-1,7)
					window.location.reload();
					if((newnum-1)==0){
						addCookie("name",'',-1);
						addCookie("price",'',-1);
						addCookie("url",'',-1);
						addCookie('lastval','',-1);
						addCookie('clicknum','',-1)
					}


				});	
				}
				else{
					$('.boximg').css('display','block');
					$('.cartlist').css('display','none');
				}
					
				
				
				
		})()
	}
});	