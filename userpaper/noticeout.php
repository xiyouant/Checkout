<?php
   include("conn.php");
   mysql_query('set names utf8');
   
   $sql = "SELECT `content` FROM `sign_notices` order by `id` DESC limit 1; ";
   
   $query=mysql_query($sql);
 
   $rsw=mysql_fetch_array($query);
   echo json_encode($rsw);

?>