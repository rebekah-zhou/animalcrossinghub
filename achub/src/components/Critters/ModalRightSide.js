import React from 'react'
import styled from 'styled-components'
import MonthAvailability from './MonthAvailability'

const NameH2 = styled.h2`
  text-decoration: underline dotted 1px;
  margin-bottom: -20px;
`

const PhraseDiv = styled.div`
  width: 600px;
  height: auto;
  padding-left: 30px;
  padding-right: 30px;
`

const PhraseP = styled.p`
  text-align: center;
  font-family: 'Rodin';
`

const ButtonDiv = styled.div`
  display:flex;
  justify-content: flex-end;
  width: 100%;
`

const Button = styled.button`
  width: auto;
`

function ModalRightSide( { critter, closeModal } ) {
    const time = critter.availability.time ? critter.availability.time : 'All hours'
    
    console.log(critter)
  return (
    <div className='vertical'>
        <NameH2>Availability</NameH2>
        <MonthAvailability critter={critter} />
        <p>Time: {time}</p>
        <NameH2>Description</NameH2>
        <PhraseDiv><PhraseP>{critter['museum-phrase']}</PhraseP></PhraseDiv>
        <ButtonDiv><Button onClick={closeModal}>Close</Button></ButtonDiv>
    </div>
  )
}

export default ModalRightSide