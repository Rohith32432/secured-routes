import React from 'react'

import { Link, Outlet } from 'react-router-dom'

function Admin() {
  return (
    <>
    <h3>Admin page</h3>
    <Link to="/admin/del">DEL</Link>
    <Outlet/>
    </>
  )
}

export default Admin