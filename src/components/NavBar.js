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
    color: 'darkGoldenRod',
    textDecoration: 'dotted underline',
    cursor: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385231/hand-cursor.png"), pointer',
    letterSpacing: '2px',
    textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)',
}

const StyledDiv = styled.div`
    padding-bottom: 25px;
    padding-top: 15px;
`


function NavBar() {
    const [styling, setStyling] = useState({
        home: linkStyles,
        villagers: linkStyles,
        fossils: linkStyles,
        critters: linkStyles
    })

  return (
    <StyledDiv>
        <NavLink style={styling.home} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling({...styling, home: hoverStyle})}
            onMouseLeave={() => setStyling({...styling, home: linkStyles})}
            to="/"
            exact>
            Home
        </NavLink>
        <NavLink style={styling.villagers} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling({...styling, villagers: hoverStyle})}
            onMouseLeave={() => setStyling({...styling, villagers: linkStyles})}
            to="/villagers"
            exact>
            Villagers
        </NavLink>
        <NavLink style={styling.fossils} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling({...styling, fossils: hoverStyle})}
            onMouseLeave={() => setStyling({...styling, fossils: linkStyles})}
            to="/fossils"
            exact>
            Fossils
        </NavLink>
        <NavLink style={styling.critters} 
            activeStyle={activeLinkStyle} 
            onMouseEnter={() => setStyling({...styling, critters: hoverStyle})}
            onMouseLeave={() => setStyling({...styling, critters: linkStyles})}
            to="/critters"
            exact>
            Critters
        </NavLink>
    </StyledDiv>
  )
}

export default NavBar