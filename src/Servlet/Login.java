package Servlet;
 
import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import service.Service;
 
public class Login extends HttpServlet{
 
	private static final long serialVersionUID = 9036889586892331384L;
 
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		Service service = new Service();
		
		boolean log = service.login(username, password);
		if( log ){
			System.out.println("log success");
			//request.getSession().setAttribute("username", username);
		}else{
			System.out.println("log fail");
		}
		
		PrintWriter out = response.getWriter();
		if( log ){
			JSONObject usemsg=Service.usermsg;
			out.print(usemsg.toString());
		}else{
			out.print("false");
		}
		out.flush();
		out.close();
	}
 
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO 自动生成的方法存根
		doGet(request, response);
	}
	 
}
