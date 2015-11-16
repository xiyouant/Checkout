<?php
include("session.php");
checklogin();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>管理</title>
<link type="text/css" rel="stylesheet" href="css/table.css" />
<link type="text/css" rel="stylesheet" href="css/management.css" />
<script src="../jquery-2.0.0.min.js"></script>
<script src="js/management.js"></script> 
</head>

<body>
<div id="oall">
	<div id='header'>
		<ul>
		   <li><a href='#sort'>统计</a></li>
		   <li><a href="#announce">公告</a></li>
		</ul>
	</div><!--首先是左侧面是定位为fixed的导航条-->
	<div id='sort'>
	   <div id="jump_week">
           <span>第</span><input class="jump_week_text" type="text"><span>周</span><input id="jump_btn" type="button" value="跳转">
	   </div>
	   <div id="css_table">
		  <div class="css_tr">
			  <div class="css_td">姓名</div>
			  <div class="css_td">周一</div>
			  <div class="css_td">周二</div>
			  <div class="css_td">周三</div>
			  <div class="css_td">周四</div>
			  <div class="css_td">周五</div>
			  <div class="css_td">周六</div>
			  <div class="css_td">周日</div>
			  <div class="css_td">一周签到天数</div>
		  </div>
	   </div>
	</div><!--统计和包括提醒功能的模块-->
	<div id='announce'>
		<h2>发布公告</h2>
		<div class='line_a'></div>
		<div><textarea id='conbox' placeholder="请输入公告的具体内容"></textarea></div>
		<input id='ann_btn' type="button" value='提交公告' />
	</div><!--发布公告模块-->
</div>
</body>
</html>
