package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Bean.GoodsCarInfo;
import net.sf.json.JSONArray;

public class AddToCar extends HttpServlet {

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
		String food_id=request.getParameter("food_id");
        String food_name=request.getParameter("food_name");
		String food_price=request.getParameter("food_price");   
		String food_img=request.getParameter("food_img");   
		GoodsCarInfo book = new GoodsCarInfo(food_id, food_name, food_price, food_img);
		HttpSession session = request.getSession();			
		List<GoodsCarInfo> cart = (List<GoodsCarInfo>)session.getAttribute("cart");
		if(cart==null){
			cart = new ArrayList<GoodsCarInfo>();
			session.setAttribute("cart",cart);			
		}
		if(cart.add(book)){
			Cookie cookie = new Cookie("JSESSIONID", session.getId());
			cookie.setMaxAge(60*60*60);
			response.addCookie(cookie);	
		}
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

}
