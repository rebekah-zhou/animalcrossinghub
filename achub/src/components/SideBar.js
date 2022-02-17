import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyledDiv = styled.div`
position: fixed;
left: 0;
width: 25%;
height: 80%;
overflow-y: scroll;
scrollbar-color: green;
`
const StyledLi = styled.li`
    // border-style: solid;
    // border-radius: 30%;
    list-style: none;
    cursor: pointer;
    padding: 7px;
`
function SideBar({ fossilsORVillagers, handleLiClickPass, parent }) {
  const [searchVal, setSearchVal] = useState('')
  const [sortVal, setSortVal] = useState('part-of')

  const justSearched = [...fossilsORVillagers].filter(element => element.name['name-USen'].toLowerCase().startsWith(searchVal.toLowerCase()))
  const searchdAndSorted = sortVal === 'price' ? [...justSearched].sort((a, b) => a[sortVal] - b[sortVal]) : [...justSearched].sort((a, b) => a[sortVal] < b[sortVal] ? -1 : 1)

  // if sortVal === price/default, then sortVal has changed at least once, therefore showcase filtered and sorted array
  const fossilsORVillsToDisplayArr = sortVal !== 'species' ? searchdAndSorted : justSearched

  // iterating through display array to return lis
  const renderFossils = fossilsORVillsToDisplayArr.map(element => {
    return <StyledLi
      onClick={e => handleLiClickPass(e.target.innerText)}
      key={element.name['name-USen']}>{element.name['name-USen']}
    </StyledLi>
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