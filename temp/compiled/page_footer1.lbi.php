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
	<?php $_from = $this->_var['helps']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'help_cat');$this->_foreach['foo'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['foo']['total'] > 0):
    foreach ($_from AS $this->_var['help_cat']):
        $this->_foreach['foo']['iteration']++;
?>
        <dl>
            <dt><b><?php echo $this->_var['help_cat']['cat_name']; ?></b></dt>
			<?php $_from = $this->_var['help_cat']['article']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['item']):
?>
            <dd><a href="<?php echo $this->_var['item']['url']; ?>"><?php echo htmlspecialchars($this->_var['item']['title']); ?></a></dd>
            <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
        </dl>
	<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
      
    </div>
    <div class="footer_bottom">
        <div class="bottom_list">
            
            <ul class="clearfix">
			<?php $_from = $this->_var['navigator_list']['bottom']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav_0_43444300_1500975141');$this->_foreach['nav_bottom_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_bottom_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav_0_43444300_1500975141']):
        $this->_foreach['nav_bottom_list']['iteration']++;
?>
                <li><a href="<?php echo $this->_var['nav_0_43444300_1500975141']['url']; ?>"><?php echo $this->_var['nav_0_43444300_1500975141']['name']; ?></a></li>
			<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>	
             
            </ul>
        </div>
        <div class="copyright">
            <p>网络文化经营许可:浙网文【2015】0295-065号<span>12318举报</span></p><br/>
            <p>互联网药品信息服务资质证书编号：浙-（经营性）-2017-0005<span>增值电信业务经营许可证： 浙B2-20110446</span></p>
        </div>
    </div>
</div>