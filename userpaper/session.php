<?php
 function checklogin(){
session_start();
if(empty($_SESSION['loginuser'])){

header("location:cover.php");

 }
}
?>