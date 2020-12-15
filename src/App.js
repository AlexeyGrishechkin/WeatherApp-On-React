import React, {useState, useEffect} from 'react'
import './App.css';
import Calendar from './components/calendar';
import Header from './components/header';
import WeatherService from './service/openWeatherMap'

function App(){

  const [yesterday, setYesterday] = useState({
    temp: '',
    feels_like: '',
    description: "",
    icon: "",
    id: '',
    main: "",
    wind_speed: '', 
  })
  const [ today, setToday] = useState({
    temp: '',
    feels_like: '',
    description: "",
    icon: "",
    id: '',
    main: "",
    wind_speed: '', 
  })
  const [tomorrow, setTomorrow] = useState({
    temp: '',
    feels_like: '',
    description: "",
    icon: "",
    id: '',
    main: "",
    wind_speed: '', 
  })

  
  
  useEffect(()=>{
  let dailyWeather = new Promise(()=>{
    WeatherService.gettingWeather()
    .then(data=>data.json())
    .then(data=>{
      setToday({
         temp: data.current.temp,
         feels_like: data.current.feels_like,
         description: data.current.weather[0].description,
         icon: data.current.weather[0].icon,
         id: data.current.weather[0].id,
         main: data.current.weather[0].main,
         wind_speed: data.current.wind_speed
    }) 
      setTomorrow({
        temp: data.daily[1].temp.day,
        feels_like: data.daily[1].feels_like.day,
        description: data.daily[1].weather[0].description,
        icon: data.daily[1].weather[0].icon,
        id: data.daily[1].weather[0].id,
        main: data.daily[1].weather[0].main,
        wind_speed: data.daily[1].wind_speed
    })
  }  
    )
  })

  let historicalWeather = new Promise(()=>{
    WeatherService.gettingPrevWeather()
    .then(data=>data.json())
    .then(data=>{
      setYesterday({
        temp: data.current.temp,
        feels_like: data.current.feels_like,
        description: data.current.weather[0].description,
        icon: data.current.weather[0].icon,
        id: data.current.weather[0].id,
        main: data.current.weather[0].main,
        wind_speed: data.current.wind_speed
      })
    })
  })

  Promise.all([dailyWeather, historicalWeather]).then(response=>{
    today = response[0][0]
    tomorrow = response[0][1]
    yesterday = response[1]
  })
    },[])

      

  
       return (
        <div className='wrap'>
            <Header/>
            <Calendar
              yesterday={yesterday}
              today={today}
              tomorrow={tomorrow}
              />
        </div>
        )
    
  }
  
  export default App;