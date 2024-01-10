import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Animedata from './Animedata'
const Episode = ({match}) => {
  const[animes, setAnime] = useState([21]);
   const [animedata, setAnimedata] = useState([21,22,33]);
    const fetchanime = async() => {
    const data = await fetch(`https://simpleanime.p.rapidapi.com/anime/info/videos/${match.params.any}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
		"x-rapidapi-host": "simpleanime.p.rapidapi.com"
	}
})
const data1 = await data.json();
setAnime(data1.episode);
setAnimedata(data1.data);
console.log(animedata);
}
useEffect(() => {
   fetchanime();
   
}, [])

    return (
        <div>
            <Animedata ane={animedata} images={animes[0].cover}/>
            {
                animes.map(anime => (
               <div>
                   <Link to={`/search/${anime.vid_id}`}>
                   <h1 key={anime.vid_id}>{anime.episode}</h1>
                   <h3>Type: {anime.type}</h3>
                   <p>{anime.date}</p>
               </Link>
               </div>
           ))}
        </div>
    )
}

export default Episode;

