<?php

  @mysql_connect("localhost","root",'') or die("mysql连接失败");
   mysql_select_db("qiandao") or die("db连接失败");
   mysql_set_charset("UTF-8");
 mysql_query('set names utf8');
 $oni=$_POST['oni'];
 $con=$_POST['con'];
 $mon=$_POST['mon'];
 $dat=$_POST['dat'];
 $hou=$_POST['hou'];
 $miu=$_POST['miu'];
 
 $sql = "INSERT INTO `qiandao`.`information` (`id`, `name`, `contents`, `Month`, `dat`, `Hours`, `Minutes`) VALUES (NULL, '$oni', '$con', '$mon', '$dat', '$hou', '$miu');";
 $query=mysql_query($sql);

?>