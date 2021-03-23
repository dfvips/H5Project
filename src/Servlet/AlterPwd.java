package Servlet;

import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import service.Service;
 
public class AlterPwd extends HttpServlet{
 
	private static final long serialVersionUID = 9036889586892331384L;
 
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		String userid = request.getParameter("userid");
		String password = request.getParameter("password");
		
		Service service = new Service();
		
		boolean alt = service.alter(userid,password);
		if( alt ){
			System.out.println("alt success");
			
		}else{
			System.out.println("alt fail");
		}
		
		if( alt ){
			out.print("true");
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
