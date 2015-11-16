<?php
session_start();
$username=$_SESSION['loginuser'];
echo $username;
?>