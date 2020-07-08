// header下拉列表
var $itemBox = $("li.nav-item")
var $proBox = $('.nav-item>.pro-box')
var flag = false

$itemBox.mouseenter(function(){
    var index=$(this).index()
    if (index == 0){
        return
    }else if (flag == false){
        console.log($proBox.eq(index-1).height())
        $proBox.eq(index-1).animate({height: "240px"},()=>{
            // console.log('enter',this,$proBox.eq(index-1).height())
            flag = true
        })
    }else{
        $proBox.height('0px')
        $proBox.eq(index-1).height('240px')
        // console.log('enter',this,$proBox.eq(index-1).height())
    }
})
$itemBox.mouseleave(function(){
    var index=$(this).index()
    if(index == 0){
        return
    }else{
        clearTimeout(t)
        var t = setTimeout(
            ()=>{
                // console.log('leave',this,$proBox.eq(index-1).height())
                if($proBox.eq(index-1).height() != 0){
                    $proBox.eq(index-1).animate({height: "0px"})
                    flag = false
                }else{
                    return
                }
        },1000
        )
    }
})

// banner轮播图
window.onload = function(){
    // swiper初始化  
    var mySwiper = new Swiper ('.pro-swiper', {
        autoplay: true,
        delay: 1000,
        effect: 'fade',
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // bulletClass: 'my-bullet',
        },
        
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    })
}

// 选择版本和颜色,并显示在信息框
// 获取元素准备变量
var $verArr = $('.ver-option .ver').children()
var $colorArr = $('.color-option .ver').children()
var $ver = $('.ver-option .ver .active')
var $color = $('.color-option .ver .active')

// 初始化选中项获取
function proInfoInit(){
    $ver = $('.ver-option .ver .active')
    $color = $('.color-option .ver .active')
}

// 点击选项
$verArr.click(function(){
    $verArr.removeClass('active')
    $(this).addClass('active')
    proInfoInit()
    proInfo()
})
$colorArr.click(function(){
    $colorArr.removeClass('active')
    $(this).addClass('active')
    proInfoInit()
    proInfo()
})

// 更新商品信息
var priceCurrent = 0
var priceMarket = 0
var proVersion = ''
var proName = ''

function proInfo() {
    proVersion = $ver.text() + ' ' + $color.text()
    $('p.pro-info').text(proVersion)
    proName = $('.main .product-con .title').text() + ' ' + proVersion

    if($ver.index() == 0){
        priceCurrent = 1499
        priceMarket = 1699
    }else if($ver.index() == 1){
        priceCurrent = 1699
        priceMarket = 1800
    }else if($ver.index() == 2){
        priceCurrent = 1799
        priceMarket = 2199
    }
    
    $('.price-box span').text(priceCurrent)
    $('.marketprice-box del').text(priceMarket)
    $('p.price').text('秒杀价:  ' + priceCurrent +' 元')
}

// 添加到购物车点击事件
$('.btn-primary').click(function() {
    proInfo()
    // var cartUrl = './cart.html?priceCurrent=' + priceCurrent + '&priceInfo=' + priceInfo
    // $(location).prop('href',cartUrl)
    $.get('../interface/addwq.php',{
        id:4,
        img:"../images/Redmi_K30.jpg",
        price:priceCurrent,
        name:proName,
    },function(data){
        console.log(data)
        var json = JSON.parse(data);
        if(json.code==1){
            alert('添加商品成功');
            window.location.href = "./cart.html";
        }
    })
})

// 导航栏购物车按钮
// $('.cart-btn').click(function() {
//     window.location.href = "./cart.html";
// })
// $('.cart-btn').mouseover(function(){

// })