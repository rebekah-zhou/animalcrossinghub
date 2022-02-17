import React from 'react'
import styled from 'styled-components';
import CardNameBubble from './CardNameBubble';

import CardTop from './CardTop';
import CardBottom from './CardBottom';

const StyledCardDiv = styled.div`
  position: relative;
  width: 600px;
  margin: auto;
  background-color: #f1ebdc;
  border-radius: 20%;
  box-shadow: 8px 18px 0 -8px rgba(0, 0, 0, 0.05);
`

function Card({ dataObj, comType }) {
    const {image_uri, name} = dataObj

  return (
    <StyledCardDiv>
        {comType !== 'fossil' ? <CardNameBubble villagerOnScreen={dataObj}/> : null }
        <CardTop image={image_uri} name={name}/>
        <CardBottom comType={comType} dataObj={dataObj} />
    </StyledCardDiv>
  )
}

export default Card