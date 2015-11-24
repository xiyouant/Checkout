<?php
include("conn.php");
 mysql_query('set names utf8');
 $admin=$_POST['use'];
$password=$_POST['pas'];
 $sql = "SELECT * FROM `member` WHERE `username` = '$admin';";
$query=mysql_query($sql);
$rs=mysql_fetch_array($query);
if($admin=="root"){
	if($rs['password']==$password){
	$data=1;
	session_start();
    $_SESSION['loginuser']=$rs['username'];
	}else{
	$data=2;
	}
}else{
    $data=2;
}

echo json_encode($data);
?>