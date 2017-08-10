/**
 * Created by Administrator on 2017/5/26.
 */
$(function(){
    $('.top_list_noe li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $('#box_list .pro_list').eq($(this).index()).addClass('current').siblings().removeClass('current')
    })

    $('.top_list_two li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
    })

    $('.top_list_three li').click(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parent().siblings().find('li').removeClass('current');
    })

     $('.table_text .ice li i').click(function(){/*f复选框 事件*/
         if($(this).parent().find('input').get(0).checked){
             $(this).parent().find('input').get(0).checked=false;
         }else{
             $(this).parent().find('input').get(0).checked=true;
         }
     });


    $('.table_text .left').focus(function(){
        if($(this).val()=='￥请输入'){
            $(this).val('').css({'color':'#333'})
        }
    })
    $('.table_text .left').blur(function(){
        if($(this).val()==''){
            $(this).val('￥请输入').css({'color':'#999'})
        }
    })
    $('.table_text .right').focus(function(){
        if($(this).val()=='￥请输入'){
            $(this).val('').css({'color':'#333'})
        }
    })
    $('.table_text .right').blur(function(){
        if($(this).val()==''){
            $(this).val('￥请输入').css({'color':'#999'})
        }
    })


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

    var wrap=0
    $('.table_text ul li:nth-child(2) span').click(function(){
        wrap++
        if(wrap==2){
            $('.table_text .list_address').css({'display':'none'})
            wrap=0
        }else{
            $('.table_text .list_address').css({'display':'block'})
        }
    })
})
var key=0;
function load(index){
        key++
        if(key==2){/*显示更多*/
            $('.top_list_three').css({'height':'36px'});
            $(index).html('更多选项');
            $('.top_list_three h3').css({'line-height':'36px'})
            key=0
        }else{
            $('.top_list_three').css({'height':'108px'});
            $(index).html('收起选项')
        }
    var heigHt=$('.top_list_three').height();
    $('.top_list_three h3').css('line-height',heigHt+'px');
}