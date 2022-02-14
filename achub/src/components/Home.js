import React, { useEffect } from 'react'


function Card({ randomVillager }) {
    return (
        <div>
            Random
        </div>
    )
}

function Home({ villagers }) {

    const randomNum = Math.floor(Math.random() * 391)
    const randomVillager = villagers.find(villager => villager.id === randomNum)


  return (
    <div>
        <Card randomVillager={randomVillager}/>
    </div>
  )
}

export default Home