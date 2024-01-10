import React from 'react';
import { useState } from 'react';
import News from './News';



const Aside = () => {

    const [schedule, setSchedule] = useState([20,21,22]);
    const Pstyle = {
       height: '5ch',
       width: '40ch',
       overflowY: 'scroll',
       overflowY: 'hidden'
    }

    const fetchdata = async () => {
        const data1 = await fetch("https://jikan1.p.rapidapi.com/schedule/monday", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
                "x-rapidapi-host": "jikan1.p.rapidapi.com"
            }
        })
        const data = await data1.json();
        setSchedule(data.monday);
    }
      fetchdata()

    

    return (
       <aside>
            <h1>News</h1>
            <News />
         <h1>Schedule</h1>
         {
             schedule.map(list => (
                 <div>
                     <img src={list.image_url} alt="" />
                 <h3>{list.title}</h3>
                 <h4><strong>Episodes:</strong>  {list.episodes}</h4>
                 <p style= {Pstyle}>{list.synopsis}</p>
                <h5>Rating{list.score}</h5>
                <p><strong>{list.r18? 'R_18': ''}</strong></p> 
                <h6><a href={list.url}>Download</a></h6>

                 </div>
                
             ))
         }
       </aside>
    )
}

export default Aside
