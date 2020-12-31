import React, { FC } from 'react';
import { WrapFlex, Description, Image, Text, Title } from './styled';
import {  IDayFull } from '../../Interfaces/';
import { getImgUrl, mathTemp,  sunTime} from '../../utils//';

const FullData: FC<IDayFull> = ({ fullData }) => {
  const {
    temp,
    feels_like,
    description,
    icon,
    main,
    windSpeed,
    windDeg,
    sunrise,
    sunset,
    pressure,
    humidity,
    dewPoint,
    clouds,
    visibility,
  } = fullData;

  return (
    <WrapFlex>
      <Description>
        <Title>{mathTemp(temp)}</Title>
        <Image src={getImgUrl(icon)} />
        <Text>
          Temperature: {mathTemp(temp)}, {main}
        </Text>
        <Text>
          Feels like: {mathTemp(feels_like)}, {description}
        </Text>
        <Text>Wind speed: {windSpeed}</Text>
      </Description>
      <Description>
        <Text>Sunrise: {sunTime(sunrise)}</Text>
        <Text>Sunset: {sunTime(sunset)}</Text>
        <Text>Pressure: {pressure}</Text>
        <Text>Humidity: {humidity}</Text>
        <Text>Wind deg: {windDeg}</Text>
        <Text>Dew point: {dewPoint}</Text>
        <Text>Clouds: {clouds}</Text>
        {visibility && <Text>visibility: {visibility} m</Text>}
      </Description>
    </WrapFlex>
  );
};

export default FullData;
