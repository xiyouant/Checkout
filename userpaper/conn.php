<?php
  @mysql_connect("localhost","root",'') or die("Mysql connection fails");
   mysql_select_db("eb_lms") or die("db connection fails");
   mysql_set_charset("UTF-8");
   
?>