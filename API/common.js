/*
* @Author: ljhhhhh
* @Date:   2017-09-22 13:54:25
* @Last Modified by:   ljhhhhh
* @Last Modified time: 2017-09-23 17:11:41
*/
(function($){
	/**
 * 垂直无缝间隔轮播
 * @param {[type]} $data [description]
 */
	var Carou=function($data){
		$data.time=null;
		var speed=$data.speed||50;//速度，默认50毫秒
		var delay=$data.delay||2000//延迟，默认2000毫秒
		var carousel_box=$($data.id);
		var carousel_lis=$($data.id).find("ul");
		var carousel_lih=carousel_lis.find("li").height();
		var flag=true;
		carousel_lis.html(carousel_lis.html()+carousel_lis.html());
		function carousel() {
			if(!flag){
				return false;
			}
			var top=carousel_box.scrollTop();
			if(top%carousel_lih==0){
				clearInterval($data.time);
				setTimeout(goCarousel,delay);
			}else{
				carousel_box.scrollTop(carousel_box.scrollTop()+1);
				if(top>=carousel_lis.height()/2){
					carousel_box.scrollTop(0);
				}
			}
		}
		function goCarousel(){
			$data.time=setInterval(carousel,speed);
			carousel_box.scrollTop(carousel_box.scrollTop()+1);
		}
		setTimeout(goCarousel,delay);
		carousel_box.mouseover(function() {
			flag=false;
		});
		carousel_box.mouseout(function() {
			flag=true;
		});
	};
	/**
	 * 选项卡的切换插件
	 * @param {[type]} $data [description]
	 */
	var Tab=function($data){
		var _this=this;
		// this.tab=tab;
		//默认配置参数
		this.config={
			'obj':null,
		// 	//用来定义鼠标的触发类型
			'triggreType':'click',
		// 	//动画效果fade的时间
			'effect':0,
		// 	//定义自动切换时间
			'auto':false
		}
		if(this.getConfig($data)){
			$.extend(this.config,this.getConfig($data));
		};
		//保存tab标签列表、对应的选项内容
		this.tabItems=$(this.config.obj).find('.tab_control').find('span');
		this.tabContent=$(this.config.obj).find('.tab_contents').find('.tab_content');
		//保存配置
		var config= this.config;
		if(config.triggreType==='click'||config.triggreType==='mouseover'){
			this.tabItems.bind(config.triggreType, function() {
				_this.invoke($(this));
			});
		}else{
			this.tabItems.bind('click', function() {
				_this.invoke($(this));
			});
		};
		if(config.auto){
			this.timer=null;
			this.loop=0;
			this.autoPlay();
			$(this.config.obj).hover(function() {
				clearInterval(_this.timer);
			}, function() {
				_this.autoPlay();
			});
		}
	}
	Tab.prototype={
		//获取配置参数
		getConfig:function($data){
			//获取用户配置参数
			if(!$data||$data==''||$data.obj==""){
				return null;
			}else{
				return $data;
			}
		},
		//事件函数
		invoke:function(currentTab){
			var index=currentTab.index();
			currentTab.addClass('active').siblings().removeClass('active');
			this.tabContent.eq(index).fadeIn(this.config.effect).siblings().fadeOut(this.config.effect);
			//loop index 同步
			if(this.config.auto){
				this.loop=index;
			}
		},
		//自动切换
		autoPlay:function(){
			var _this=this,tabItems=this.tabItems,tabLength=this.tabItems.length,config=this.config;
			this.timer=setInterval(function(){
				_this.loop++;
				if(_this.loop>=tabLength){
					_this.loop=0;
				};
				tabItems.eq(_this.loop).trigger(config.triggreType);
			},config.auto);
		}
	};
	window.Tab=Tab;
})(jQuery)
