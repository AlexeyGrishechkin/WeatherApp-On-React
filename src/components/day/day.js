import React from 'react'
import './day.css'


function WeatherItem(props){
        const {temp, feels_like, description, icon, main, wind_speed} = props.day
        const img_URL = `https://openweathermap.org/img/wn/${icon}@2x.png`
     
        return(
                    <div className='days'>
                        <h2>{Math.round(temp)}°C</h2>
                        <img src={img_URL} />
                        <p>{main}</p>    
                        <p>Feels like: {Math.round(feels_like)}°C, {description}</p>
                        <p>Wind speed: {wind_speed}</p>
                    </div>
              )
    
    }


export default WeatherItem

