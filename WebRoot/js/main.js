$(document).ready(function () {
	    if (typeof(Storage) !== "undefined") {
			var a=localStorage.getItem("splash");
			if(a==undefined||a==null||a==""){
				$(".parent").css("display","none");
				$(".loading").css("display","block");
				setTimeout(function(){  
				   $(".parent").css("display","block");
				   $(".loading").css("display","none");
		 		   $(".loading").fadeOut(1100);  
		 	   	},3000);
				localStorage.setItem("splash",111);
			}
		}else{
			alert("您的浏览器不支持localStorage");
		}
	
		$(function() {
			FastClick.attach(document.body);
		});
		$("#myCarousel").carousel('cycle');
        search();
        downTime();
        getfoodlist();
        if (typeof(Storage) !== "undefined") {
    		localStorage.removeItem("food_id");
    		localStorage.removeItem("food_img");
    		localStorage.removeItem("food_name");
    		localStorage.removeItem("food_price");
    		localStorage.removeItem("food_orgprice");
    	}else{
    		alert("您的浏览器不支持localStorage");
    	}
	});
$(function(){
	// 初始化轮播
	$(".start-slide").click(function(){
		$("#myCarousel").carousel('cycle');
	});
	// 停止轮播
	$(".pause-slide").click(function(){
		$("#myCarousel").carousel('pause');
	});
	// 循环轮播到上一个项目
	$(".prev-slide").click(function(){
		$("#myCarousel").carousel('prev');
	});
	// 循环轮播到下一个项目
	$(".next-slide").click(function(){
		$("#myCarousel").carousel('next');
	});
	var $carousels = $('.carousel');
    var startX,endX;
    // 在滑动的一定范围内，才切换图片
    var offset = 50;
    // 注册滑动事件
    $carousels.on('touchstart',function (e) {
        // console.log(e);
        // 手指触摸开始时记录一下手指所在的坐标x
        startX = e.originalEvent.touches[0].clientX;

    });
    $carousels.on('touchmove',function (e) {
        // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
        endX = e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend',function (e) {
        //console.log(endX);
        //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
        //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
        var distance = Math.abs(startX - endX);
        if (distance > offset){
            //说明有方向的变化
            //根据获得的方向 判断是上一张还是下一张出现
            $(this).carousel(startX >endX ? 'next':'prev');
        }
    })
});
function search(){
    var searchBox=document.querySelector('.box');
    var bannerBox=document.querySelector('.food_show');
    var h=document.querySelector('.food_show').offsetHeight;
    window.onscroll=function(){
        var top=document.body.scrollTop;
        if(top==0){
            top=document.documentElement.scrollTop;
        }
        var opacity=0;
        if(top<h){
            opacity=top/h *0.85;
        }else{
            opacity=0.85;
        }
        searchBox.style.background="rgba(51,133,255,"+opacity+")";
    }
}
function downTime(){
    var time=2*60*60;
    var timer=null;
    var skTime=document.querySelector('.skiltime');
    var spans=skTime.querySelectorAll('span');
    timer=setInterval(function(){
        if (time<=0) {
            clearInterval(timer);
            return false;
        }
        time --;
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=time%60;
        spans[0].innerHTML=Math.floor(h/10);
        spans[1].innerHTML=h%10;
        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=m%10;
        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=s%10;
    },1000);
}
var array_foods = [];
var jsonlist;
function getfoodlist(){
	xmlhttp=new XMLHttpRequest();
	if (window.XMLHttpRequest){
	  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	  xmlhttp=new XMLHttpRequest();
	  }else{
	  // IE6, IE5 浏览器执行代码
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	  xmlhttp.open("POST","FoodServlet",true);
	  xmlhttp.send();
	  xmlhttp.onreadystatechange=function(){		
		    if (xmlhttp.readyState==4 && xmlhttp.status==200){
		       var result=xmlhttp.responseText;   
				  var foodlist = document.getElementById("foodlist");
				  var foods = JSON.parse(result).data;
				  jsonlist=foods;
				  for(var i=0; i<foods.length; i++){

					  var food_div = document.createElement("div");
					  
					  food_div.setAttribute("class","food");
					  food_div.setAttribute("onclick","test(this);");
					  
					  var food = foods[i];
					  
				      var food_img=document.createElement("img");
				      
				      food_img.setAttribute("src",food.img);
				      
				      food_div.appendChild(food_img); 

					  food_div.setAttribute("id",food.id);
					  
					  var food_msg=document.createElement("div");
					  
					  food_msg.setAttribute("class","food_msg");
	  
					  var food_name = document.createElement("span");

					  food_name.innerText = food.name;
					  
					  array_foods.push(food.name);

					  food_msg.appendChild(food_name);
					  
					  food_msg.appendChild(document.createElement("br"));
					  
					  var food_price = document.createElement("span");

					  food_price.innerText = food.price;
					  
					  food_msg.appendChild(food_price);
					  
					  food_div.appendChild(food_msg);
				      
				      foodlist.appendChild(food_div);
					  
				  } 
			}
		}
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
function test(food){
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("food_id",food.id);
		localStorage.setItem("food_img",food.childNodes.item(0).src);
		localStorage.setItem("food_name",food.childNodes.item(1).children.item(0).innerText);
		localStorage.setItem("food_price",food.childNodes.item(1).children.item(2).innerText);
		
		window.location.href="food.html";
	}else{
		alert("您的浏览器不支持localStorage");
	}
}
function fast(food){
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("food_id",food.parentNode.childNodes.item(1).childNodes.item(0).id);
		localStorage.setItem("food_img",food.parentNode.childNodes.item(1).childNodes.item(0).src);
		localStorage.setItem("food_name",food.parentNode.childNodes.item(1).childNodes.item(0).alt);
		localStorage.setItem("food_price",food.parentNode.childNodes.item(3).innerText);
		localStorage.setItem("food_orgprice",food.parentNode.childNodes.item(5).innerText);
		window.location.href="food.html";
	}else{
		alert("您的浏览器不支持localStorage");
	}
}
function car(){
	window.location.href="car.html";
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
var serach_txt = document.getElementById('search_txt');
var btn_search = document.getElementById('search');
var ul_foodlist = document.getElementById('ul_foodlist');
var resultid=[];
var resultString=null;
btn_search.addEventListener('click', function(){
    var input_txt = serach_txt.value;
    var result_foodlist = RegMatch(input_txt, array_foods);
    showfoodslist(result_foodlist);
    var len=resultid.length;
    console.log(resultString);
    if(!(resultString==null||resultString=='')){
    var newid=resultid[len-1];
    var id=jsonlist[newid].id;
	var name=jsonlist[newid].name;
	var price=jsonlist[newid].price;
	var img=jsonlist[newid].img;
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("food_id",id);
		localStorage.setItem("food_img",img);
		localStorage.setItem("food_name",name);
		localStorage.setItem("food_price",price);
		resultid.length=0;
		window.location.href="food.html";
	}else{
		alert("您的浏览器不支持localStorage");
	}
  }
}, false);

