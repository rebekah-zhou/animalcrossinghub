import React, {useState} from "react"

function Voter({ villagerName }) {
    const [votes, SetVotes] = useState(0)


    function handleClick() {
        // TODO: continue voting function
    //   fetch('http://localhost:3000/villager-likes', {
    //   .then(r => r.json())
    //   .then(data => {
    //         data.forEach(fVillager => {
    //           if (fVillager.name === villagerName) {
    //             fVillager = {
    //                 name: fVillager.name,
    //                 likes: fVillager.likes + 1
    //             }
    //           }
    //         })
    //     })
        console.log('TODO')
    }
  
    return (
      <div>
          <small>All Votes: {votes}</small>
          <button onClick={handleClick}>Up Vote</button>
      </div>
    )
}

export default Voter