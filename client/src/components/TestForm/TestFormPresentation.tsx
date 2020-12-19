import React, { useEffect } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import CustomButton from '../common/CustomButton';

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 96px 74px;
  color: #333333;
  em {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.5px;
    margin-right: 40px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  width: 567px;
  height: 300px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: -0.5px;
  margin-left: auto;
`;

const ButtonArea = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled.div`
  width: 783px;
  height: 789px;
  background-color: white;
  border-radius: 31px;
  filter: drop-shadow(0px 8px 22px rgba(0, 0, 0, 0.08));
`;

const StyledAnswerArea = styled(TextareaAutosize)`
  all: unset;
  letter-spacing: 4.5px;
  font-size: 18px;
  min-height: 120px;
  line-height: 30px;
  background-image: linear-gradient(
    transparent,
    transparent calc(30px - 1px),
    ${(props) => props.theme.main} 0px
  );
  background-size: 100% 30px; // 20px 마다
`;

interface TestProp {
  page: number;
  question: string;
  answer: string;
  initializePage: () => void;
  handleText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handlePrevious: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleTest: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function TestBlock({
  page,
  question,
  answer,
  initializePage,
  handleNext,
  handlePrevious,
  handleText,
  handleTest,
}: TestProp) {
  useEffect(() => {
    initializePage();
    return () => {
      // cleanup
    };
  }, [page]);
  return (
    <FormWrapper>
      <FormBox>
        <ContentWrapper>
          <em>Q{page}</em>
          <ContentArea>
            <Description>{question}</Description>
            <StyledAnswerArea onChange={handleText} value={answer} />
            <ButtonArea>
              <CustomButton onClick={handlePrevious}>이전</CustomButton>
              {page == 10 ? (
                <CustomButton onClick={handleTest}>결과보기</CustomButton>
              ) : (
                <CustomButton onClick={handleNext}>다음</CustomButton>
              )}
            </ButtonArea>
          </ContentArea>
        </ContentWrapper>
      </FormBox>
    </FormWrapper>
  );
}

export default TestBlock;
