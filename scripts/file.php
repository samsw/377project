<?php
$connection = mysql_connect('localhost', 'root', 'mysql');
mysql_select_db('mydb');

$week = $_POST['week'];
$result = mysql_query("SELECT * FROM `nfldata` WHERE `Week` = $week") or die(mysql_error());

// Encode in JSON and echo back??
// Could also just echo HTML if that's easier

mysql_close();
?>
