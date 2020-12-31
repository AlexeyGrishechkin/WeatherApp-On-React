import React, { FC } from 'react';
import Day from '../day';
import { WrapGrid, Title } from './styled';
import { IDays } from '../../Interfaces/';

const Calendar: FC<IDays> = ({ days }) => {
  return (
    <WrapGrid>
      <Title>Yesterday</Title>
      <Title>Today</Title>
      <Title>Tomorrow</Title>

      <Day days={days} />
    </WrapGrid>
  );
};

export default Calendar;
