// 获取数据库数据显示商品列表
// $('.my-cart').click(function(){
$(document).ready(function(){
    console.log('页面加载完毕')
    $.get('../interface/showlist.php',function(data){
        var json = JSON.parse(data);
        if(json.code==0){
            alert('购物车里面空空的')
        }else{
            // console.log(json.data[0].product_img)
            $('.main .item-box .item-table').remove()
            $(json.data).each(function(){
                $tableStr = '<div class="item-table"><div class="col-check"><i class="iconfont icon-yes"></i> </div><div class="col-img"><img src="' + this.product_img + '" alt=""></div><div class="col-name">' + this.product_name + '</div><div class="col-price"><span class="pro-price">' + this.product_price + '</span> 元</div><div class="col-num"><div class="num-counter"><div class="down">-</div><input type="text" class="goods-num" value="' + this.product_num + '"><div class="up">+</div></div></div><div class="col-total"><span class="pro-price-sum">0</span> 元</div><div class="col-action"><i class="del-btn">×</i></div></div>'
                $('.main .item-box').append($tableStr)
            })
            proPriceSum()
            upAndDown()
            iconYesToogle()
            iconYesBind()
            proNumInit()
            // alert('你买了的东西是'+JSON.stringify(json.data))
        }
    })
})

// 计算单品总价
function proPriceSum() {
    console.log('刷新单品总价')
    $('.pro-price-sum').each(function() {
        var $PriceSum = parseInt($('.pro-price').eq(
                                $(this).parent().parent().index()
                            ).text()) * 
                            parseInt($('.goods-num').eq(
                                $(this).parent().parent().index()
                            ).val())
        $(this).text($PriceSum)
    })
}
$('.goods-num').on('blur',()=>{
    proPriceSum()
    proNumInit()
})


// 删除物品
function delGoods(e,type){
    console.log('删除物品')
    if(type == 1){
        $('.item-table').eq($(e).parent().parent().index()).remove()
    }else if(type == 2){
        $('.item-table').eq($(e).parent().parent().parent().index()).remove()
    }
}
$('.del-btn').click(()=>{
    delGoods(this,1)
})

// 增减物品
function upAndDown() {
    $('.item-table .col-num .down').click(function() {
        // var $goodNum = $('.goods-num').eq($(this).parent().parent().parent().index()).val()
        var $goodNum = $(this).siblings('.goods-num').val()
        if($goodNum == 1){
            delGoods(this,2)
            proNumInit()
        }else{
            $(this).siblings('.goods-num').val($goodNum - 1)
            proPriceSum()
            proNumInit()
        }
    })
    $('.item-table .col-num .up').click(function() {
        var $goodNum = $(this).siblings('.goods-num').val()
        $(this).siblings('.goods-num').val($goodNum - 0 + 1)
        proPriceSum()
        proNumInit()
    })
}
upAndDown()



// 复选按钮
function iconYesToogle(){
    $('.icon-yes').off('mouseenter')
    $('.icon-yes').not('.active').mouseenter(function(){
        $(this).css("color", "#424242")
    })
    $('.icon-yes').not('.active').mouseleave(function(){
        $(this).css("color", "#fff")
    })
}
iconYesToogle()

// iconYesBind()
function iconYesBind(){
    $('.icon-yes').click(function() {
        if($(this).hasClass('all') == true){
            console.log($('.icon-yes').length)
            console.log($('.icon-yes.active').length)
            console.log($('.icon-yes').length - 1 > $('.icon-yes.active').length)
            if($('.icon-yes').length - 1 > $('.icon-yes.active').length){
                $('.icon-yes').addClass('active')
                $('.pro-price-sum').addClass('active')
                $('.goods-num').addClass('active')
            }else{
                $('.icon-yes').removeClass('active')
                $('.pro-price-sum').removeClass('active')
                $('.goods-num').removeClass('active')
            }
        }else{
            $(this).toggleClass('active')
            $('.pro-price-sum')
            .eq($(this)
            .parent().parent()
            .index())
            .toggleClass('active')
            $('.goods-num')
            .eq($(this)
            .parent().parent()
            .index())
            .toggleClass('active')
            if ($('.icon-yes').length - 1 == $('.icon-yes.active').length){
                $('.icon-yes.all').toggleClass('active')
            }
        }
        iconYesToogle()
        proNumInit()
    })
}

// 显示统计信息
function proNumInit() {
    console.log('刷新结算信息')
    // 显示已选商品数量
    var $proNumTotal = 0
    var $proNum = 0
    $('.goods-num').each(function() {
        $proNumTotal += $(this).val()-0
    })
    $('.goods-num.active').each(function() {
        $proNum += $(this).val()-0
    })
    $('.pro-num-total').text($proNumTotal)
    $('.pro-num').text($proNum)
    var $proPriceTotal = 0
    $('.pro-price-sum.active').each(function(){
        $proPriceTotal += parseInt($(this).text())
    })

    // 显示合计价格
    $('.pro-price-total').text($proPriceTotal)
}
proNumInit()
