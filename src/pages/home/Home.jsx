import { Col, Row } from 'antd'; // Importing necessary components from Ant Design
import React, { useEffect } from 'react';
import { Card, Screen } from '../../components';
import { useLoader } from '../../context/loader';
import { useApod } from '../../hooks/apiHooks'; // Assuming this hook fetches data for each card

const Home = () => {
  const { isLoading: loading, data: apodData } = useApod();
  const { setIsLoading } = useLoader();

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <>
      {
        !loading && (
          <Screen>
            <Row gutter={[16, 16]} >
              <Col xs={24} sm={12} md={12} lg={8}>
                <Card
                  navigateTo={'/astronomy-picture-of-the-day'}
                  description={apodData?.explanation}
                  apiName={apodData?.apiName}
                  topic={apodData?.title}
                  // cover={<Image alt="image" src={apodData?.url} />}
                  image={
                    apodData?.media_type === 'video' ?
                      `https://images.indianexpress.com/2023/05/youtube-logo-featured.jpg?w=640`
                      : apodData?.url
                  }
                />
              </Col>
              <Col xs={24} sm={12} md={12} lg={8}>
                <Card
                  navigateTo={'/mars-rover-photos'}
                  description={`Access fascinating image data captured by NASA's Curiosity, Opportunity, and Spirit rovers on Mars through this API. Developed by Chris Cerami, it's a resource for developers, educators, and citizen scientists.`}
                  apiName={'Explore Mars Rover Photos'}
                  topic={'Mars Rover Photos'}
                  // cover={<Image 
                  //   alt="image" 
                  //   src={'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG'}
                  //    placeholder={<Loader/>}
                  //    />}
                  image={'https://cdn.britannica.com/17/132317-050-8328935B/Artist-conception-Mars-Science-Laboratory.jpg'}
                />
              </Col>
            </Row>
          </Screen>
        )
      }</>
  );
};

export default Home;
