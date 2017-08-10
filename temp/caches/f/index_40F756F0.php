<?php exit;?>a:3:{s:8:"template";a:3:{i:0;s:44:"D:/wamp/www/mingyou/themes/mingyou/index.dwt";i:1;s:59:"D:/wamp/www/mingyou/themes/mingyou/library/page_header1.lbi";i:2;s:59:"D:/wamp/www/mingyou/themes/mingyou/library/page_footer1.lbi";}s:7:"expires";i:1500978741;s:8:"maketime";i:1500975141;}<!DOCTYPE html>
<html lang="en">
<head>
<meta name="Generator" content="ECSHOP v3.0.0" />
    <meta charset="UTF-8">
    <meta name="keywords" content="###">
    <meta name="description" content="公司介绍">
    <link rel="shortcut icon" href="favicon.ico"/>
    <link rel="stylesheet" href="themes/mingyou/css/index.css">
    <link rel="stylesheet" href="themes/mingyou/css/public.css">
    <title>首页</title>
    <script src="themes/mingyou/js/jquery.min.js"></script>
    <script src="themes/mingyou/js/index.js"></script>
    <script src="themes/mingyou/js/public.js"></script>
</head>
<body>
<div class="header">
    
    <div class="header_top">
        <div class="top_center">
            <span><i>欢迎来到名友商城</i></span>
            <ul class="top_list">
			 
				<li><a href="flow.php">我的购物车</a></li>
			 
				<li><a href="user.php">我关注的产品</a></li>
			 
				<li><a href="user.php">客户服务</a></li>
			                <!-- <li><a href="shop_cart.html">我的购物车</a></li> -->
                <!-- <li><a href="###">我关注的产品</a></li> -->
                <!-- <li><a href="###">客户服务</a></li> -->
            </ul>
            <a href="user.php?=register">登录</a>
            <a href="user.php">注册</a>
        </div>
    </div>
    
    <div class="header_main">
        <a href="index.html"><img src="themes/mingyou/img/logo.png" alt="logo.png"></a>
        <div class="search">
            <form id="searchForm"  name="searchForm" method="get" action="search.php" onSubmit="return checkSearchForm()">
                <input name="keywords" type="text" id="keyword" value="搜家电" class="header_input">
                <input type="submit"  name="imageField" class="submit" value="">
            </form>
	<script type="text/javascript">
    
 
    function checkSearchForm()
    {
        if(document.getElementById('keyword').value)
        {
            return true;
        }
        else
        {
            alert("请输入搜索关键词！");
            return false;
        }
    }
    
    </script>
        </div>
        <div class="search_list">
            <ul>
			 			 <li><a href="search.php?keywords=%E7%85%AE%E8%9B%8B%E5%99%A8">煮蛋器</a></li>
			 			 <li><a href="search.php?keywords=%E6%81%92%E6%B8%A9%E5%99%A8">恒温器</a></li>
			 			 <li><a href="search.php?keywords=%E5%87%80%E6%B0%B4%E5%99%A8">净水器</a></li>
			 			 <li><a href="search.php?keywords=%E8%B0%83%E5%A5%B6%E5%99%A8">调奶器</a></li>
			 			 <li><a href="search.php?keywords=%E5%8A%A0%E7%83%AD%E5%99%A8">加热器</a></li>
			 			 <li><a href="search.php?keywords=%E4%BF%9D%E6%B8%A9%E5%BA%95%E5%BA%A7">保温底座</a></li>
			               
            </ul>
        </div>
        <div class="van clearfix">
            <a href="###" id="menu"><img src="themes/mingyou/img/top_menu.png" alt="top_menu.png"></a>
            <ul class="van_list">
			 
                <li ><a href="index.php">首页</a></li>
			 
                <li ><a href="category.php?id=684">洗衣机</a></li>
			 
                <li ><a href="category.php?id=685">水壶</a></li>
			 
                <li ><a href="category.php?id=683">电器</a></li>
			 
                <li ><a href="category.php?id=686">大僵尸</a></li>
				
               
            </ul>
            <div class="menu">
                <ul>
				                    <li>
                        <dl>
						
						<dt><a href="category.php?id=683">电器</a></dt>
						                             <dd><a href="category.php?id=687">小电器</a></dd>
							
                           
                            
                        </dl>
                    </li>
				                    <li>
                        <dl>
						
						<dt><a href="category.php?id=684">植物大战</a></dt>
						                             <dd><a href="category.php?id=685">小僵尸</a></dd>
						                             <dd><a href="category.php?id=686">大僵尸</a></dd>
							
                           
                            
                        </dl>
                    </li>
				                    <li>
                        <dl>
						
						<dt><a href="category.php?id=688">最新产品</a></dt>
							
                           
                            
                        </dl>
                    </li>
				                   
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="banner">
        <ul class="clearfix">
		            <li><a href="###"><img src="data/afficheimg/20160128exxdnz.jpg" alt="banner1.png"></a></li>
		            <li><a href="###"><img src="data/afficheimg/20160129prsrpo.png" alt="banner1.png"></a></li>
		            <li><a href="###"><img src="data/afficheimg/20160129vfrgku.jpg" alt="banner1.png"></a></li>
		            <li><a href="###"><img src="data/afficheimg/20160129bcmitn.jpg" alt="banner1.png"></a></li>
		            <li><a href="###"><img src="data/afficheimg/20150608boezpt.png" alt="banner1.png"></a></li>
		            <li><a href="###"><img src="data/afficheimg/20160129pcigev.png" alt="banner1.png"></a></li>
			
            <!-- <li><a href="###"><img src="themes/mingyou/img/banner2.png" alt="banner2.png"></a></li> -->
            <!-- <li><a href="###"><img src="themes/mingyou/img/banner3.png" alt="banner3.png"></a></li> -->
        </ul>
        <ol>
		  			 <li>
			
			</li> 
		   			 <li>
			
			</li> 
		   			 <li>
			
			</li> 
		   			 <li>
			
			</li> 
		   			 <li>
			
			</li> 
		   			 <li>
			
			</li> 
		            
        </ol>
        <div class="btn_left"><a href="###"><img src="themes/mingyou/img/banner_left.png" alt="banner_left.png"></a></div>
        <div class="btn_right"><a href="###"><img src="themes/mingyou/img/banner_right.png" alt="banner_right.png"></a></div>
    </div>
