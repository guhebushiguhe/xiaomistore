<?php
// 登录功能

// 解决中文乱码
header("Content-Type: text/html;charset=utf-8");
// 获取前端参数
$um = $_REQUEST['username'];
$pw = $_REQUEST['password'];

// 根据前端参数查询数据
$sql = "SELECT * FROM `user` WHERE `username`='$um' AND `password`='$pw' ";
$conn = mysqli_connect("localhost","root","root","xiaomi");
// $res = mysqli_query($conn,$sql);

$res = mysqli_query($conn,$sql);   
 
if (!$res) {
    printf("Error: %s\n", mysqli_error($conn));
    exit();
}

$rows = mysqli_num_rows($res);
if($rows>0){
    setcookie('name',$um,time()+30);
	echo json_encode(array("code"=>1));
}else{
    echo json_encode(array("code"=>0));
}


?>