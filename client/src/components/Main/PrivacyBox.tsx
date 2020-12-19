import React, { useState } from 'react';
import styled from 'styled-components';
import * as selectionConstant from '../../constants/selection';

const PrivacyArea = styled.div`
  width: 562px;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  color: #444444;
  font-weight: 600;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

const PrivacyItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15% 0 15%;
  > label {
    font-size: 16px;
    width: 80px;
  }
  & + & {
    margin-top: 20px;
  }
`;

const InputArea = styled.form`
  display: flex;
  flex: 1;
  label {
    cursor: pointer;
  }
  select {
    font-family: inherit;
    width: 80%;
    padding: 8px;
    font-size: 15px;
    background: #ffffff;
    border: 1px solid ${(props) => props.theme.gray};
    box-sizing: border-box;
  }
  input[type='radio']:checked {
    cursor: pointer;
    background-color: ${(props) => props.theme.main};
    border: solid 1px rgba(255, 255, 255, 0.3);
  }
  input[type='radio'] {
    appearance: none;
    border-radius: 100%;
    margin-right: 10px;
    width: 12px;
    height: 12px;
    background: white;
    box-shadow: inset 0px 4px 3px rgba(0, 0, 0, 0.17);
  }
  input + label {
    margin-right: auto;
  }
`;

type provinceType = selectionConstant.provinceType;
const ages = selectionConstant.ages;
const jobs = selectionConstant.jobs;
const provinces = selectionConstant.provinces;

interface PrivacyProps {
  handleForm: (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function PrivacyBox({ handleForm }: PrivacyProps) {
  const [selectedProvince, setSelectedProvince] = useState<keyof provinceType>(
    '서울특별시'
  );
  const ageList = ages.map((age: string, index) => {
    return <option value={age}>{age}</option>;
  });
  const jobList = jobs.map((job: string, index) => {
    return <option value={job}>{job}</option>;
  });
  const provinceList = Object.keys(provinces).map((province, index) => {
    return <option value={province}>{province}</option>;
  });
  const cityList = provinces[selectedProvince].map((city, index) => {
    return <option value={city}>{city}</option>;
  });

  const handleProvince = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const province: any = e.target.value;
    if (province === '선택') {
      alert('시/구 를 선택해주세요.');
    } else {
      setSelectedProvince(province);
      handleForm(e);
    }
  };

  return (
    <PrivacyArea>
      <div className="content-area">
        <PrivacyItem>
          <label>나이</label>
          <InputArea className="input-area">
            <select name="age" onChange={handleForm}>
              <option value="선택">선택</option>
              {ageList}
            </select>
          </InputArea>
        </PrivacyItem>
        <PrivacyItem>
          <label>성별</label>
          <InputArea>
            <input
              type="radio"
              name="sex"
              value="male"
              id="male"
              onChange={handleForm}
            />
            <label htmlFor="male">남자</label>
            <input
              type="radio"
              name="sex"
              value="female"
              id="female"
              onChange={handleForm}
            />
            <label htmlFor="female">여자</label>
          </InputArea>
        </PrivacyItem>
        <PrivacyItem>
          <label>직업</label>
          <InputArea className="input-area">
            <select name="job" onChange={handleForm}>
              <option value="선택">선택</option>
              {jobList}
            </select>
          </InputArea>
        </PrivacyItem>
        <PrivacyItem>
          <label>주거지</label>
          <InputArea className="input-area">
            <select name="province" onChange={handleProvince}>
              <option value="선택">선택</option>
              {provinceList}
            </select>
          </InputArea>
          <InputArea className="input-area">
            <select name="city" onChange={handleForm}>
              <option value="선택">선택</option>
              {cityList}
            </select>
          </InputArea>
        </PrivacyItem>
      </div>
    </PrivacyArea>
  );
}

export default PrivacyBox;
