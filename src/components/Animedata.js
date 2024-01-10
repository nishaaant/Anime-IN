import React from 'react'

const Animedata = ({ane, images}) => {

    return (
        <div>
            <img src={images} alt={ane[0].title2|+ 'images'} />
            <h1>{ane[0].title2}</h1>
            <h2>{ane[0].title}</h2>
            <p>{ane[0].description}</p>
            <a href={ane[0].stream}>Watch Online</a>
            <a href={ane[0].download}>Download</a>
        </div>
    )
}

export default Animedata;
