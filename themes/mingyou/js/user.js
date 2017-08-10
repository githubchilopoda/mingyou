/**
 * Created by Administrator on 2017/5/26.
 */
$(function(){
    $('.user_right textarea').focus(function(){
        if($(this).val()=='这家伙很懒，什么都没留下...'){
            $(this).val('').css({'color':'#333'})
        }
    })
    $('.user_right textarea').blur(function(){
        if($(this).val()==''){
            $(this).val('这家伙很懒，什么都没留下...').css({'color':'#999'})
        }
    })

    $('.column ul li').click(function(){/*栏目切换*/
        $(this).addClass('current').siblings().removeClass('current');
        $('.column_list .order_list').eq($(this).index()).addClass('current_list').siblings().removeClass('current_list')
    })
})

function deL(index){
    var alerT_text=confirm("亲！确定要取消吗？");
    if(alerT_text){
        $(index).parents('li').remove();
    }
}