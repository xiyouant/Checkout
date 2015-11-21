<?php
include("checkcookies.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="css/cover.css" />
<script src="../jquery-2.0.0.min.js"></script>
<script src="js/cover.js"></script>
<title>登录</title>
</head>


<body>
<div id='cover'>
  <img class='cover_img'  src="img/coverbg.png"/>
  <div class='cover_header'>
      <span>xiyouant</span>
      <div class='cover_line_a'></div>
      <img class='cover_header_img' src='img/xoyouant.png' />
  </div>
  <div id='cover_main'>
        <input id='username' type='text' placeholder='Username' />
        <input id='password' type="password" placeholder='Password'/>
        <input id='cover_sign' type="button" value='登录' />
  </div>
</div>
</body>
</html>