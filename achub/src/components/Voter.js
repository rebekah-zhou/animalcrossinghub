import React, {useState} from "react"
import styled from 'styled-components'

const StyledSmall = styled.small`
    font-family: 'Nunito';
    font-weight: bold;
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
      <div>
          <StyledSmall>{likes} likes</StyledSmall>
          <button onClick={handleClick}>Like</button>
      </div>
    )
}

export default Voter