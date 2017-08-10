/**
 * Created by Administrator on 2017/5/21.
 */
$(function(){


    $('.content .form ul li:nth-child(odd)').css('margin-top','10px');/*兼容IE8 每个LI的上边距*/

    $('.form .true').click(function(){/*同意注册协议*/
        if($('.form .min_box').hasClass('true_current')){
            $('.form .min_box').removeClass('true_current')
        }else{
            $('.form .min_box').addClass('true_current')
        }
    })
    $('.form .username').focus(function(){/*账户获取焦点事件*/
        if($(this).val()=='请设置会员名'){
            $(this).val('')
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('用户名只能字母数字下划线开头，不低于3位，不高于16位！')
        }
    })
    $('.form .username').blur(function(){/*账户失去焦点事件*/
        var userName=/^[a-zA-Z0-9_]{3,16}/;
        if((userName.test($(this).val())) || ($(this).val()=='请设置会员名')){
            $(this).parent().find('i').css({'display':'none','color':'red'}).html('')
        }else{
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('用户名格式不正确')
        }
        if($(this).val()==''){
            $(this).val('请设置会员名')
        }
    })
    $('.form .pass').focus(function(){/*密码获取焦点事件*/
        $(this).attr('type','password')/*变密码类型*/
      if($(this).val()=='请设置密码'){
          $(this).val('')
          $(this).parent().find('i').css({'display':'block','color':'red'}).html('密码不能少于6为高于16位，只能为字母数字开头')
      }
    })
    $('.form .pass').blur(function(){/*密码失去焦点事件*/
        var passWrod=/^[a-zA-Z0-9]{6,16}/;
        if((passWrod.test($(this).val())) || ($(this).val()=='请设置密码')){
            $(this).parent().find('i').css({'display':'none','color':'red'}).html('')
        }else{
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('密码格式不正确')
        }
        if($(this).val()==''){
            $(this).attr('type','text')
            $(this).val('请设置密码')
        }
    })
    $('.form .repass').focus(function(){/*确认密码获取焦点事件*/
        if($(this).val()=='请确认密码'){
            $(this).attr('type','password')
            $(this).val('')
        }
    })
    $('.form .repass').blur(function(){/*确认密码失去焦点事件*/
        if($(this).val()==$('.form .pass').val()){
            $(this).parent().find('i').css({'display':'none','color':'red'}).html('')
        }else{
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('密码不匹配,请重新输入')
            $(this).val('')
        }
        if($(this).val()==''){
            $(this).attr('type','repassword')
            $(this).val('请确认密码')
        }
    })
    $('.form .email').focus(function(){/**/
        if($(this).val()=='请输入邮箱'){
            $(this).val('')
        }
    })
    $('.form .email').blur(function(){
        var emAil= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{3,4}){1,3})$/;
        if((emAil.test($(this).val()))||($(this).val()=='请输入邮箱')){
            $(this).parent().find('i').css({'display':'none','color':'red'}).html('')
        }else{
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('邮箱格式错误')
        }
        if($(this).val()==''){
            $(this).val('请输入邮箱')
        }
    })
    $('.form .op').focus(function(){
        if($(this).val()=='请输入手机号'){
            $(this).val('')
        }
    })
    $('.form .op').blur(function(){
        var phone=/^1[3|4|5|7|8][0-9]{9}$/;
        if((phone.test($(this).val()))||($(this).val()=='请输入手机号')){
            $(this).parent().find('i').css({'display':'none','color':'red'}).html('')
        }else{
            $(this).parent().find('i').css({'display':'block','color':'red'}).html('手机号码格式错误')
        }
        if($(this).val()==''){
            $(this).val('请输入手机号')
        }
    })
    $('.form .text_code').focus(function(){
        if($(this).val()=='请输入验证码'){
            $(this).val('')
        }
    })
    $('.form .text_code').blur(function(){
        validate ();
        if($(this).val()==''){
            $(this).val('请输入验证码')
        }
    })

    $('.form .btn_reg').click(function() {
        if(!($('.form .min_box').hasClass('true_current'))){
            alert('请同意注册协议再注册')
            return false
        }
        if (($('.form .username').val() == '请设置会员名') || ($('.form .pass').val() == '请设置密码') || ($('.form .email').val() == '请输入邮箱') || ($('.form .op').val() == '请输入手机号')) {
            alert('请完善信息在登录')
            return false
        }
    })
})

function loadCode(){
    code = new Array();
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("checkCode");
    checkCode.value = ""

    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H',
        'J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k');

    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*32);
        code +=selectChar[charIndex];
    }
    if(code.length != codeLength){
        createCode();
    }
    checkCode.value = code;
}
