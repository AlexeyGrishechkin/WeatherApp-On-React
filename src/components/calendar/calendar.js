import React from 'react'
import './calendar.css'
import WeatherItem from '../day/day'



const Calendar = (props) => {
    

        return(
            <div>
                 <div className='grid'>
                     <h3>Yesterday</h3>
                     <h3>Today</h3>
                     <h3>Tomorrow</h3>

                     <WeatherItem 
                         day={props.yesterday}
                     />
                     <WeatherItem 
                         day={props.today}
                     />
                     <WeatherItem 
                         day={props.tomorrow}
                     />

                 </div>
            </div>
        )
        
}

export default Calendar