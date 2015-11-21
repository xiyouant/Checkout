<?php
function check(){
session_start();
	if(!empty($_SESSION['loginuser']))
	{
		header("location:userpaper/main.php");
	}
}
?>