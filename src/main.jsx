import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ConfigProvider } from 'antd';
import { colors } from '../theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          fontFamily: 'Lexend, sans-serif',
          borderRadius:'0',

        },
        components: {
          Typography:{
            colorText: colors.secondary,
            colorTextDescription: colors.secondary,
            colorTextHeading: colors.secondary,
            
          }
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
