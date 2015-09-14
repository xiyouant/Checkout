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



window.onload=function(){
	var header_li=get.byTagName('li',get.byId('header'));
	var atable=document.getElementById('css_table');	
	var atr=document.getElementById('css_table').getElementsByClassName('css_tr');
	var oann_btn=get.byId('ann_btn');
	var odel_btn=get.byId('del_btn');
	var oadd_btn=get.byId('add_btn');
    for(var i=0;i<header_li.length;i++)
	{
		EventUtil.addHandler(header_li[i],'mouseover',function(){this.style.backgroundColor='#5D98C8';})
		EventUtil.addHandler(header_li[i],'mouseout',function(){this.style.backgroundColor='#1F2727';})
	}
	EventUtil.addHandler(oann_btn,'click',fann);
	EventUtil.addHandler(odel_btn,'click',fdel);
	EventUtil.addHandler(oadd_btn,'click',fadd);
    function fann(){
		alert('已提交此公告')
		var ann_main=get.byId('conbox').value;
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
	
	
	
	function fdel(){
			
		   $.ajax({
		type:'POST',
		url:'del.php',
		data:{
			omydel:get.byId('del_peo').value,
		},
		success:function(){
			
		}
         });
		 alert('该成员已删除');
		 get.byId('del_peo').value='';
		   
		
	}
	function fadd(){
		
		$.ajax({
		type:'POST',
		url:'add.php',
		data:{
			omyadd:get.byId('add_peo').value,
		},
		success:function(){
			
		}
         });
		 alert('该成员已添加');
		 get.byId('add_peo').value='';
	}
	
	
	var opeonum;
	

	   $.ajax({
	type:'POST',
	url:'sum.php',
	
	success:function(rss){
		var osum = eval('(' + rss + ')');
		opeonum=osum[0];
		oodd(opeonum);
	  
	}
	   

	
	
	 });
	
	
	function oodd(opeonum){
				for(var i=1;i<opeonum+1;i++)
				{	   
				      
						
						
						
											$.ajax({
						type:'POST',
						url:'sign.php',
						
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
	
	
	
	function oopp(oin){
		    if(oin[0]!==undefined)
			{
		        var osign_week=0;
				var opeoarray_two=[];
				for(var j=2;j<7;j++)
						{
							
							if(oin[j]==2)
							{
								
								opeoarray_two[j-2]='已签到';
								osign_week++;
								
							}
							else{
								
								opeoarray_two[j-2]='未签到';
							
							}
						}
						var odiv = document.createElement("div");//创建一个li节点
							odiv.className='css_tr';
								
								odiv.innerHTML = "<div class=\"css_td\">" + oin[0] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[0] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[1] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[2] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[3] + "</div>\
												  <div class=\"css_td\">" + opeoarray_two[4] + "</div>\
												  <div class=\"css_td\">" + osign_week + "</div>";
								
								
						atable.appendChild(odiv);
			}
	}
	
	
}