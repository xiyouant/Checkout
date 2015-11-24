// JavaScript Document




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
	var obtn=get.byId("btn");
	EventUtil.addHandler(obtn,"click",fsign);
    document.getElementsByTagName("body")[0].onkeydown=clickButton;
	/*回车*/
    function clickButton(){
	
	if ( window.event.keyCode == 13 )
    {
        document.getElementById('btn').click();
    }
}

	function fsign(){
		var ogetusername=get.byId('username').value;
		var ogetpassword=get.byId('password').value;
		var oresult;
		obtn.style.borderBottom='none';
		get.byId('password').style.marginBottom='14px';
		$.ajax
		({
			type:'POST',
			url:'adminlogin.php',
			
			data:{
			   use:ogetusername,
			   pas:ogetpassword,
			},
			
			success:function(data)
			{
			   ofsign(data);
			  
	
			}
		
		 });
		
		
	}


	function ofsign(data){
		 if(data==1)
			   {
				   window.location.href="../managepaper/management.php";
	
			   }
		else
			   {
				   alert("您未登录成功，请重新登录");
				   obtn.style.borderBottom=' solid #299D17 4px';
		           get.byId('password').style.marginBottom='10px';
				   get.byId('username').value="";
				   get.byId('password').value="";
			   }
	}
}





function clickButton(){
	
	if ( event.keyCode == 13 )
    {
        document.getElementById('btn').click();
    }
}