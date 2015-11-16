<?php
   include("conn.php");
   include("checkcount.php");
   mysql_query('set names utf8');
   session_start();
    $username=$_SESSION['loginuser'];
	//$username="leozhang";
	check($username);
   /*$sql="select * from `members` where `name`='$usen';";
   
   $query=mysql_query($sql);
   $rsc=mysql_fetch_array($query);
      
   echo json_encode($rsc);以前的代码 传给他一周七天的值*/
   $sql="select `checkout_date` from `sign` where `username`='$username' order by `id` DESC limit 1";//判断今天是周几，是一周的第几天
   $a=mysql_query($sql);
   $b=mysql_fetch_array($a);
	//print_r ($b);
	//echo $b[0];
	$c=strtotime($b[0]);
	
	//echo $c;
	$time= date("D",$c);
	//echo $time;
	$arrdate=array("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
	  for($temp = 0;$temp < count($arrdate);$temp++){
    if($arrdate[$temp]==$time){
	$i=$temp+1;
	break;
	}
  }
  //echo $i;
  $sum=$i;
     $ipotime=time()-24*3600*($i-1);
	 $ipotimed=date("Y-m-d",$ipotime);
	 $sql="SELECT `checkout_date`  FROM `sign` WHERE `checkout_date` > '$ipotimed' and `checkout_date` <= 'time()' and `username`='$username';";
	 $a=mysql_query($sql);
	 $array=null;
	 while($b=mysql_fetch_assoc($a))
	 {
	 
		$array[]=$b;
	 }
//print_r($array);
	foreach($array as &$v){
	$v=date("D",strtotime($v['checkout_date']));
	unset($value); 
	}
//print_r($array);
$qwe=array(2,2,2,2,2,2,2,);
//print_r($qwe);
	foreach($array as $value){
		switch($value)
		{
		case "Mon":$qwe[0]=1;break;
		case "Tue":$qwe[1]=1;break;
		case "Wed":$qwe[2]=1;break;
		case "Thu":$qwe[3]=1;break;
		case "Fri":$qwe[4]=1;break;
		case "Sat":$qwe[5]=1;break;
		case "Sun":$qwe[6]=1;break;
		}
	}
  //传给前台一数组
echo json_encode($qwe);
?>