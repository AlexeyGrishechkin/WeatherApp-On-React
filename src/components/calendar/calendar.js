import React from 'react'
import './calendar.css'
import WeatherItem from '../day/day'



const Calendar = (props) => {
        return(
                 <div className='grid'>
                     <h3>Yesterday</h3>
                     <h3>Today</h3>
                     <h3>Tomorrow</h3>

                     <WeatherItem
                        {...props}
                     />

                 </div>
        )
        
}

export default Calendar