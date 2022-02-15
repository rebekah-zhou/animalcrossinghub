import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Card from './Card'

function Fossils() {
  const [fossils, setFossils] = useState([])

  useEffect(() => {
    fetch('https://acnhapi.com/v1a/fossils')
    .then(r => r.json())
    .then(fetchedFossils => setFossils(fetchedFossils))
  }, [])

  // TODO: fix styling of list of fossils
  // TODO: add onClick render of that fossil's information
  const randomNum = Math.floor(Math.random() * 73)
  const foundFossil = fossils[randomNum]
  console.log(foundFossil)

  const StyledLi = styled.li`
      border-style: solid;
      border-radius: 30%;
    `

  return (
    <div>
      {/* {fossils.map(fossil => <StyledLi>{fossil.name['name-USen']}</StyledLi>)} */}
      {foundFossil ? <Card dataObj={foundFossil} comType='fossil'/> : <h2>Loading ...</h2>}
    </div>
  )
}

export default Fossils