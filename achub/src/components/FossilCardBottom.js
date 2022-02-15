import React from 'react'

function FossilCardBottom({ museumPhrase, price, partOf }) {
  return (
    <div>
        <p>Museum Phrase {museumPhrase}</p>
        <span>{price} Bells</span>
        <span>Part Of: {partOf}</span>
    </div>
  )
}

export default FossilCardBottom