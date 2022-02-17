import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    fontFamily: 'SweetSaturday',
    fontSize: '40px',
    margin: "20px",
    color: 'darkGoldenRod',
    cursor: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385231/hand-cursor.png"), pointer'
}

const activeLinkStyle = {
    color: 'green'
}

function NavBar() {
  return (
    <div>
        <NavLink style={linkStyles} 
            activeStyle={activeLinkStyle} 
            to="/"
            exact>
            Home
        </NavLink>
        <NavLink style={linkStyles} 
            activeStyle={activeLinkStyle} 
            to="/villagers"
            exact>
            Villagers
        </NavLink>
        <NavLink style={linkStyles} 
            activeStyle={activeLinkStyle} 
            to="/fossils"
            exact>
            Fossils
        </NavLink>
        <NavLink style={linkStyles} 
            activeStyle={activeLinkStyle} 
            to="/critters"
            exact>
            Critters
        </NavLink>
    </div>
  )
}

export default NavBar