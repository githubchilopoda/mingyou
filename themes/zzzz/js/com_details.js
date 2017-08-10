/**
 * Created by Administrator on 2017/5/25.
 */
$(function(){
    var len=$('.com_left ul li a')/*星星评论事件*/
    $(len).on('mouseover',function(){
        $(this).prevAll().addClass('current')
        $(this).addClass('current')
        $(this).parent().find('h5').removeClass('current');
    })
    $(len).on('mouseout',function(){
        $(len).removeClass('current')
    })
    $(len).click(function(){
        $(this).addClass('current_click')
        $(this).prevAll().addClass('current_click')
        $(this).nextAll().removeClass('current_click')
        $(this).parent().find('h5').removeClass('current_click');
    })
  var leng=$('.com_right .com_icon a')

    $(leng).on('mouseover',function(){
        $(this).prevAll().addClass('current')
        $(this).addClass('current')
        $(this).parent().find('h5').removeClass('current');
    })
    $(leng).on('mouseout',function(){
        $(leng).removeClass('current')
    })
    $(leng).click(function(){
        $(this).addClass('current_click')
        $(this).prevAll().addClass('current_click')
        $(this).nextAll().removeClass('current_click')
        $(this).parent().find('h5').removeClass('current_click');
    })
    /*星星评论事件  end*/

    $('.com_right textarea').focus(function(){/*留言获取焦点事件*/
       if($(this).val()=='请在此留下您宝贵的留言..'){
           $(this).val('').css({'color':'#333'})
       }
    })
    $('.com_right textarea').blur(function(){
        if($(this).val()==''){
            $(this).val('请在此留下您宝贵的留言..').css({'color':'#999'})
        }
    })

    var main=0;
    $('.opicet_parent').click(function(){/*私密评论 点击事件*/
        main++
        if(main==2){
            $('.opicet_parent a').css({'height':'26px'});
            $('.opicet span').click(function(){
                var  htmltext=$('.opicet span').html()
                $('this').html(htmltext)
            })
            $('.opicet b').click(function(){
                /* $(this).html($('.opicet span').html())*/
                var htmltext=$('.opicet span').html()
                $('.opicet span').html($(this).html())
                $('.opicet b').html(htmltext)

            })
            main=0;
        }else{
            $('.opicet_parent a').css({'height':'auto'});
            $('.opicet span').click(function(){
                var  htmltext=$('.opicet span').html()
                $('this').html(htmltext)
            })
            $('.opicet b').click(function(){
               /* $(this).html($('.opicet span').html())*/
                var htmltext=$('.opicet span').html()
               $('.opicet span').html($(this).html())
                $('.opicet b').html(htmltext)

            })
       /*     if($('.opicet').find('span').html()=='公开评论'){
                $('.opicet').find('span').html('私密评论');
                $('.opicet').find('b').html('')
            }else if($('.opicet').find('span').html()=='私密评论'){
                $('.opicet').find('span').html('公开评论');
                $('.opicet').find('b').html('')
            }*/
        }
    })

/*    $('.opicet b').click(function(){


    })*/
$('.com_details .btn a').click(function(){/*发表评论事件*/
    if($('.com_right textarea').val()=='请在此留下您宝贵的留言..'){
        alert('请完善留言')
        return false
    }else{
        return true
    }
})

})
