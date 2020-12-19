import React from "react";
import './fullWeatherData.css'

const FullData = (props) => {
    const {temp, feels_like, description, icon, main, windSpeed, windDeg, sunrise, sunset, pressure, humidity, dewPoint, clouds, visibility} = props.fullData
    const img_URL = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const sunTime = timestamp => {
        let date = new Date(timestamp * 1000)
        let hours = date.getHours()
        let minutes = date.getMinutes()
        if (minutes < 10){
          minutes = '0' + minutes
        }
        return `${hours}:${minutes}`
    }

    if (visibility == null){
        return (
            <div className='flexFull'>
                <div className='fullData'>
                    <h2>{Math.round(temp)}°C</h2>
                    <img src={img_URL} />
                    <p>Temperature: {Math.round(temp)}°C, {main}</p>    
                    <p>Feels like: {Math.round(feels_like)}°C, {description}</p>
                    <p>Wind speed: {windSpeed}</p>
                </div>
                <div className='fullData'>
                    <p>Sunrise: {sunTime(sunrise)}</p>
                    <p>Sunset: {sunTime(sunset)}</p>
                    <p>Pressure: {pressure}</p>
                    <p>Humidity: {humidity}</p>
                    <p>Wind deg: {windDeg}</p>
                    <p>Dew point: {dewPoint}</p>
                    <p>Clouds: {clouds}</p>
                </div>
            </div>
            )
    }

    return (
        <div className='flexFull'>
            <div className='fullData'>
                <h2>{Math.round(temp)}°C</h2>
                <img src={img_URL} />
                <p>Temperature: {Math.round(temp)}°C, {main}</p>    
                <p>Feels like: {Math.round(feels_like)}°C, {description}</p>
                <p>Wind speed: {windSpeed}</p>
            </div>
            <div className='fullData'>
                <p>Sunrise: {sunTime(sunrise)}</p>
                <p>Sunset: {sunTime(sunset)}</p>
                <p>Pressure: {pressure}</p>
                <p>Humidity: {humidity}</p>
                <p>Wind deg: {windDeg}</p>
                <p>Dew point: {dewPoint}</p>
                <p>Clouds: {clouds}</p>
                <p>visibility: {visibility} m</p>
            </div>
        </div>
        )
}

export default FullData