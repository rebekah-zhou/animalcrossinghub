import React from 'react'
import styled from 'styled-components';

const StyledLi = styled.li`
    // border-style: solid;
    // border-radius: 30%;
`

  // TODO: fix styling of list of fossils
  // TODO: add onClick render of that fossil's information

function SideBar({ name }) {
  return (
    <StyledLi>{name}</StyledLi>
  )
}

export default SideBar