<div class="content">
    
    <div class="special">
        <div class="pic">
            <a href="product.html"><img src="themes/mingyou/img/special_1.png" alt="special_1.png"></a>
            <a href="###"><span>活动仅限:5.1-5.7</span></a>
        </div>
        <ul>
            <li><a href="###"><img src="themes/mingyou/img/special_2.png" alt="special_2.png"></a></li>
            <li><a href="###"><img src="themes/mingyou/img/special_3.png" alt="themes/mingyou/img/special_3.png"></a></li>
            <li><a href="###"><img src="themes/mingyou/img/special_4.png" alt="themes/mingyou/img/special_4.png"></a></li>
            <li><a href="###"><img src="themes/mingyou/img/special_5.png" alt="themes/mingyou/img/special_5.png"></a></li>
        </ul>
    </div>
    
    <div class="title">
        <h5>店铺爆款推荐产品</h5>
        <hr/>
        <span>I MAY NOT BE PREFECT ， BUT I'M ALWAYS ME 。</span>
    </div>
	
    
    <div class="recommend clearfix">
        <div class="re_pic">
            <a href="pro_details.html"><img src="themes/mingyou/img/recommend_pic1.png" alt="recommend_pic1.png"></a>
        </div>
        <ul>
		            <li>
                <div class="left_text">
                    <h4><a href="goods.php?id=141">141暖怀－白18K金钻石戒</a></h4>
                    <h6>The sweet thing is loving</h6>
                    <h6>you everyday and to be loved</h6>
                    <h6>by you as well 。</h6>
                    <i>￥5580元</i>
                    <a href="confirm.html">立即抢购</a>
                </div>
                <div class="right_pic"><a href="goods.php?id=141"><img width='388' height='276' src="images/201601/goods_img/141_G_1454030716113.jpg" alt="recommend_pic2.png"></a></div>
            </li>
		            <li>
                <div class="left_text">
                    <h4><a href="goods.php?id=143">炒青菜</a></h4>
                    <h6>The sweet thing is loving</h6>
                    <h6>you everyday and to be loved</h6>
                    <h6>by you as well 。</h6>
                    <i>￥2160元</i>
                    <a href="confirm.html">立即抢购</a>
                </div>
                <div class="right_pic"><a href="goods.php?id=143"><img width='388' height='276' src="images/201707/goods_img/143_G_1500457438731.jpg" alt="recommend_pic2.png"></a></div>
            </li>
			
          
        </ul>
    </div>
    
    
    <div class="index_pic">
        <div class="warp clearfix">
            <div class="text clearfix">
                <h6><a href="pro_details.html">鸳鸯电火锅</a></h6>
                <h5><a href="pro_details.html">领卷下单立省10元</a></h5>
                <h4><a href="pro_details.html">鸳鸯火锅5L大容量 一锅两味 4-8人</a></h4>
                <a href="###" class="coupon"><img src="themes/mingyou/img/title_coupon.png" alt="title_coupon.png"></a>
                <i>RMB活动价:198</i>
                <a href="confirm.html" class="btn">立即抢购></a>
            </div>
            <div class="pic"><a href="pro_details.html"><img src="themes/mingyou/img/index_title_pic.png" alt="themes/mingyou/img/index_title_pic.png"></a></div>
        </div>
    </div>
    
    <div class="title">
        <h5>最新商品</h5>
        <hr/>
        <span>I MAY NOT BE PREFECT ， BUT I'M ALWAYS ME 。</span>
    </div>
    
    <div class="new_pro">
        <div><a href="pro_details.html"><img src="themes/mingyou/img/index_pro1.png" alt="index_pro1.png"></a></div>
        <ul class="clearfix">
		             <li>
                <div><a href="goods.php?id=134"><img src="images/201601/goods_img/134_G_1454032795393.jpg" alt="index_pro2.png"></a></div>
                <a href="goods.php?id=134"><span>134爱冕－白18K金钻石戒指</span><span>抢滩登录价￥1100元</span></a>
            </li>
		            <li>
                <div><a href="goods.php?id=136"><img src="images/201601/goods_img/136_G_1454032609800.jpg" alt="index_pro2.png"></a></div>
                <a href="goods.php?id=136"><span>136比 翼 － 铂900对戒</span><span>抢滩登录价￥1100元</span></a>
            </li>
		            <li>
                <div><a href="goods.php?id=140"><img src="images/201601/goods_img/140_G_1454030885422.jpg" alt="index_pro2.png"></a></div>
                <a href="goods.php?id=140"><span>140暖怀－白18K金钻石戒指</span><span>抢滩登录价￥110元</span></a>
            </li>
		            <li>
                <div><a href="goods.php?id=139"><img src="images/201601/goods_img/139_G_1454031123024.jpg" alt="index_pro2.png"></a></div>
                <a href="goods.php?id=139"><span>139愿望－红18K金钻石手镯</span><span>抢滩登录价￥2220元</span></a>
            </li>
		            <li>
                <div><a href="goods.php?id=137"><img src="images/201601/goods_img/137_G_1454031910977.jpg" alt="index_pro2.png"></a></div>
                <a href="goods.php?id=137"><span>137北极光爱之舞系列铂金婚戒套装</span><span>抢滩登录价</span></a>
            </li>
		            <li>
                <div><a href="goods.php?id=138"><img src="images/201601/goods_img/138_G_1454031251121.jpg" alt="index_pro2.png"></a></div>
                <a href="goods.php?id=138"><span>138光芒－红18K金钻石套链</span><span>抢滩登录价</span></a>
            </li>
			
           
        </ul>
    </div>
    
    
    <div class="index_pic_two">
        <div class="warp">
            <div class="pic"><img src="themes/mingyou/img/title_two_pic.png" alt="title_two_pic.png"></div>
            <div class="text">
                <h1><a href="pro_details.html">简约灵动 处处周到</a></h1>
                <span>美的 M1-L213C 智能微波炉</span>
                <ul>
                    <li>21L容量</li>
                    <li>智能菜单</li>
                    <li>一键启动</li>
                    <li>安全无菌</li>
                </ul>
                <a href="confirm.html">立即购买 ></a>
                <i>低至<strong>569</strong>元</i>
            </div>
        </div>
    </div>
    
    <div class="title">
        <h5>爆款新品</h5>
        <hr/>
        <span>I MAY NOT BE PREFECT ， BUT I'M ALWAYS ME 。</span>
    </div>
    
    <div class="hot_new_pro">
        <div class="first_pic">
            <a href="pro_details.html"><img src="themes/mingyou/img/hot_pic1.png" alt="themes/mingyou/img/hot_pic1.png"></a>
            <div class="first_text">
                <h2>— <a href="pro_details.html">整屋升温</a> —</h2>
                <h3><a href="pro_details.html">美的镂空散热专利油订</a></h3>
                <h1><a href="pro_details.html">取暖实力派</a></h1>
            </div>
        </div>
        <ul class="clearfix">
		            <li>
                <a href="goods.php?id=134"><span>134爱冕－白18K金钻石戒指</span><br/><i>￥7013元</i></a>
                <a href="goods.php?id=134"><img width="316" height="357" src="images/201601/goods_img/134_G_1454032795393.jpg" alt="hot.png"></a>
            </li>
		            <li>
                <a href="goods.php?id=136"><span>136比 翼 － 铂900对戒</span><br/><i>￥8940元</i></a>
                <a href="goods.php?id=136"><img width="316" height="357" src="images/201601/goods_img/136_G_1454032609800.jpg" alt="hot.png"></a>
            </li>
		            <li>
                <a href="goods.php?id=140"><span>140暖怀－白18K金钻石戒指</span><br/><i>￥4400元</i></a>
                <a href="goods.php?id=140"><img width="316" height="357" src="images/201601/goods_img/140_G_1454030885422.jpg" alt="hot.png"></a>
            </li>
		            <li>
                <a href="goods.php?id=139"><span>139愿望－红18K金钻石手镯</span><br/><i>￥3980元</i></a>
                <a href="goods.php?id=139"><img width="316" height="357" src="images/201601/goods_img/139_G_1454031123024.jpg" alt="hot.png"></a>
            </li>
			
            
        </ul>
    </div>
    
    
    <div class="index_pic_three">
        <div class="warp">
            <div class="text">
                <h1><a href="pro_details.html">美的塔扇电风扇</a></h1>
                <h6><a href="pro_details.html">静音遥控 预约柔风</a></h6>
                <h6><a href="pro_details.html">三挡风速可调节</a></h6>
                <h6><a href="pro_details.html">时尚LED灯显示</a></h6>
                <a href="pro_details.html">￥234.00</a>
            </div>
            <div class="pic"><a href="pro_details.html"><img src="themes/mingyou/img/pic_three.png" alt="pic_three.png"></a></div>
        </div>
    </div>
    
    <div class="title">
        <h5>推荐商品</h5>
        <hr/>
        <span>I MAY NOT BE PREFECT ， BUT I'M ALWAYS ME 。</span>
    </div>
    
    <div class="recommend_list">
        <ul class="clearfix">
		            <li>
                <div><a href="goods.php?id=134"><img width="287" height="387" src="images/201601/goods_img/134_G_1454032795393.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=134"><span>134爱冕－白18K金钻石戒指</span><i>抢购价￥1100元</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=136"><img width="287" height="387" src="images/201601/goods_img/136_G_1454032609800.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=136"><span>136比 翼 － 铂900对戒</span><i>抢购价￥1100元</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=140"><img width="287" height="387" src="images/201601/goods_img/140_G_1454030885422.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=140"><span>140暖怀－白18K金钻石戒指</span><i>抢购价￥110元</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=141"><img width="287" height="387" src="images/201601/goods_img/141_G_1454030716113.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=141"><span>141暖怀－白18K金钻石戒</span><i>抢购价￥110元</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=143"><img width="287" height="387" src="images/201707/goods_img/143_G_1500457438731.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=143"><span>炒青菜</span><i>抢购价</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=139"><img width="287" height="387" src="images/201601/goods_img/139_G_1454031123024.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=139"><span>139愿望－红18K金钻石手镯</span><i>抢购价￥2220元</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=137"><img width="287" height="387" src="images/201601/goods_img/137_G_1454031910977.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=137"><span>137北极光爱之舞系列铂金婚戒套装</span><i>抢购价</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=138"><img width="287" height="387" src="images/201601/goods_img/138_G_1454031251121.jpg" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=138"><span>138光芒－红18K金钻石套链</span><i>抢购价</i></a>
            </li>
		            <li>
                <div><a href="goods.php?id=142"><img width="287" height="387" src="images/no_picture.gif" alt="recommend_list1.png"></a></div>
                <a href="goods.php?id=142"><span>红烧肉</span><i>抢购价</i></a>
            </li>
			
            
        </ul>
    </div>
    
