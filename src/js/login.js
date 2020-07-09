// 登录按钮
$('.login-btn').click(function() {
    // 获取填写数据
    var username = $('.username').val()
    var password = $('.password').val()
    console.log(username,password)
    // 发送登录请求
    $.get('../interface/login.php',{
        username: username,
        password: password
    },function(data){
        console.log(data)
        json = JSON.parse(data)
        console.log(json)
        if(json.code==0){
            alert('用户名或密码出错,登录失败!')
        }else if(json.code==1){
            alert('登录成功')
        }
    })
})