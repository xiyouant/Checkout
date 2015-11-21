<?php

 include("conn.php");
 include_once("myaddslashes.php");
 include_once("myhtmlspecialchars.php");
 mysql_query('set names utf8');
 session_start();
 $name=$_SESSION['loginuser'];
 //echo $name;
 $con=$_POST['con'];
 $con2=check_html($con);
 $con3=check_sql($con2);
 $sql = "INSERT INTO `sign_message` (`id`, `time`,`name`,`content`) VALUES (NULL, CURRENT_TIMESTAMP,'$name', '$con3');";
 $query=mysql_query($sql);

?>