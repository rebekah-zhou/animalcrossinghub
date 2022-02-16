import React, { useEffect } from 'react'
import Card from './Card'
import Voter from './Voter'

function Home({ villagers, votedVillagers }) {
    
    const randomNum = Math.floor(Math.random() * 391)
    const foundVillager = villagers[randomNum]

    // Find votes related to villager on screen
    const randomVilVotes = [...votedVillagers].find(votedVillager => votedVillager.name === foundVillager.name['name-USen']).likes

  return (
    <div>
        <Card dataObj={foundVillager} comType='home'/>
        <Voter id={foundVillager.id} name={foundVillager.name['name-USen']} prevLikes={randomVilVotes}/>
    </div>
  )
}

export default Home