<?php
function checklogin(){
session_start();
	if(($_SESSION['loginuser'])=='leozhang'){
	}else{
		header("location:../userpaper/cover.php");
	}
}
?>