import React from 'react'
import styled from 'styled-components';
import Voter from './Voter';
import FossilCardBottom from './FossilCardBottom'

const StyledImg = styled.img`
  border-radius: 40%;
`

const StyledCardDiv = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
  background-color: #f1ebdc;
  border-radius: 20%;
`

function Card({ dataObj, comType }) {
    const {image_uri, name} = dataObj

  const renderCardInfo = () => {
    switch(comType) {
      case 'home':
        return <h3>Catch Phrase: "{dataObj['catch-phrase']}"</h3>
      case 'fossil':
        return <FossilCardBottom museumPhrase={dataObj['museum-phrase']} price={dataObj['price']} partOf={dataObj['part-of']} />
      case 'villager':
        return (
          <div>
            <h4>Species: {dataObj['species']} | Gender: {dataObj['gender']}</h4>
            <h4>Personality: {dataObj['personality']} | Subtype: {dataObj['subtype']}</h4>
            <h4>Birthday: {dataObj['birthday-string']}</h4>
            <h4>Hobby: {dataObj['hobby']}</h4>
            <h4>Catch Phrase: "{dataObj['catch-phrase']}"</h4>
          </div>
        )
    }
  }

  return (
    <StyledCardDiv>
        <StyledImg src={image_uri}></StyledImg>
        <h2>{name['name-USen']}</h2>
        {/* TODO: add other CardBottoms where needed */}
        {renderCardInfo()}
        {/* {comType === 'home' ? <h2>Catch Phrase: {dataObj['catch-phrase']}</h2> : <FossilCardBottom museumPhrase={dataObj['museum-phrase']} price={dataObj['price']} partOf={dataObj['part-of']} /> } */}
        {/* {comType === 'home' ? <Voter foundVillagerID={dataObj.id} foundVillagerName={name['name-USen']}/> : null} */}
    </StyledCardDiv>
  )
}

export default Card