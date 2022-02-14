import React from 'react'
import Card from './Card'

function Home({ villagers }) {
    
    const randomNum = Math.floor(Math.random() * 391)
    const foundVillager = villagers.find(villager => villager.id === randomNum)
    
    

  return (
    <div>
        {foundVillager ? <Card villager={foundVillager}/> : null}
    </div>
  )
}

export default Home