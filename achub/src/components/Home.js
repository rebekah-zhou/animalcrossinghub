import React from 'react'
import Card from './Card'

function Home({ villagers }) {
    
    const randomNum = Math.floor(Math.random() * 391)
    const foundVillager = villagers.find(villager => villager.id === randomNum)
    
    const villagerNames = villagers.map(villager => {
      return {
        name: villager.name['name-USen'],
        likes: 0
      }
    })

    console.log(villagerNames)
    // fetch('http://localhost:3000/villager-likes/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(villagerNames)
    // })

    console.log(villagerNames)

  return (
    <div>
        {foundVillager ? <Card villager={foundVillager}/> : null}
    </div>
  )
}

export default Home