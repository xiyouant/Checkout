// JavaScript Document

function del_ff(elem){

	var elem_child = elem.childNodes;
	
	for(var i=0; i<elem_child.length;i++){
	
		if(elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue))
		
		{
					elem.removeChild(elem_child)
		
		}
		
	}

}


function xssout (val) {
    val = val.toString();
    val = val.replace(/[<]/g, "&lt;");
    val = val.replace(/[>]/g, "&gt;");
    val = val.replace(/"/g, "&quot;");
    val = val.replace(/'/g, "&#39;");
    return val;
};



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



window.onload=function(){
	var header_li=get.byTagName('li',get.byId('header'));
	var atable=document.getElementById('css_table');	
	var atr=document.getElementById('css_table').getElementsByClassName('css_tr');
	var oann_btn=get.byId('ann_btn');
	var ojump_btn=get.byId('jump_btn');
	var opeonum;
    for(var i=0;i<header_li.length;i++)
	{
		EventUtil.addHandler(header_li[i],'mouseover',function(){this.style.backgroundColor='#5D98C8';})
		EventUtil.addHandler(header_li[i],'mouseout',function(){this.style.backgroundColor='#1F2727';})
	}
	EventUtil.addHandler(oann_btn,'click',fann);
    EventUtil.addHandler(oann_btn,'mouseover',function(){this.style.backgroundColor='#1F2727';this.style.color='#f0f0f0';});
	EventUtil.addHandler(oann_btn,'mouseout',function(){this.style.backgroundColor='#f0f0f0';this.style.color='#666';});
	EventUtil.addHandler(ojump_btn,'click',fjump);
	
	
	
	
	
	

		$.ajax({
		   
		type:'POST',
		url:'sum.php',
		
		success:function(rss){
			var osum = eval('(' + rss + ')');
			opeonum=parseInt(osum.member_id);
			oodd(opeonum);
			}
		 });

	
	
	
	
    /*这个是提交跳转的几周的函数*/
    function fjump(){
		$.ajax({
		   
		type:'POST',
		url:'sum.php',
		
		success:function(rss){
			var osum = eval('(' + rss + ')');
			opeonum=parseInt(osum.member_id);
			soodd(opeonum);
			}
		 });
    }



    function fann(){
		alert('已提交此公告');
		var ann_main=xssout(get.byId('conbox').value);
		$.ajax({
        type:'POST',
		url:'notice.php',
        
		data:{
		   not:ann_main,
		},
        
		success:function(){
 
        }
		
		 });
		get.byId('conbox').value='';
		
		
	}
	
	
	
	function oodd(peopel_num){
		
				for(var i=1;i<peopel_num+1;i++)
				{	   
				      
						
						
					$.ajax({
						type:'POST',
						url:'signnow.php',
						
						data:{
							omyi:i,
						},
						success:function(rsi){
							var oin = eval('(' + rsi + ')');
							oopp(oin);
						  
						}
						
						
						});
						
						
						
				
				}
	}
	
	
	
	
	function soodd(peopel_num){
		        atable.innerHTML="<div class=\"css_tr\">\
								  <div class=\"css_td\">" + "姓名" + "</div>\
								  <div class=\"css_td\">" + "周一" + "</div>\
								  <div class=\"css_td\">" + "周二" + "</div>\
								  <div class=\"css_td\">" + "周三" + "</div>\
								  <div class=\"css_td\">" + "周四" + "</div>\
								  <div class=\"css_td\">" + "周五" + "</div>\
								  <div class=\"css_td\">" + "周六" + "</div>\
								  <div class=\"css_td\">" + "周日" + "</div>\
								  <div class=\"css_td\">" + "一周签到情况" + "</div></div>"
				for(var i=1;i<peopel_num+1;i++)
				{	   
				      
						
						
					$.ajax({
						type:'POST',
						url:'sign.php',
						
						data:{
							omyi:i,
							week_num:get.byClass('jump_week_text')[0].value,
						},
						success:function(rsi){
					
							var oin = eval('(' + rsi + ')');
							oopp(oin);
						  
						}
						
						
						});
						
						
						
				
				}
	}
	
	
	
	function oopp(oin){
		    if(oin[7]!==undefined)
			{
		        var osign_week=0;
				var opeoarray_two=[];
				for(var j=0;j<7;j++)
						{
							
							if(oin[j]==1)
							{
								
								opeoarray_two[j]='已签到';
								osign_week++;
								
							}
							else{
								
								opeoarray_two[j]='未签到';
							
							}
						}
						var odiv = document.createElement("div");//创建一个li节点
							odiv.className='css_tr';
								odiv.innerHTML = '';
								odiv.innerHTML = "<div class=\"css_td\">" + oin[7] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[0] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[1] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[2] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[3] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[4] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[5] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[6] + "</div>\
												  <div class=\"css_td\">" + osign_week + "</div>";
								
						atable.appendChild(odiv);
			}
	}
	


	
		
	
}