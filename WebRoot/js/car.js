var flag=1;
var carflag=1;
$(document).ready(function () {
		$(function() {  
		    FastClick.attach(document.body);  
		});
	   if (typeof(Storage) !== "undefined") {
  			var userid=localStorage.getItem("userid");
  			if(userid==""||userid==null||userid== "undefined"){
  				 var foodlist = document.getElementById("content");
		    	 var food_div = document.createElement("div");
  				 var tip=document.createElement("p");
		    	 tip.setAttribute("class", "tip");
		    	 tip.innerText="您还没有登录！";
		    	 flag=0;
		    	 carflag=0;
		    	 food_div.appendChild(tip);
		    	 foodlist.appendChild(food_div);
		    	 setTimeout(function(){  
		    		 window.location.href="login.html";
    		     },1500);
  			}
	   }
	   
	   getcar();
});
function home(){
	window.location.href="main.html";
}
function find(){
	window.location.href="find.html";
}
function usermsg(){
	window.location.href="usermsg.html";
}
function orderd(){
	window.location.href="order.html";
}
$("#home").click(function(event) {
    /* Act on the event */
	init();
	$("#img_home").attr("src", "images/home02.png");
	$("#p_home").css("color","rgb(51,133,255)");
});
$("#find").click(function(event) {
    /* Act on the event */
	init();
	$("#img_find").attr("src", "images/find02.png");
	$("#p_find").css("color","rgb(51,133,255)");
});
$("#order").click(function(event) {
    /* Act on the event */
	init();
	$("#img_order").attr("src", "images/order02.png");
	$("#p_order").css("color","rgb(51,133,255)");
});
$("#me").click(function(event) {
    /* Act on the event */
	init();
	$("#img_me").attr("src", "images/me02.png");
	$("#p_me").css("color","rgb(51,133,255)");
});
$("#car").click(function(event){
    /* Act on the event */
	init();
	$("#img_car").attr("src", "images/car02.png");
	$("#p_car").css("color","rgb(51,133,255)");
});
function init(){
	$("#img_home").attr("src", "images/home01.png");
	$("#img_find").attr("src", "images/find01.png");
	$("#img_order").attr("src", "images/order01.png");
	$("#img_me").attr("src", "images/me01.png");
	$("#img_car").attr("src", "images/car01.png");
	$("#p_home").css("color","#333333");
	$("#p_find").css("color","#333333");
	$("#p_order").css("color","#333333");
	$("#p_me").css("color","#333333");
	$("#p_car").css("color","#333333");
}
function getcar(){
	xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.open("POST","ShowCar",true);
	  xmlhttp.send();
	  xmlhttp.onreadystatechange=function(){		
		    if (xmlhttp.readyState==4 && xmlhttp.status==200){
		       var result=xmlhttp.responseText;   
		       if(result=="fail"&&flag==1){
		    	   var foodlist = document.getElementById("content");
		    	   var food_div = document.createElement("div");
		    	   var tip=document.createElement("p");
		    	   tip.setAttribute("class", "tip");
		    	   tip.innerText="您还没有添加任何美食到购物车！";
		    	   carflag=0;
		    	   food_div.appendChild(tip);
		    	   foodlist.appendChild(food_div);
		       }else if(flag==1&&result!="fail"){
				  var foodlist = document.getElementById("content");
				  var foods = JSON.parse(result).data;
				  if(foods.length==0){
					  var foodlist = document.getElementById("content");
			    	   var food_div = document.createElement("div");
			    	   var tip=document.createElement("p");
			    	   tip.setAttribute("class", "tip");
			    	   tip.innerText="您还没有添加任何美食到购物车！";
			    	   carflag=0;
			    	   food_div.appendChild(tip);
			    	   foodlist.appendChild(food_div);
				  }
				  for(var i=0; i<foods.length; i++){

					  var food_div = document.createElement("div");
					  
					  food_div.setAttribute("class","food");
					  
					  var food = foods[i];
					  
				      var food_img=document.createElement("img");
				      
				      food_img.setAttribute("src",food.img);
				      
				      food_div.appendChild(food_img); 

					  food_div.setAttribute("id",food.id);
					  
					  var food_msg=document.createElement("div");
					  
					  food_msg.setAttribute("class","food_msg");
	  
					  var food_name = document.createElement("span");

					  food_name.innerText = food.name;

					  food_msg.appendChild(food_name);
					  
					  var food_price = document.createElement("span");

					  food_price.innerText = food.price;
					  
					  food_msg.appendChild(food_price);
					  
					  var food_number = document.createElement("span");
					  
					  if(food.num<10){

						  food_number.innerHTML="<span id='del' onclick='del(this)'>-</span>"+" "+food.num+" "+"<span id='add' onclick='add(this)'>+</span>";
						  
					  }else{
						  
						  food_number.innerHTML="<span id='del' onclick='del(this)'>-</span>"+food.num+"<span id='add' onclick='add(this)'>+</span>";
					  }

					  food_msg.appendChild(food_number);
					  
					  food_div.appendChild(food_msg);
				      
				      foodlist.appendChild(food_div);
				      
				      carflag=1;
					  
				  } 
				  var node=document.getElementById('content').childNodes;
					var o_price=0;
					for(i=1;i<node.length;i++){
						var price=Number(node[i].childNodes[1].childNodes[1].innerText.replace("￥", ""));
						var num=Number(node[i].childNodes[1].childNodes[2].innerText.replace("+", "").replace("-", ""));	
						o_price=Number(o_price)+num*price;
					}
					$("#price").html("总价：￥"+o_price.toFixed(2));
		       }
			}
		}
			
}
function add(obj) {
	var node=obj.parentNode;
	var value=node.childNodes[1].nodeValue;
	if(Number(value)+1<10){
		node.childNodes[1].nodeValue=" "+(Number(value)+1)+" ";
	}else{
		node.childNodes[1].nodeValue=(Number(value)+1);
	}
	var node=document.getElementById('content').childNodes;
	var o_price=0;
	for(i=1;i<node.length;i++){
		var price=Number(node[i].childNodes[1].childNodes[1].innerText.replace("￥", ""));
		var num=Number(node[i].childNodes[1].childNodes[2].innerText.replace("+", "").replace("-", ""));	
		o_price=Number(o_price)+num*price;
	}
	$("#price").html("总价：￥"+o_price.toFixed(2));
	var food_id = obj.parentNode.parentNode.parentNode.id;
	var food_name= obj.parentNode.parentNode.childNodes[0].innerText;
	var food_price = obj.parentNode.parentNode.childNodes[1].innerText;
	var food_img = obj.parentNode.parentNode.parentNode.childNodes[0].src;
	xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("POST","AddToCar",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("food_id="+food_id+"&food_name="+food_name+"&food_price="+food_price+"&food_img="+food_img);	
}
function del(obj) {
	var node=obj.parentNode;
	var value=node.childNodes[1].nodeValue;
	var food_id = obj.parentNode.parentNode.parentNode.id;

	var food_name= obj.parentNode.parentNode.childNodes[0].innerText;
	var food_price = obj.parentNode.parentNode.childNodes[1].innerText;
	var food_img = obj.parentNode.parentNode.parentNode.childNodes[0].src;
	console.log();
	if(value<=1){
		if(confirm("是否删除")){	
			remove(food_id);
			node.parentNode.parentNode.remove();
		}
	}else{
		if(Number(value)-1<10){
			node.childNodes[1].nodeValue=" "+(Number(value)-1)+" ";
		}else{
			node.childNodes[1].nodeValue=(Number(value)-1);
		}
		remove(food_id);
	}
	var node=document.getElementById('content').childNodes;
	var o_price=0;
	for(i=1;i<node.length;i++){
		var price=Number(node[i].childNodes[1].childNodes[1].innerText.replace("￥", ""));
		var num=Number(node[i].childNodes[1].childNodes[2].innerText.replace("+", "").replace("-", ""));	
		o_price=Number(o_price)+num*price;
	}
	$("#price").html("总价：￥"+o_price.toFixed(2));
}
function remove(food_id) {
	xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("POST","ShowCar",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("food_id="+food_id);
}
function clearcar(){
	if(confirm("是否确定清空购物车")){	
		clearAll();
		carflag=0;
	}
}
function clearAll(){
	$("#price").html("");
	xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("POST","ShowCar",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("clear="+"yes");
	document.getElementById("content").innerHTML="";
	  var foodlist = document.getElementById("content");
   	  var food_div = document.createElement("div");
   	  var tip=document.createElement("p");
   	  tip.setAttribute("class", "tip");
   	  carflag=0;
   	  tip.innerText="您还没有添加任何美食到购物车！";
   	  food_div.appendChild(tip);
   	  foodlist.appendChild(food_div);
}
function pay(){
	if(carflag==0){
		alert("您的购物车空空如也！");
	}else{
	var node=document.getElementById('content').childNodes;
	var o_price=document.getElementById('price').innerText.replace('总价：','');
	var o_id = new Date().getTime();
	var hour=new Date().getHours();
	var min= new Date().getMinutes();
	var year=new Date().getFullYear();
	var month=Number(new Date().getMonth())+1;
	var day=new Date().getDate();;
	if(Number(hour)<10){
		hour="0"+hour;
	}
	if(Number(min)<10){
		min="0"+min;
	}
	var o_time = year+"-"+month+"-"+day+"  "+hour+":"+min;
	console.log(o_time);
	var foodlist="";
	for(i=1;i<node.length;i++){
		var name=node[i].childNodes[1].childNodes[0].innerText;
		var num=Number(node[i].childNodes[1].childNodes[2].innerText.replace("+", "").replace("-", ""));
		var price=node[i].childNodes[1].childNodes[1].innerText;
		var img=node[i].childNodes[0].src;
		if(i<node.length-1){
			foodlist+='{"food_name":"'+name+'","food_num":'+num+',"food_price":"'+price+'","food_img":"'+img+'"},';
		}else{
			foodlist+='{"food_name":"'+name+'","food_num":'+num+',"food_price":"'+price+'","food_img":"'+img+'"}';
		}
	}
	var userid = 0;
    if (typeof(Storage) !== "undefined") {
    	userid=localStorage.getItem("userid");
		var username=localStorage.getItem("username");
    	var email=localStorage.getItem("email");
    	var phone=localStorage.getItem("phone");
    	foodlist='{"o_time":"'+o_time+'","o_id":'+o_id+',"userid":'+userid+',"username":"'+username+'","email":"'+email+'","o_price":"'+o_price+'","phone":'+phone+',"data":['+foodlist+']}';
	}else{
		alert("您的浏览器不支持localStorage");
	}
    console.log(foodlist);
    xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.open("POST","ReceiveOrder",true);
	  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	  xmlhttp.send("jsonStr="+foodlist+"&uid="+userid);
	  clearAll();
	  var i=0;
	  $(".title").css("display","none");
	  $("#content").css("display","none");
	  $("#clear").css("display","none");
	  $("#cc").css("display","block");
   	  $("#tip1").html("购买成功！<br/><div id='pt'><span id='tt'>本次消费了</span><span id='tp'>"+o_price+"</span></div>");
   	  $("#c1").fadeIn(2000);
   	  $("#cc").fadeOut(2900);
	   setTimeout(function(){  
		   window.location.href="order.html";
	   },2900);
	}
}