serach_txt.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        var input_txt = serach_txt.value;
        var ul_foodlist = RegMatch(input_txt, array_foods);
        showfoodslist(ul_foodlist);
    }
}, false);
var flag1 = false;

$("#search_txt").focus(function(){
	flag1 = false;
    $("#ul_foodlist").css("display","block");
    var input_txt = serach_txt.value;
    var ul_foodlist = RegMatch(input_txt, array_foods);
    showfoodslist(ul_foodlist);
});
$("#search_txt").blur(function(){
	$("#ul_foodlist").css("display","none");
});

$('#search_txt').on('compositionend', function () {
    flag1 = false;
    $("#ul_foodlist").css("display","block");
    var input_txt = serach_txt.value;
    var ul_foodlist = RegMatch(input_txt, array_foods);
    showfoodslist(ul_foodlist);
});
function showfoodslist(list){
    if(!(list instanceof Array)){
        return ;
    }
    ul_foodlist.innerHTML = '';
    var li_food = null;
    for(var i=0;i<list.length;i++){
        li_food = document.createElement('li');
        li_food.setAttribute("id", i);
        li_food.setAttribute("onclick", "searchfood(this)");
        li_food.innerHTML = list[i];
        ul_foodlist.appendChild(li_food);
    }
}
function RegMatch(input_txt, list){
    if(!(list instanceof Array)){
        return ;
    }
    var arr = [];
    var reg = new RegExp(input_txt);
    for(var i=0;i<list.length;i++){
        if(list[i].match(reg)){
            arr.push(list[i]);
            resultString=list[i];
            resultid.push(i);
        }
    }
    return arr;
}
function searchfood(food){
	var id=jsonlist[food.id].id;
	var name=jsonlist[food.id].name;
	var price=jsonlist[food.id].price;
	var img=jsonlist[food.id].img;
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("food_id",id);
		localStorage.setItem("food_img",img);
		localStorage.setItem("food_name",name);
		localStorage.setItem("food_price",price);
		window.location.href="food.html";
	}else{
		alert("您的浏览器不支持localStorage");
	}
}