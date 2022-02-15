import React from 'react'
import styled from 'styled-components'

function Critters({ fish, bugs, seaCreatures }) {

  const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 60px);
    grid-auto-rows: 60px;
    border-color: black;
  `
  const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

  `


  const StyledImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50px;
  `

  return (
    <CenteredDiv>
      <GridDiv>
        {bugs.map(bug => {
          return <StyledImg key={bug.id} src={bug['icon_uri']}>
          </StyledImg>
        })}
      </GridDiv>
    </CenteredDiv>
  )
}

export default Critters