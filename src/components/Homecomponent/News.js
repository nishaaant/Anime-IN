import React from "react";
import { useState, useEffect } from "react";
const News = () => {
  const [news, setNews] = useState([21, 22, 23]);
  const fetchdata = async () => {
    const data1 = await fetch(
      "https://jikan1.p.rapidapi.com/anime/16498/news",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
          "x-rapidapi-host": "jikan1.p.rapidapi.com",
        },
      }
    );
    const data = await data1.json();
    console.log(data);
    setNews(data.articles);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      {
       
          news.map(artical => (
            <div className= 'news'>
          <img src={artical.image_url} alt={artical.title + 'image'} />
          <h2>{artical.title}</h2>
          <p><strong> Date: </strong>{artical.date} <strong>Author: </strong>{artical.author_name}</p>
          <p>{artical.intro}</p>

          <a href={artical.url}><strong> Read More</strong></a>
          <hr />
          </div>
          ))
       
      }
    </div>
  );
};

export default News;
