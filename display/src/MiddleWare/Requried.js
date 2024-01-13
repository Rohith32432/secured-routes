import { Navigate, Outlet } from "react-router-dom"
import { useTest } from "../components/Maincontext"

export const AdminAuth = () => {
    const auth=useTest()
    const userRole = localStorage.getItem('role');
  
    if (auth.status && userRole!=='admin') {
      return <Navigate to="login" /> ;
    }
  
    return  <Outlet/>;
  };
  