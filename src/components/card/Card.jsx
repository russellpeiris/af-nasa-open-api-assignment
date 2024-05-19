import styled from '@emotion/styled';
import { Card as AntCard, Image, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../theme';
import { ImageLoader } from '../spin/Loader';

export const StyledCard = styled(AntCard)`
  background-color: transparent;
  border-color: ${colors.primaryBorder};
  backdrop-filter: blur(0.8px);
  color: #dcdbdb;
  &.ant-card .ant-card-head {
    border-bottom: none;
    color: white;
  }
  border-radius: 8px;
  text-align: left;

  &.ant-card .ant-card-cover {
    margin: 0 24px;
    height: 200px;
  }
  &.ant-card .ant-card-cover img,
  .ant-card .ant-card-cover img + .ant-image-mask {
    border-radius: 0;
  }
  .ant-card-cover img {
    max-height: 200px;
    object-fit: cover;
  }
`;

export const Card = ({ apiName, navigateTo, ...props }) => {
  const navigate = useNavigate();
  return (
    <StyledCard
      title={apiName}
      {...props}
      cover={<Image
        placeholder={<ImageLoader  />}
        src={props.image}
        alt={props.topic}
        loading='lazy'
        height={'200px'}
      />}
    >
      <div style={{ cursor: 'pointer' }} onClick={() => navigate(navigateTo)}>
        <Typography.Text strong>{props.topic}</Typography.Text>
        <Typography.Paragraph
          style={{ fontSize: '12px', marginBottom: 0 }}
          ellipsis={{
            rows: 4,
            suffix: <Typography.Link style={{ fontSize: '12px', marginLeft: '4px' }}
              onClick={() => navigate(navigateTo)}>View</Typography.Link>
          }}
        >
          {props.description}
        </Typography.Paragraph>
      </div>
    </StyledCard>
  );
};
