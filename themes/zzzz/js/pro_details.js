/**
 * Created by Administrator on 2017/5/25.
 */
/*放大镜*/
$(function(){
    /*评论事件*/
    $('.comment .comment_right ul li').each(function(i){
        if((i+1)%3==1 && (i+1)%2==0){
            $('.comment .comment_right ul li').eq(i).css({'margin-left': '80px'})
        }
    })

    var str=0;
    $('.comment .comment_right>a').click(function(){
        str++
        if(str==1){
            $('.comment .comment_right ul').css({'height':'auto'})
        }else{
            $('.comment .comment_right ul').css({'height':'90px'})
           str=0
        }
    })
    /*$('.comment .comment_right ul li:nth-child(3n+1)').css({'margin-left': '50px'})*/
 /*   $('.comment .comment_right>ul:nth-child(2n)').css({'margin-left':'0'})
    $('.comment .comment_right>ul:nth-child(2)').css({'display':'block'})
    $('.comment .comment_right>ul:nth-child(3)').css({'display':'block'})
    var str=0;
    $('.comment .comment_right>a').click(function(){
        str++
        if(str==1){
            $('.comment .comment_right>ul').css({'display':'block'})

        }else{
            $('.comment .comment_right>ul').css({'display':'none'})
            $('.comment .comment_right>ul:nth-child(2)').css({'display':'block'})
            $('.comment .comment_right>ul:nth-child(3)').css({'display':'block'})
            str=0
        }

    })*/
    /* 评论事件 end*/

    /*table 切换*/
    $('.list_van li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
        $('.warp_list>div').eq($(this).index()).addClass('current').siblings().removeClass('current')
    })
    /*table 切换 end*/

    /*盒子点击切换效果*/
    $('.tle_list li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
        $('.pro_pic .box_list').eq($(this).index()).addClass('current').siblings().removeClass('current')
    });
    /*盒子点击切换效果 end*/
    /*以下为三级联动*/
    $.each(provinceList,function(i,item){
        $('#province').append('<option value="'+item.name+'">'+item.name+'</option>');
    });
    //二级联动
    $('#province').change(function(){
        var province=$(this).val();
        $('#city :gt(0)').remove();
        $('#county :gt(0)').remove();
        $.each(provinceList,function(i,item){
            if(province==item.name){
                $.each(item.cityList,function(key,val){
                    $('#city').append('<option value="'+val.name+'">'+val.name+'</option>');
                    $('.table_text ul li:nth-child(2) span').html('发货地：'+item.name);
                })
            }
        });
    });

    //三级联动
    $('#city').change(function(){
        var province=$('#province').val();
        var city=$(this).val();
        //console.log(province,city);
        $('#county :gt(0)').remove();
        $.each(provinceList,function(i,item){
            if(province==item.name){
                $.each(item.cityList,function(key,val){
                    if(city==val.name){
                        $.each(val.areaList,function(k,v){
                            $('#county').append('<option value="'+v+'">'+v+'</option>');
                        })
                    }
                })
            }
        });
    })
    /* 三级联动 end*/

    /*放大镜小图事件*/
    $('.content_top .list_pic li').on('mouseover',function(){
        var Img=$(this).find('img').attr('src')
        $(this).addClass('current').siblings().removeClass('current');
        $('#box').find('.pic').find('img').attr('src',Img)
        $('#box').find('#bimg').find('img').attr('src',Img)
    })
    /*放大镜小图事件 end*/
    $('.color_list ul li').click(function(){/*颜色选择事件*/
        $(this).addClass('current').siblings().removeClass('current');
    })

    $('.input_btn .add').click(function(){/*累加*/
        var sum=$('.input_val .num');
        var sun=$('.input_val .num').val();
        var maxValue=$('.input_val .max_value').val();
        if($(sum).val()==maxValue){
            alert('以超过库存')
            $(sum).val(maxValue)
        }else{
            $(sum).val(++sun)
        }
    })
    $('.input_val .num').blur(function(){/*input 正则匹配*/
        var warp=/^[0-9]*$/;
        var maxValue=$('.input_val .max_value').val()
        if(!(warp.test($('.input_val .num').val()))){
            $(this).val('1')
        }
        if($(this).val()>maxValue){
            $(this).val(maxValue)
            alert('已超过最大库存')
        }
    })
    $('.input_btn .down').click(function(){/*累减*/
        var sum=$('.input_val .num')
        var sun=$('.input_val .num').val()
        var maxValue=$('.input_val .max_value').val()
        if($(sum).val()<=1){
            $(sum).val('1')
        }else{
            $(sum).val(--sun)
        }
    })

    $('.current.pic>ul>li').first().clone().appendTo('.current .pic>ul');/*拷贝一份Li*/
    $('.pro_pic .pic>ul').width($('.pro_pic .pic>ul>li').width()*$('.pro_pic .pic>ul>li').length);/*ul的width 自动适应 li*/
    var pic=$('.pro_pic .pic>ul')
    var picLength=$('.pro_pic .current .pic>ul>li');
    var wiDth=$('.pro_pic .pic>ul>li').width();
    var time=null;
    var key=0;
    time=setInterval(function(){/*定时器*/
        key++
        if(key==picLength.length){
            key=1;
            $(pic).css('left',1)
        }
        $(pic).animate({'left':-(key%picLength.length)*wiDth},500)
    },1800);

    $('.pro_pic .btn_left').click(function(){/*left 左点击轮播效果*/
        clearInterval(time)
        key--
        if(key<=0){
            key=picLength.length-2
            $(pic).stop()
            $(pic).animate({'left':-((picLength.length-1)*wiDth),'transition':'none'},0)
        }
        $(pic).stop()
        $(pic).animate({'left':-(key%picLength.length)*wiDth},500)

    })

    $('.pro_pic .btn_right').click(function(){/*右点击轮播效果*/
        clearInterval(time)
        key++
        if(key==picLength.length){
            key=0
            $(pic).stop()
            $(pic).css('left',0)
            key=1;
        }
        $(pic).stop()
        $(pic).animate({'left':-(key%picLength.length)*wiDth},500)

    })
    $('.center_box .pro_pic').hover(function(){/*定时器移入暂停 移出启用*/
        clearInterval(time)
    },function(){
        time=setInterval(function(){/*定时器*/
            key++
            if(key==picLength.length){
                key=1;
                $(pic).css('left',1)
            }
            $(pic).animate({'left':-(key%picLength.length)*wiDth},500)
        },1800);
    })

    $('.btn .shop_btn').click(function(){
        var item=0;
        for(var j in localStorage){
            if(item< Number(j)){
                item=j;
            }
        }
        ++item;
        var $img=$('#box .pic').html()/*获取img*/
        var $tle=$('.pro_details>h5>a').html();/*获取标题*/
        var $oldpir=$('.pro_text>p>s').html();/*获取原价*/
        var $print=$('.pro_text>p>span').html()/*促销价*/
        var $vaLue=$('.input_val .num').val()/*获取val*/
        var $color=$('.color_list .current').find('input').val();/*获取颜色 value*/
        var $str='<li dataindex="'+item+'"><ul><li><label class="current" onclick="check(this)"><input type="hidden"></label>' +
            '<a href="pro_details.html">'+$img+'</a></li><li><a href="pro_details.html">'+$tle+'</a>' +
            '</li><li><span>颜色分类：'+$color+'</span></li><li><s class="old">'+$oldpir+'</s><br/><span class="print">'+$print+'</span>' +
            '<br/><i>促销活动</i></li><li><div class="sum"><a href="###" class="reduce" onclick="donw(this)">&nbsp;-</a> <input type="text" class="text_input" value="'+$vaLue+'">' +
            '<input type="hidden" class="max_input" value="10"><a href="###" class="add" onclick="add(this)">+</a></div>' +
            ' </li><li><a href="###" class="remove" onclick="reMove(this)">删除</a><br/><a href="###" class="collection">移到我的收藏</a></li></ul></li>';
        localStorage.setItem(item,$str)
        alert('成功加入购物车')
    })

    $('.pic_btn .meal').click(function(){
        var item=0;
        for(var j in localStorage){
            if(item< Number(j)){
                item=j;
            }
        }
        ++item;
        var Img=$('.block .pic_meal').html()/*获取套餐img*/
        var texT=$('.block .content_meal span').html()/*获取内容*/
        var total=$('.pic_btn .total_meal').html()/*获取套餐价*/
        var olD=$('.pic_btn .old_meal').html()/*获取旧价*/
        var strone='<li dataindex="'+item+'"><ul><li><label class="current" onclick="check(this)"><input type="hidden"></label>' +
            '<a href="pro_details.html">'+Img+'</a></li><li><a href="pro_details.html">'+texT+'</a>' +
            '</li><li><p>颜色分类：黑色</p><span>套餐内型：三件套</span></li><li><s class="old">'+'￥'+olD+'</s><br/><span class="print">'+'￥'+total+'</span>' +
            '<br/><i>促销活动</i></li><li><div class="sum"><a href="###" class="reduce" onclick="donw(this)">&nbsp;-</a> <input type="text" class="text_input" value="1">' +
            '<input type="hidden" class="max_input" value="10"><a href="###" class="add" onclick="add(this)">+</a></div>' +
            ' </li><li><a href="###" class="remove" onclick="reMove(this)">删除</a><br/><a href="###" class="collection">移到我的收藏</a></li></ul></li>';
        localStorage.setItem(item,strone)
        alert('套餐成功加入购物车')
    })
    /*以下为垂直轮播效果*/
    $('.content_bottom .bottom_box_pic li').first().clone().appendTo('.content_bottom .bottom_box_pic');
    $('#box_pic').height($('.content_bottom .bottom_box_pic').height())
    var timer=null;
    var bottomBox=$('.content_bottom .bottom_box_pic li')
    var widthBox=$('.content_bottom .bottom_box_pic li').height();
    var oUl=$('.content_bottom .bottom_box_pic')
    var keys=0
    timer=setInterval(function(){/*垂直轮播定时器*/
        keys++
        if(keys==bottomBox.length-2){
            keys=1;
            $(oUl).stop()
            $(oUl).css('top',0)
        }
        $(oUl).stop()
        $(oUl).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
    },1800);
    $('.content_bottom .bottom_box').hover(function(){/*div 移入时定时器暂停 移出时定时器开启*/
        clearInterval(timer)
    },function(){
        timer=setInterval(function(){/*垂直轮播定时器*/
            keys++
            if(keys==bottomBox.length-2){
                keys=1;
                $(oUl).stop()
                $(oUl).css('top',0)
            }
            $(oUl).stop()
            $(oUl).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
        },1800);
    });

    $('.bottom_box .top').on('click',function(){/*垂直轮播点击效果*/
        clearInterval(timer)
        keys++
        if(keys==bottomBox.length-1){
            $(oUl).stop()
            $(oUl).css('top',0);
            keys=1;
        }
        $(oUl).stop();
        //$(oUl).animate({'top':-(keys%bottomBox.length)*(widthBox+10)},500);
        $(oUl).animate({'top':-keys*(widthBox+10)},500);

    })

    $('.bottom_box .bottom').on('click',function(){/*垂直轮播点击效果*/
        clearInterval(timer)
        keys--
        if(keys<=-1){
            keys=bottomBox.length-4
            $(oUl).stop()
            $(oUl).animate({'top':-(keys+1)*(widthBox+10)},0);
        }
        $(oUl).stop()
        $(oUl).animate({'top':-keys*(widthBox+10)},500);



    })




})

