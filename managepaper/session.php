<?php
function ucheck(){
session_start();
	if($_SESSION['loginuser'])
	{
		header("location:userpaper/main.php");
	}
}
function checklogin(){
session_start();
	if(($_SESSION['loginuser'])=='leozhang'){
	}else{
		header("location:../index.php");
	}
}

?>