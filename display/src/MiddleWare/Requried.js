import { Navigate, Outlet } from "react-router-dom"
import { useTest } from "../components/Maincontext"

export const AdminAuth=()=>{
        const check =useTest()
        if( localStorage.getItem('role')!=='admin'){
            console.log("login");
            return <Navigate to="/"/>
        }
       
    
    return <Outlet/>
}