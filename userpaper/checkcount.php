<?php
/*include ("conn.php");
$username='leozhang';
echo $username;*/
function check($username){
 //mysql_query('set names utf8');
 $sql="select `checkout_date` from `sign` where `username`='$username' order by `id` DESC limit 1";
 $a=mysql_query($sql);
$b=mysql_fetch_array($a);
//print_r ($b);
//echo $b[0];
$c=strtotime($b[0]);

//echo $c;
$time= date("YMD",$c);
//echo $time;
$m=time();
$oc=date("YMD",$m);
//echo $oc;
if($time==$oc){

}else{
$sqo="INSERT INTO `sign` (`id`, `username`, `checkout_date`) VALUES (NULL, '$username', NOW());";
mysql_query($sqo);

}
//mysql_query
}//检验是否已经签到
//check($username);

?>