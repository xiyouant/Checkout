<?php

   @mysql_connect("localhost","root",'') or die("mysql连接失败");
   mysql_select_db("qiandao") or die("db连接失败");
   mysql_set_charset("UTF-8");
   mysql_query('set names utf8');
   
   $sql = "select `id` FROM `members`order by `id` desc limit 1 ";
   $query=mysql_query($sql);
    $rss=mysql_fetch_array($query);
      
   echo json_encode($rss);
?>