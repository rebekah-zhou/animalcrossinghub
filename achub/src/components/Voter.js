import React, {useState} from "react"
import styled from 'styled-components'

const StyledSmall = styled.small`
    font-family: 'Nunito';
    font-weight: bold;
`
const StyledDiv = styled.div`
    position: static;
    background-color: #fdf8e3;
    border-radius: 30% 30% 20% 20% / 100% 100% 100% 100%;
    width: 100px;
    margin: auto;
    height: 40px;
    padding-top: 8px;
    // border: solid;
`
function Voter({ id, name, prevLikes }) {
    const [likes, setLikes] = useState(prevLikes)

    function handleClick() {
        setLikes(likes => likes + 1)
        const updatedVillagerLikes = {
            name: name,
            likes: likes + 1 
        }
        fetch(`http://localhost:3000/villager-likes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedVillagerLikes)
        })
    }

    return (
      <StyledDiv>
          <StyledSmall>{likes === 0 ? `${likes} likes :(` : `${likes} likes`}</StyledSmall>
          <button onClick={handleClick}>Like</button>
      </StyledDiv>
    )
}

export default Voter