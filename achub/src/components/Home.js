import React, { useEffect } from 'react'
import Card from './Card'

function Home({ villagers }) {
    
    const randomNum = Math.floor(Math.random() * 391)
    const foundVillager = villagers.find(villager => villager.id === randomNum)


  return (
    <div>
        {foundVillager ? <Card dataObj={foundVillager} comType='home'/> : <h2>Loading ...</h2>}
    </div>
  )
}

export default Home