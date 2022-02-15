import React from 'react'
import styled from 'styled-components';
import Voter from './Voter';
import FossilCardBottom from './FossilCardBottom'

const StyledImg = styled.img`
  border-radius: 40%;
`

const StyledCardDiv = styled.div`
  position: relative;
  top: 0;
  left: 30%;
  width: 50%;
  height: 100%;
`

function Card({ dataObj, comType }) {
  console.log(dataObj)
    const {image_uri, name} = dataObj

  // if (comType === 'home') {
  //   return (
  //     <StyledCardDiv>
  //       <StyledImg src={image_uri}></StyledImg>
  //       <h2>{name['name-USen']}</h2>
  //       <h2>Catch Phrase: {dataObj['catch-phrase']}</h2>
  //       <Voter foundVillagerID={dataObj.id} foundVillagerName={name['name-USen']}/>
  //     </StyledCardDiv>
  //   )
  // } elseif (comType === 'fossil') {
  //   return (
  //     <StyledCardDiv>
  //       <StyledImg src={image_uri}></StyledImg>
  //       <h2>{name['name-USen']}</h2>
  //       <FossilCardBottom museumPhrase={dataObj['museum-phrase']} price={dataObj['price']} partOf={dataObj['part-of']} />
  //     </StyledCardDiv>
  //   )
  // } elseif (comType === 'villager') {
  //   return (
  //     <StyledCardDiv>
  //       <StyledImg src={image_uri}></StyledImg>
  //       <h2>{name['name-USen']}</h2>
  //     </StyledCardDiv>
  //   )
  // }

  return (
    <StyledCardDiv>
        <StyledImg src={image_uri}></StyledImg>
        <h2>{name['name-USen']}</h2>
        {/* TODO: add other CardBottoms where needed */}
        {comType === 'home' ? <h2>Catch Phrase: {dataObj['catch-phrase']}</h2> : <FossilCardBottom museumPhrase={dataObj['museum-phrase']} price={dataObj['price']} partOf={dataObj['part-of']} /> }
        {comType === 'home' ? <Voter foundVillagerID={dataObj.id} foundVillagerName={name['name-USen']}/> : null}
    </StyledCardDiv>
  )
}

export default Card