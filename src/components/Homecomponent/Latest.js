import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Latest = () => {
    const [latest ,setLatest] = useState([]);

    const fetchlatestAnime = async() => {
const data = await fetch("https://simpleanime.p.rapidapi.com/anime/list/recent", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
		"x-rapidapi-host": "simpleanime.p.rapidapi.com"
	}
})
const data1 = await data.json();

setLatest(data1.data);
console.log(latest);
console.log("hii");
    }
    useEffect(() => {
        fetchlatestAnime();     
    }, [])
    return (
        <div>
            <h1 style = {{color: 'white'}}>Latest Anime</h1>
             <div className= 'latest'>
           {latest.map(anime => (
                <Link to= {`/search/${anime.vid_id}`}>
               <div className="animelatest">
            <img src={anime.cover} alt="" />
            <h2>{anime.title}</h2>
            <p>{anime.date}</p>
            
            </div>
            </Link>
           ))}
           </div> 
        </div>
    )
}

export default Latest
