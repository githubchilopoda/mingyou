<!DOCTYPE html>
<html lang="en">
<head>
<meta name="Generator" content="ECSHOP v3.0.0" />
    <meta charset="UTF-8">
    <meta name="keywords" content="###">
    <meta name="description" content="公司介绍">
    <link rel="shortcut icon" href="favicon.ico"/>
    <link rel="stylesheet" href="<?php echo $this->_var['mingyou']; ?>css/product.css">
    <link rel="stylesheet" href="<?php echo $this->_var['mingyou']; ?>css/public.css">
    <title>产品中心</title>
    <script src="<?php echo $this->_var['mingyou']; ?>js/jquery.min.js"></script>
    <script src="<?php echo $this->_var['mingyou']; ?>js/public.js"></script>
    <script src="<?php echo $this->_var['mingyou']; ?>js/product.js"></script>
    <script src="<?php echo $this->_var['mingyou']; ?>js/city.js"></script>
</head>
<body>

<?php echo $this->fetch('library/page_header1.lbi'); ?>


<div class="content">
    <div class="search">
        <a href="index.html">首页</a>><a href="###">家电</a>>
        <div class="text_input">
            <form action="">
                <input type="text"><button><img src="<?php echo $this->_var['mingyou']; ?>img/shop_list_search.png" alt="shop_list_search.png"></button>
            </form>
        </div>
        <span>共212050件商品</span>
    </div>
    <div class="top_list_noe clearfix">
        <h3>品牌</h3>
        <ul>
		<?php $_from = $this->_var['brands']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'brand');if (count($_from)):
    foreach ($_from AS $this->_var['brand']):
