/**
 * Created by Administrator on 2017/5/22.
 */
$(function(){
    $('.login .name').focus(function(){/*会员名获取失去焦点事件*/
        if($(this).val()=='会员名'){
            $(this).val('')
        }
    })
    $('.login .name').blur(function(){
        var userName=/^[a-zA-Z0-9_]{3,16}/;
        if((userName.test($(this).val())) || ($(this).val()=='会员名')){
            $(this).parent().find('i').css({'display':'none','color':'red'}).html('')
        }else{
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('请合理使用用户名')
        }
        if($(this).val()==''){
            $(this).val('会员名')
        }
    })
    $('.login .pass').focus(function(){/*密码获取失去焦点事件*/
        $(this).attr('type','password')
        if($(this).val()=='密码'){
            $(this).val('')
        }
    })
    $('.login .pass').blur(function(){
        var passWrod=/^[a-zA-Z0-9]{6,16}/;
        if((passWrod.test($(this).val())) || ($(this).val()=='密码')){
            $(this).parent().find('i').css({'display':'none','color':'red'}).html('')
        }else{
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('密码不能少于6为高于16位，只能为字母数字开头')
        }
        if($(this).val()==''){
            $(this).attr('type','text')
            $(this).val('密码')
        }
    })
    $('.login label').click(function(){/*login 同意下次登入 点击事件*/
        if($('.login .login_box').hasClass('true_current')){
            $('.login .login_box').removeClass('true_current')
        }else{
            $('.login .login_box').addClass('true_current')
        }
    })
    $('.content .login_btn').click(function(){
        if($('.login .pass').val()==''|| $('.login .name').val()==''||$('.login .pass').val()=='密码'|| $('.login .name').val()=='会员名'){
            alert('用户名和密码不能为空')
            return false
        }
    })


})
