import React, { useState } from 'react'
import styled from 'styled-components'
import CritterPopup from './CritterPopup'


const GridDiv = styled.div`
display: grid;
grid-template-columns: repeat(16, 60px);
grid-auto-rows: 60px;
border: 5px dotted grey;
background-color: lavender;
`

const CenteredDiv = styled.div`
padding-top: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const StyledImg = styled.img`
display: block;
margin: auto;
width: 50px;
`

function CritterTable({ selectedCritters }) {
  const [clickedCritter, setClickedCritter] = useState({})

  return (
    <CenteredDiv>
      <GridDiv>
        {selectedCritters.map(critter => {
          return <StyledImg onClick={() => setClickedCritter(critter)} key={critter.id} src={critter['icon_uri']}>
          </StyledImg>
        })}
      </GridDiv>
      <CritterPopup critter={clickedCritter}/>
    </CenteredDiv>
  )
}

export default CritterTable