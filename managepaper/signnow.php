<?php
   include("../userpaper/conn.php");
   mysql_query('set names utf8');

   $n=$_POST['omyi'];
/*$n=2;*/
   $today=date("D",time());
	//echo $time;
	$arrdate=array("Mon","Tue","Wed","Thu","Fri","Sat","Sun");
	  for($temp = 0;$temp < count($arrdate);$temp++){
    if($arrdate[$temp]==$today){
	$i=$temp+1;
	break;
	}
  }
  //echo $i;
     $ipotime=time()-24*3600*($i-1);
	 $ipotimed=date("Y-m-d",$ipotime);
	// echo $ipotimed;
	 $sql="SELECT *  FROM `member` WHERE  `member_id`='$n';";
	 $a=mysql_query($sql);
	 $b=mysql_fetch_assoc($a);
	 $name= $b['username'];
	  $c=$b['firstname'].$b['lastname'];
	// echo $name;
	 $sql="SELECT `checkout_date`  FROM `sign` WHERE `checkout_date` > '$ipotimed' and `checkout_date` <= 'time()' and `username`='$name';";
	 $a=mysql_query($sql);
	 $array=null;
	 while($b=mysql_fetch_assoc($a))
	 {
		$array[]=$b;
		
	 }
	 if($array){
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
	}else{
	$qwe=array(2,2,2,2,2,2,2,);
	}
	$qwe[]=$c;
  //传给前台一数组
  if($name==null){
  }else{
echo json_encode($qwe);
}
?>