import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './Card'
import SideBar from './SideBar'
import Voter from './Voter'

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`

function Villagers({ villagers, votedVillagers, StyledH2, onPatch }) {
  const [clickedVillager, setClickedVillager] = useState(villagers.find(villager => villager.name['name-USen'] === votedVillagers[0].name))
  const [isClicked, setIsClicked] = useState(false)
  // const [clickedVilVotes, setClickedVilVotes] = useState(votedVillagers.find(votedVillager => votedVillager.name === clickedVillager.name['name-USen']).likes)

  function handleLiClickPass(clickedVilName) {
    const foundVil = villagers.find(villager => villager.name['name-USen'] === clickedVilName)
    setClickedVillager(foundVil)
    setIsClicked(true)
    // setClickedVilVotes(votedVillagers.find(votedVillager => votedVillager.name === clickedVilName).likes)
  }

  // Find votes related to villager on screen
  const clickedVilVotes = votedVillagers.find(votedVillager => votedVillager.name === clickedVillager.name['name-USen']).likes

  return (
    <>
      {isClicked ? null: <StyledH2>Most Popular Villager</StyledH2>}
      {clickedVillager ? 
        <Voter id={clickedVillager.id} 
          name={clickedVillager.name['name-USen']} 
          prevLikes={clickedVilVotes}
          onPatch={onPatch}/>
           : null}
      <ContainerDiv>
        <SideBar
          handleLiClickPass={handleLiClickPass}
          fossilsORVillagers={villagers}
          parent='villager'
        />
        {clickedVillager ? <Card comType='villager' dataObj={clickedVillager}/> : null}
      </ContainerDiv>
    </>
  )
}

export default Villagers