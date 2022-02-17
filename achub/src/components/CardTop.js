import React from 'react'
import styled from 'styled-components'

const StyledTopCard = styled.div`
  top: 0px;
  width: 91%;
  height: 75%;
  background-color: #fdf8e3;
  animation: blob 1.5s;
  border-radius: 40% 40% 30% 30% / 150% 150% 150% 150%;
  padding-bottom: 5%;
  margin: auto;
`
const StyledImg = styled.img`
  border-radius: 40%;
  width: 250px;
  margin-top: 20px;
`

function CardTop({image, name }) {
  return (
    <StyledTopCard>
        <StyledImg src={image}></StyledImg>
        <h2 style={{margin: '0'}}>{name['name-USen']}</h2>
    </StyledTopCard>
  )
}

export default CardTop;