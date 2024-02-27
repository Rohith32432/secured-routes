import React, { useEffect, useState } from 'react'
import { Chart as chartjs } from 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';
import EmojiPicker from 'emoji-picker-react';
import './style.css'
function Chart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };
  const pieData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        
        data: [65, 59, 80, 81, 56],

      },
      {
        label: 'Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'green',
        borderColor: 'lightgreen',
        
        data: [56, 29, 50, 82, 66],

      },
    ],
  };
  useEffect(()=>{},[])
  const [staus,setstatus]=useState(false)
  function toogle(){
    staus?setstatus(false):setstatus(true)
  }
  function sample(e){
    console.log(e.emoji);
  }
  return (
   <div className="chart">
    <input type="text" name="" id="" />
    <button onClick={toogle}>s</button>
    { staus? 
    
    <div  className='picker'>

      <EmojiPicker onEmojiClick={sample}/>
    </div>
    
    :''}
   <Bar data={data} />
   <Pie data={pieData}/>
   <Line data={lineData}/>

   </div>
  )
}

export default Chart