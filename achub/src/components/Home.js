import React, { useEffect } from 'react'
import Card from './Card'
import Voter from './Voter'

function Home({ villagers, votedVillagers, StyledH2 }) {
    
    const randomNum = Math.floor(Math.random() * 391)
    const foundVillager = villagers[randomNum]

    // Find votes related to villager on screen
    const randomVilVotes = [...votedVillagers].find(votedVillager => votedVillager.name === foundVillager.name['name-USen']).likes

  return (
    <div>
        <StyledH2>Featured Villager</StyledH2>
        <Card dataObj={foundVillager} comType='home'/>
        <Voter id={foundVillager.id} name={foundVillager.name['name-USen']} prevLikes={randomVilVotes}/>
    </div>
  )
}

export default Home