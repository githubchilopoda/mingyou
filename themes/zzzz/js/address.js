/**
 * Created by Administrator on 2017/5/24.
 */
$(function(){
    $('.list_right .on').click(function(){
        $(this).parent().parent().siblings().find('.hide').html('');
        $(this).parent().parent().siblings().find('.on').html('设为默认');
        $(this).parent().parent().find('.hide').html('<img src="img/add_list_btn.png" alt="add_list_btn.png">')
        $(this).parent().parent().find('.on').html('')
    })


})
function opend(){/*添加收货地址*/
     var  oLi=$('.add_list ul li');
     var  oSum= $('.btn_new_add .sum');

    if(oLi.length<10) {
        var main=$(oLi).first().clone().appendTo('.add_list ul')
        $(main).find('.hide').html('');
        $(main).find('.on').html('设为默认');

    }else{
        alert('已经超过10个地址')
    }
    $('.list_right .on').click(function(){
        $(this).parent().parent().siblings().find('.hide').html('');
        $(this).parent().parent().siblings().find('.on').html('设为默认');
        $(this).parent().parent().find('.hide').html('<img src="img/add_list_btn.png" alt="add_list_btn.png">')
        $(this).parent().parent().find('.on').html('')
    })
    $(oSum).html($('.list_right .on').length)
}
function removeTo(index){
    var returned=window.confirm("亲！确定要删除吗？")
    if(returned){
        $(index).parent().parents('li').remove();
    }

    if($(index).siblings().find('.hide').html('')){
        $('.add_list ul li:first-child').find('.hide').html('<img src="img/add_list_btn.png" alt="add_list_btn.png">')
        $('.add_list ul li:first-child').find('.on').html('');
    }
    $('.btn_new_add .sum').html($('.list_right .on').length)
}


/*
function wrapTo(indexTo){
    $(indexTo).on('click',function(){
        var min=$(indexTo).parents().find('.hide').addClass('current')
        var ming= $('.list_top .hide')
        $('.list_top .current').html('<img src="img/add_list_btn.png" alt="add_list_btn.png">')

    })
}*/
