import React, { useEffect } from 'react'
import Card from './Card'
import Voter from './Voter'

function Home({ villagers }) {
    
    const randomNum = Math.floor(Math.random() * 391)
    const foundVillager = villagers[randomNum]


  return (
    <div>
        {foundVillager ? <Card dataObj={foundVillager} comType='home'/> : <h2>Loading ...</h2>}
        {foundVillager ? <Voter foundVillagerID={foundVillager.id} foundVillagerName={foundVillager.name['name-USen']}/> : null}
    </div>
  )
}

export default Home