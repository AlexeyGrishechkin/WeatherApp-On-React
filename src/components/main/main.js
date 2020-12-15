import React, { useState, useEffect } from 'react';
import './main.css';
import WeatherService from '../../service/openWeatherMap';
import Calendar from '../calendar/calendar';
import ChooseRegion from '../chooseRegion/chooseRegion';

let descriptionWeather = {
  temp: '',
  feels_like: '',
  description: '',
  icon: '',
  id: '',
  main: '',
  wind_speed: '',
};

const Main = () => {
  const [yesterday, setYesterday] = useState(descriptionWeather);
  const [today, setToday] = useState(descriptionWeather);
  const [tomorrow, setTomorrow] = useState(descriptionWeather);

  const [city, setCity] = useState("lat=53.69&lon=23.82");

  useEffect(() => {
    const setWeather = async () => {
      const weather = await WeatherService.gettingWeather(city);

      setToday({
        temp: weather.current.temp,
        feels_like: weather.current.feels_like,
        description: weather.current.weather[0].description,
        icon: weather.current.weather[0].icon,
        id: weather.current.weather[0].id,
        main: weather.current.weather[0].main,
        windSpeed: weather.current.wind_speed,
      });
      setTomorrow({
        temp: weather.daily[1].temp.day,
        feels_like: weather.daily[1].feels_like.day,
        description: weather.daily[1].weather[0].description,
        icon: weather.daily[1].weather[0].icon,
        id: weather.daily[1].weather[0].id,
        main: weather.daily[1].weather[0].main,
        windSpeed: weather.daily[1].wind_speed,
      });
      const prevWeather = await WeatherService.gettingPrevWeather(city);
      setYesterday({
        temp: prevWeather.current.temp,
        feels_like: prevWeather.current.feels_like,
        description: prevWeather.current.weather[0].description,
        icon: prevWeather.current.weather[0].icon,
        id: prevWeather.current.weather[0].id,
        main: prevWeather.current.weather[0].main,
        windSpeed: prevWeather.current.wind_speed,
      });
    };

    setWeather();
  }, [city]);

  return (
    <div>
      <ChooseRegion setCity={setCity} />
      <Calendar yesterday={yesterday} today={today} tomorrow={tomorrow} />
    </div>
  );
};

export default Main;
