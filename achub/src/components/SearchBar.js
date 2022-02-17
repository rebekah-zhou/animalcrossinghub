import React from 'react'

function SearchBar({ setSearchVal, setSortVal, parent } ) {
  return (
    <div style={{'paddingTop': '15px'}}>
        <input onChange={e => setSearchVal(e.target.value)} type="text" name="search" placeholder="Search..."></input>
        <select onChange={e => setSortVal(e.target.value)} name="sort">
            <option value="part-of">Species</option>
            <option value={parent === "fossil" ? "price" : "personality"}>{parent === "fossil" ? "Price" : "Personality"}</option>
        </select>
    </div>
  )
}

export default SearchBar