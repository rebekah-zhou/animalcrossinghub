import React, {useState, useEffect} from "react"

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
          <small>All Likes: {likes}</small>
          <button onClick={handleClick}>Like</button>
      </div>
    )
}

export default Voter