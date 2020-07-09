// 注册按钮
$('.register-btn').click(function() {
    // 获取填写数据
    var username = $('.username').val()
    var password = $('.password').val()
    console.log(username,password)
    // 发送登录请求
    $.get('../interface/register.php',{
        username: username,
        password: password
    },function(data){
        console.log(data)
        json = JSON.parse(data)
        console.log(json)
        if(json.code==0){
            alert('注册失败!')
        }else if(json.code==1){
            alert('注册成功!')
        }
    })
})