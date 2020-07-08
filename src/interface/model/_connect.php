<?php

header('content-type:text/html;charset=utf8');

$servername = "localhost";
$username = "root";
$password = "root";
<<<<<<< HEAD
$dbname = "xiaomi";
=======
$dbname = "shop";
>>>>>>> 05ce6eabf1bbc93371d00028c9f132be78214a39

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

?>