import React from 'react'
import styled from 'styled-components';

const StyledImg = styled.img`
border-radius: 40%;
`

function Card({ villager }) {
    const {image_uri, name} = villager

  return (
    <div>
        <StyledImg src={image_uri}></StyledImg>
        <h2>{name['name-USen']}</h2>
        <h2>Catch Phrase: {villager['catch-phrase']}</h2>
    </div>
  )
}

export default Card