import React from 'react'
import styled from 'styled-components';

const StyledP = styled.p`
  width: 450px;
  height: 170px;
  overflow-y: scroll;
  display: block;
  padding-left: 15px;
  font-family: 'Rodin';
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`

function FossilCardBottom({ fossil }) {
  return (
    <div>
        <StyledP>{fossil['museum-phrase']}</StyledP>
        <StyledDiv>
          <span>Price: {fossil['price']} Bells</span>
          <span>Part of: {fossil['part-of']}</span>
        </StyledDiv>
    </div>
  )
}

export default FossilCardBottom