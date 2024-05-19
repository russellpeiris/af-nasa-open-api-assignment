import { Col, DatePicker, Form, Image, Row, Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, ImageLoader, PrimaryButton, Screen } from '../../components';
import { useMarsRoverPhotos } from '../../hooks/apiHooks';
import MarsCard from '../../components/card/MarsPhotoCard';

const Mars = () => {
  const [form] = Form.useForm();
  const [photos, setPhotos] = useState([]);
  const [values, setValues] = useState({});
  const isMobile = window.innerWidth < 768;
  const { isLoading, data, mutate } = useMarsRoverPhotos();

  const handleSubmit = async () => {
    try {
       mutate(buildQueryParams(values));
    } catch (error) {
      console.error('Error fetching Mars rover photos:', error);
    }
  };

  useEffect(() => {
    if (data && data.photos.length == 0) {
      message.error('No photos found for the selected criteria');
    }
  }, [data]);

  const buildQueryParams = (values) => {
    const { searchType, date, camera } = values;
    let queryParams = '';
    const page = 3;
    if (searchType === 'sol') {
      queryParams = `sol=1000`;
    } else if (searchType === 'earth_date') {
      queryParams = `earth_date=${date.format('YYYY-MM-DD')}`;
    }

    if (camera) {
      queryParams += `&camera=${camera}`;
    }

    if (page) {
      queryParams += `&page=${page}`;
    }

    return queryParams;
  };

  return (
    <Screen>
      <Form
        form={form}
        onValuesChange={() => setValues(form.getFieldsValue())}
        layout="vertical" // Set form layout to vertical for better mobile experience
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={6}>
            <Form.Item
              label="Search By"
              name="searchType"
            >
              <Select
                options={[
                  // { label: 'Sol', value: 'sol' },
                  { label: 'Earth Date', value: 'earth_date' },
                ]}
              />
            </Form.Item>
          </Col>
          {values.searchType === 'earth_date' && (
            <Col xs={24} sm={6}>
              <Form.Item
                label="Date"
                name="date"
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          )}
          {values.searchType === 'sol' && (
            <Col xs={24} sm={6}>
              <Form.Item
                label="Camera"
                name="camera"
              >
                <Select
                  width="100%"
                  options={[
                    { label: 'All', value: 'all' },
                    { label: 'FHAZ', value: 'fhaz' },
                    { label: 'RHAZ', value: 'rhaz' },
                    { label: 'MAST', value: 'mast' },
                    { label: 'CHEMCAM', value: 'chemcam' },
                    { label: 'MAHLI', value: 'mahli' },
                    { label: 'MARDI', value: 'mardi' },
                    { label: 'NAVCAM', value: 'navcam' },
                    { label: 'PANCAM', value: 'pancam' },
                    { label: 'MINITES', value: 'minites' },
                  ]}
                />
              </Form.Item>
            </Col>
          )}
            <Form.Item style={{ display:'flex', alignItems:'flex-end' }}>
              <Row >
                <Col>
                  <PrimaryButton onClick={handleSubmit} buttontext="Search" />
                </Col>
              </Row>
            </Form.Item>
        </Row>
      </Form>
      {
        isLoading ? (
          <ImageLoader />
        ) : (
          <Row gutter={[16, 16]} >
            {data?.photos.map((photo) => (
              <>
              <Col xs={24} sm={12} md={12} lg={6}>
              <PhotoCard key={photo.id} photo={photo} />
            </Col>
            </>
            ))}
          </Row>
        )
      }
    </Screen>
  );
}

const PhotoCard = ({ photo }) => {
  return (
    <>
    <MarsCard data={photo} />
    </>
  );
};

export default Mars;
