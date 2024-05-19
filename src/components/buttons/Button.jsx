import styled from '@emotion/styled';
import { Button } from 'antd';
import { colors } from '../../../theme';

const StyledButton = styled(Button)`
  border-radius: 6px;
  font-family: 'Lexend', sans-serif;
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: all 0 ease-in-out;

  &.ant-btn-primary {
    color: white;
    border: 1px solid ${colors.primaryBorder};
    background: ${colors.primary};
    &.ant-btn-primary:hover {
      background: ${colors.primaryHover};
    }
  }

  &.ant-btn-default {
    background: ${colors.secondary};
    color: ${colors.primary};
    border: none;
    &.ant-btn-default:hover {
      background: ${colors.secondaryHover};
      color: ${colors.primary};
      border: none;
    }
  }
`;

export const PrimaryButton = ({ ...props }) => {
  return (
    <StyledButton type="primary" {...props}>
      {props.buttontext}
    </StyledButton>
  );
};

export const SecondaryButton = ({ ...props }) => {
  return (
    <StyledButton type="default" {...props}>
      {props.buttontext}
    </StyledButton>
  );
};
