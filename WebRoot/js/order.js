function usermsg() {
	window.location.href = "usermsg.html";
}
function home() {
	window.location.href = "main.html";
}
function car() {
	window.location.href = "car.html";
}
function find() {
	window.location.href = "find.html";
}
$(document).ready(function() {
	$(function() {
		FastClick.attach(document.body);
	});
	xmlhttp = new XMLHttpRequest();
	if (window.XMLHttpRequest) {
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("POST", "ReceiveOrder", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("getorder=" + "true");
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var result = xmlhttp.responseText;
			var orders = JSON.parse(result);
			var orderlist = document.getElementById("content")
			for (var i = 0; i < orders.length; i++) {

				var list_div = document.createElement("div");

				list_div.setAttribute("class", "order");

				var order = orders[i].json;

				var order_msg = document.createElement("div");

				order_msg.setAttribute("class", "order_msg");

				var order_id = document.createElement("span");

				order_id.innerText = "订单号：" + order.o_id;

				order_msg.appendChild(order_id);

				var order_time = document.createElement("span");

				order_time.innerText = order.o_time;

				order_msg.appendChild(order_time);

				list_div.appendChild(order_msg);

				orderlist.appendChild(list_div);

				for (var j = 0; j < order.data.length; j++) {

					var food_div = document.createElement("div");

					food_div.setAttribute("class", "food");

					var food = order.data[j];

					var food_img = document.createElement("img");

					food_img.setAttribute("src", food.food_img);

					food_div.appendChild(food_img);

					var food_msg = document.createElement("div");

					food_msg.setAttribute("class", "food_msg");

					var food_name = document.createElement("p");

					food_name.innerText = food.food_name;

					food_msg.appendChild(food_name);

					var food_price = document.createElement("p");

					food_price.innerText = "单价：" + food.food_price;

					food_msg.appendChild(food_price);

					var food_number = document.createElement("p");

					food_number.innerText = "数量：" + food.food_num;

					food_msg.appendChild(food_number);

					food_div.appendChild(food_msg);

					orderlist.appendChild(food_div);
				}
				
				var order_price = document.createElement("div");
				
				order_price.setAttribute("id", "o_p");

				order_price.innerHTML = "总计：<span id='o_price'>"+order.o_price+"</span>";

				orderlist.appendChild(order_price);
				
			}
		}
	}
});