import React, { useState } from 'react'
import Card from './Card'
import Voter from './Voter'

function Home({ randomVillager={
    "id": 276,
    "file-name": "ost07",
    "name": {
      "name-USen": "Phil"
    },
    "personality": "Smug",
    "birthday-string": "November 27th",
    "birthday": "27/11",
    "species": "Ostrich",
    "gender": "Male",
    "subtype": "A",
    "hobby": "Music",
    "catch-phrase": "hurk",
    "icon_uri": "https://acnhapi.com/v1/icons/villagers/276",
    "image_uri": "https://acnhapi.com/v1/images/villagers/276",
    "bubble-color": "#7352e8",
    "text-color": "#fffce9",
    "saying": "Best not to say too much.",
    "catch-translations": {
      "catch-USen": "hurk"
    }
  }, votedVillagers, StyledH2, onPatch }) {

    // Find votes related to villager on screen
     const randomVilVotes = votedVillagers.find(votedVillager => votedVillager.name === randomVillager.name['name-USen']).likes

  return (
    <div>
        <StyledH2>Visiting Villager</StyledH2>
        <Voter id={randomVillager.id} name={randomVillager.name['name-USen']} prevLikes={randomVilVotes} onPatch={onPatch}/>
        <Card dataObj={randomVillager} comType='home'/>
    </div>
  )
}

export default Home