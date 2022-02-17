import React from 'react'

function SearchBar({ setSearchVal, setSortVal } ) {
  return (
    <div>
        <input onChange={e => setSearchVal(e.target.value)} type="text" name="search" placeholder="Search..."></input>
        <select onChange={e => setSortVal(e.target.value)} name="sort">
            <option value="part-of">Species</option>
            <option value="price">Price</option>
        </select>
    </div>
  )
}

export default SearchBar