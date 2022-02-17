import React from 'react'
import styled from 'styled-components';

const StyledP = styled.p`
  width: 450px;
  height: 170px;
  overflow-y: scroll;
  display: block;
  padding-left: 15px;
`

function FossilCardBottom({ fossil }) {
  return (
    <div>
        <StyledP>Museum Phrase {fossil['museum-phrase']}</StyledP>
        <span>{fossil['price']} Bells</span>
        <span>Part Of: {fossil['part-of']}</span>
    </div>
  )
}

export default FossilCardBottom