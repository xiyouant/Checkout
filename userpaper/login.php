<?php

 include("conn.php");
 mysql_query('set names utf8');
$id= mysql_escape_string($_POST['use']);

$password= mysql_escape_string($_POST['pas']);

$sql = "SELECT * FROM `member` WHERE `username` = '$id';";
$query=mysql_query($sql);
if($rs=mysql_fetch_array($query)){
		 if($rs['password']==$password){
		     $data=1;
			 session_start();
   			 $_SESSION['loginuser']=$rs['username'];
		  }else{
		 
		   $data=2;
		  }
	}else{
		 $data=3;
		
}
echo json_encode($data);


?>
