/**
 * Created by Administrator on 2017/5/31.
 */

/*以下为垂直轮播效果*/
function trunTo(obj,obj1,nex,per,time){

}
$('.content_bottom .bottom_box_pic li').first().clone().appendTo('.content_bottom .bottom_box_pic');
$(obj).height($(obj1).height());
var timer=null;
var bottomBox=$('.content_bottom .bottom_box_pic li');
var widthBox=$('.content_bottom .bottom_box_pic li').height();
var keys=0;
timer=setInterval(function(){/*垂直轮播定时器*/
    keys++
    if(keys==bottomBox.length-2){
        keys=1;
        $(obj1).css('top',0)
    }
    $(obj1).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
},time);
$('.content_bottom .bottom_box').hover(function(){/*div 移入时定时器暂停 移出时定时器开启*/
    clearInterval(timer)
},function(){
    timer=setInterval(function(){/*垂直轮播定时器*/
        keys++
        if(keys==bottomBox.length-2){
            keys=1;
            $(obj1).css('top',0)
        }
        $(obj1).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
    },time);
});

$(nex).on('click',function(){/*垂直轮播点击效果*/
    clearInterval(timer)
    keys++
    if(keys==bottomBox.length-1){
        console.log(keys)
        $(obj1).css('top',0);
        keys=1;
    }
    $(obj1).stop(true,true)
    //$(oUl).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
    $(obj1).animate({'top':-keys*(widthBox+10)},500);

})

$(per).on('click',function(){/*垂直轮播点击效果*/
    clearInterval(timer)
    keys--
    if(keys<=-1){
        console.log(keys)
        keys=bottomBox.length-4
        $(oUl).animate({'top':-(keys+1)*(widthBox+10)},0);
    }
    $(oUl).animate({'top':-keys*(widthBox+10)},500);



})

/*以下为继雄原版插件*/
/*/!*以下为垂直轮播效果*!/
$('.content_bottom .bottom_box_pic li').first().clone().appendTo('.content_bottom .bottom_box_pic');
$('#box_pic').height($('.content_bottom .bottom_box_pic').height())
var timer=null;
var bottomBox=$('.content_bottom .bottom_box_pic li')
var widthBox=$('.content_bottom .bottom_box_pic li').height();
var oUl=$('.content_bottom .bottom_box_pic')
var keys=0
timer=setInterval(function(){/!*垂直轮播定时器*!/
    keys++
    if(keys==bottomBox.length-2){
        keys=1;
        $(oUl).css('top',0)
    }
    $(oUl).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
},1800);
$('.content_bottom .bottom_box').hover(function(){/!*div 移入时定时器暂停 移出时定时器开启*!/
    clearInterval(timer)
},function(){
    timer=setInterval(function(){/!*垂直轮播定时器*!/
        keys++
        if(keys==bottomBox.length-2){
            keys=1;
            $(oUl).css('top',0)
        }
        $(oUl).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
    },1800);
});

$('.bottom_box .top').on('click',function(){/!*垂直轮播点击效果*!/
    clearInterval(timer)
    keys++
    if(keys==bottomBox.length-1){
        console.log(keys)
        $(oUl).css('top',0);
        keys=1;
    }
    $(oUl).stop(true,true)
    //$(oUl).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
    $(oUl).animate({'top':-keys*(widthBox+10)},500);

})

$('.bottom_box .bottom').on('click',function(){/!*垂直轮播点击效果*!/
    clearInterval(timer)
    keys--
    if(keys<=-1){
        console.log(keys)
        keys=bottomBox.length-4
        $(oUl).animate({'top':-(keys+1)*(widthBox+10)},0);
    }
    $(oUl).animate({'top':-keys*(widthBox+10)},500);



})*/
