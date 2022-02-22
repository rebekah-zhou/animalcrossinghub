import React from 'react'
import styled from 'styled-components'

const MonthGrid = styled.div`
    margin-top: 25px;
    width: 600px;
    height: 70px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
` 

const MonthItem = styled.div`
    width: 97.4px;
    height: 26px;
    text-align: center;
    padding-top: 7px;
    background-color: rgba(210, 215, 211, 0.5) ;
    border-radius: 5px; 
    gap: 2px;
`

const activeMonth = {
    'backgroundColor': 'rgb(133,204,161)',
}

const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function MonthAvailability({ critter }) {
  const monthsArr = critter.availability['month-array-northern'].map(num => {
    return allMonths[num - 1]
  })

  return (
    <MonthGrid>
      {allMonths.map(month => {
        return (
          <MonthItem key={month} style={monthsArr.includes(month) ? activeMonth: null}>
            {month}
          </MonthItem>)
        })}
    </MonthGrid>
  )
}

export default MonthAvailability