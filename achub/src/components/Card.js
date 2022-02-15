import React from 'react'
import styled from 'styled-components';
import Voter from './Voter';
import FossilCardBottom from './FossilCardBottom'

const StyledImg = styled.img`
border-radius: 40%;
`

function Card({ dataObj, comType }) {
    const {image_uri, name} = dataObj

  return (
    <div>
        <StyledImg src={image_uri}></StyledImg>
        <h2>{name['name-USen']}</h2>
        {/* TODO: add other CardBottoms where needed */}
        {comType === 'home' ? <h2>Catch Phrase: {dataObj['catch-phrase']}</h2> : <FossilCardBottom museumPhrase={dataObj['museum-phrase']} price={dataObj['price']} partOf={dataObj['part-of']} />}
        {comType === 'home' ? <Voter foundVillagerID={dataObj.id} foundVillagerName={name['name-USen']}/> : null}
    </div>
  )
}

export default Card