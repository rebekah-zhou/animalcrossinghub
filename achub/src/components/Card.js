import React from 'react'
import styled from 'styled-components';
import CardNameBubble from './CardNameBubble';

import CardTop from './CardTop';
import CardBottom from './CardBottom';

const StyledCardDiv = styled.div`
  position: relative;
  width: 600px;
  margin: auto;
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