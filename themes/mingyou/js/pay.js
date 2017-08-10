/**
 * Created by Administrator on 2017/5/26.
 */
$(function(){
   /* var key=0*/
    $('.pay_list>ul>li').click(function(){
        $(this).css('border','2px solid #fe0000');
        $(this).find('label').addClass('current');
        $('.pay_style>ul>li').css('border','2px solid #333');
        $('.pay_style>ul>li label').removeClass('current')
    })
    $('.pay_style>ul>li').click(function(){
       $(this).find('label').addClass('current')
        $(this).css('border','2px solid #fe0000')
        $(this).siblings().find('label').removeClass('current')
        $(this).siblings().css('border','2px solid #333')
        $('.pay_list>ul>li').css('border','2px solid #333');
        $('.pay_list>ul>li label').removeClass('current');
    })

    $('.pay_submit').click(function(){
        if(!$('.pay_submit li').eq(5).find('input').val()==""){
            $('.pay_submit li').eq(5).find('input').focus()
        }else{
            $('.pay_submit li').eq(0).find('input').focus()
        }

    })
    $('.pay_input .btn a').click(function(){/*支付点击效果*/
        var alerT_window=confirm("亲！确定付款吗？")
        if(alerT_window){
            $('.success').css({'display':'block'})
        }else{
            $('.failure').css({'display':'block'})
        }
    })

    $('.failure .remove').click(function(){
        $('.failure').css({'display':'none'})
    })
    $('.success .remove').click(function(){
        $('.success').css({'display':'none'})
    })
    var num ;
    $('.pay_submit li input').keyup(function(e){
        if(e.keyCode >= 48 && e.keyCode <= 57||e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode == 8){
            var index = $(this).parent().index()
            switch(e.keyCode ){
                case 48:
                    num = 0;
                    break;
                case 49:
                    num = 1;
                    break;
                case 50:
                    num = 2
                    break;
                case 51:
                    num = 3
                    break;
                case 52:
                    num = 4
                    break;
                case 53:
                    num = 5
                    break;
                case 54:
                    num = 6
                    break;
                case 55:
                    num = 7
                    break;
                case 56:
                    num = 8
                    break;
                case 57:
                    num = 9
                    break;
                case 96:
                    num = 0;
                    break;
                case 97:
                    num = 1;
                    break;
                case 98:
                    num = 2
                    break;
                case 99:
                    num = 3
                    break;
                case 100:
                    num = 4
                    break;
                case 101:
                    num = 5
                    break;
                case 102:
                    num = 6
                    break;
                case 103:
                    num = 7
                    break;
                case 104:
                    num = 8
                    break;
                case 105:
                    num = 9
                    break;
            }
            if(!$('.pay_submit li').eq(index).find('input').val()==""){
                $('.pay_submit li').eq(index).find('input').val(num)
                index++;
                $('.pay_submit li').eq(index).find('input').focus()
            }

            //按下删除键      keyCode键码数
            if(e.keyCode == 8){
                index = $(this).parent().index()
                if(!$('.pay_submit li').eq(index-1).find('input').val()==""){
                    $('.pay_submit li').eq(index-1).find('input').focus()
                    if(index==0){
                        $('.pay_submit li').eq(0).find('input').val("")
                        $('.pay_submit li').eq(index).find('input').focus()
                    }
                }

            }
        }else{
            $('.pay_submit li').eq(0).find('input').val("")
            return ;
        }

    })
})




//提交弹窗
function Twindow() {
    var b = document.getElementById("put1").value;
    var c = document.getElementById("put2").value;
    var d = document.getElementById("put3").value;
    var e = document.getElementById("put4").value;
    var f = document.getElementById("put5").value;
    var g = document.getElementById("put6").value;

    if (b == "" || c == "" || d == "" || e == "" || f == "" || g == "") {

        return;
    }

    else {
        return true;
    }


}

function windon(){
  $('.pay_style').toggle(520)
}

