<?php
	$conn=@mysql_connect('localhost','root','12345678');
	if(!$conn){
		die('数据库连接错误'.mysql_error());
	}
	mysql_select_db('dionly',$conn) or die('选择数据库错误'.mysql_error);
	mysql_query('SET NAMES UTF8');
?>