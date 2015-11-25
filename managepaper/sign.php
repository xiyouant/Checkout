<?php

   include("../userpaper/conn.php");
   mysql_query('set names utf8');
   
   $omyi=$_POST['omyi'];
   $omyn=$_POST['week_num'];
   include_once("firstweek.php");
	 //echo $i;
	  $sql="SELECT *  FROM `member` WHERE  `member_id`='$omyi';";
	 $a=mysql_query($sql);
	 $b=mysql_fetch_assoc($a);
	 //$name= $b['firstname'].$['lastname'];
	 //echo $b['firstname'];
	 //echo $b['lastname'];
	 $name=$b['username'];
	 $c=$b['firstname'].$b['lastname'];
	 //echo $c;
	 if($omyn==1){
			$fwtime=($i+1)*24*3600+$firsttime;
			$a=date("Y-m-d",$fwtime);
			//echo $a;
			$sql="SELECT `checkout_date`  FROM `sign` WHERE `checkout_date` > '$firsttime' and `checkout_date` < '$a' and `username`='$name';";
			 include_once("situation.php");//传给前台一数组
	}else{
	//echo 1;
			$ob=$firsttime+(($omyn-1)*7+$i)*3600*24;
			//echo (date("Y-m-d",$ob));
						if($ob>time()){
						$time= date("D",time());
						$arrdate=array("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
						  for($temp = 0;$temp < count($arrdate);$temp++){
							if($arrdate[$temp]==$time){
							$w=$temp+1;
							break;
							}
						 }
						 }else{
						 $w=7;
						 
						}//得到查询周的天数
						//echo $w;
				 if($w==7){
				
				 $ipotime=$firsttime+24*3600*($i+7*($omyn-1)+1);
				 $a=date("Y-m-d",$ipotime);
				 $ipttime=$ipotime-7*24*3600;
				 $b=date("Y-m-d",$ipttime);
				 $sql="SELECT `checkout_date`  FROM `sign` WHERE `checkout_date` > '$b' and `checkout_date` < '$a' and `username`='$name';";
				  include_once("situation.php");  //当n周全满时
	   }else{
				 $ipotime=(($omyn-2)*7+$w+$i+1)*24*3600+$firsttime;
				  $a=date("Y-m-d",$ipotime);
				  //echo $a;
				 $ipttime=$ipotime-$w*24*3600;
				 $b=date("Y-m-d",$ipttime);
				 //echo $b;
				 $sql="SELECT `checkout_date`  FROM `sign` WHERE `checkout_date` > '$b' and `checkout_date` < '$a' and `username`='$name';";
				 include_once("situation.php");
			}//
				
	}
?>