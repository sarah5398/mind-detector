import React from 'react';
import styled from 'styled-components';
import CustomButton from '../common/CustomButton';

const HospitalArea = styled.div`
  margin-top: 68px;
  width: 935px;
  height: 568px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const VisitButton = styled(CustomButton)`
  height: 35px;
  color: white;
  background-color: ${(props) => props.theme.main};
`;

const HospitalList = styled.ul`
  /* display: flex; */
  padding: 62px 60px 0px 73px;
`;

const HospitalInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HospitalTextArea = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 31px;
  letter-spacing: -0.5px;

  > em {
    margin: 0px 5px;
    font-weight: 500;
    font-size: 18px;
  }
  > span {
    font-size: 15px;
    margin: 14px 0px;
  }
`;

const Border = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
  border: 1px solid #cacaca;
`;

const Fence = styled.span`
  width: 0px;
  height: 10.5px;
  border: 1px solid #333333;
  order: 1;
  flex-grow: 0;
  margin: 0 14px 0 14px;
`;

function HospitalBox({ hospitalMock }: any) {
  const hospitalInfos = hospitalMock.map((hospitalObj: any, index: any) => {
    console.log(hospitalObj);
    return (
      <>
        <HospitalInfo>
          <HospitalTextArea>
            <em>{hospitalObj.name}</em>
            <span>
              <a>{hospitalObj.address}</a>
              <Fence /> <a>{hospitalObj.phonecall}</a>
            </span>
          </HospitalTextArea>
          <VisitButton>방문하기</VisitButton>
        </HospitalInfo>
        <Border />
      </>
    );
  });

  return (
    <HospitalArea>
      <HospitalList>{hospitalInfos}</HospitalList>
    </HospitalArea>
  );
}

export default HospitalBox;
