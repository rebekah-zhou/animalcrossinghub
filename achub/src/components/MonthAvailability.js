import React from 'react'
import styled from 'styled-components'

const MonthGrid = styled.div`
    /* background-color: yellow; */
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
    /* border: dotted grey 1px; */
    border-radius: 5px; 
    gap: 2px;
`

const activeMonth = {
    'backgroundColor': 'rgb(133,204,161)',
}


function MonthAvailability({ critter }) {
    const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const monthsArr = critter.availability['month-array-northern'].map(num => {
        switch(num) {
          case 1:
            return 'Jan'
          case 2:
            return 'Feb'
          case 3: 
            return 'Mar'
          case 4: 
            return 'Apr'
          case 5: 
            return 'May'
          case 6:
            return 'Jun'
          case 7: 
            return 'Jul'
          case 8:
            return 'Aug'
          case 9:
            return 'Sep'
          case 10: 
            return 'Oct'
          case 11: 
            return 'Nov'
          case 12: 
            return 'Dec'
        }
      })

  return (
    <MonthGrid>
        {allMonths.map(month => {
            return <MonthItem key={month} style={monthsArr.includes(month) ? activeMonth: null}>
                        {month}
                    </MonthItem>
        })}
        
    </MonthGrid>
  )
}

export default MonthAvailability