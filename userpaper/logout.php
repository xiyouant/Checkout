<?php
session_start();
if(!empty($_SESSION['loginuser'])){
session_destroy();
header("location:login.php");
  }
?>