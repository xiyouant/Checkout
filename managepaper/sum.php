<?php

   include("../userpaper/conn.php");
   mysql_query('set names utf8');
   
   $sql = "select `member_id` FROM `member`order by `member_id` desc limit 1 ";
   $query=mysql_query($sql);
    $rss=mysql_fetch_assoc($query);
      
   echo json_encode($rss);
?>