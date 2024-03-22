import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
      <div className="Container">
        <h1>Main-Section</h1>
        <div>
        <Link to={'logintest'}>
          <button className='btn-primary btn m-5'>Google-Login</button>
        </Link>

        <button className='btn-success btn m-5'> Razer-pay</button>
        <Link to={'viewall'}>
        <button className='btn-danger btn '> viewall</button>
        </Link>
        </div>

      </div>
      <Outlet />
    </>
  )
}

export default Main