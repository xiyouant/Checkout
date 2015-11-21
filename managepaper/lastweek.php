<?php
include("../userpaper/conn.php");
$sum=0;
$sql = "select `checkout_date` FROM `sign` where `id`='1'"; //第一周有几天
       $oa=mysql_query($sql);
   $ob=mysql_fetch_array($oa);
	//print_r ($b);
	//echo $b[0];
	$firsttime=strtotime($ob[0]);//记录签到的第一天
	/*$firsttime=date("D",strtotime($sfirsttime));*/
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
	 //echo $i;
     $sum=$sum+1;
	$time= date("D",time());
	//echo $time;
	$arrdate=array("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
	  for($temp = 0;$temp < count($arrdate);$temp++){
    if($arrdate[$temp]==$time){
	$p=$temp+1;
	break;
	}
  }
  //echo $p;
  $sum=$sum+1;
  $data=date("Y-m-d",time());
  $data2=date("Y-m-d",$firsttime);
  $data=strtotime($data);
  $data2=strtotime($data2);
  //echo $data2;
  //echo $time;
   $time=$data-($i+$p)*3600*24-$data2;
   $time=($time)/(3600*24*7);
   //echo $time;
   $sum=$sum+$time;
   //echo $sum;
   echo json_encode($sum);
?>