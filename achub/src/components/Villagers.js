import React, { useEffect, useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import SideBar from './SideBar'
import Voter from './Voter'

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`

function Villagers({ villagers, votedVillagers }) {
  const [clickedVillager, setClickedVillager] = useState(villagers.find(villager => villager.name['name-USen'] === votedVillagers[0].name))

  function handleLiClickPass(clickedVilName) {
    const foundVil = villagers.find(villager => villager.name['name-USen'] === clickedVilName)
    setClickedVillager(foundVil)
  }

  // Find votes related to villager on screen
  const clickedVilVotes = votedVillagers.find(votedVillager => votedVillager.name === clickedVillager.name['name-USen']).likes

  return (
    <>
      <ContainerDiv>
        <SideBar
          handleLiClickPass={handleLiClickPass}
          fossilsORVillagers={villagers}
          parent='villager'
        />
        {clickedVillager ? <Card comType='villager' dataObj={clickedVillager}/> : <h2>Loading ...</h2>}
      </ContainerDiv>
      {clickedVillager ? <Voter id={clickedVillager.id} name={clickedVillager.name['name-USen']} prevLikes={clickedVilVotes}/> : null}
    </>
  )
}

export default Villagers