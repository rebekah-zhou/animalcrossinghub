import React, { useState } from 'react'
import styled from 'styled-components';

const StyledLi = styled.li`
    // border-style: solid;
    // border-radius: 30%;
    list-style: none;
    cursor: pointer;
    padding: 7px;
`

  // TODO: fix styling of list of fossils
  // TODO: add onClick render of that fossil's information

function SideBar({ name, handleLiClickPass }) {



  return (
    <StyledLi onClick={(e) => handleLiClickPass(e.target.innerText)}>{name}</StyledLi>
  )
}

export default SideBar