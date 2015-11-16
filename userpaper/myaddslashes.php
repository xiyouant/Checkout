<?php
	function check_sql($a){
		$b=mysql_real_escape_string($a);
		return $b;
	}
?>