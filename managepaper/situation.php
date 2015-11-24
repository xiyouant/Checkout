<?php
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