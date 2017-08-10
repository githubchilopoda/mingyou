/**
 * Created by Administrator on 2017/5/12.
 */

$(function(){
    $('.banner ul li').first().clone().appendTo('.banner ul');
    var bannerLeg=$('.banner ul li');
    $('.banner ul li img').width($(document.body).outerWidth(true));
    var obj=$('.banner ul');
    var widTh=$('.banner ul li').width();
    var time=null;
    var main=0;
    $('.banner ol li').eq(0).addClass('current');
   time=setInterval(function(){/*定时器*/
       main++;
       if(main==bannerLeg.length){
           main=1;
           $(obj).css('left',0)
       }
       if(main==bannerLeg.length-1){
           $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
       }
       $(obj).animate({'left':-(main%bannerLeg.length)*widTh},500);
       $('.banner ol li').eq(main).addClass('current').siblings().removeClass('current');

   },1500)
    $('.btn_left').click(function(){/*左点击效果*/
        clearInterval(time);
        main--;
        if(main<0){
            main=bannerLeg.length-2;
            $('.banner ul').stop();
            $(obj).animate({'left':-((bannerLeg.length-1)*widTh),'transition':'none'},0);
            $('.banner ol li').eq(main).addClass('current').siblings().removeClass('current');

        }
        $('.banner ul').stop();
        $(obj).animate({'left':-(main%bannerLeg.length)*widTh},500);
        $('.banner ol li').eq(main).addClass('current').siblings().removeClass('current');
    });
    $('.btn_right').click(function(){/*右点击效果*/
        clearInterval(time);
        main++;
        if(main==bannerLeg.length){
            $('.banner ul').stop();
            $('.banner ul').css('left',0);
            main=1;
        }
        if(main==bannerLeg.length-1){
            $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
        }
        $('.banner ul').stop();
        $('.banner ul').animate({'left':-(main%bannerLeg.length)*widTh},500)
        $('.banner ol li').eq(main).addClass('current').siblings().removeClass('current');
    });
    $('.banner ul').hover(function(){
        clearInterval(time)/*移动暂停定时器*/
    },function(){/*移出启用定时器*/
            time=setInterval(function(){
                main++;
                if(main==bannerLeg.length){
                    main=1;
                    $(obj).css('left',0)
                }
                if(main==bannerLeg.length-1){
                    $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
                }
                $(obj).animate({'left':-(main%bannerLeg.length)*widTh},500);
                $('.banner ol li').eq(main).addClass('current').siblings().removeClass('current');

            },1500)
    });

    $('.banner ol li').mouseover(function(){/*点在移动上去时的事件 简写版*/
        clearInterval(time);
        $(this).addClass('current').siblings().removeClass('current');
        $('.banner ul').stop().animate({'left':-($(this).index())*widTh},200);
    })





});
