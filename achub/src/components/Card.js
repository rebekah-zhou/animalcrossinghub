import React from 'react'
import styled from 'styled-components';

import FossilCardBottom from './FossilCardBottom'
import VillagerCardBottom from './VillagerCardBottom';

const StyledImg = styled.img`
  border-radius: 40%;
  width: 250px;
  margin-top: 20px;
`
const StyledCardDiv = styled.div`
  position: relative;
  width: 600px;
  margin: auto;
`
const StyledTopCard = styled.div`
  top: 0;
  width: 91%;
  height: 75%;
  background-color: #fdf8e3;
  animation: blob 1.5s;
  border-radius: 40% 40% 30% 30% / 150% 150% 150% 150%;
  padding-bottom: 5%;
  margin: auto;
`
const VilAndFossilBottomCard = styled.div`
  position: absolute;
  bottom: -240px;
  width: 80%;
  height: 70%;
  background-color: #fdf8e3;
  margin-left: 60px;
  margin-bottom: 10px;
  center;
  border-radius: 5% 5% 20% 20% / 100% 100% 100% 100%;
`
const HomeBottomCard = styled.div`
  position: absolute;
  bottom: -60px;
  width: 80%;
  height: 20%;
  background-color: #fdf8e3;
  margin-left: 60px;
  margin-bottom: 10px;
  padding-bottom: 0px
  center;
  border-radius: 5% 5% 20% 20% / 100% 100% 100% 100%;
`
const StyledDialChar = styled.div`
display: inline-block;
margin-right: auto;
padding: 0.5rem 2rem;
font-family: $round;
font-size: 19px;
color: #482016;
background-color: #dd8530;
border-radius: 30% / 100% 100% 120% 120%;
transform: perspective(2rem) rotateX(1deg) rotateZ(-9deg) translateX(20%);
translateY(-45%) scale(0);
`

function Card({ dataObj, comType }) {
    const {image_uri, name} = dataObj

  const renderCardInfo = () => {
    switch(comType) {
      case 'home':
        return <h3>Catch Phrase: "{dataObj['catch-phrase']}"</h3>
      case 'fossil':
        return <FossilCardBottom fossil={dataObj}/>
      case 'villager':
        return <VillagerCardBottom villager={dataObj}/>
    }
  }

  const StyledDialCharWrap = styled.div`
    position: absolute;
  `
  return (
    <StyledCardDiv>
        <StyledDialCharWrap>
          <StyledDialChar>CharacterName</StyledDialChar>
        </StyledDialCharWrap>
        <StyledTopCard>
          <StyledImg src={image_uri}></StyledImg>
          <h2 style={{margin: '0'}}>{name['name-USen']}</h2>
        </StyledTopCard>
        {comType === 'home' ? <HomeBottomCard>{renderCardInfo()}</HomeBottomCard> : <VilAndFossilBottomCard>{renderCardInfo()}</VilAndFossilBottomCard>}
    </StyledCardDiv>
  )
}

export default Card