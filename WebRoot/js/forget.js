$(document).ready(function() {
	$(function() {
		FastClick.attach(document.body);
	});
});
$("#input_code").focus(function(){
	$("#getcode").css("border-bottom","1px solid #3385ff");
});
$("#input_code").blur(function(){ 
	$("#getcode").css("border-bottom","1px solid #808080"); 
});
var code;
var flag=false;
function sendcode(){
	xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.open("POST","GetCode",true);
	  xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"); 
	  xmlhttp.send("email="+$("#email").val());
	  if($("#code").html()=="获取验证码"){
		  if($("#email").val()==""||$("#email").val()==null){
			   $("#tip").html("请输入正确邮箱");
		  	   $("#tip").css("display","block");
		  	   $("#tip").fadeOut(1900);
		  	   $("#tip").css("padding-left","11%");
		  	   $("#tip").css("padding-top","20px");
		  	   setTimeout(function(){  
		  		   $("#tip").css("display","none");
		  		   },2000);
		 }else{
			 $("#code").removeAttr('onclick');
		  xmlhttp.onreadystatechange=function(){		
			    if (xmlhttp.readyState==4 && xmlhttp.status==200){
			    	var time=21;
			    	var timer=setInterval(function(){
			            if (time<=1) {
			            	$("#code").html("获取验证码");
				  		    $("#code").fadeIn(5000);
				  		    $("#code").attr("onclick","sendcode()");
			                clearInterval(timer);
			                return false;
			            }
			            time --;
				    	$("#code").html("发送成功,请"+time+"s后重试");
			        },1000);
			       var result=xmlhttp.responseText;   
			       code=result;
			      }
			  }
		  }
	  }
}
function forget(){
	var username=$("#username").val();
	var password=$("#password").val();
	var repassword=$("#repassword").val();
	var email=$("#email").val();
	var input_code=$("#input_code").val();
	if(code!=$.md5(input_code)){
		$("#tip").html("验证码错误");
	  	   $("#tip").css("display","block");
	  	   $("#tip").fadeOut(1900);
	  	   $("#tip").css("padding-left","11%");
	  	   $("#tip").css("padding-top","20px");
	  	   setTimeout(function(){  
	  		   $("#tip").css("display","none");
	  	   },2000);
	}else if(password!=repassword){
		   $("#tip").html("两次输入密码不一致");
	  	   $("#tip").css("display","block");
	  	   $("#tip").fadeOut(1900);
	  	   $("#tip").css("padding-left","11%");
	  	   $("#tip").css("padding-top","20px");
	  	   setTimeout(function(){  
	  		   $("#tip").css("display","none");
	  		   },2000);
	}else{
			xmlhttp=new XMLHttpRequest();
			if (window.XMLHttpRequest){
			  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			  xmlhttp=new XMLHttpRequest();
			  }else{
			  // IE6, IE5 浏览器执行代码
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			  xmlhttp.open("POST","Findpwd",true);
			  xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"); 
			  xmlhttp.send("email="+email+"&password="+$.md5(password)+"&username="+username);
			  xmlhttp.onreadystatechange=function(){		
				    if (xmlhttp.readyState==4 && xmlhttp.status==200){
				       var result=xmlhttp.responseText;   
				       if(result=="false"){
				    	   $("#tip").html("用户信息错误");
					  	   $("#tip").css("display","block");
					  	   $("#tip").fadeOut(1900);
					  	   $("#tip").css("padding-left","11%");
					  	   $("#tip").css("padding-top","20px");
					  	   setTimeout(function(){  
					  		   $("#tip").css("display","none");
					  		   },2000);
				       }else{
				    		 if(flag==false){
				    			  forget();
				    			  flag=true;
				    			  $("#c1").css("display","inline");
				    		 }else{
					    	   var deg=360*15;
							   $("#btn").css("display","none");
							   $("#username").css("display","none");
							   $("#password").css("display","none");
							   $("#email").css("display","none");
							   $("#repassword").css("display","none");
							   $("h2").css("display","none");
							   $("#getcode").css("display","none");
							   $("#tip").css("display","block");
					    	   $("#tip").css("color","black");
					    	   $("#tip").css("padding-top","8%");
					    	   $("#tip").css("padding-left","0");
					    	   $("#tip").css("text-align","center");
							   $("#c1").css({
									transform: 'rotate('+deg+'deg)',
									transition: 'all 3s'
							   });
							   $("#tip").html("修改中...");
							   $("#tip").fadeOut(2900);	    	   	   
					    	   setTimeout(function(){  
						    	   $("#tip").css("padding-left","3%");
					    		   $("#tip").html("<a href='login.html'>修改成功,点我登录吧！</a");
					    		   $("#tip").fadeIn(1100);  
					    	   },2900);
						  }		    	  
				       }
				    }
			  }
	}
	return false;
}
function back(){
	window.location.href="login.html";
}