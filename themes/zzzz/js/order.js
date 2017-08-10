/**
 * Created by Administrator on 2017/5/16.
 */
$(function(){
    $('.main .search input').focus(function(){
        if($(this).val()=='商品名称/商品编号/订单号'){
            $(this).val('')
        }
    })
    $('.main .search input').blur(function(){
        if($(this).val()==''){
            $(this).val('商品名称/商品编号/订单号')
        }
    })

    $('.column ul li').click(function(){/*栏目切换*/
        $(this).addClass('current').siblings().removeClass('current');
        $('.column_list .order_list').eq($(this).index()).addClass('current_list').siblings().removeClass('current_list')
    })
})
function deL(index){
    var alearWindow=window.confirm("确定好取消订单吗？")
    if(alearWindow){
        $(index).parents('li').remove();
    }
}
