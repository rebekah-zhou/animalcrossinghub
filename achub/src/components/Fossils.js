import React, { useState, useEffect } from 'react'
import Card from './Card'
import SideBar from './SideBar';
import styled from 'styled-components';

// TODO: refactor to be re-usable (currently copied code in villagers)
const StyledDiv = styled.div`
position: fixed;
left: 0;
width: 25%;
height: 80%;
overflow: scroll;
`

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`

function Fossils() {
  const [fossils, setFossils] = useState([])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/fossils')
    .then(r => r.json())
    .then(fetchedFossils => setFossils(fetchedFossils))
  }, [])

  const randomNum = Math.floor(Math.random() * 73)
  const foundFossil = fossils[randomNum]

  return (
    <ContainerDiv>
      <StyledDiv>{fossils.map(fossil => <SideBar key={fossil.name['name-USen']} name={fossil.name['name-USen']}/>)}</StyledDiv>
      {foundFossil ? <Card dataObj={foundFossil} comType='fossil'/> : <h2>Loading ...</h2>}
    </ContainerDiv>
  )
}

export default Fossils