import { API_KEY, SECOND_IN_A_DAY, MILLISECONDS_PER_SECOND } from '../utils/constants';

const gettingWeather = async (city: string) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=minutely,hourly,alerts&dt=1607609886469&units=metric&appid=${API_KEY}`
  );
  return data.json();
};

const gettingPrevWeather = async (city: string) => {
  const timestamp = Math.round(Date.now() / MILLISECONDS_PER_SECOND) - SECOND_IN_A_DAY;

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?${city}&dt=${timestamp}&appid=${API_KEY}&units=metric`
  );
  return data.json();
};

export default { gettingWeather, gettingPrevWeather };
