import React from 'react';
import styled from 'styled-components';
import starterpage1 from '../assets/starter page2.jpg';
import { Link, Routes, Route } from 'react-router-dom';

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: auto;
  margin-left: 70px;
  
  @media screen and (min-width: 768px) {
    order: -1;
  }
`;

function CoverMain() {
  return (<>
    <PhotoContainer>
        <img src={starterpage1} alt="Starter Page" />
    </PhotoContainer>
    </>
  );
}

export default CoverMain;
