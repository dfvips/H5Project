<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*,db.DBManager" %>
<html>
<head>
<title >用户信息表</title>
<meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1.0,maximum-scale=1.0">
<link rel="icon" href="images/logo-s.png" type="image/x-icon"/>
<style type="text/css">
	table{
		text-align: center;
		margin: 0 auto;
		border-color: #3385FF;
	}
	h2{
		margin:0 auto;
		text-align: center;
	}
	th{
		font-weight: bold;
	    color: #000;
	    background: #f3f3f3;
	    background-size: 100% 100%;
	}
	tr:nth-child(2n+1){
		background: #DFDFDF;
	}
	tr:nth-child(2n){
		color: #235a81;
	}
	tr:hover{
		opacity: 0.4;
	}
	tr:hover,td:hover{
		cursor: pointer;
	}
</style>
</head>
<body>
<%  
			DBManager sq=new DBManager();
			Statement s = sq.getState();
			ResultSet rs = null; 
%>
<table border="2">
<tr>
<th width="100" number="title">编号</th>
<th width="100" name="title">用户名</th>
<th width="100" age="title">密码</th>
<th width="100" age="title">邮箱</th>
<th width="100" age="title">手机号</th>
</tr>
<%
                String sql = "SELECT * FROM usermsg;";  //查询语句
                rs=s.executeQuery(sql);
                out.print("<h2>用户信息表</h2>");  
				out.print("<br/>");
                while (rs.next()) {%>
  <tr>  
    <td width="100" ><%=rs.getString("userid") %></td>  
    <td width="100" ><%=rs.getString("username") %></td>  
    <td width="100"><%=rs.getString("userpwd") %></td>  
     <td width="100"><%=rs.getString("useremail") %></td>  
     <td width="100"><%=rs.getString("userphone") %></td>  
  </tr>
  <%
            }  
%> 
</table>
</body>
</html>