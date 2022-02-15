import React, { useEffect, useState } from 'react'
import Card from './Card'
import styled from 'styled-components'
import SideBar from './SideBar'

// TODO: refactor to be re-usable (currently copied code in fossils)
const StyledDiv = styled.div`
position: relative;
top: 0;
left: 0;
width: 20%;
// height: 100%;
// padding: 20px 0;
`

function Villagers({ villagers }) {
  const [highestVotesObj, setHighestVotesObj] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/villager-likes/')
    .then(r => r.json())
    .then(fetchedVotedVilagers => {
      const reducedHighestVotedVil = [...fetchedVotedVilagers].reduce((prev, current) => prev.likes > current.likes ? prev : current)
      setHighestVotesObj(reducedHighestVotedVil)
    })
  }, [])

  const highestVotedVil = [...villagers].filter(villager => {
    return villager.name['name-USen'] === highestVotesObj.name
  })


  return (
    <div>
      {/* <StyledDiv>{villagers.map(villager => <SideBar key={villager.name['name-USen']} name={villager.name['name-USen']}/>)}</StyledDiv> */}
      {/* TODO: fix card error (undefined) */}
      {/* {highestVotedVil[0].name['name-USen'] ? <Card comType='villager' dataObj={highestVotedVil[0]}/> : <h2>Loading ...</h2>} */}
    </div>
  )
}

export default Villagers