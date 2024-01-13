import axios from 'axios';
import React, { useState,useEffect } from 'react'


function Delall() {
  const [data, setData] = useState([]);

  async function view() {
     try {
       const res = await axios.get('http://localhost:32432/viewall');
       setData(res.data); // Assuming the response contains an array of data
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   }
 
   useEffect(() => {
     view();
   }, []);
 function handledelte(name){
  const updatedData = data.filter((ele) => ele.name !== name);
  setData(updatedData);
  
 }
  return (
   <>
   
   <h3>delte-page</h3>
   <div className="container">
   <ul className="list-group ">
   {data.map((ele,index)=>([

  <li className="list-group-item d-flex justify-content-between" key={index}>{ele.name} <button className='btn btn-danger ' onClick={()=>handledelte(ele.name)}>delete</button></li>
   ]))}
</ul>
</div>
 </>
  )
}

export default Delall