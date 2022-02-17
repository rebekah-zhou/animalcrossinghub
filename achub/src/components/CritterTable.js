import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CritterPopup from './CritterPopup'


const GridDiv = styled.div`
display: grid;
grid-template-columns: repeat(16, 60px);
grid-auto-rows: 60px;
border: 5px dotted grey;
background-color: #f1ebdc;
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50%;
  width: 50%;
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
    return <StyledImg onClick={() => handleModal(critter)} key={critter.id} src={critter['icon_uri']}>
        </StyledImg>}))
  }, [selectedCritters]) 
    

    
    
  // let iconsToDisplay = selectedCritters.map(critter => {
  //   return <StyledImg onClick={() => handleModal(critter)} key={critter.id} src={critter['icon_uri']}>
  //   </StyledImg>})

  return (
    <CenteredDiv>
      <GridDiv>
      {iconsToDisplay[25] ? iconsToDisplay : 'Loading...'}
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