<?php
	header('content-type:text/html;charset=utf-8');
	require "public.php";
	if(isset($_POST['phone'])){
		$phone = $_POST['phone'];
		$pass = md5($_POST['pass']);
	}
	else{
		exit('非法操作');
	}
	$query = "select*from `reg-information` where phone='$phone'";
	$result = mysql_query($query);
	$arr=mysql_fetch_array($result, MYSQL_ASSOC);
	//print_r($arr["password"]);	
	//print_r("$pass");	
	if($arr["password"]=="$pass"){
		echo true;
		
	}else{
		echo false;
		
	}
	
?>
