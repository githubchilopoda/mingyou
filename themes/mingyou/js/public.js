/**
 * Created by Administrator on 2017/5/16.
 */

    $(function(){
        /*sidebar*/
        $('.content .sidebar li dl dd:nth-child(even)').css({'background':'#d4d3d3'});

        /*sidebar  end*/

        $('#menu').on('mouseover',function(){/*隐藏菜单点击事件*/
            $('.header_main .van .menu').stop();
            $('.header_main .van .menu').slideDown(300)

        })
        $('#menu').click(function(){/*隐藏菜单点击事件*/
            $('.header_main .van .menu').stop(true);
            $('.header_main .van .menu').slideToggle(600)
        })
       /* $('.menu').on('mousemove',function(){
            $('.header_main .van .menu').stop(true);
            $('.header_main .van .menu').slideToggle(600)
        })*/
        $('.header_main .header_input').focus(function(){
            if($(this).val()=='搜家电'){
                $(this).val('').css('color','#333')
            }
        });
        $('.header_main .header_input').blur(function(){
            if($(this).val()==''){
                $(this).val('搜家电').css('color','#999')
            }
        })



    })
var main=0;
function bacT(index){
    $()
       /* main=index.index()*/
       /* if($(index).parent().find('dd').height()>10){
            $(index).addClass('current_tle');
            $(index).parent().find('dd').slideUp(200);
        }else{
            $(index).removeClass('current_tle');
            $(index).parent().find('dd').slideDown(200);
        }*/
    main++
        if(main==2){
             $(index).removeClass('current_tle');
            $(index).parent().find('dd').toggle(200);
            console.log($(index).parent().find('dd').height())
            main=0;
        }else{
            console.log($(index).parent().find('dd').height())
            $(index).addClass('current_tle');
            $(index).parent().find('dd').toggle(200);
        }
    }