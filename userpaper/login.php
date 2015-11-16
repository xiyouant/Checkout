<?php

 include("conn.php");
 include("cookies.php");
 mysql_query('set names utf8');
$id=$_POST['use'];

$password=$_POST['pas'];

$sql = "SELECT * FROM `member` WHERE `username` LIKE '$id';";
$query=mysql_query($sql);
if($rs=mysql_fetch_array($query)){
		 if($rs['password']==$password){
		      if($rs['username']=="leozhang"){
		 $data=4;
		 mycookie($id);
		   session_start();
           $_SESSION['loginuser']=$rs['username'];
		   }else{
		   $data=1;
		   mycookie($id);
		   session_start();
           $_SESSION['loginuser']=$rs['username'];
	}
		  }else{
		 
		   $data=2;
		  }
	}else{
		 $data=3;
		
}
echo json_encode($data);


?>