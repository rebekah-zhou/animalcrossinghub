import React from 'react'
import styled from 'styled-components';

const StyledDialCharWrap = styled.div`
position: absolute;
`

const StyledDialChar = styled.div`
display: inline-block;
margin-right: auto;
padding: 0.5rem 2rem;
font-family: $round;
font-size: 30px;
border-radius: 30% / 100% 100% 120% 120%;
transform: perspective(2rem) rotateX(1deg) rotateZ(-9deg) translateX(20%);
translateY(-45%) scale(0);
`

function CardNameBubble({ villagerOnScreen }) {
  return (
    <StyledDialCharWrap> 
      <StyledDialChar
        style={{backgroundColor: `${villagerOnScreen['bubble-color']}`, color: `${villagerOnScreen['text-color']}`}}>
        {villagerOnScreen.name['name-USen']}
      </StyledDialChar>
    </StyledDialCharWrap>
  )
}

export default CardNameBubble