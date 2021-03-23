package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Bean.GoodsCarInfo;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;


public class ShowCar extends HttpServlet {

	/**
		 * The doGet method of the servlet. <br>
		 *
		 * This method is called when a form has its tag value method equals to get.
		 * 
		 * @param request the request send by the client to the server
		 * @param response the response send by the server to the client
		 * @throws ServletException if an error occurred
		 * @throws IOException if an error occurred
		 */
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession(false);	
		List<GoodsCarInfo> cart=null;
		Map<GoodsCarInfo, Integer> foodlist=null;
		try{
			foodlist = new HashMap<GoodsCarInfo, Integer>();  
			cart = (List<GoodsCarInfo>)session.getAttribute("cart");
			for(GoodsCarInfo food:cart){
				boolean flag=true;
				for(GoodsCarInfo food_key:foodlist.keySet()){
					if(food_key.getFood_id().equals(food.getFood_id())){
						foodlist.put(food_key,foodlist.get(food_key)+1);
						flag=false;
						break;
					}
				}
				if(flag){
					foodlist.put(food,1);
				}
			}
			JSONObject json = createJSONObject(foodlist);
            String str = json.toString();//将json对象转换为字符串
            out.println(str);
		 }catch(Exception e){
		  		out.print("fail"); 
		 }
		try{
		 	String food_id=request.getParameter("food_id");
	 	 	if(food_id!=null){
	 	 		if(cart.size()<2){
	 	 			cart.clear();
	 	 		}else{
	 	 			for(int i = 0 ; i  <  cart.size()  -   1 ; i ++ )  {       
	 		           if  (food_id.equals(cart.get(i).getFood_id()))  {   
	 		        	   cart.remove(i);    
	 		        	   break;    
	 		           }              
	 			     }
	 	 		}
			}
		}catch(Exception e){
		
		}
		try{
		 	String clear=request.getParameter("clear");
	 	 	if(clear!=null){
	        	   cart.clear();      
	        }              
		}catch(Exception e){
		
		}
		out.flush();
		out.close();
	}

	/**
		 * The doPost method of the servlet. <br>
		 *
		 * This method is called when a form has its tag value method equals to post.
		 * 
		 * @param request the request send by the client to the server
		 * @param response the response send by the server to the client
		 * @throws ServletException if an error occurred
		 * @throws IOException if an error occurred
		 */
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			doGet(request, response);
			
	}
	
	private static JSONObject createJSONObject(Map<GoodsCarInfo, Integer> foodlist) {  
		
        JSONObject result = new JSONObject();  
        
        result.put("success", true);  
        
        JSONArray jsonArray = new JSONArray();  
 	
        for (Entry<GoodsCarInfo, Integer> entry : foodlist.entrySet()) {
        	
        	JSONObject json = new JSONObject();  
 	        json.put("id", entry.getKey().getFood_id());  
 	        json.put("name", entry.getKey().getFood_name());  
 	        json.put("img", entry.getKey().getFood_img());  
 	        json.put("price", entry.getKey().getFood_price()); 
 	        json.put("num", entry.getValue()); 
 	        jsonArray.add(json);
        }	
	        	
        result.element("data", jsonArray);  
        
        return result;  
    } 

}
