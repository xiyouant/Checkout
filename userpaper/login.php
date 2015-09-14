<?php

@mysql_connect("localhost","root","") or die("数据库连接失败");
mysql_select_db("qiandao") or die("db连接失败"); 
mysql_set_charset("UTF-8");
 mysql_query('set names utf8');

$id=$_POST['use'];

$password=$_POST['pas'];

$sql = "SELECT * FROM `members` WHERE `name` LIKE '$id';";
$query=mysql_query($sql);
if($rs=mysql_fetch_array($query)){
		 if($rs['password']==$password){
		      if($rs['name']=="xiyouant"){
		 $data=4;
		   }else{
		   $data=2;
	}
		  }else{
		 
		   $data=1;
		  }
	}else{
		 $data=3;
		
}
echo json_encode($data);

?>