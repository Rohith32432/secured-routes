import React from 'react'
import { Link } from 'react-router-dom'
import { useTest } from './Maincontext'
function Navbar() {
  const auth=useTest()
  const handlelogout=()=>{
   return  auth.status?localStorage.clear():""
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link active" to="/admin">Admin</Link>
        </li>
       
        <li className="nav-item">
        <Link className="nav-link active" to="/user">User</Link>     
           </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
     <Link to='/login'> <button className="btn btn-outline-success mx-3" onClick={handlelogout} >
      {auth.status?'Logout':"Login" }</button></Link>
      </form>
    </div>
  </div>
</nav></>
  )
}

export default Navbar