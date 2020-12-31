import React, { FC } from 'react';
import { Container, Dropdown, Dropdown_select } from './styled';
import { IChooseRegion } from '../../Interfaces/';

const ChooseRegion: FC<IChooseRegion> = ({ setCity }) => {
  return (
    <Container>
      <Dropdown>
        <Dropdown_select name='one' onChange={(event) => setCity(event.currentTarget.value)}>
          <option value='lat=39.91&lon=116.40'>Minsk</option>
          <option value='lat=53.69&lon=23.82'>Grodno</option>
          <option value='lat=52.09&lon=23.69'>Brest</option>
          <option value='lat=39.90&lon=116.23'>Gomel</option>
          <option value='lat=55.19&lon=30.20'>Vitebsk</option>
          <option value='lat=39.90&lon=116.39'>Mogilev</option>
        </Dropdown_select>
      </Dropdown>
    </Container>
  );
};

export default ChooseRegion;
