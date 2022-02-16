import React, { useEffect, useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import SideBar from './SideBar'
import Voter from './Voter'

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

function Villagers({ villagers, votedVillagers }) {
  const [clickedVillager, setClickedVillager] = useState([])
  
  const sortedVillagers = [...votedVillagers].sort((a, b) => b.likes - a.likes)
  const highestVotedVil = villagers[sortedVillagers[0].id - 1] // need to do -1 because data is offset

  function handleLiClickPass(clickedVilName) {
    const foundVil = villagers.find(villager => villager.name['name-USen'] === clickedVilName)
    setClickedVillager(foundVil)
  }

  // Find votes related to villager on screen
  const highestVilVotes = [...votedVillagers].find(votedVillager => votedVillager.name === highestVotedVil.name['name-USen']).likes
  const clickedVilVotes = clickedVillager.name ? [...votedVillagers].find(votedVillager => votedVillager.name === clickedVillager.name['name-USen']).likes : null

  return (
    <ContainerDiv>
      <StyledDiv>{villagers.map(villager => <SideBar key={villager.name['name-USen']} name={villager.name['name-USen']} handleLiClickPass={handleLiClickPass}/>)}</StyledDiv>
      {highestVotedVil ? <Card comType='villager' dataObj={clickedVillager.name ? clickedVillager : highestVotedVil}/> : <h2>Loading ...</h2>}
      {highestVotedVil ? <Voter id={clickedVillager.name ? clickedVillager.id : highestVotedVil.id} name={clickedVillager.name ? clickedVillager.name : highestVotedVil.name['name-USen']} prevLikes={clickedVilVotes ? clickedVilVotes : highestVilVotes}/> : null}
    </ContainerDiv>
  )
}

export default Villagers