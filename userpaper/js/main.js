// JavaScript Document

function xssout (val) {
    val = val.toString();
    val = val.replace(/[<]/g, "&lt;");
    val = val.replace(/[>]/g, "&gt;");
    val = val.replace(/"/g, "&quot;");
    val = val.replace(/'/g, "&#39;");
    return val;
};




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



window.onload=function(){
	var omessage=get.byId('message');
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
	var oann_ul=document.getElementById('ann_ul');
	var oann_li=oann_ul.getElementsByClassName('ann_li');
	var onim='';
	var osign=0;
	var li_num=30;
	var oreg_day_li=get.byId('reg_day').getElementsByTagName('li');
	var osafe_out=get.byId('safe_out');
	/*回车*/
   
	$.ajax
		({
				type:'POST',
				url:'sessionuser.php',
				
						
				success:function(data)
				{
					onim=data;
				  
				}
		  });
	
	//禁止表单提交
	EventUtil.addHandler(get.byTagName("form", omessage)[0], "submit", function () {return false});
     //为广播按钮绑定发送事件
	EventUtil.addHandler(osentbut, "click", fnSend);
	EventUtil.addHandler(osentbut,'mouseover',function () {this.style.backgroundColor='black';this.style.color='white';})
	EventUtil.addHandler(osentbut,'mouseout',function () {this.style.backgroundColor='#ccc';this.style.color='black';})
	EventUtil.addHandler(osafe_out,'click',safeout);

    //安全退出

    function safeout(){
    	$.ajax
		({
				type:'POST',
				url:'logout.php',
				success:function(data)
				{
					window.location.href="../index.php";
				}
				
		  });
		
		
    }



	//这个是显示一个人签到情况的函数
	function showqiandao()
	{
		var mydata=new Date();
		var weekday=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
		var mynum=mydata.getDay();
		
		$.ajax
		({
				type:'POST',
				url:'count.php',
						
				success:function(rsc)
				{
				    var oous=eval('( ' +rsc+ ' )');
					ookk(oous);
				  
				}
		  });
	}
	//这个是接在showqiandao（）后面的函数
	function ookk(oous){
		for( i in oous)
			  {
				  if(oous[i]==1)
				  {
					  
					  oreg_day_li[i].className='reg_in';
				  }
			  }
	}
	
	
	//显示公告和留言的函数
	function  showinf()
	{
		
	
		$.ajax
		({
			type:'GET',
			url:'noticeout.php',
			success:function(rsw)
			{
				 
				var ono = eval('(' + rsw + ')');
				
				var  ono_inner;
				for( i in ono)
				{
					ono_inner=ono[i]
				}
				get.byId('ann_main').innerHTML=ono_inner;
			}
		
		 });
	
		//上面是上传公告
		
		//我这个是在加载页面的时候上传大家的留言
	    
		for(var i=0;i<li_num;i++)
		{
			$.ajax
			({
					type:'POST',
					url:'messageout.php',
					
					data:{
					   oi:i ,
				},
				
				success:function(rs)
				{
	                var ors=eval('(' + rs + ')');
					
					for(var num_i in ors)
					{
					    
						if(num_i=='0')
						{
							var ocontents=ors[num_i];
						}
						if(num_i=='1')
						{
							var oname=ors[num_i];
						}
						if(num_i=='2')
						{
							var omonth=ors[num_i];
						}
						if(num_i=='3')
						{
							var odate=ors[num_i];
						}if(num_i=='4')
						{
							var ohours=ors[num_i];
						}
						if(num_i=='5')
						{
							var ominutes=ors[num_i];

						}
					}
					oobb(oname,omonth,odate,ohours,ominutes,ocontents);
				}
			});
			
			
		
		
		}
    }
				 
				 
				 
	  
	  
	 //这个是接在showinf后面的函数 
	function oobb(oname,omonth,odate,ohours,ominutes,ocontents){
		var oall_li = document.createElement("li");
		//创建一个li节点
		//这里面应该从后台提取用户的名字显示上去
		//这里面的.replace(/<[^>]*>|&nbsp;/ig,'')是把留言框输入的html标签自动屏蔽掉，包括空格
		oall_li.innerHTML = "<div class=\"content\">\
							<div class=\"username\"><a href=\"#\">" + oname + "</a>:</div>\
							<div class=\"messinf\">" + ocontents + "</div>\
							<div class=\"times\"><span>" + format(omonth) + "\u6708" + format(odate) + "\u65e5 " + format(ohours) + ":" + format(ominutes) + "</span></div>\
						 </div>";
		
		//插入元素
		oann_li.length ? oann_ul.insertBefore(oall_li, oann_li[0]) : oann_ul.appendChild(oall_li);//因为可能没有节点的时候，不存在aLi[0]
	}
	
	showinf();
	showqiandao();
	
	//发送广播函数
	function fnSend()
	{
		//这个是if分支里面的如果没有登录就无法留言
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
				//这个也是怎么把登录成功人的名字传过来,我现在用chen代替
				oLi.innerHTML = "<div class=\"content\">\
									<div class=\"username\"><a href=\"#\">" + onim + "</a>:</div>\
									<div class=\"messinf\">" + xssout(oconbox.value) + "</div>\
									<div class=\"times\"><span>" + format(oDate.getMonth() + 1) + "\u6708" + format(oDate.getDate()) + "\u65e5 " + format(oDate.getHours()) + ":" + format(oDate.getMinutes()) + "</span></div>\
								 </div>";
								 
								 $.ajax({
						type:'POST',
						url:'message.php',
						
						data:{
						   //这里的onim也是一个问题
						   con:oconbox.value,
						},
						
						success:function(){
				
						}
	
				 });
			
				
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