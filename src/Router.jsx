import { message } from 'antd';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components';
import { useAuth } from './context/auth';
import { Apod, Auth, Home, Mars } from './pages';
import { useLoader } from './context/loader';

const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  useEffect(() => {
    if (!userLoggedIn && location.pathname !== '/') {
      navigate('/');
      message.error('You must be logged in to view that page');
    }
  }, [userLoggedIn]);
  
  const { isLoading } = useLoader();

  return (
    <>
      {location.pathname === '/' ? null : <Header />}
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/astronomy-picture-of-the-day" element={<Apod />} />
        <Route path='/mars-rover-photos' element={<Mars />} />
      </Routes>
    </>
  );
};

export default Router;
