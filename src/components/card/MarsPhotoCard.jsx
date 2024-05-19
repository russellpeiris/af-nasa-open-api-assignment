import { Card as AntCard, Image, Typography } from 'antd';
import React from 'react';
import { Flex } from '../flex/Flex';
import { ImageLoader } from '../spin/Loader';
import { StyledCard } from './Card';

const { Meta } = AntCard;

const MarsCard = ({ data }) => {
  const { id, sol, camera, img_src, earth_date, rover } = data;
  const dataSource = [
    {
      key: '1',
      label: 'Earth Date',
      value: earth_date,
    },
    {
      key: '2',
      label: 'Camera',
      value: camera.full_name,
    },
    {
      key: '3',
      label: 'Rover',
      value: rover.name,
    },
    {
      key: '4',
      label: 'Status',
      value: rover.status,
    },
    {
      key: '5',
      label: 'Landing Date',
      value: rover.landing_date,
    },
    {
      key: '6',
      label: 'Launch Date',
      value: rover.launch_date,
    },
    {
      key: '7',
      label: 'Total Photos',
      value: rover.total_photos,
    },
  ];
  
  return (
    <StyledCard
      hoverable
      placeholder={<ImageLoader  />}
      title={' '}
      cover={<Image 
        height={'200px'}
        loading='lazy'
        alt={camera.full_name} 
        src={img_src} />}
    >
      {/* <Meta title={`Sol: ${sol}`} description={`Earth Date: ${earth_date}`} /> */}
      <Flex style={{  flexDirection:'column' }}>
        {
          dataSource.map((item) => (
            <Flex key={item.key} style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
              <Typography.Text strong>{item.label}</Typography.Text>
              <Typography.Text>{item.value}</Typography.Text>
            </Flex>
          ))
        }
      </Flex>
    </StyledCard>
  );
};

export default MarsCard;
