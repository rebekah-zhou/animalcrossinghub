import React, { useState } from 'react'
import styled from 'styled-components'

const GridDiv = styled.div`
display: grid;
grid-template-columns: repeat(16, 60px);
grid-auto-rows: 60px;
border: 5px dotted grey;
background-color: lavender;
`

const CenteredDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const StyledImg = styled.img`
display: block;
margin: auto;
width: 50px;
border: 1px dotted black;
`

// const Background = styled(CenteredDiv)`
//   background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d19bcc31-33e4-448c-a5d4-fb8f62da91d1/dc0bkhb-5865b0f4-612e-447c-88e0-148729475f07.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxOWJjYzMxLTMzZTQtNDQ4Yy1hNWQ0LWZiOGY2MmRhOTFkMVwvZGMwYmtoYi01ODY1YjBmNC02MTJlLTQ0N2MtODhlMC0xNDg3Mjk0NzVmMDcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9svNSa7SddDf2bZzqgQjNmBhvWPLgbaL06rWUhAP55U');
//   background-size: contain;
//   overflow: auto;`

function Critters({ fish, bugs, seaCreatures }) {
  const [isClicked, setIsClicked] = useState(false)

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