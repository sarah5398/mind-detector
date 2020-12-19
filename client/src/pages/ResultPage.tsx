import React from 'react';
import styled from 'styled-components';
import TitleBox from '../components/common/TitleBox';
import ResultForm from '../components/ResultForm';

const ResultPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopTitleBox = styled(TitleBox)`
  margin: 6vh 0;
`;

function ResultPage() {
  return (
    <ResultPageWrapper>
      <TopTitleBox isSmall />
      <ResultForm />
    </ResultPageWrapper>
  );
}

export default ResultPage;
