import React, { useState, useEffect } from 'react';
import WeatherService from '../../service/openWeatherMap';
import Calendar from '../calendar/';
import ChooseRegion from '../chooseRegion/ChooseRegion';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FullData from '../fullWeatherData';
import { IDay } from '../../Interfaces/';

let descriptionWeather: IDay = {
  temp: 0,
  feels_like: 0,
  description: '',
  icon: '',
  id: 0,
  main: '',
  windSpeed: 0,
  windDeg: 0,
  sunrise: 0,
  sunset: 0,
  pressure: 0,
  humidity: 0,
  dewPoint: 0,
  clouds: 0,
  visibility: 0,
};

const Main = () => {
  const [yesterday, setYesterday] = useState(descriptionWeather);
  const [today, setToday] = useState(descriptionWeather);
  const [tomorrow, setTomorrow] = useState(descriptionWeather);

  const [city, setCity] = useState('lat=53.69&lon=23.82');

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
        windDeg: weather.current.wind_deg,
        sunrise: weather.current.sunrise,
        sunset: weather.current.sunset,
        pressure: weather.current.pressure,
        humidity: weather.current.humidity,
        dewPoint: weather.current.dew_point,
        clouds: weather.current.clouds,
        visibility: weather.current.visibility,
      });
      setTomorrow({
        temp: weather.daily[1].temp.day,
        feels_like: weather.daily[1].feels_like.day,
        description: weather.daily[1].weather[0].description,
        icon: weather.daily[1].weather[0].icon,
        id: weather.daily[1].weather[0].id,
        main: weather.daily[1].weather[0].main,
        windSpeed: weather.daily[1].wind_speed,
        windDeg: weather.daily[1].wind_deg,
        sunrise: weather.daily[1].sunrise,
        sunset: weather.daily[1].sunset,
        pressure: weather.daily[1].pressure,
        humidity: weather.daily[1].humidity,
        dewPoint: weather.daily[1].dew_point,
        clouds: weather.daily[1].clouds,
        visibility: weather.daily[1].visibility,
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
        windDeg: prevWeather.current.wind_deg,
        sunrise: prevWeather.current.sunrise,
        sunset: prevWeather.current.sunset,
        pressure: prevWeather.current.pressure,
        humidity: prevWeather.current.humidity,
        dewPoint: prevWeather.current.dew_point,
        clouds: prevWeather.current.clouds,
        visibility: prevWeather.current.visibility,
      });
    };

    setWeather();
  }, [city]);

  const days = [yesterday, today, tomorrow];

  const mapWeather = days.map((item, index) => {
    return (
      <Route exact key={index} path={'/fullData/' + index}>
        <FullData fullData={item} />
      </Route>
    );
  });

  return (
    <>
      <ChooseRegion setCity={setCity} />
      <Router>
        <Route exact path='/'>
          <Calendar days={days} />
        </Route>
        {mapWeather}
      </Router>
    </>
  );
};

export default Main;
