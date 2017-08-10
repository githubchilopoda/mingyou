/**
 * Created by Administrator on 2017/5/26.
 */
$(function(){

    //for(var j=1;j<=localStorage.length;j++){/*获取localStorage*/
    //    console.log(j);
    //    //$('.shop_list>ul').append(localStorage.getItem(localStorage.key(j)));
    //}
    for(var i in localStorage){
        $('.shop_list>ul').append(localStorage.getItem(i));
    }

    var warp=0;
    $('.hidden_menu').click(function(){/*dianji  shangp jianshu sjian*/
        var $appen=$('.shop_list ul li ul li a').html();/*img 添加到menu下面*/
        var $menu=$('.menu_pic ul')
        var $checked=$('.shop_list .current');
        warp++
        if(warp==2){
            $('.footer_list .menu_pic').css({'display':'none'})
            warp=0;
        }else{
            $('.footer_list .menu_pic').css({'display':'block'})
        }


    })
    $('.checkedAll').click(function(){
        var laBel=$('.shop_list>ul>li label')
        if((($('.footer_list label').hasClass('current_all'))||($('.tle_list label').hasClass('current_all')))){
            $('.footer_list label').removeClass('current_all');
            $('.tle_list label').removeClass('current_all')
        }else{
            $('.footer_list label').addClass('current_all')
            $('.tle_list label').addClass('current_all')
        }
        laBel.each(function(k){
            if((($('.footer_list label').hasClass('current_all'))||($('.tle_list label').hasClass('current_all')))){
                $(laBel).eq(k).addClass('current')
            }else{
                $(laBel).eq(k).removeClass('current')
            }
        })
        toTlo()
    })



})
/*计价器*/
function toTlo(){
    $('.sum .text_input').blur(function(){/*input 失去焦点事件*/
        var str=/^\d+$/;
        var max=$(this).parent().find('.max_input').val()
        if(!(str.test($(this).val()))){
            $(this).val('1')
        }
        if($(this).val()>=max){
            $(this).val(max)
            alert('已超过最大库存')
        }
    })
    var oLd=$('.shop_list .old');/*原价*/
    var prInt=$('.shop_list .print');/*单价*/
    var sum=$('.footer_list .sum_All').find('i');/*总数量*/
    var totaL=$('.footer_list .totalAll');/*总价*/
    var oldAll=$('.footer_list .oldAll');/*原价总价*/
    var laBel=$('.shop_list>ul>li label');/*li个数*/
    var $sum=$('.sum .text_input');/*value值*/
    var warp= 0,main= 0,$oLd=0;/*变量*/
    laBel.each(function(i){
        var len=oLd[i].innerHTML.length;
        var $leng=oLd[i].innerHTML.substring(1,len);/*旧单价*/
        var  pri=prInt[i].innerHTML.length;
        var $print=prInt[i].innerHTML.substring(1,pri);/*新单价*/
        if($(this).hasClass('current')){
            warp+=parseInt($print*(parseInt($sum[i].value)));
            main+=parseInt($sum[i].value)
            $oLd+=parseInt(parseInt($leng*($sum[i].value))-$print*($sum[i].value))
        }
   });
    $(totaL).html('￥'+warp.toFixed(2))/*总价*/
    $(sum).html($('.shop_list .current').length)/*总件数*/
    $(oldAll).html($oLd.toFixed(2))/*以节省总价*/


}
/*计价器end*/

/*check点击事件*/
function check(index){
    if($(index).hasClass('current')){
        $(index).removeClass('current')
    }else{
        $(index).addClass('current')
    }
    toTlo()
    if($('.shop_list .current').length==$('.shop_list>ul>li').length){
        $('.footer_list label').addClass('current_all')
        $('.tle_list label').addClass('current_all')
    }else{
        $('.footer_list label').removeClass('current_all')
        $('.tle_list label').removeClass('current_all')
    }
}
/*删除事件*/
function reMove(remo){
    var $Key=$(remo).parent().parent().parent().attr('dataindex');
    var $length=$('.shop_list>ul>li');
    var returned = window.confirm("亲！确定要删除吗？");/*确认 取消按钮弹框*/
    if(returned){
        $(remo).parent().parent().parent().remove();/*清除静态li*/
        localStorage.removeItem($Key);/*删除localStorage数据*/
        if($('.shop_list .current').length==$($length).length-1){
            $('.footer_list label').addClass('current_all')
            $('.tle_list label').addClass('current_all')
        }
        if($('.shop_list .current').length==0){
            $('.footer_list label').removeClass('current_all')
            $('.tle_list label').removeClass('current_all')
        }
    }
    toTlo();

}

function reMoveall(){
    var laBel=$('.shop_list>ul>li label');

    if($(laBel).hasClass('current')<=0){
        alert('请选择要删除的商品')

    }else{
        $('#view').css({'display':'block'});
        setTimeout(function(){
            var returned = window.confirm("亲！确定要全部删除吗！！！");
            var oLi=$('.shop_list>ul>li');
            if(returned){
                laBel.each(function(j){
                    if($(laBel).eq(j).hasClass('current')){
                        var item=$(laBel).eq(j).parent().parent().parent().attr('dataindex');
                            localStorage.removeItem(item);
                        $(laBel).eq(j).parent().parent().parent().remove();
                    }
                });

                $('#view').css({'display':'none'});
                toTlo()
            }else{
                $('#view').css({'display':'none'});
            }
        },400)
    }

    if($('.shop_list .current').length==0){
        $('.footer_list label').removeClass('current_all')
        $('.tle_list label').removeClass('current_all')
    }
    toTlo()
}

