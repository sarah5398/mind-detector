import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import TitleBox from '../common/TitleBox';
import Manual from './Manual';

const SideWrapper = styled.div`
  width: 33vw;
  height: inherit;
  background-color: #eeeeee;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.09);
  display: flex;
  justify-content: center;
`;

const SmallTitleBox = styled(TitleBox)`
  margin-top: 8vh;
`;

const ManualTitle = styled.p`
  margin-top: 4vh;
  font-family: 'Noto Serif KR';
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: -0.5px;
  /* color: gray; */
  color: ${({ manualToggle }: { manualToggle: boolean }) =>
    manualToggle ? '#444444' : '#cacaca'};
  cursor: pointer;
`;

const ManualArea = styled.div`
  flex: 0 0 156px;
  display: flex;
  flex-direction: column;
`;

function SideBlock() {
  const [manualToggle, setManualToggle] = useState(false);
  return (
    <SideWrapper>
      <ManualArea>
        <SmallTitleBox isSmall={true} />
        <ManualTitle
          manualToggle={manualToggle}
          onClick={() => {
            setManualToggle(!manualToggle);
          }}
        >
          마인드 디텍터 사용법
        </ManualTitle>
        {manualToggle && <Manual />}
      </ManualArea>
    </SideWrapper>
  );
}

export default SideBlock;
