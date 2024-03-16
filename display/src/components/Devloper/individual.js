import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

function Individual() {
  const { id } = useParams();
  const [poster, setPoster] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}`);
      const result = await response.json();
      setPoster(result);
    }
    gettrailer()
    fetchData();
  }, [id]);
/*
  useful api's
  indian moies=https://api.themoviedb.org/3/discover/movie?api_key=xxxxxxxx&with_origin_country=IN

  search movies -> https://api.themoviedb.org/3/search/movie?query=RRR&include_adult=false&language=en-US&page=1';

  clebs -> 'https://api.themoviedb.org/3/search/person?query=Prabhas&include_adult=false&language=en-US&page=1';

  credits ->https://api.themoviedb.org/3/movie/579974/credits?language=en-US';

  vedio -> 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';

  UPCOMING->https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN';


*/
const [celbs,setcelbs]=useState([])
 
async  function searchclebs(e){
  let qry=e.target.value;
  const data= await fetch(`https://api.themoviedb.org/3/search/person?query=${qry}&include_adult=true&language=en-US&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
 const response=await data.json()
 setcelbs(response.results)
}
const [movies,setmovies]=useState([])
async  function seaarchmovies(e){
  let qry=e.target.value;
  const data= await fetch(`https://api.themoviedb.org/3/search/movie?query=${qry}&include_adult=true&language=en-US&page=1&api_key=${process.env.REACT_APP_APIKEY}`)
 const response=await data.json()
 setmovies(response.results)
}




const [trailer,settrailer]=useState([])

 function gettrailer(id){
  console.log(id);
//   const data= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${process.env.REACT_APP_APIKEY}`)
//  const response=await data.json()
//  settrailer(response.results)

}


console.log(trailer[0]);
  return (
    <div>
      <div className="top">
        <h1>{poster.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`} height={150} alt="" />
        <h3>{poster.release_date}</h3>
        <h3>{poster.vote_average}</h3>
      </div>
      <input type="text" onInput={searchclebs}  />
      <div className="profiles">
        {
          celbs.map((e , i)=>(
            <div className="celebs" key={i}>
              <h3>{e.original_name}</h3>
              <img src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`} alt="" />
              {e.known_for.map((m)=>(
                
                <ul>
                  <li>{m.title}</li>
                  {/* {console.log(m.id)} */}

                  {/* {gettrailer(m.id)} */}

                  <a href={`https://www.youtube.com/watch?v=${1}`}>link</a>
                </ul>
              ))}
            </div>
          ))
        }

      </div>

      <div className="movies">
        <input type="text" onInput={seaarchmovies} />
        <p>
          {/* {JSON.stringify(movies)} */}
       {
        movies.map((e)=>(
      
          <img src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} height={200} alt="" />
        ))
       }
        </p>
      </div>
    </div>
  );
}

export default Individual;