/*全选点击效果*/
function allCCheck(All){
    var laBel=$('.shop_list>ul>li label')
    if($(All).hasClass('current_all')){
        $(All).removeClass('current_all')
        $(laBel).removeClass('current')
    }else{
        $(All).addClass('current_all')
        $(laBel).addClass('current')
    }
   /* laBel.each(function(e){
        if($(laBel).eq(e).hasClass('current')){
            $(laBel).eq(e).removeClass('current')
        }else{
            $(laBel).eq(e).addClass('current')
        }
    })*/
    if($(All).hasClass('current_all')){
        $('.footer_list label').addClass('current_all')
        $('.tle_list label').addClass('current_all')
    }else{
        $('.footer_list label').removeClass('current_all')
        $('.tle_list label').removeClass('current_all')
    }
    toTlo()
}

/*累加*/

function add(indexadd){
    var max_input=$('.sum .max_input').val();
    var index=$(indexadd).parent().find('.text_input');
    var indexvlaue=$(indexadd).parent().find('.text_input').val()
    if($(index).val()==max_input){
        $(index).val(max_input)
        alert('已超过库存，请于客服联系1111111111')
    }else{
        $(index).val(++indexvlaue)
    }
    toTlo()
}

/*leijian*/
function donw(indexdonw){
    var index=$(indexdonw).parent().find('.text_input');
    var indexvlaue=$(indexdonw).parent().find('.text_input').val()
    if($(index).val()==1){
        $(index).val('1')
    }else{
        $(index).val(--indexvlaue)
    }
    toTlo()
}
//    $key=0
//function menu(){
//    var $appen=$('.shop_list ul li ul li a').html();/*img 添加到menu下面*/
//    var $menu=$('.menu_pic ul')
//    var $checked=$('.shop_list .current');
//    var up=0;
//    $key++
//    if($key==1){
//        $checked.each(function(p){
//            var $Img=$($checked).eq(p).parent().find('a').html();
//            var $tml='<li><a href="pro_details.html">'+$Img+'</a></li>'
//            $($tml).appendTo($menu)
//        })
//        $('.menu_pic i').html($('.menu_pic ul li').length)/*商品总数 隐藏菜单栏*/
//
//    }else{
//        $key=0
//        $($menu).find('li').remove()
//        clearInterval(time)
//    }
//    var time=null;
//    var up=0;
//    var oLi=$('.menu_pic ul li').width();
//    var obj=$('.menu_pic ul li')
//    var odiv=$('.menu_pic ul')
//  /*  if($('.menu_pic ul li').length>7){
//        time=setInterval(function(){
//            up++
//            if(up==$(obj).length-7){
//                $(odiv).css('left',0);
//                up=0;
//            }
//            $(odiv).stop(true,true)
//            $(odiv).animate({'left':-(up%$(obj).length)*(oLi+60)},500)
//        },1800)
//    }*/
//
//    $('.menu_pic .shop_left').click(function(){
//      /*  clearInterval(time)*/
//        up++
//        if($('.menu_pic ul li').length>7){
//            if(up==$(obj).length-6){
//                up=$(obj).length-7;
//                return false
//            }else{
//                $(odiv).stop(true,true)
//                $(odiv).animate({'left':-(up%$(obj).length)*(oLi+60)},500)
//            }
//        }
//    })
//    $('.menu_pic .shop_right').click(function () {
//     /*   clearInterval(time)*/
//        up--
//        if ($('.menu_pic ul li').length > 7) {
//            if (up <= -1) {
//                up =  0
//                /*$(odiv).animate({'left': -(up % $(obj).length) * (oLi + 60)}, 500)*/
//            }
//            $(odiv).stop(true, true)
//            $(odiv).animate({'left': -(up % $(obj).length) * (oLi + 60)}, 500)
//        }
//    });
//<div class="menu_pic">
//        <h6>普通商品 <i>6</i> 件</h6>
//        <div>
//        <ul class="clearfix">
//        </ul>
//        </div>
//        <a href="###" class="shop_left"><img src="img/shop_left.png" alt="shop_left.png"></a>
//        <a href="###" class="shop_right"><img src="img/shop_right.png" alt="shop_right.png"></a>
//        </div>
/*    $('.menu_pic').hover(function(){
        clearInterval(time)
    },function(){/!*鼠标*!/
        if($('.menu_pic ul li').length>7){
            time=setInterval(function(){
                up++
                if(up==obj.length-7){
                    $(odiv).css('left',0)
                    /!*$(odiv).animate({'left':-(up%obj.length)*(oLi+60)},500)*!/
                    up=0;
                }
                $(odiv).stop(true,true)
                $(odiv).animate({'left':-(up%$(obj).length)*(oLi+60)},500)
            },1800)
        }
    })*/

