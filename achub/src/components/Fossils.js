import React, { useState, useEffect } from 'react'
import Card from './Card'
import SideBar from './SideBar';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`

function Fossils() {
  const [fossils, setFossils] = useState([])
  const [clickedFossil, setClickedFossil] = useState([])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/fossils')
    .then(r => r.json())
    .then(fetchedFossils => setFossils(fetchedFossils))
  }, [])

  const randomNum = Math.floor(Math.random() * 73)
  const foundFossil = fossils[randomNum]

  function handleLiClickPass(clickedFossilName) {
    if (foundFossil) {
      const foundClickedFossil = fossils.find(fossil => fossil.name['name-USen'] === clickedFossilName)
      setClickedFossil(foundClickedFossil)
    }
  }

  function renderFossilsPage () {
    return (
      <ContainerDiv>
          <SideBar
            handleLiClickPass={handleLiClickPass}
            fossilsORVillagers={fossils}
            parent='fossil'
            />
          <Card dataObj={clickedFossil.name ? clickedFossil : foundFossil} comType='fossil'/>
      </ContainerDiv>
    )
  }

  console.log(fossils)
  return <>{foundFossil ? renderFossilsPage() : <h2>Loading...</h2>}</>
}

export default Fossils