var flag=1;
$(document).ready(function () {
		$(function() {
			FastClick.attach(document.body);
		});
	
        if (typeof(Storage) !== "undefined") {
        	var userid=localStorage.getItem("userid");
    		if(userid==null){
		    	 flag=0;
		    	 setTimeout(function(){  
		    		 window.location.href="login.html";
		    		 flag=1;
   		     },0);
 			}
    		if(flag==1){
    			$("#username").html(localStorage.getItem("username"));
        		$("#email").html(localStorage.getItem("email"));
        		$("#phone").html(localStorage.getItem("phone"));
    		}
    	}else{
    		alert("您的浏览器不支持localStorage");
    	}
	});
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
function logout(){
	 if (typeof(Storage) !== "undefined") {
		 localStorage.removeItem("username");
		 localStorage.removeItem("email");
		 localStorage.removeItem("phone");
 		 localStorage.removeItem("userid");
    	 setTimeout(function(){  
    		 window.location.href="login.html";
    		 flag=0;
	     },1500);
 	}else{
 		alert("您的浏览器不支持localStorage");
 	}
}
var Win=document.querySelector('.win');
var Box=Win.querySelector('.box');
var deleteList=document.querySelector('#resetpwd')
var deleteBtn=null;
var pindex;

deleteList.onclick=function(){
		Win.style.display="block";
		Box.classList.add('fallDown');
}
Box.querySelector('.cancel').onclick=function(){
	Win.style.display="none";
}
Box.querySelector('.submit').onclick=function(){
		var userid=localStorage.getItem("userid");
		var password=$("#password").val();
		var repassword=$("#repassword").val();
		if(password!=repassword){
			$("#tip").css("display","block");
			$("#tip").fadeOut(2800);	  
		}else{
			   if (window.XMLHttpRequest){
					  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
					  xmlhttp=new XMLHttpRequest();
			   }else{
			   // IE6, IE5 浏览器执行代码
			   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			   }
			   xmlhttp.open("POST","AlterPwd",true);
			   xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"); 
			   xmlhttp.send("userid="+userid+"&password="+$.md5(password));
			   xmlhttp.onreadystatechange=function(){		
		       if (xmlhttp.readyState==4 && xmlhttp.status==200){
		        var result=xmlhttp.responseText;   
		        if(result=="false"){
		        	setTimeout(function(){  
					   $("#tip").html("修改失败！");
					   $("#tip").fadeIn(1200);  
				   },1200);
			   		setTimeout(function(){  
			   			Win.style.display="none";
			   		},2000);
	        	 }else{ 
				   setTimeout(function(){  
					   $("#tip").html("修改成功！");
					   $("#tip").fadeIn(1200);  
				   },2000);
				   setTimeout(function(){  
						   logout();
				   },4000);
	        	}
       		}
		}
	}
}
function showus(){
	$("form").css("display","none");
	$("#cc").css("display","block");
	 setTimeout(function(){  
		 $("form").fadeIn(1000);
    },2000);
	 $("#cc").fadeOut(2000);
}
function find(){
	window.location.href="find.html";
}
function orderd(){
	window.location.href="order.html";
}
function home(){
	window.location.href="main.html";
}
function car(){
	window.location.href="car.html";
}