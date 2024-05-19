import { LoadingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Spin } from 'antd';
import Lottie from 'lottie-react';
import React from 'react';
import loader from '../../assets/icons/loader.json';
import { Flex } from '../flex/Flex';
export const StyledSpinner = styled(Spin)`
  .ant-spin-dot-item {
    background-color: #ffffff;
  }
`;

export const Loader = ({ ...props }) => {
  return (
    <Flex
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledSpinner
        indicator={
          <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />
        }
        {...props}
      />
    </Flex>
  );
};

export const ImageLoader = ({ ...props }) => {
  return (
    <Flex
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <StyledSpinner
        indicator={ */}
          <Lottie style={{height:'50px'}} animationData={loader} loop={true} />
        {/* }
        {...props}
      /> */}
    </Flex>
  );
}