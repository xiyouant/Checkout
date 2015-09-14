<?php

   @mysql_connect("localhost","root",'') or die("mysql连接失败");
   mysql_select_db("qiandao") or die("db连接失败");
   mysql_set_charset("UTF-8");
   mysql_query('set names utf8');
   
   $week=$_POST['week'];
    $usen=$_POST['usen'];
   $sqk = "UPDATE `members` SET `$week` = '2' WHERE `name` = '$usen' ;";
   mysql_query($sqk);
   $sql="select * from `members` where `name`='$usen';";
   
   $query=mysql_query($sql);
   $rsc=mysql_fetch_array($query);
      
   echo json_encode($rsc);
?>