import React from 'react'

function Users({name,email,role}) {
  return (
    <>
   
    <div className="card">
      <div className="card-header">
       {name}
      </div>
      <div className="card-body">
        <p>{email} <br /> {role} </p>
      </div>
    </div>
 
    </>
  )
}

export default Users