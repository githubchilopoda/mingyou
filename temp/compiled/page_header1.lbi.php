<div class="header">
    
    <div class="header_top">
        <div class="top_center">
            <span><i>欢迎来到名友商城</i></span>
            <ul class="top_list">
			<?php $_from = $this->_var['navigator_list']['top']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav');$this->_foreach['nav_top_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_top_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav']):
        $this->_foreach['nav_top_list']['iteration']++;
?> 
				<li><a href="<?php echo $this->_var['nav']['url']; ?>"><?php echo $this->_var['nav']['name']; ?></a></li>
			<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
                <!-- <li><a href="shop_cart.html">我的购物车</a></li> -->
                <!-- <li><a href="###">我关注的产品</a></li> -->
                <!-- <li><a href="###">客户服务</a></li> -->
            </ul>
            <a href="user.php?=register">登录</a>
            <a href="user.php">注册</a>
        </div>
    </div>
    
    <div class="header_main">
        <a href="index.html"><img src="<?php echo $this->_var['mingyou']; ?>img/logo.png" alt="logo.png"></a>
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
            alert("<?php echo $this->_var['lang']['no_keywords']; ?>");
            return false;
        }
    }

    
    </script>
        </div>
        <div class="search_list">
            <ul>
			 <?php $_from = $this->_var['searchkeywords']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'val');if (count($_from)):
    foreach ($_from AS $this->_var['val']):
?>
			 <li><a href="search.php?keywords=<?php echo urlencode($this->_var['val']); ?>"><?php echo $this->_var['val']; ?></a></li>
			 <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
              
            </ul>
        </div>
        <div class="van clearfix">
            <a href="###" id="menu"><img src="<?php echo $this->_var['mingyou']; ?>img/top_menu.png" alt="top_menu.png"></a>
            <ul class="van_list">
			<?php $_from = $this->_var['navigator_list']['middle']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav');$this->_foreach['nav_middle_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_middle_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav']):
        $this->_foreach['nav_middle_list']['iteration']++;
?> 
                <li <?php if ($this->_var['nav']['active'] == 1): ?> class="current"<?php endif; ?>><a href="<?php echo $this->_var['nav']['url']; ?>"><?php echo $this->_var['nav']['name']; ?></a></li>
			<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
               
            </ul>
            <div class="menu">
                <ul>
				<?php $_from = $this->_var['categories']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat');$this->_foreach['no'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no']['total'] > 0):
    foreach ($_from AS $this->_var['cat']):
        $this->_foreach['no']['iteration']++;
?>
                    <li>
                        <dl>
						
						<dt><a href="<?php echo $this->_var['cat']['url']; ?>"><?php echo htmlspecialchars($this->_var['cat']['name']); ?></a></dt>
						<?php $_from = $this->_var['cat']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'child');if (count($_from)):
    foreach ($_from AS $this->_var['child']):
?>
                             <dd><a href="<?php echo $this->_var['child']['url']; ?>"><?php echo htmlspecialchars($this->_var['child']['name']); ?></a></dd>
						<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
                           
                            
                        </dl>
                    </li>
				<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
                   
                </ul>
            </div>
        </div>
    </div>
</div>