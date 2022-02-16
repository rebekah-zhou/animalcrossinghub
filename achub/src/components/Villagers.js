import React, { useEffect, useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import SideBar from './SideBar'

// TODO: refactor to be re-usable (currently copied code in fossils)
const StyledDiv = styled.div`
position: fixed;
left: 0;
width: 25%;
height: 80%;
overflow-y: scroll;
scrollbar-color: green;
`

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`

function Villagers({ villagers }) {
  const [highestVotesObj, setHighestVotesObj] = useState([])
  const [clickedVillager, setClickedVillager] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/villager-likes/')
    .then(r => r.json())
    .then(fetchedVotedVilagers => {
      const sortedVillagers = [...fetchedVotedVilagers].sort((a, b) => b.likes - a.likes)
      setHighestVotesObj(sortedVillagers[0])
    })
  }, [])
  // need to do -1 because data is offset
  const highestVotedVil = villagers[highestVotesObj.id - 1]

  function handleLiClickPass(clickedVilName) {
    const foundVil = villagers.find(villager => villager.name['name-USen'] === clickedVilName)
    setClickedVillager(foundVil)
  }

  return (
    <ContainerDiv>
      <StyledDiv>{villagers.map(villager => <SideBar key={villager.name['name-USen']} name={villager.name['name-USen']} handleLiClickPass={handleLiClickPass}/>)}</StyledDiv>
      {highestVotedVil ? <Card comType='villager' dataObj={clickedVillager.name ? clickedVillager : highestVotedVil}/> : <h2>Loading ...</h2>}
    </ContainerDiv>
  )
}

export default Villagers