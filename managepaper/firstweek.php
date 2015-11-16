<?php
$sql = "select `checkout_date` FROM `sign` where `id`='1'"; //第一周有几天
       $oa=mysql_query($sql);
   $ob=mysql_fetch_array($oa);
	//print_r ($b);
	//echo $b[0];
	$firsttime=strtotime($ob[0]);//记录签到的第一天
	//echo $firsttime;
	$time= date("D",strtotime($ob[0]));
	//echo $time;
	$arrdate=array("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
	  for($temp = 0;$temp < count($arrdate);$temp++){
		if($arrdate[$temp]==$time){
		$i=7-($temp+1);
		break;
		}
     }
?>