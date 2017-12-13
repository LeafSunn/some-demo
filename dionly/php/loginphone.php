<?php
	header('content-type:text/html;charset=utf-8');
	require "public.php";
	if(isset($_POST['phone'])){
		$phone = $_POST['phone'];
	}else{
		exit('非法操作');
	}
	$query = "select*from `reg-information` where phone='".$phone."'";
	$result = mysql_query($query);
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
		
	}
	
?>
