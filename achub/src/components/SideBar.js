import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyledLi = styled.li`
    // border-style: solid;
    // border-radius: 30%;
    list-style: none;
    cursor: pointer;
    padding: 7px;
`
function SideBar({ fossils, handleLiClickPass }) {
  const [searchVal, setSearchVal] = useState('')
  const [sortVal, setSortVal] = useState('part-of')

  const searchedFossils = [...fossils].filter(fossil => fossil.name['name-USen'].startsWith(searchVal))
  const searchedAndSortedFossils = sortVal === 'price' ? [...searchedFossils].sort((a, b) => a[sortVal] - b[sortVal]) : [...searchedFossils].sort((a, b) => a[sortVal] < b[sortVal] ? -1 : 1)

  // if sortVal === price/default, then sortVal has changed at least once, therefore showcase filtered and sorted array
  const fossilsToDisplayArr = sortVal === 'price' ? searchedAndSortedFossils : searchedFossils

  // iterating through display array to return lis
  const renderFossils = fossilsToDisplayArr.map(fossil => {
    return <StyledLi
      onClick={e => handleLiClickPass(e.target.innerText)}
      key={fossil.name['name-USen']}>{fossil.name['name-USen']}
    </StyledLi>
  })
  return (
    <div>
      <SearchBar
        setSearchVal={setSearchVal}
        setSortVal={setSortVal}
      />
      {renderFossils}
    </div>
  )
}

export default SideBar