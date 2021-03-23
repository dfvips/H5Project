package Servlet;
 
import java.io.IOException;
import java.io.PrintWriter;
 
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import service.Service;
 
public class Findpwd extends HttpServlet{
 
	private static final long serialVersionUID = 1L;
 
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO 自动生成的方法存根
		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		System.out.println(username + "/" + email+ "/" + "/" + password);
		
		Service service = new Service();
			
		boolean find = service.find(username,email,password);
		if( find ){
			System.out.println("find success");
			//request.getSession().setAttribute("username", username);
		}else{
			System.out.println("find fail");
		}
		PrintWriter out = response.getWriter();
		if(find){
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
