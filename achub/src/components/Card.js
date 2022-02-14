import React from 'react'

function Card({ villager }) {
    
    const {image_uri, name} = villager

  return (
    <div>
        <img src={image_uri}></img>
        <h2>{name['name-USen']}</h2>
    </div>
  )
}

export default Card