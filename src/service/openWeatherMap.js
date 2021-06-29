import { API_KEY } from './config';


const gettingWeather = async (city) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=minutely,hourly,alerts&dt=1607609886469&units=metric&appid=${API_KEY}`
  );
  return data.json();
};

const gettingPrevWeather = async (city) => {
  const timestamp = Math.round(Date.now() / 1000) - 86400;

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?${city}&dt=${timestamp}&appid=${API_KEY}&units=metric`
  );
  return data.json();
};

export default { gettingWeather, gettingPrevWeather };
