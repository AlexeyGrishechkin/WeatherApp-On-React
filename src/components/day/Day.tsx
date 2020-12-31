import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Days, Text, Title, Image } from './styled';
import { IDays, IDay } from '../../Interfaces';
import { getImgUrl, mathTemp } from '../../utils';

const DayComponent: FC<IDays> = ({ days }) => {
  const Day = days.map((item: IDay, index: number) => {
    const { temp, feels_like, description, icon, main, windSpeed } = item;
    return (
      <React.Fragment key={index}>
        <Days>
          <Link to={'/fulldata/' + index} style={{ textDecoration: 'none' }}>
            <Title>{mathTemp(temp)}</Title>
            <Image src={getImgUrl(icon)} />
            <Text>
              Temperature: {mathTemp(temp)}, {main}
            </Text>
            <Text>
              Feels like: {mathTemp(feels_like)}, {description}
            </Text>
            <Text>Wind speed: {windSpeed}</Text>
          </Link>
        </Days>
      </React.Fragment>
    );
  });

  return Day;
};

export default DayComponent;
