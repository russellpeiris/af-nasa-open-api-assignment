import { Image, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { ImageLoader, Screen } from '../../components';
import { useLoader } from '../../context/loader';
import { useApod } from '../../hooks/apiHooks';
import ReactPlayer from 'react-player';
const { Text, Title, Paragraph } = Typography;

const Apod = () => {
  const {
    isLoading: loading,
    data: apodData,
  } = useApod();

  const { setIsLoading } = useLoader();
  const { isMobile } = window.innerWidth < 768;

  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <>
      {!loading && (
        <Screen>
          <Title level={2}>{apodData?.title}</Title>
          <Text style={{ fontSize: '10px' }}>{apodData?.date}</Text>
          <Text style={{ fontSize: '10px' }}>{apodData?.copyright}</Text>
          {
            apodData?.media_type === 'video' ? (
              <ReactPlayer
                width="100%"
                url={apodData?.url}
                style={{ marginBottom: '16px' }}
              />
            ) : (
              <Image
                src={apodData?.hdurl}
                placeholder={
                  <ImageLoader />
                }
                loading="lazy"
                alt={apodData?.title}
                style={{
                  maxWidth: isMobile ? '312px' : 'none',
                  height: !isMobile ? '500px' : 'none',
                  marginBottom: '16px',
                  marginTop: '8px',
                  objectFit: 'cover'
                }}
              />
            )
          }

          <Paragraph>{apodData?.explanation}</Paragraph>
        </Screen>
      )}
    </>
  );
};

export default Apod;
