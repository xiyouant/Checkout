<?php
 function checklogin(){
session_start();
if(empty($_SESSION['loginuser'])){

header("location:http://localhost/z13/userpaper/cover.php");

 }
}
?>