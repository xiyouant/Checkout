<?php
 include("conn.php");

if(!empty($_COOKIE['user'])){
header("location:main.php");
}

?>