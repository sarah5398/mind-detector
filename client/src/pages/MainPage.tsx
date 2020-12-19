import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';

const MainPageWrapper = styled.div`
  height: 100vh;
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <Main />
    </MainPageWrapper>
  );
}

export default MainPage;
