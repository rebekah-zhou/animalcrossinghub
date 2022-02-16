import React, {useState, useEffect} from "react"

function Voter({ id, name, prevLikes }) {
    const [likes, SetLikes] = useState(prevLikes)

    function handleClick() {
        SetLikes(likes => likes + 1)
    }

    useEffect(() => {
        const updatedVillagerLikes = {
            name: name,
            likes: likes
        }
        fetch(`http://localhost:3000/villager-likes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedVillagerLikes)
        })
    }, [likes])
  
    return (
      <div>
          <small>All Likes: {likes}</small>
          <button onClick={handleClick}>Like</button>
      </div>
    )
}

export default Voter