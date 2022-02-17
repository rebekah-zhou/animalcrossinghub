import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const linkStyles = {
    fontFamily: 'SweetSaturday',
    fontSize: '50px',
    margin: "20px",
    color: 'darkGoldenRod',
    cursor: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385231/hand-cursor.png"), pointer',
    letterSpacing: '2px',
    // textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
    textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)',
    textDecoration: 'none',
}

const activeLinkStyle = {
    color: 'green'
}


const hoverStyle = {
    fontFamily: 'SweetSaturday',
    fontSize: '50px',
    margin: "20px",
    color: 'pink',
    cursor: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385231/hand-cursor.png"), pointer',
    letterSpacing: '2px',
    textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)',
    textDecoration: 'none',
}

const StyledDiv = styled.div`
    padding-bottom: 25px;
    padding-top: 15px;
`


function NavBar() {
    const [styling, setStyling] = useState(linkStyles)

  return (

    <StyledDiv>
        <NavLink style={styling} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling(hoverStyle)}
            onMouseLeave={() => setStyling(linkStyles)}
            to="/"
            exact>
            Home
        </NavLink>
        <NavLink style={styling} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling(hoverStyle)}
            onMouseLeave={() => setStyling(linkStyles)}
            to="/villagers"
            exact>
            Villagers
        </NavLink>
        <NavLink style={styling} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling(hoverStyle)}
            onMouseLeave={() => setStyling(linkStyles)}
            to="/fossils"
            exact>
            Fossils
        </NavLink>
        <NavLink style={styling} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling(hoverStyle)}
            onMouseLeave={() => setStyling(linkStyles)}
            to="/critters"
            exact>
            Critters
        </NavLink>
    </StyledDiv>
  )
}

export default NavBar