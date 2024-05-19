import styled from '@emotion/styled';
import React from 'react';

const StyledFlex = styled.div`
  height: calc(100% - 96px);
  padding: 0 50px 50px 50px;
  display: flex;
  flex-direction: column;
`;

export const Screen = ({ children, ...props }) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};
