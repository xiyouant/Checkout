<?php
   @mysql_connect("localhost","root",'') or die("mysql连接失败");
   mysql_select_db("qiandao") or die("db连接失败");
   mysql_set_charset("UTF-8");
   mysql_query('set names utf8');
   
   $sql = "SELECT * FROM `notice`; ";
   
   $query=mysql_query($sql);
 
   $rsw=mysql_fetch_array($query);
   echo json_encode($rsw);

?>