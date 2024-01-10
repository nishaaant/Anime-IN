import React from 'react';
import { useState, useEffect } from 'react';


const Topanime = () => {
const [topanime, setTopanime] = useState([21,22,33]);
const fetchdata = async() => {
    const data1 = await fetch("https://jikan1.p.rapidapi.com/top/anime/1/upcoming", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
            "x-rapidapi-host": "jikan1.p.rapidapi.com"
        }
    })
    const data = await data1.json();
    setTopanime(data.top);
}
useEffect(() => {
   fetchdata()
}, []);
    return (
        <div>
           {topanime.map(anime => (
               <div>
                   <img src={anime.image_url} alt="" />
               <h1>{anime.title}</h1>
               </div>
           ))}
        </div>
    )
}

export default Topanime;
