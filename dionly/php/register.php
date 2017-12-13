<?php
	header('content-type:text/html;charset=utf-8');
	require 'public.php';//引入公共部分；
	if(isset($_POST['phone'])){
		$phone = $_POST['phone'];
		$pass = $_POST['pass'];
	}else{
		exit('非法登录');
	}
	//执行sql语句
	$query = "select*from `reg-information` where phone='$phone'";
	$result = mysql_query($query);//如果用户名存在有记录集存在。
	if(mysql_fetch_array($result)){
		echo true;//重复
		
	}else{
		echo false;//没有重复
		
	}
	
	

	
?>