function bigimg(){
    var bbox = document.getElementById("box");
    var bmove = document.getElementById("move");
    var bbimg = document.getElementById("bimg");
    var b_bimg = document.getElementById("b_bimg");
    var scrollTop=0;
    bbox.onmouseover = function(){//鼠标移动到box上显示大图片和选框
        bbimg.style.display = "block";
        bmove.style.display="block";
    }
    bbox.onmouseout = function(){//鼠标移开box不显示大图片和选框
        bbimg.style.display = "none";
        bmove.style.display="none";
    }
    bbox.onmousemove = function(){//获取鼠标位置
        scrollTop=document.documentElement.scrollTop || document.body.scrollTop;/*获取滚动条的距离*/
        var x = event.clientX ;//鼠标相对于视口的位置 /*event. 兼容IE8*/
        var y =event.clientY+scrollTop; /*event. 兼容IE8*/
        var t = bbox.offsetTop;//box相对于视口的位置
        var l = bbox.offsetLeft;
        var _left = x - l - bmove.offsetWidth/2;//计算move的位置
        var _top = y - t -bmove.offsetHeight/2;
        if(_top<=0)//滑到box的最顶部
            _top = 0;
        else if(_top>=bbox.offsetHeight-bmove.offsetHeight)//滑到box的最底部
            _top = bbox.offsetHeight-bmove.offsetHeight ;
        if(_left<=0)//滑到box的最左边
            _left=0;
        else if(_left>=bbox.offsetWidth-bmove.offsetWidth)//滑到box的最右边
            _left=bbox.offsetWidth-bmove.offsetWidth ;
        bmove.style.top = _top +"px";//设置move的位置
        bmove.style.left = _left + "px";
        var w = _left/(bbox.offsetWidth-bmove.offsetWidth);//计算移动的比例
        var h = _top/(bbox.offsetHeight-bmove.offsetHeight);
        var b_bimg_top = (b_bimg.offsetHeight-bbimg.offsetHeight)*h;//计算大图的位置
        var b_bimg_left = (b_bimg.offsetWidth-bbimg.offsetWidth)*w;
        b_bimg.style.top = -b_bimg_top + "px";//设置大图的位置信息
        b_bimg.style.left = -b_bimg_left + "px";
    }
    /*放大镜  end*/

}