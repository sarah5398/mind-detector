import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: autod;
  background: transparent;
  padding: 10px 19px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 3px;
  line-height: 15px;
  background-color: white;
  border: none;
  border-radius: 76px;
  color: ${(props) => props.theme.main};
  ${(props: any) =>
    props.hoverShadow
      ? css`
          &:hover {
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            transition: box-shadow;
            transition-duration: 0.4s;
          }
        `
      : css`
          box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
        `}
  cursor: pointer;
`;

function CustomButton({ hoverShadow, ...rest }: any) {
  return <StyledButton hoverShadow={hoverShadow} {...rest} />;
}

export default CustomButton;
