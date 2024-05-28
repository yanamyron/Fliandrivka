import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ButtonEnroleIn from '../ButtonEnroleIn'; // Відносний шлях до ButtonEnroleIn

const HeaderMain = styled.h1`
  font-size: 3em;
  font-family: 'play', sans-serif;
  width: 100%;
  color: #002155;
  align-self: flex-start;
  max-width: 100%;
`;

const HeaderSubTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  margin-top: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  align-self: flex-start;
  width: 100%;
  font-family: 'montserrat', sans-serif;
`;

const HeaderText = () => {
  return (
    <>
      <HeaderMain>
        Гончарна студія "Фляндрівка"
        <HeaderSubTitle>Hавчимо творити красу власними руками</HeaderSubTitle>
      </HeaderMain>
      <ButtonEnroleIn text="Записатися" to="/mainEnrole" />
    </>
  );
};

export default HeaderText;
