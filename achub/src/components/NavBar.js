import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const linkStyles = {
    fontFamily: 'SweetSaturday',
    fontSize: '40px',
    margin: "20px",
    color: 'darkGoldenRod'
}

const activeLinkStyle = {
    color: 'green'
}

const StyledDiv = styled.div`
    padding-bottom: 25px;
    padding-top: 15px;
`

function NavBar() {
  return (
    <StyledDiv>
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
    </StyledDiv>
  )
}

export default NavBar