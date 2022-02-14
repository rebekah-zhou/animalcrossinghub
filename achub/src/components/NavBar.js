import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <NavLink style={{ marginRight: "10px" }} to="/">
            Home
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/villagers">
            Villagers
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/fossils">
            Fossils
        </NavLink>
        <NavLink style={{ marginRight: "10px" }} to="/critters">
            Critters
        </NavLink>
    </div>
  )
}

export default NavBar