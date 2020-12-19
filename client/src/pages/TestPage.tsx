import React from 'react';
import styled from 'styled-components';
import SideBlock from '../components/SideBlock';
import TestForm from '../components/TestForm/';

const TestPageWrapper = styled.div`
  height: 100vh;
  display: flex;
`;

function TestPage() {
  return (
    <TestPageWrapper>
      <SideBlock />
      <TestForm />
    </TestPageWrapper>
  );
}

export default TestPage;
