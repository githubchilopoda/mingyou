/**
 * Created by Administrator on 2017/5/26.
 */

$(function(){
    $('.confirm_right .check_text').click(function(){
        if($(this).find('input').get(0).checked){
            $(this).find('input').get(0).checked=false
        }else{
            $(this).find('input').get(0).checked=true
        }

    })

    $('.content .add li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
    })
    $('.confirm_left input').focus(function(){
        if($(this).val()=='选填:对本次交易的说明'){
            $(this).val('').css('color','#333')
        }
    })
    $('.confirm_left input').blur(function(){
        if($(this).val()==''){
            $(this).val('选填:对本次交易的说明').css('color','#999')
        }
    })
})