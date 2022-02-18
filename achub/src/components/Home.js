import React, { useEffect } from 'react'
import Card from './Card'
import Voter from './Voter'

function Home({ villagers, votedVillagers, StyledH2, onPatch }) {
    
    const randomNum = Math.floor(Math.random() * 391)
    const foundVillager = villagers[randomNum]

    // Find votes related to villager on screen
    const randomVilVotes = [...votedVillagers].find(votedVillager => votedVillager.name === foundVillager.name['name-USen']).likes

  return (
    <div>
        <StyledH2>Visiting Villager</StyledH2>
        <Voter id={foundVillager.id} name={foundVillager.name['name-USen']} prevLikes={randomVilVotes} onPatch={onPatch}/>
        <Card dataObj={foundVillager} comType='home'/>
    </div>
  )
}

export default Home