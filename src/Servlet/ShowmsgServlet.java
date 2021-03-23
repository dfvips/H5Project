package Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class ShowmsgServlet extends HttpServlet {

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
	
	private static JSONObject createJSONObject() {  
        JSONObject result = new JSONObject();  
        result.put("success", true);  
        
        JSONObject envaluate1 = new JSONObject();  
        envaluate1.put("name", "<span id='vip'>svip9</span>dreamfly");  
        envaluate1.put("img", "images/customer0.jpg");  
        envaluate1.put("star", "★★★★★");  
        envaluate1.put("envaluate", "真好吃！");  
   
        JSONObject envaluate2 = new JSONObject();  
        envaluate2.put("name", "nilaoda");  
        envaluate2.put("img", "images/customer1.jpg");  
        envaluate2.put("star", "★★★★★");  
        envaluate2.put("envaluate", "很赞！");  
        
        JSONObject envaluate3 = new JSONObject();  
        envaluate3.put("name", "<span id='vip'>svip6</span>o'bin");  
        envaluate3.put("img", "images/customer2.jpg");  
        envaluate3.put("star", "★★★★★");  
        envaluate3.put("envaluate", "性价比特别高！");  
        
        JSONObject envaluate4 = new JSONObject();  
        envaluate4.put("name", "<span id='vip'>svip6</span>Elegant");  
        envaluate4.put("img", "images/customer3.jpg");  
        envaluate4.put("star", "★★★★★");  
        envaluate4.put("envaluate", "超赞,非常快而且好吃！");  
        
        JSONObject envaluate5 = new JSONObject();  
        envaluate5.put("name", "PreDog");  
        envaluate5.put("img", "images/customer4.jpg"); 
        envaluate5.put("star", "★★★★★");  
        envaluate5.put("envaluate", "好吃，量足，好评！");  
   
        JSONObject envaluate6 = new JSONObject();  
        envaluate6.put("name", "Heart");  
        envaluate6.put("img", "images/customer5.jpg"); 
        envaluate6.put("star", "★★★★★");  
        envaluate6.put("envaluate", "味道不错，很美味！");  
        
        JSONArray jsonArray = new JSONArray();  
          
        jsonArray.add(0, envaluate1);  
        jsonArray.add(1, envaluate2);  
        jsonArray.add(2, envaluate3);  
        jsonArray.add(3, envaluate4);
        jsonArray.add(4, envaluate5);  
        jsonArray.add(5, envaluate6);  
        result.element("data", jsonArray);  
          
        return result;  
    } 
	
}
