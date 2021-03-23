$(document).ready(function() {
	$(function() {
		FastClick.attach(document.body);
	});
});
var flag=false;
function login(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username==null||username==""||password==null||password==""){
	   $("#tip").html("用户名、密码不能为空");
 	   $("#tip").css("display","block");
 	   $("#tip").fadeOut(1900);
 	   $("#tip").css("padding-left","11%");
 	   $("#tip").css("padding-top","20px");
 	   setTimeout(function(){  
 		   $("#tip").css("display","none");
 		   },2000);
	}
	xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.open("POST","Login",true);
	  xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"); 
	  xmlhttp.send("username="+username+"&password="+$.md5(password));
	  xmlhttp.onreadystatechange=function(){		
		    if (xmlhttp.readyState==4 && xmlhttp.status==200){
		       var result=xmlhttp.responseText;   
		       if(result=="false"){
		    	   $("#tip").html("用户名或密码错误");
		    	   $("#tip").css("display","block");
		    	   $("#tip").fadeOut(1900);
		    	   $("#tip").css("padding-left","11%");
		    	   $("#tip").css("padding-top","20px");
		    	   setTimeout(function(){  
		    		   $("#tip").css("display","none");
		    		   },2000);
		       }else{
				  if(flag==false){
					  login();
					  flag=true;	  
					  $("#c1").css("display","inline");
					  init();
				  }else{
					  var deg=360*15;
					  init();
					   var json =JSON.parse(result).data[0];
			    	   if (typeof(Storage) !== "undefined") {
			       			localStorage.setItem("userid",json.userid);
			       			localStorage.setItem("username",json.username);
			       			localStorage.setItem("email",json.email);
			       			localStorage.setItem("phone",json.phone);
			    	   }
					   $("#c1").css({
							transform: 'rotate('+deg+'deg)',
							transition: 'all 3s'
					   });
					   $("#tip").html("登录中...");
					   $("#tip").fadeOut(2900);	    	   	   
			    	   setTimeout(function(){  
				    	   $("#tip").css("padding-left","3%");
			    		   $("#tip").html("登录成功！");
			    		   $("#tip").fadeIn(1100);  
			    	   },2900);
				  }		    	  
		    	   setTimeout(function(){  
		    		   window.location.href="main.html";
		    		   },4500);
		       	  }
		    }
	  }
}
function init(){
	 $("#btn").css("display","none");
	   $("#username").css("display","none");
	   $("#password").css("display","none");
	   $("#register").css("display","none");
	   $("#forget").css("display","none");
	   $("h2").css("display","none");
	   $("#tip").css("display","block");
	   $("#tip").css("color","black");
	   $("#tip").css("padding-top","8%");
	   $("#tip").css("padding-left","0");
	   $("#tip").css("text-align","center");
}