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
  const [clickedVillager, setClickedVillager] = useState(villagers.find(villager => villager.name['name-USen'] === votedVillagers[0].name))

  console.log(votedVillagers)


  function handleLiClickPass(clickedVilName) {
    const foundVil = villagers.find(villager => villager.name['name-USen'] === clickedVilName)
    setClickedVillager(foundVil)
  }

  // Find votes related to villager on screen
  // const highestVilVotes = [...votedVillagers].find(votedVillager => votedVillager.name === highestVotedVil.name['name-USen']).likes
  const clickedVilVotes = votedVillagers.find(votedVillager => votedVillager.name === clickedVillager.name['name-USen']).likes

  return (
    <ContainerDiv>
      <StyledDiv>{villagers.map(villager => <SideBar key={villager.name['name-USen']} name={villager.name['name-USen']} handleLiClickPass={handleLiClickPass}/>)}</StyledDiv>
      {clickedVillager ? <Card comType='villager' dataObj={clickedVillager}/> : <h2>Loading ...</h2>}
      {clickedVillager ? <Voter id={clickedVillager.id} name={clickedVillager.name['name-USen']} prevLikes={clickedVilVotes}/> : null}
    </ContainerDiv>
  )
}

export default Villagers