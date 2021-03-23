package Servlet;
 
import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.Service;
 
public class Register extends HttpServlet{
 
	private static final long serialVersionUID = 1L;
 
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO 自动生成的方法存根
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String email=request.getParameter("email");
		String phone=request.getParameter("phone");
		System.out.println(username + "/" + password+ "/" + email+ "/" + phone);
		PrintWriter out = response.getWriter();
		Service service = new Service();
		boolean reg = service.register(username, password,email,phone);
		if(reg){
			out.print("true");
		}else{
			out.print("false");
		}
		if(reg){
			System.out.print("true");
		}else{
			System.out.print("false");
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
