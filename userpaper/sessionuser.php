<?php
include("conn.php");
mysql_query('set names utf8');
session_start();
$name=$_SESSION['loginuser'];
$sql="SELECT *  FROM `member` WHERE  `username`='$name';";
$a=mysql_query($sql);
$b=mysql_fetch_assoc($a);
//echo $b['firstname'];
//echo $b['lastname'];
$username=$b['firstname'].$b['lastname'];
echo $username;
?>