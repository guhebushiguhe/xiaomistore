// 计算单品总价
function proPriceSum() {
    $('pro-price-sum').each(function() {
        var $proPriceSum = parerInt($('.pro-price').eq(
                                $(this).parent().parent().index()
                            ).text()) * 
                            parseInt($('goods-num').eq(
                                $(this).parent().parent().index()
                            ).value)
        $(this).text($proPriceSum)
    })
}
proPriceSum()

$('pro-price-sum').keyup(proPriceSum())

// 删除物品
$('.del-btn').click(function() {
    console.log($('.item-table').eq($(this).parent().parent().index()))
    $('.item-table').eq($(this).parent().parent().index()).remove()
})
// 增减物品




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

$('.icon-yes').click(function() {
    if($(this).hasClass('all') == true){
        if($('.icon-yes').length - 1 > $('.icon-yes.active').length){
            $('.icon-yes').addClass('active')
            $('.pro-price-sum').addClass('active')
            iconYesToogle()
        }else{
            $('.icon-yes').removeClass('active')
            $('.pro-price-sum').removeClass('active')
            iconYesToogle()
        }
    }else{
        $(this).toggleClass('active')
        $('.pro-price-sum')
        .eq($(this)
        .parent().parent()
        .index())
        .toggleClass('active')
        if ($('.icon-yes').length - 1 == $('.icon-yes.active').length){
            $('.icon-yes.all').toggleClass('active')
        }
        iconYesToogle()
    }
    proNumInit()
})
// 显示统计信息
function proNumInit() {
    // 显示已选商品数量
    $('.pro-num-total').text($('.icon-yes').not('.all').length)
    $('.pro-num').text($('.icon-yes.active').not('.all').length)
    var $proPriceTotal = 0
    $('.pro-price-sum.active').each(function(){
        $proPriceTotal += parseInt($(this).text())
    })

    // 显示合计价格
    $('.pro-price-total').text($proPriceTotal)
}
proNumInit()