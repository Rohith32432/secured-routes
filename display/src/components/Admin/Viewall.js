import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Viewall() {
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

  return (
    <>
      <h3>Viewall-Page</h3>
      <ul>
        {data.map((e, index) => (
          <li key={index}>{e.email}-{e.role}</li> 
         
        ))}
      </ul>
    </>
  );
}

export default Viewall;
