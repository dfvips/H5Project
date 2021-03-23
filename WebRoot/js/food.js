var foodid;
var foodimg;
var foodname;
var foodprice;
var foodorgprice;
$(document).ready(function () {
	$(function() {  
	    FastClick.attach(document.body);  
	});
        if (typeof(Storage) !== "undefined") {
    		foodid=localStorage.getItem("food_id");
    		foodimg=localStorage.getItem("food_img");
    		foodname=localStorage.getItem("food_name");
    		foodprice=localStorage.getItem("food_price");
    		foodorgprice=localStorage.getItem("food_orgprice");
    		if(foodid==null&&foodname==null){
    			window.location.href="/H5Project";
    		}else{
    			 document.title = foodname;
    			 var parent = document.getElementById("inner");

				  var food_div = document.createElement("div");
				  
				  food_div.setAttribute("class","food");
				  
			      var food_img=document.createElement("img");
			      
			      food_img.setAttribute("src",foodimg);
			      
			      food_img.setAttribute("class","food");
			      
			      food_div.appendChild(food_img); 

				  food_div.setAttribute("id",foodid);
				  
				  var food_msg=document.createElement("div");
				  
				  food_msg.setAttribute("class","food_msg");
 
				  var food_name = document.createElement("h2");

				  food_name.innerText = foodname;

				  food_msg.appendChild(food_name);
				  
				  food_msg.appendChild(document.createElement("br"));
				  
				  var food_price = document.createElement("span");
				  
				  food_price.setAttribute("id","price");

				  food_price.innerText = foodprice;
				  
				  food_msg.appendChild(food_price);
				  
				  var food_orgprice = document.createElement("del");

				  food_orgprice.innerText = foodorgprice;
				  
				  food_msg.appendChild(food_orgprice);
				  
				  var food_sellnum = document.createElement("span");
				  
				  food_sellnum.setAttribute("id","sellnum");

				  food_sellnum.innerText = "已售 66 份";
				  
				  food_msg.appendChild(food_sellnum);
				  
				  food_div.appendChild(food_msg);
			      
				  parent.appendChild(food_div);
				  
			      showEnvaluate();
    		}
    	}else{
    		alert("您的浏览器不支持localStorage");
    	}
});
	var num=1;
	function add(){
		$("#mycar").attr("src", "images/fullcar.png");
		$("#tip").html("已添加到购物车");
		$("#num").css("display","block");
		$("#num").html(num);
		if(document.body.clientWidth<500){
			$("#add").css("background","#1b9dff");
		}
		num++;
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
		xmlhttp.send("food_id="+foodid+"&food_name="+foodname+"&food_price="+foodprice+"&food_img="+foodimg);	
	}
	function showEnvaluate(){
		xmlhttp=new XMLHttpRequest();
		if (window.XMLHttpRequest){
		  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		  xmlhttp=new XMLHttpRequest();
		  }else{
		  // IE6, IE5 浏览器执行代码
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  xmlhttp.open("POST","ShowmsgServlet",true);
		  xmlhttp.send();
		  xmlhttp.onreadystatechange=function(){		
			    if (xmlhttp.readyState==4 && xmlhttp.status==200){
			       var result=xmlhttp.responseText;   
					  var envaluatelist = document.getElementById("envaluate");
					  var envaluates = JSON.parse(result).data;
					  for(var i=0; i<envaluates.length; i++){

						  var envaluate_div = document.createElement("div");
						  
						  envaluate_div.setAttribute("class","envaluate");
						  
						  var envaluate = envaluates[i];
						  
					      var envaluate_img=document.createElement("img");
					      
					      envaluate_img.setAttribute("src",envaluate.img);
					      
					      envaluate_div.appendChild(envaluate_img); 
						  
						  var envaluate_msg=document.createElement("div");
						  
						  envaluate_msg.setAttribute("class","envaluate_msg");
		  
						  var envaluate_name = document.createElement("span");

						  envaluate_name.innerHTML = envaluate.name;
						  
						  var envaluate_star=document.createElement("span");
						  
						  envaluate_star.innerText=envaluate.star;
						  
						  var envaluate_message=document.createElement("span");
						  
						  envaluate_message.innerText=envaluate.envaluate;
						  
						  envaluate_msg.appendChild(envaluate_name);
						  
						  envaluate_msg.appendChild(envaluate_star);

						  envaluate_msg.appendChild( envaluate_message);
						  
						  envaluate_msg.appendChild(document.createElement("br"));
						  
						  envaluate_div.appendChild(envaluate_msg);
					      
						  envaluatelist.appendChild(envaluate_div);
						  
					  } 
				}
			}
	}
	function car(){
		window.location.href="car.html";
	}
	function back(){
		window.location.href="main.html";
	}