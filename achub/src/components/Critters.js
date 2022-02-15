import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CritterTable from './CritterTable'


const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
` 

function Critters() {
    
  const [bugs, setBugs] = useState([])
  const [sea, setSea] = useState([])
  const [fish, setFish] = useState([])
  const [clickValue, setClickValue] = useState('bugs')

  let selectedCritters = bugs

  switch (clickValue) {
    case 'sea':
      selectedCritters = sea
      break;
    case 'fish':
      selectedCritters = fish
      break;
    case 'bugs':
      selectedCritters = bugs
  }

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/bugs')
    .then(r => r.json())
    .then(data => {
      setBugs(() => data)
    })
  }, [])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/sea')
    .then(r => r.json())
    .then(data => setSea(() => data))
  }, [])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/fish')
    .then(r => r.json())
    .then(data => setFish(() => data))
  }, [])
    
  return (
    <div>
      <button type='button' name='bugs' onClick={(e) => setClickValue(e.target.name)}>Bugs</button>
      <button type='button' name='fish' onClick={(e) => setClickValue(e.target.name)}>Fish</button>
      <button type='button' name='sea' onClick={(e) => setClickValue(e.target.name)}>Sea</button>
      <CritterTable selectedCritters={selectedCritters} />
    </div>
  )
}

export default Critters