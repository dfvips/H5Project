package Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class FoodServlet extends HttpServlet {

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
		JSONObject createJSONObject = createJSONObject();
	    out.println(createJSONObject);
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
	      
	 // ¥¥Ω®JSONObject∂‘œÛ  
	    private static JSONObject createJSONObject() {  
	        JSONObject result = new JSONObject();  
	        result.put("success", true);  
	        
	        JSONObject food1 = new JSONObject();  
	        food1.put("id", "f1");  
	        food1.put("name", "“ª∆∑œ ∫ƒ");  
	        food1.put("img", "images/01.jpg");  
	        food1.put("price", "£§15.00");  
	   
	        JSONObject food2 = new JSONObject();  
	        food2.put("id", "f2");  
	        food2.put("name", "«‡Ω∑≈≈π«");  
	        food2.put("img", "images/02.jpg");  
	        food2.put("price", "£§25.00");  
	        
	        JSONObject food3 = new JSONObject();  
	        food3.put("id", "f3");  
	        food3.put("name", "œ ≥¥ª∆πœ");  
	        food3.put("img", "images/03.jpg");  
	        food3.put("price", "£§18.00");  
	        
	        JSONObject food4 = new JSONObject();  
	        food4.put("id", "f4");  
	        food4.put("name", "“‚ Ω≥¥√Ê");  
	        food4.put("img", "images/04.jpg");  
	        food4.put("price", "£§20.00");  
	        
	        JSONObject food5 = new JSONObject();  
	        food5.put("id", "f5");  
	        food5.put("name", "º´∆∑…’∂Ï");  
	        food5.put("img", "images/05.jpg");  
	        food5.put("price", "£§20.00");  
	   
	        JSONObject food6 = new JSONObject();  
	        food6.put("id", "f6");  
	        food6.put("name", "œ œ∫Ï“∑π");  
	        food6.put("img", "images/06.jpg");  
	        food6.put("price", "£§25.00");  
	        
	        JSONObject food7 = new JSONObject();  
	        food7.put("id", "f7");  
	        food7.put("name", "—Ù¥∫»‚æÌ");  
	        food7.put("img", "images/07.jpg");  
	        food7.put("price", "£§20.00");  
	        
	        JSONObject food8 = new JSONObject();  
	        food8.put("id", "f8");  
	        food8.put("name", "øæ—Ú»‚¥Æ");  
	        food8.put("img", "images/08.jpg");  
	        food8.put("price", "£§18.00"); 
	        
	        JSONArray jsonArray = new JSONArray();  
	          
	        jsonArray.add(0, food1);  
	        jsonArray.add(1, food2);  
	        jsonArray.add(2, food3);  
	        jsonArray.add(3, food4);
	        jsonArray.add(4, food5);  
	        jsonArray.add(5, food6);  
	        jsonArray.add(6, food7);  
	        jsonArray.add(7, food8);
	        result.element("data", jsonArray);  
	          
	        return result;  
	    } 
}
