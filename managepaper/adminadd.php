<?php

@mysql_connect("localhost","root","") or die("数据库连接失败");
mysql_select_db("qiandao") or die("db连接失败"); 
$id=$_POST['id'];

 $sql = "INSERT INTO `qiandao`.`members` (`name`, `password`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`) VALUES ('$id', '1234', '2', '2', '2', '2', '2');";
 $query=mysql_query($sql);
 echo 1;
 ?>