import React from 'react'

function VillagerCardBottom({ villager }) {
    return (
        <div>
          <h4 style={{margin: '0', paddingTop: '5px'}}>Species: {villager['species']} | Gender: {villager['gender']}</h4>
          <h4>Personality: {villager['personality']} | Subtype: {villager['subtype']}</h4>
          <h4>Birthday: {villager['birthday-string']}</h4>
          <h4>Hobby: {villager['hobby']}</h4>
          <h4>Catch Phrase: "{villager['catch-phrase']}"</h4>
        </div>
      )
}

export default VillagerCardBottom