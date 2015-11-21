<?php
   include("conn.php");
   mysql_query('set names utf8');
   
   
   $oi=$_POST['oi'];
/*   $sqy="select count(`id`) from `information`;";
   $query=mysql_query($sqy);
   $rsy=mysql_fetch_array($query);
   $d=$rsy[0]-$oi;
   $sql="select * from `information`  where `id` ='$d';";*/
   $sql="select `name`,`content` from `sign_message` order by `id` desc limit $oi,1;";
   $a=mysql_query($sql);
   $array=null;
	 while($b=mysql_fetch_assoc($a))
	 {
		$array[]=$b;
	 }
   $sql="select `time` from `sign_message` order by `id` desc limit $oi,1;";
   $a=mysql_query($sql);
   $b=mysql_fetch_assoc($a);
  // echo $b['time'];
	   $m=date("m",strtotime($b['time']));
	   $array[]=$m;
	   $d=date("d",strtotime($b['time']));
	   $array[]=$d;
	   $h=date("H",strtotime($b['time']));
	   $array[]=$h;
	   $i=date("i",strtotime($b['time']));
	   $array[]=$i;
  // print_r($array);
    echo json_encode($array);
?>