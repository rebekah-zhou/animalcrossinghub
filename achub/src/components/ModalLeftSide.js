import React from 'react'
import styled from 'styled-components'

const ImgDiv = styled.div`
  /* background-color: orange; */
  margin-top: -30px;
  width: 600px;
`
const StyledImg = styled.img`
  display: block;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

function ModalLeftSide({ critter }) {

      //maybe fix capitalization? 
  const name = critter.name['name-USen']

  return (
    <div className='vertical'>
        <h1>{name}</h1>
        <ImgDiv>
        <StyledImg src={critter.image_uri}></StyledImg>
        </ImgDiv>
    </div>
  )
}

export default ModalLeftSide