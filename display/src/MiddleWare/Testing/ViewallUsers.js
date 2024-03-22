import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewallUsers() {
  const [data,setdata]=useState([])
  async function users(){
    const response=await axios.get('http://localhost:32432/test')
   setdata(response.data)
  }
  useEffect(()=>{
    users()
  },[])
  return (
    <>
    {data.map((e,i)=>(
      <div key={i}>
        <img src={e.picture} alt=""  />
        <h6>{e.fullname}</h6>
        </div>
    ))}
    </>
  )
}

export default ViewallUsers