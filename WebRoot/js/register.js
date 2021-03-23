$(document).ready(function() {
	$(function() {
		FastClick.attach(document.body);
	});
});
var flag=0;
function register(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	var phone=document.getElementById("phone").value;
	var email=document.getElementById("email").value;
	var password=document.getElementById("password").value.replace("+","%2B");
	var repassword=document.getElementById("repassword").value.replace("+","%2B");
	
    if(password==repassword&&isPoneAvailable(phone)=="yes"){
		  if(flag==0){
			  flag=1;
			  $("#c1").css("display","inline");
			  action();
			  return false;
			  register();
		  }else{
			   var deg=360*6;
			   $("#c1").css({
				    transformStyle: 'flat',
					transform: 'translateX(-20px) rotate('+deg/4+'deg) translateY(-20px)  rotate('+deg/4+'deg) translateX(40px)  rotate('+deg/4+'deg) translateY(40px)  rotate('+deg/4+'deg) translateX(-20px) translateY(-20px) ',
					transition: 'all 3s'
			   });
			   $("#tip").html("注册中...");
			   $("#tip").fadeOut(2800);	  
			   if (window.XMLHttpRequest){
					  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
					  xmlhttp=new XMLHttpRequest();
			   }else{
			   // IE6, IE5 浏览器执行代码
			   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			   }
			   xmlhttp.open("POST","Register",true);
			   xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;"); 
			   xmlhttp.send("username="+username+"&password="+$.md5(password)+"&phone="+phone+"&email="+email);
			   xmlhttp.onreadystatechange=function(){		
		       if (xmlhttp.readyState==4 && xmlhttp.status==200){
		        var result=xmlhttp.responseText;   
		        if(result=="false"){
		        	setTimeout(function(){  
					 	   $("#tip").css("padding-left","3%");
							   $("#tip").html("注册失败！");
							   $("#tip").fadeIn(1200);  
						   },1200);
					   		setTimeout(function(){  
					   			window.location.href="register.html";
					   		},2000);
		        	}else{ 
					   setTimeout(function(){  
					 	   $("#tip").css("padding-left","3%");
							   $("#tip").html("<a href='login.html'>注册成功,点我登录吧！</a");
							   $("#tip").fadeIn(1200);  
						   },2000);
		        	}
	       		}	       
			  }
			   return false;
		  }
	  }else if(isPoneAvailable(phone)=="no"){
	   	   $("#tip").css("display","block");
	   	   $("#tip").html("请输入合法的手机号");
	   	   $("#tip").fadeOut(1900);
	   	   $("#tip").css("padding-left","11%");
	   	   $("#tip").css("padding-top","20px");
	   	   setTimeout(function(){  
	   		   $("#tip").css("display","none");
   		   },2000);
		  return false;
	  }else{
	   	   $("#tip").css("display","block");
	   	   $("#tip").html("两次密码不一致");
	   	   $("#tip").fadeOut(1900);
	   	   $("#tip").css("padding-left","11%");
	   	   $("#tip").css("padding-top","20px");
	   	   setTimeout(function(){  
	   		   $("#tip").css("display","none");
  		   },2000);
		  return false;
	  }
}
function action(){
	   $("#btn").css("display","none");
	   $("#username").css("display","none");
	   $("#password").css("display","none");
	   $("#repassword").css("display","none");
	   $("#email").css("display","none");
	   $("#phone").css("display","none");
	   $("h2").css("display","none");
	   $("a").css("display","none");
	   $("#tip").css("display","block");
	   $("#tip").css("color","black");
	   $("#tip").css("padding-top","8%");
	   $("#tip").css("padding-left","0");
	   $("#tip").css("text-align","center");
}
function isPoneAvailable(phone) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
        return "no";
    } else {
        return "yes";
    }
}
function back(){
	window.location.href="login.html";
}