<!DOCTYPE html>
<html lang="en">
<head>
<meta name="Generator" content="ECSHOP v3.0.0" />
    <meta charset="UTF-8">
    <meta name="keywords" content="###">
    <meta name="description" content="公司介绍">
    <link rel="shortcut icon" href="favicon.ico"/>
    <link rel="stylesheet" href="<?php echo $this->_var['mingyou']; ?>css/index.css">
    <link rel="stylesheet" href="<?php echo $this->_var['mingyou']; ?>css/public.css">
    <title>首页</title>
    <script src="<?php echo $this->_var['mingyou']; ?>js/jquery.min.js"></script>
    <script src="<?php echo $this->_var['mingyou']; ?>js/index.js"></script>
    <script src="<?php echo $this->_var['mingyou']; ?>js/public.js"></script>
</head>
<body>

<?php echo $this->fetch('library/page_header1.lbi'); ?>


<div class="banner">
        <ul class="clearfix">
		<?php $_from = $this->_var['flash']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'flash_0_41936300_1500975141');$this->_foreach['myflash'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['myflash']['total'] > 0):
    foreach ($_from AS $this->_var['flash_0_41936300_1500975141']):
        $this->_foreach['myflash']['iteration']++;
?>
            <li><a href="###"><img src="<?php echo $this->_var['flash_0_41936300_1500975141']['src']; ?>" alt="banner1.png"></a></li>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
            <!-- <li><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/banner2.png" alt="banner2.png"></a></li> -->
            <!-- <li><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/banner3.png" alt="banner3.png"></a></li> -->
        </ul>
        <ol>
		  <?php $_from = $this->_var['flash']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'flash_0_41948900_1500975141');$this->_foreach['no'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no']['total'] > 0):
    foreach ($_from AS $this->_var['flash_0_41948900_1500975141']):
        $this->_foreach['no']['iteration']++;
?>
			 <li>
			
			</li> 
		   <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
         
        </ol>
        <div class="btn_left"><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/banner_left.png" alt="banner_left.png"></a></div>
        <div class="btn_right"><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/banner_right.png" alt="banner_right.png"></a></div>
    </div>


<div class="content">
    
    <div class="special">
        <div class="pic">
            <a href="product.html"><img src="<?php echo $this->_var['mingyou']; ?>img/special_1.png" alt="special_1.png"></a>
            <a href="###"><span>活动仅限:5.1-5.7</span></a>
        </div>
        <ul>
            <li><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/special_2.png" alt="special_2.png"></a></li>
            <li><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/special_3.png" alt="<?php echo $this->_var['mingyou']; ?>img/special_3.png"></a></li>
            <li><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/special_4.png" alt="<?php echo $this->_var['mingyou']; ?>img/special_4.png"></a></li>
            <li><a href="###"><img src="<?php echo $this->_var['mingyou']; ?>img/special_5.png" alt="<?php echo $this->_var['mingyou']; ?>img/special_5.png"></a></li>
        </ul>
    </div>
    
    <div class="title">
        <h5>店铺爆款推荐产品</h5>
        <hr/>
        <span>I MAY NOT BE PREFECT ， BUT I'M ALWAYS ME 。</span>
    </div>
	
    
    <div class="recommend clearfix">
        <div class="re_pic">
            <a href="pro_details.html"><img src="<?php echo $this->_var['mingyou']; ?>img/recommend_pic1.png" alt="recommend_pic1.png"></a>
        </div>
        <ul>
		<?php $_from = $this->_var['bk_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');$this->_foreach['promotion_foreach'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['promotion_foreach']['total'] > 0):
    foreach ($_from AS $this->_var['goods']):
        $this->_foreach['promotion_foreach']['iteration']++;
?>
            <li>
                <div class="left_text">
                    <h4><a href="<?php echo $this->_var['goods']['url']; ?>"><?php echo $this->_var['goods']['name']; ?></a></h4>
                    <h6>The sweet thing is loving</h6>
                    <h6>you everyday and to be loved</h6>
                    <h6>by you as well 。</h6>
                    <i><?php echo $this->_var['goods']['market_price']; ?></i>
                    <a href="confirm.html">立即抢购</a>
                </div>
                <div class="right_pic"><a href="<?php echo $this->_var['goods']['url']; ?>"><img width='388' height='276' src="<?php echo $this->_var['goods']['goods_img']; ?>" alt="recommend_pic2.png"></a></div>
            </li>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
          
        </ul>
    </div>
    
    
    <div class="index_pic">
        <div class="warp clearfix">
            <div class="text clearfix">
                <h6><a href="pro_details.html">鸳鸯电火锅</a></h6>
                <h5><a href="pro_details.html">领卷下单立省10元</a></h5>
                <h4><a href="pro_details.html">鸳鸯火锅5L大容量 一锅两味 4-8人</a></h4>
                <a href="###" class="coupon"><img src="<?php echo $this->_var['mingyou']; ?>img/title_coupon.png" alt="title_coupon.png"></a>
                <i>RMB活动价:198</i>
                <a href="confirm.html" class="btn">立即抢购></a>
            </div>
            <div class="pic"><a href="pro_details.html"><img src="<?php echo $this->_var['mingyou']; ?>img/index_title_pic.png" alt="<?php echo $this->_var['mingyou']; ?>img/index_title_pic.png"></a></div>
        </div>
    </div>
    
    <div class="title">
        <h5>最新商品</h5>
        <hr/>
        <span>I MAY NOT BE PREFECT ， BUT I'M ALWAYS ME 。</span>
    </div>
    
    <div class="new_pro">
        <div><a href="pro_details.html"><img src="<?php echo $this->_var['mingyou']; ?>img/index_pro1.png" alt="index_pro1.png"></a></div>
        <ul class="clearfix">
		 <?php $_from = $this->_var['new_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');if (count($_from)):
    foreach ($_from AS $this->_var['goods']):
?>
            <li>
                <div><a href="<?php echo $this->_var['goods']['url']; ?>"><img src="<?php echo $this->_var['goods']['goods_img']; ?>" alt="index_pro2.png"></a></div>
                <a href="<?php echo $this->_var['goods']['url']; ?>"><span><?php echo $this->_var['goods']['name']; ?></span><span>抢滩登录价<?php echo $this->_var['goods']['promote_price']; ?></span></a>
            </li>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
           
        </ul>
    </div>
    
    
    <div class="index_pic_two">
        <div class="warp">
            <div class="pic"><img src="<?php echo $this->_var['mingyou']; ?>img/title_two_pic.png" alt="title_two_pic.png"></div>
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
            <a href="pro_details.html"><img src="<?php echo $this->_var['mingyou']; ?>img/hot_pic1.png" alt="<?php echo $this->_var['mingyou']; ?>img/hot_pic1.png"></a>
            <div class="first_text">
                <h2>— <a href="pro_details.html">整屋升温</a> —</h2>
                <h3><a href="pro_details.html">美的镂空散热专利油订</a></h3>
                <h1><a href="pro_details.html">取暖实力派</a></h1>
            </div>
        </div>
        <ul class="clearfix">
		<?php $_from = $this->_var['best_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');if (count($_from)):
    foreach ($_from AS $this->_var['goods']):
?>
            <li>
                <a href="<?php echo $this->_var['goods']['url']; ?>"><span><?php echo $this->_var['goods']['name']; ?></span><br/><i><?php echo $this->_var['goods']['shop_price']; ?></i></a>
                <a href="<?php echo $this->_var['goods']['url']; ?>"><img width="316" height="357" src="<?php echo $this->_var['goods']['goods_img']; ?>" alt="hot.png"></a>
            </li>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
            
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
            <div class="pic"><a href="pro_details.html"><img src="<?php echo $this->_var['mingyou']; ?>img/pic_three.png" alt="pic_three.png"></a></div>
        </div>
    </div>
    
    <div class="title">
        <h5>推荐商品</h5>
        <hr/>
        <span>I MAY NOT BE PREFECT ， BUT I'M ALWAYS ME 。</span>
    </div>
    
    <div class="recommend_list">
        <ul class="clearfix">
		<?php $_from = $this->_var['hot_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');if (count($_from)):
    foreach ($_from AS $this->_var['goods']):
?>
            <li>
                <div><a href="<?php echo $this->_var['goods']['url']; ?>"><img width="287" height="387" src="<?php echo $this->_var['goods']['goods_img']; ?>" alt="recommend_list1.png"></a></div>
                <a href="<?php echo $this->_var['goods']['url']; ?>"><span><?php echo $this->_var['goods']['name']; ?></span><i>抢购价<?php echo $this->_var['goods']['promote_price']; ?></i></a>
            </li>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
            
        </ul>
    </div>
    
</div>


<?php echo $this->fetch('library/page_footer1.lbi'); ?>

</body>
</html>