// JavaScript Document

/*--------------------
     获取id,class,TagName
----------------------*/
var get = {
	byId: function(id) {
		return typeof id === "string" ? document.getElementById(id) : id
	},
	byClass: function(sClass, oParent) {
		var aClass = [];
		var reClass = new RegExp("(^| )" + sClass + "( |$)");
		var aElem = this.byTagName("*", oParent);
		for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
		return aClass
	},
	byTagName: function(elem, obj) {
		return (obj || document).getElementsByTagName(elem)
	}
};

/*-------------------------- +
  事件绑定, 删除。   事件处理程序中可以处理浏览器之间的方法（兼容性）
 +-------------------------- */
var EventUtil = {
	addHandler: function (oElement, sEvent, fnHandler) {
		oElement.addEventListener ? oElement.addEventListener(sEvent, fnHandler, false) : (oElement["_" + sEvent + fnHandler] = fnHandler, oElement[sEvent + fnHandler] = function () {oElement["_" + sEvent + fnHandler]()}, oElement.attachEvent("on" + sEvent, oElement[sEvent + fnHandler]))
	},
	removeHandler: function (oElement, sEvent, fnHandler) {
		oElement.removeEventListener ? oElement.removeEventListener(sEvent, fnHandler, false) : oElement.detachEvent("on" + sEvent, oElement[sEvent + fnHandler])
	},
	addLoadHandler: function (fnHandler) {
		this.addHandler(window, "load", fnHandler)
	}
};


/*-------------------------- +
  设置css样式
  读取css样式
 +-------------------------- */

function css(obj, attr, value)
{
	switch (arguments.length)
	{
		case 2:
			if(typeof arguments[1] == "object")
			{	
				for (var i in attr) i == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + attr[i] + ")", obj.style[i] = attr[i] / 100) : obj.style[i] = attr[i];
				//style.filter是ie的filter滤镜
			}
			else
			{	
				return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
			}
			break;
		case 3:
			attr == "opacity" ? (obj.style["filter"] = "alpha(opacity=" + value + ")", obj.style[attr] = value / 100) : obj.style[attr] = value;
			break;
	}
};








//页面加载完成之后加载函数
window.onload=function(){
	var omessage=get.byId('message');
	var ousername=get.byId('username');
	var oconbox=get.byId('conbox');
	var osentbut=get.byId('sentbut');
	var olist=get.byClass('list')[0];
	var oul=get.byTagName('ul',olist)[0];
	var ali=get.byTagName('li',olist);
	var aftext=get.byClass('f-text',omessage);
	var bsend=false;
	var timer=null;
	var otmp='';
	var i=0; 
    var osign=get.byId('warp_sign');
	var osignimg=get.byId('sign_top_img');
	//禁止表单提交
	EventUtil.addHandler(get.byTagName("form", omessage)[0], "submit", function () {return false});
     //为广播按钮绑定发送事件
	EventUtil.addHandler(osentbut, "click", fnSend);
	
	EventUtil.addHandler(get.byClass('register')[0],'click',function () {osign.style.display='block';});
	EventUtil.addHandler(osignimg,'mouseover',function () {osignimg.src='img/未标题-4.jpg';})
	EventUtil.addHandler(osignimg,'mouseout',function () {osignimg.src='img/未标题-3.jpg';})
	EventUtil.addHandler(osignimg,'click',function () {osign.style.display='none'})
	//发送广播函数
	function fnSend ()
	{
		
		var reg = /^\s*$/g;//这里表示 一串任意多个空白符
	    if(reg.test(oconbox.value))
		{//如果留言框为空
			alert("\u968f\u4fbf\u8bf4\u70b9\u4ec0\u4e48\u5427\uff01");
			//提示说点什么吧
			oconbox.focus()
		}
		else//接下来就是有内容的发送情况
		{
			var oLi = document.createElement("li");//创建一个li节点
			var oDate = new Date();//取得表示当前时间的对象
			//这里面应该从后台提取用户的名字显示上去
			//这里面的.replace(/<[^>]*>|&nbsp;/ig,'')是把留言框输入的html标签自动屏蔽掉，包括空格
			oLi.innerHTML = "<div class=\"content\">\
							 	<div class=\"username\"><a href=\"#\">" + 'aaa' + "</a>:</div>\
								<div class=\"messinf\">" + oconbox.value.replace(/<[^>]*>|&nbsp;/ig, "") + "</div>\
								<div class=\"times\"><span>" + format(oDate.getMonth() + 1) + "\u6708" + format(oDate.getDate()) + "\u65e5 " + format(oDate.getHours()) + ":" + format(oDate.getMinutes()) + "</span></div>\
							 </div>";
			
			//插入元素
			ali.length ? oul.insertBefore(oLi, ali[0]) : oul.appendChild(oLi);//因为可能没有节点的时候，不存在aLi[0]
			
			//重置表单
			get.byTagName("form", omessage)[0].reset();//使表单中的元素重置为默认值
			//将元素高度保存
			//他的方法是先插入看得见的li，然后记录下li的高度，之后立即是li变为透明，并且高度为0，然后用计时器渐变显示li
			//而且是先让li的高度加载到原先的，然后又用一个计时器让li的透明度呈现到原先的
			var iHeight = oLi.clientHeight - parseFloat(css(oLi, "paddingTop")) - parseFloat(css(oLi, "paddingBottom"));
			var alpah = count = 0;
			css(oLi, {"opacity" : "0", "height" : "0"});	
			timer = setInterval(function ()
			{
				css(oLi, {"display" : "block", "opacity" : "0", "height" : (count += 8) + "px"});
				if (count > iHeight)
				{
					clearInterval(timer);
					css(oLi, "height", iHeight + "px");
					timer = setInterval(function ()
					{
						css(oLi, "opacity", (alpah += 10));
						alpah > 100 && (clearInterval(timer), css(oLi, "opacity", 100))
					},30)
				}
			},30);
		}
	}
	
	//格式化时间, 如果为一位数时补0
	function format(str)
	{
		return str.toString().replace(/^(\d)$/,"0$1")
		//这里是如果传进来的匹配成功的是一个数字的字符串，就用$1捕获(\d)这个数字，并在前面加上0，实现为一位数时补0
	}
	
}