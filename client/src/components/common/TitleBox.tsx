import React from 'react';
import styled, { css } from 'styled-components';

const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 78px;
  line-height: 92.5px;
  letter-spacing: -1.5px;
  ${(props: any) =>
    props.isSmall &&
    css`
      font-size: 38px;
      line-height: 47px;
    `}

  color: ${(props) => props.theme.main};
`;

function TitleBox({ isSmall, ...rest }: any) {
  return (
    <TitleWrapper isSmall={isSmall} {...rest}>
      마인드
      <br />
      디텍터
    </TitleWrapper>
  );
}

export default TitleBox;
