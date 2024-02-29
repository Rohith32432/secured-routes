import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Individual() {
  const { id } = useParams();
  const [poster, setPoster] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}`);
      const result = await response.json();
      setPoster(result);
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <div className="top">
        <h1>{poster.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`} alt="" />
        <h3>{poster.release_date}</h3>
        <h3>{poster.vote_average}</h3>
      </div>
    </div>
  );
}

export default Individual;
