import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Developr() {
  const [data, setData] = useState([]);
  const [poster, setPoster] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${count}&sort_by=popularity.desc&api_key=${process.env.REACT_APP_APIKEY}`);
      const result = await response.json();
      setData(result.results);
      if (result.results.length > 0) {
        setPoster(result.results[0]);
      }
    }
    fetchData();
  }, [count]); 

  const handleHover = (i) => {
    setPoster(data[i]);
  };
  return (
    <div>
      <div className="top">
        <h1>{poster.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${poster.backdrop_path}`} alt="" />
        <h3>{poster.release_date}</h3>
        <h3>{poster.vote_average}</h3>
      </div>

      <button onClick={() => setCount(count + 1)}>click</button>
    <div style={{display:'flex',overflowX:'scroll'}}>
      {data.map((e, i) => (
        <div key={i} onMouseOver={() => handleHover(i)} >
          
          <Link to={`/start/${e.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt="sj" />
          <h2>{e.original_title}</h2>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Developr;
