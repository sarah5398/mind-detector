import React from 'react';
import styled, { keyframes } from 'styled-components';

const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ManualWrapper = styled.p`
  margin-top: 1.5vh;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: -0.5px;
  animation: ${boxFade} 1s linear alternate;
`;

function Manual() {
  return (
    <ManualWrapper>
      질문을 읽고 떠오르는 생각에
      <br />
      집중해주세요. 급하게 답변하실
      <br />
      필요는 없으나,오래 생각하지
      <br />
      말고 떠오른 생각을 솔직하게
      <br />
      적어주세요. 총 10개의 문항에
      <br />
      답변해주시면 마인드 디텍터가
      <br />
      사용자님의 답변을 분석, 우울감
      <br />
      정도를 측정해드립니다.
    </ManualWrapper>
  );
}

export default Manual;
