import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 30% 30% 20% 20% / 100% 100% 100% 100%;
  height: 45px;
  background-color: #fdf8e3;
  // border: 5px dotted darkGoldenRod;
`
const StyledSelect = styled.select`
  margin-top: 5px;
  border-radius: 30% 30% 20% 20% / 100% 100% 100% 100%;
  height: 25px;
  font-size: 30x;
  background-color: rgba(253, 248, 227, 0.8);
  // border: 3px dotted darkGoldenRod;
`

function SearchBar({ setSearchVal, setSortVal, parent } ) {

  return (
    <div style={{'paddingTop': '15px'}}>
        <StyledInput onChange={e => setSearchVal(e.target.value)} type="text" name="search" placeholder="Search..."></StyledInput>
        <StyledSelect onChange={e => setSortVal(e.target.value)} name="sort">
            <option value="part-of">Species</option>
            <option value={parent === "fossil" ? "price" : "personality"}>{parent === "fossil" ? "Price" : "Personality"}</option>
        </StyledSelect>
    </div>
  )
}

export default SearchBar