</div>
<div class="footer">
    <div class="service">
      <ul>
          <li><h3><a href="###">品质保障</a></h3><span><a href="###">品质护航 购物无忧</a></span></li>
          <li><h3><a href="###">七天无理由退货</a></h3><span><a href="###">为您提供售后无忧保障</a></span></li>
          <li><h3><a href="###">特色服务体验</a></h3><span><a href="###">为您提供不一样的特色服务</a></span></li>
          <li><h3><a href="###">帮助中心</a></h3><span><a href="###">您的购物指南</a></span></li>
      </ul>
    </div>
    <div class="guide">
	        <dl>
            <dt><b>购物指南</b></dt>
			            <dd><a href="article.php?id=9">免费注册</a></dd>
                        <dd><a href="article.php?id=10">开通支付</a></dd>
                        <dd><a href="article.php?id=11">支付充值</a></dd>
                    </dl>
	        <dl>
            <dt><b>名友保障</b></dt>
			            <dd><a href="article.php?id=15">发票保障</a></dd>
                        <dd><a href="article.php?id=16">售后规则</a></dd>
                        <dd><a href="article.php?id=17">缺货赔付</a></dd>
                    </dl>
	        <dl>
            <dt><b>支付方式</b></dt>
			            <dd><a href="article.php?id=21">银联卡</a></dd>
                        <dd><a href="article.php?id=22">快捷支付</a></dd>
                        <dd><a href="article.php?id=23">货到付款</a></dd>
                    </dl>
	        <dl>
            <dt><b>商家服务</b></dt>
			            <dd><a href="article.php?id=24">商家中心</a></dd>
                        <dd><a href="article.php?id=25">物流服务</a></dd>
                        <dd><a href="article.php?id=26">运营服务</a></dd>
                    </dl>
		
      
    </div>
    <div class="footer_bottom">
        <div class="bottom_list">
            
            <ul class="clearfix">
			                <li><a href="article.php?id=1">关于名友</a></li>
			                <li><a href="article.php?id=2">帮助中心</a></li>
			                <li><a href="article.php?id=3">开放平台</a></li>
			                <li><a href="article.php?id=4">诚聘英才</a></li>
			                <li><a href="article.php?id=5">联系我们</a></li>
			                <li><a href="wholesale.php">廉正举报</a></li>
			                <li><a href="myship.php">知识产权</a></li>
			                <li><a href="myship.php">规则意见征集</a></li>
				
             
            </ul>
        </div>
        <div class="copyright">
            <p>网络文化经营许可:浙网文【2015】0295-065号<span>12318举报</span></p><br/>
            <p>互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005<span>增值电信业务经营许可证： 浙B2-20110446</span></p>
        </div>
    </div>
</div>
</body>
</html>