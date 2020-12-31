import {MILLISECONDS_PER_SECOND} from './constants'

export const getImgUrl = (icon: string) => `https://openweathermap.org/img/wn/${icon || '01d'}@2x.png`;

export const sunTime = (timestamp: number) =>
  new Date(timestamp * MILLISECONDS_PER_SECOND).toLocaleTimeString();

export const mathTemp = (temp: number) => `${Math.round(temp)}°C`;