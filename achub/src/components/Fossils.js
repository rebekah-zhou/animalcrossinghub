import React, { useState, useEffect } from 'react'
import Card from './Card'
// import SideBar from './SideBar';
import styled from 'styled-components';

const StyledDiv = styled.div`
position: relative;
top: 0;
left: 0;
width: 20%;
// height: 100%;
// padding: 20px 0;
`

function Fossils() {
  const [fossils, setFossils] = useState([])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/fossils')
    .then(r => r.json())
    .then(fetchedFossils => setFossils(fetchedFossils))
  }, [])

  const randomNum = Math.floor(Math.random() * 73)
  const foundFossil = fossils[randomNum]

  return (
    <div>
      {/* <StyledDiv>{fossils.map(fossil => <SideBar key={fossil.name['name-USen']} name={fossil.name['name-USen']}/>)}</StyledDiv> */}
      {foundFossil ? <Card dataObj={foundFossil} comType='fossil'/> : <h2>Loading ...</h2>}
    </div>
  )
}

export default Fossils