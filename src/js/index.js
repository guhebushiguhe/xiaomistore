// cookie判断登录状态
function getCookie(key) {
    // 一个参数: 要获取的cookie的值
    // 需要返回值
    var arr = document.cookie.split("; ")
    for ( var i = 0; i < arr.length; i++) {
        var newArr = arr[i].split('=')
        if (newArr[0] == key){
            return newArr[1]
        }
    }
}
var cookieUsername = getCookie('name')
// console.log(cookieUsername)

// banner轮播图
window.onload = function(){
            // swiper初始化  
            var mySwiper = new Swiper ('.swiper-container', {
                autoplay: true,
                delay: 1000,
                effect: 'fade',
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                clickable: true,
                },
                
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
            })
}

// header下拉列表
var $itemBox = $("li.nav-item")
var $proBox = $('.nav-item>.pro-box')
var flag = false

$itemBox.mouseenter(function(){
    var $index=$(this).index()
    if (flag == false){
        // console.log($proBox.eq($index).height())
        $proBox.eq($index).animate({height: "240px"},()=>{
            // console.log('enter',this,$proBox.eq($index).height())
            flag = true
        })
    }else{
        $proBox.height('0px')
        $proBox.eq($index).height('240px')
        // console.log('enter',this,$proBox.eq($index).height())
    }
})
$itemBox.mouseleave(function(){
    var $index=$(this).index()
    clearTimeout(t)
    var t = setTimeout(
        ()=>{
            // console.log('leave',this,$proBox.eq($index).height())
            if($proBox.eq($index).height() != 0){
                $proBox.eq($index).animate({height: "0px"})
                flag = false
            }else{
                return
            }
    },1000
    )
})
