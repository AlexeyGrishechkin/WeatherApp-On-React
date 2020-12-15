import React from 'react'
import WeatherItem from '../Day/day'
import './calendar.css'


function Calendar(props){
        return(
            <div>
                 <h2>Grodno</h2>
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