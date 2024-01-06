import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { context, useTest } from '../Maincontext'
function Admin() {
  const sample=useContext(context)
  console.log(sample);
  const auth=useTest()
  console.log(auth);
  return (
    <>
      <div className="container  d-flex flex-column my-5 gap-3">
        <h3>Admin page</h3>

        <div className="d-flex justify-content-center gap-5">
          <Link to="del"><button className='btn btn-primary '>Delete</button></Link>
          <Link to="viewall" className='btn btn-primary'>View-All</Link>
          <Link to="staus" className='btn btn-primary'>Status</Link>

        </div>

      </div>
      <Outlet/>
    </>
  )
}

export default Admin