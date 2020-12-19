import React from 'react'
import './day.css'
import { Link } from 'react-router-dom';


function WeatherItem({days}){

        const Day = days.map((item,index)=>{
            const {temp, feels_like, description, icon, main, windSpeed} = item
            const img_URL = `https://openweathermap.org/img/wn/${icon}@2x.png`
            return(
                <React.Fragment key={index}>
                    <Link to={"/fulldata/"+index} className='days'>
                    <h2>{Math.round(temp)}°C</h2>
                    <img src={img_URL} />
                    <p>Temperature: {Math.round(temp)}°C, {main}</p>    
                    <p>Feels like: {Math.round(feels_like)}°C, {description}</p>
                    <p>Wind speed: {windSpeed}</p>
                 </Link>
                </React.Fragment>
            )
        })

        return Day   
    }


export default WeatherItem

