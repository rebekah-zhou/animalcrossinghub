import React from 'react'
import styled from 'styled-components';

import FossilCardBottom from './FossilCardBottom'
import VillagerCardBottom from './VillagerCardBottom';

const HomeBottomCard = styled.div`
  position: absolute;
  bottom: -60px;
  width: 80%;
  height: 20%;
  background-color: #fdf8e3;
  margin-left: 60px;
  margin-bottom: 10px;
  padding-bottom: 0px
  center;
  border-radius: 5% 5% 20% 20% / 100% 100% 100% 100%;
`
const VilAndFossilBottomCard = styled.div`
  position: absolute;
  bottom: -240px;
  width: 80%;
  height: 70%;
  background-color: #fdf8e3;
  margin-left: 60px;
  margin-bottom: 10px;
  center;
  border-radius: 5% 5% 20% 20% / 100% 100% 100% 100%;
`

function CardBottom({comType, dataObj}) {
    const renderCardInfo = () => {
        switch(comType) {
            case 'home':
            return <h3>Catch Phrase: *{dataObj['catch-phrase']}*</h3>
            case 'fossil':
            return <FossilCardBottom fossil={dataObj}/>
            case 'villager':
            return <VillagerCardBottom villager={dataObj}/>
        }
    }

  return (
    <>
        {comType === 'home' ? <HomeBottomCard>{renderCardInfo()}</HomeBottomCard> : <VilAndFossilBottomCard>{renderCardInfo()}</VilAndFossilBottomCard>}
    </>
  )
}

export default CardBottom