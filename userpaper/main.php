
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link type="text/css" rel="stylesheet" href="css/main.css" />
<script src="../jquery-2.0.0.min.js"></script>
<script src="js/main.js"></script>
<title>主界面</title>
</head>

<body>
<div id="safe_out">安全退出</div>
<div id='main'>
   <div class='line_a'></div>
   <div id='announce'>
          <img src="img/annimg.png" />
          <div class='ann_header'>NOTICE BORDER</div>
          <div id='ann_main'></div>
   
   </div> 
   <div id='say'>
           <div id='message'><!--后面是留言板部分-->
                        <div class='list'><!--呈现大家留言的地方-->
                            <ul id='ann_ul'>
                                
                            </ul>
                        </div>
                        <form class='sentmess'>
                             <div class='a'><input type="text" id='conbox' class='f-text' /></div><!--留言输入处-->
                             <div class='b'><input type="button" id='sentbut' value='发送留言' /></div><!--发送按钮-->
                        </form>
           </div><!--这部分是留言板-->
          <img src="img/messageimg.png" />
          <div class='say_header'>MESSAGE BORDER</div>
   </div>
   <div id='register'>
       <ul id='reg_day'>
          <li><span>Mon</span></li>
          <li><span>Tue</span></li>
          <li><span>Wed</span></li>
          <li><span>Thu</span></li>
          <li><span>Fri</span></li>
          <li><span>Sat</span></li>
          <li><span>Sun</span></li>
       </ul>
   </div>
</div>
</body>
</html>