?>
		 <li <?php if ($this->_var['brand']['selected']): ?>class="current"<?php endif; ?>>
		 <a href="<?php echo $this->_var['brand']['url']; ?>"><?php echo $this->_var['brand']['brand_name']; ?></a>
		 </li>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
            
        </ul>
    </div>
	<?php $_from = $this->_var['filter_attr_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'filter_attr_0_93698100_1500975144');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['filter_attr_0_93698100_1500975144']):
?>
    <div class="<?php if ($this->_var['key'] == 0): ?>top_list_two <?php else: ?> top_list_three <?php endif; ?> clearfix">
        <h3><?php echo htmlspecialchars($this->_var['filter_attr_0_93698100_1500975144']['filter_attr_name']); ?></h3>
        <ul>
		<?php $_from = $this->_var['filter_attr_0_93698100_1500975144']['attr_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'attr');if (count($_from)):
    foreach ($_from AS $this->_var['attr']):
?>
            <li <?php if ($this->_var['attr']['selected']): ?> class="current" <?php endif; ?>><a href="<?php echo $this->_var['attr']['url']; ?>"><?php echo $this->_var['attr']['attr_value']; ?></a></li>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
            
        </ul>
    </div>
	<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
    
    <div class="load clearfix"><a href="###" onclick="load(this)">更多选项</a></div>
    <div class="table_text">
        <ul class="clearfix">
            <li>
           
                <!-- <a href="###">人气</a> -->
<a href="category.php?category=<?php echo $this->_var['category']; ?>&display=<?php echo $this->_var['pager']['display']; ?>&brand=<?php echo $this->_var['brand_id']; ?>&price_min=<?php echo $this->_var['price_min']; ?>&price_max=<?php echo $this->_var['price_max']; ?>&filter_attr=<?php echo $this->_var['filter_attr']; ?>&page=<?php echo $this->_var['pager']['page']; ?>&sort=is_num&order=<?php if ($this->_var['pager']['sort'] == 'is_num' && $this->_var['pager']['order'] == 'DESC'): ?>ASC<?php else: ?>DESC<?php endif; ?>#goods_list">人气</a>				
				
				
                <!-- <a href="###">新品</a> -->
<a href="category.php?category=<?php echo $this->_var['category']; ?>&display=<?php echo $this->_var['pager']['display']; ?>&brand=<?php echo $this->_var['brand_id']; ?>&price_min=<?php echo $this->_var['price_min']; ?>&price_max=<?php echo $this->_var['price_max']; ?>&filter_attr=<?php echo $this->_var['filter_attr']; ?>&page=<?php echo $this->_var['pager']['page']; ?>&sort=goods_id&order=<?php if ($this->_var['pager']['sort'] == 'goods_id' && $this->_var['pager']['order'] == 'DESC'): ?>ASC<?php else: ?>DESC<?php endif; ?>#goods_list">新品</a>

                <a href="###">销量</a>
                <!-- <a href="###">价格</a> -->
<a href="category.php?category=<?php echo $this->_var['category']; ?>&display=<?php echo $this->_var['pager']['display']; ?>&brand=<?php echo $this->_var['brand_id']; ?>&price_min=<?php echo $this->_var['price_min']; ?>&price_max=<?php echo $this->_var['price_max']; ?>&filter_attr=<?php echo $this->_var['filter_attr']; ?>&page=<?php echo $this->_var['pager']['page']; ?>&sort=shop_price&order=<?php if ($this->_var['pager']['sort'] == 'shop_price' && $this->_var['pager']['order'] == 'ASC'): ?>DESC<?php else: ?>ASC<?php endif; ?>#goods_list">价格</a>
   
            </li>
			
			

            <li>
               <span>发货地：上海</span>
                <div class="list_address">
                    <select name="" id="province">
                        <option>-----请选择省-----</option>
                    </select>
                    <select name="" id="city">
                        <option>-----请选择市-----</option>
                    </select>
                    <select name="" id="county">
                        <option>-----请选择(县，区)-----</option>
                    </select>
                </div>
            </li>
            <li>
                <div>
				<form action="category.php" method="get" id="form">
                  
									
	<input type="hidden" name="category" value="<?php echo $this->_var['category']; ?>" />
	<input type="hidden" name="display" value="<?php echo $this->_var['pager']['display']; ?>" id="display" />
	<input type="hidden" name="brand" value="<?php echo $this->_var['brand_id']; ?>" />
	<input type="text" name="price_min" class="left"  value="<?php echo $this->_var['price_min']; ?>" />
	<input type="text" name="price_max" class="right"  value="<?php echo $this->_var['price_max']; ?>" />
	<input type="hidden" name="filter_attr" value="<?php echo $this->_var['filter_attr']; ?>" />
	<input type="hidden" name="page" value="<?php echo $this->_var['pager']['page']; ?>" />
	<input type="hidden" name="sort" value="<?php echo $this->_var['pager']['sort']; ?>" />
	<input type="hidden" name="order" value="<?php if ($this->_var['pager']['sort'] == 'shop_price' && $this->_var['pager']['order'] == 'DESC'): ?>ASC<?php else: ?>DESC<?php endif; ?>" />
	<input id="submit" type="submit" style="display:none;" />
</form> 
<script type="text/javascript">
	$(document).keydown(function(){
	
		if(KeyCode==13){
			
			$('#form').submit();
		}
	})
</script>			
                </div>
            </li>
       
        </ul>
    </div>
    <div id="box_list">
        <div class="pro_list current">
            <ul>
             <?php $_from = $this->_var['goods_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');if (count($_from)):
    foreach ($_from AS $this->_var['goods']):
?>   
                <li>
                    <a href="<?php echo $this->_var['goods']['url']; ?>" class="pic"><img src="<?php echo $this->_var['goods']['goods_thumb']; ?>" alt="shop_list_pic3.png"></a>
                    <a href="<?php echo $this->_var['goods']['url']; ?>" class="text"><span><?php echo $this->_var['goods']['goods_name']; ?></span><i><?php echo $this->_var['goods']['shop_price']; ?></i></a>
                </li>
              <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
            </ul>
        </div>
		<div style="clear:both"></div>
    </div>
    <div class="pic_page">
        <ul>
            <li><a href="<?php echo $this->_var['pager']['page_prev']; ?>"><?php echo $this->_var['lang']['page_prev']; ?></a></li>
		<?php $_from = $this->_var['pager']['page_number']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['item']):
?>	
		<?php if ($this->_var['pager']['page'] == $this->_var['key']): ?>
            <li class="current"><a href="<?php echo $this->_var['item']; ?>"><?php echo $this->_var['key']; ?></a></li>
		<?php else: ?>
		<li><a href="<?php echo $this->_var['item']; ?>"><?php echo $this->_var['key']; ?></a></li>
		<?php endif; ?>
		<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
          
            <!-- <li></li> -->
            <li><a href="<?php echo $this->_var['pager']['page_next']; ?>"><?php echo $this->_var['lang']['page_next']; ?></a></li>
        </ul>
    </div>
</div>


<?php echo $this->fetch('library/page_footer1.lbi'); ?>

</body>
</html>