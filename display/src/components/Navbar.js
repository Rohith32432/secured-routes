import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
          
          <Link class="nav-link active" to="/admin">Admin</Link>
        </li>
       
        <li class="nav-item">
        <Link class="nav-link active" to="/user">User</Link>     
           </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      
     <Link to='/login'> <button class="btn btn-outline-success mx-3" >Login</button></Link>
      </form>
    </div>
  </div>
</nav></>
  )
}

export default Navbar