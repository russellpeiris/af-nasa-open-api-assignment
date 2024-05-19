import styled from '@emotion/styled';
import {
  background,
  border,
  display,
  flexbox,
  layout,
  maxWidth,
  position,
  space,
  typography,
  width,
} from 'styled-system';

export const Flex = styled.div`
  ${display}
  ${width}
    ${maxWidth}
    ${space}
    ${background}
    ${border}
    ${position}
    ${flexbox}
    ${layout}
    ${typography}
`;
Flex.defaultProps = {
  display: 'flex',
};
