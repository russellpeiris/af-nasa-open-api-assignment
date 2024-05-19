import { PoweroffOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { message } from 'antd';
import { Header as AntDHeader } from 'antd/es/layout/layout';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import nasaLogo from '../../assets/nasa.svg';
import { auth } from '../../config/firebaseConfig';
import { PrimaryButton } from '../buttons/Button';

const StyledHeader = styled(AntDHeader)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
`;

export const Header = () => {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.clear();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        message.error(error.message);
      });
  };
  return (
    <StyledHeader>
      <img src={nasaLogo} width={80} onClick={()=>navigate('/')} style={{cursor: 'pointer'}} />
      <PrimaryButton
        icon={<PoweroffOutlined />}
        buttontext={isMobile ? '' : 'Logout'}
        onClick={handleSignOut}
      />
    </StyledHeader>
  );
};
