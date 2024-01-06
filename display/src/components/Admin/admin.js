import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {  useTest } from '../Maincontext'
function Admin() {
 

  const auth=useTest()

  console.log(auth);
  
  return (
    <>
    { auth?
      <div className="container  d-flex flex-column my-5 gap-3">
        <h3>Admin page</h3>
    
        <div className="d-flex justify-content-center gap-5">
          <Link to="del"><button className='btn btn-primary '>Delete</button></Link>
          <Link to="viewall" className='btn btn-primary'>View-All</Link>
          <Link to="staus" className='btn btn-primary'>Status</Link>

        </div>

      </div>:<h1>go login</h1>
}
      <Outlet/>
    </>
  )
}

export default Admin