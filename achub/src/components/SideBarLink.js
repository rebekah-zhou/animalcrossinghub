import React, { useState } from 'react'
import styled from 'styled-components'

const liStyle = {
  listStyle: 'none',
  cursor: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385231/hand-cursor.png"), pointer',
  padding: '7px',
}
    // border-style: solid;
    // border-radius: 30%;
    
const hoverStyle = {
  listStyle: 'none',
  cursor: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1385231/hand-cursor.png"), pointer',
  padding: '7px',
  textDecoration: '5px dotted underline',
  backgroundColor: '#fdf8e3',
  borderRadius: '10px'
}

function SideBarLink({ element, handleLiClickPass }) {
  const [styling, setStyling] = useState(liStyle)

  

  return (
    <li style={styling}
      onMouseEnter={() => setStyling(hoverStyle)}
      onMouseLeave={() => setStyling(liStyle)}
      onClick={e => handleLiClickPass(e.target.innerText)}
      >
        {element.name['name-USen']}
    </li>
  )
}

export default SideBarLink