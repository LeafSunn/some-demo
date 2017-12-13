<?php
	header('content-type:text/html;charset=utf-8');
	require 'public.php';//引入公共部分；
	if(isset($_POST['phone'])){
		$phone = $_POST['phone'];
		$pass = $_POST['pass'];
	}else{
		exit('非法登录');
	}
$sql="insert into `reg-information`(phone, password) values('".$phone."', '".$pass."')";
	echo $sql;
	
	mysql_query($sql);
	//header('location:../login.html');
?>