import React, { useState } from 'react'

function Developr() {

  const [data,setdata]=useState([])
  async function getdata(){
  const data=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_APIKEY}`)
  const res=await data.json() 
 setdata(res.results)
}
getdata()

  return (
    <div>
      {
       
        data.map((e,i)=>([
          <div key={i}>
          
            <img src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt="sj" />
            <h2>{e.original_title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} alt="sj" />
          </div>
       ] ))
      }
    </div>
  )
}

export default Developr