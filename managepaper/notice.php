<?php
   include("../userpaper/conn.php");
   mysql_query('set names utf8');
   
   
   $not=$_POST['not'];
   $sql =  "INSERT INTO `sign_notices` (`id`, `content`) VALUES (NULL, '$not');";
   $query=mysql_query($sql);
?>