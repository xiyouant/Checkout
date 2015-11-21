<?php
/*setcookie("user", NULL);
header("location:cover.php");*/
session_start();
if(!empty($_SESSION['loginuser'])){
//header("location:../index.php");
session_destroy();

//header("location:../index.php");
  } 

?>