import React from 'react';
import styled from 'styled-components';
import BottomBlock from './BottomBlock';
import TopBlock from './TopBlock';

const TopBlank = styled.div`
  height: 5vw;
`;

const MainWrapper = styled.div`
  background: #f0f0f0;
`;

function Main() {
  return (
    <MainWrapper>
      <TopBlank />
      <TopBlock />
      <BottomBlock />
    </MainWrapper>
  );
}

export default Main;
