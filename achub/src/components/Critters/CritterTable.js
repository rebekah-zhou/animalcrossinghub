import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CritterPopup from './CritterModal'

const GridDiv = styled.div`
display: grid;
grid-template-columns: repeat(16, 60px);
grid-auto-rows: 60px;
border: 5px dotted darkGoldenRod;
border-radius: 10px;
background-color: #f1ebdc;
`

const CenteredDiv = styled.div`
padding-top: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const StyledImg = styled.img`
display: block;
margin: auto;
width: 50px;
cursor: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385231/hand-cursor.png"),
    pointer;
`

function CritterTable({ selectedCritters }) {
  const [clickedCritter, setClickedCritter] = useState({})
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [iconsToDisplay, setIconsToDisplay] = useState([])

  function handleModal(critter) {
    setClickedCritter(critter)
    setIsOpen(true)
  }

  useEffect(() => {
    setIconsToDisplay(selectedCritters.map(critter => {
      return (
        <StyledImg 
          onClick={() => handleModal(critter)} 
          key={critter.id}
          src={critter['icon_uri']}
          alt='critter icon'>
        </StyledImg>
      )
    }))
  }, [selectedCritters]) 
    
  return (
    <CenteredDiv>
      <GridDiv>
      {iconsToDisplay}
      </GridDiv>
      {modalIsOpen ? 
        <CritterPopup 
          critter={clickedCritter} 
          modalIsOpen={modalIsOpen} 
          setIsOpen={setIsOpen}/>
        : null}
    </CenteredDiv>
  )
}

export default CritterTable