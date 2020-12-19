import React from 'react';
import styled from 'styled-components';
import LeftCircle from '../../styles/img/left_circle.png';
import CenterCircle from '../../styles/img/center_circle.png';
import RightCircle from '../../styles/img/right_circle.png';

const CircleWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  margin-top: auto;
  top: 550px;
`;
const LeftCircleWrapper = styled.div`
  margin-right: auto;
`;
const CenterCircleWrapper = styled.div``;
const RightCircleWrapper = styled.div`
  margin-left: auto;
`;

function BottomBlock() {
  return (
    <CircleWrapper>
      <LeftCircleWrapper>
        <img src={LeftCircle} />
      </LeftCircleWrapper>
      <CenterCircleWrapper>
        <img src={CenterCircle} />
      </CenterCircleWrapper>
      <RightCircleWrapper>
        <img src={RightCircle} />
      </RightCircleWrapper>
    </CircleWrapper>
  );
}

export default BottomBlock;
