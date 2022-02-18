import React, { useState } from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SideBarLink from './SideBarLink';

const StyledDiv = styled.div`
position: fixed;
left: 50px;
width: 15%;
height: 80%;
background-color: #feed9b;
border-radius: 10%;
padding: 10px;
overflow-y: scroll;
`


function SideBar({ fossilsORVillagers, handleLiClickPass, parent }) {
  const [searchVal, setSearchVal] = useState('')
  const [sortVal, setSortVal] = useState('part-of')
  

  const justSearched = [...fossilsORVillagers].filter(element => element.name['name-USen'].toLowerCase().startsWith(searchVal.toLowerCase()))
  const searchdAndSorted = sortVal === 'price' ? [...justSearched].sort((a, b) => a[sortVal] - b[sortVal]) : [...justSearched].sort((a, b) => a[sortVal] < b[sortVal] ? -1 : 1)

  // if sortVal === price/default, then sortVal has changed at least once, therefore showcase filtered and sorted array
  const fossilsORVillsToDisplayArr = sortVal !== 'species' ? searchdAndSorted : justSearched

  let count = 1;

  // iterating through display array to return lis
  const renderFossils = fossilsORVillsToDisplayArr.map(element => {
    return <SideBarLink key={element.name['name-USen']} element={element} handleLiClickPass={handleLiClickPass}/>
  })

  return (
    <StyledDiv>
      <SearchBar
        setSearchVal={setSearchVal}
        setSortVal={setSortVal}
        parent={parent}
      />
      {renderFossils}
    </StyledDiv>
  )
}

export default SideBar

// Attempt to animate letters on hover
// const letters = element.name['name-USen'].split('')

  // let animationDelayNum = 0

  // const lettersArr = letters.map(letter => {
  //   ++count
  //   animationDelayNum = letters.indexOf(letter)/letters.length+'s';
  //   console.log(animationDelayNum)
  //   return <span key={count} 
  //     style={{'animationDelay': `${animationDelayNum}`}} 
  //     className='letter'>{letter}
  //     </span>
  // })
  