<?php
// 注册功能
// 获取前端参数
$um = $_REQUEST['username'];
$pw = $_REQUEST['password'];

// 根据前端参数插入数据
$sql = "SELECT * FROM `user` WHERE `username`=$um ";
$conn = mysqli_connect("localhost","root","root","xiaomi");
$res = mysqli_query($conn,$sql);
$rows = mysqli_num_rows($res);
if($rows>0){
	echo json_encode(array("code"=>0));
}else{
    $sql = "INSERT INTO `user` (`username`,`password`) VALUES ('$um','$pw')";
    echo json_encode(array("code"=>1));
}
?>