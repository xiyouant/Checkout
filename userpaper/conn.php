<?php
  @mysql_connect("localhost","root",'') or die("mysql连接失败");
   mysql_select_db("eb_lms") or die("db连接失败");
   mysql_set_charset("UTF-8");
   
?>