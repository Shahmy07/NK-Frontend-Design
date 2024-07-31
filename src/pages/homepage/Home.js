import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import { Button, Carousel } from 'antd';
import { CarFilled } from '@ant-design/icons';

const contentStyle = {
  margin: 0,
  minHeight: '160px',
  color: '#fff',
  textAlign: 'center',
  background: '#7d7d7d',
};


function HomePage() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className="hero bg-dark px-lg-4 py-5">
      <Container fluid>
        <div className='mt-1 d-lg-none d-block'>
          <div className='mb-4'>
            <Carousel arrows afterChange={onChange}>
              <div>
                <div className='pt-3 pb-5 px-lg-5 px-3 rounded' style={contentStyle}>
                  <h1 className='fontsize40px'>
                    Flash News
                  </h1>
                  <div className='fontsize16px'>
                    Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News
                  </div>
                </div>
              </div>
              <div>
                <div className='pt-3 pb-5 px-lg-5 px-3 rounded' style={contentStyle}>
                  <h1 className='fontsize40px'>
                    Flash News
                  </h1>
                  <div className='fontsize16px'>
                    Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News
                  </div>
                </div>
              </div>
              <div>
                <div className='pt-3 pb-5 px-lg-5 px-3 rounded' style={contentStyle}>
                  <h1 className='fontsize40px'>
                    Flash News
                  </h1>
                  <div className='fontsize16px'>
                    Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        <Row>
          <Col md="3" xs="6" className='mt-2'>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px'>Auction</Button>
          </Col>
          <Col md="3" xs="6" className='mt-2'>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px'>Tender Auction</Button>
          </Col>
          <Col md="3" xs="6" className='mt-2'>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px'>Fixed Price</Button>
          </Col>
          <Col md="3" xs="6" className='mt-2'>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px'>Others</Button>
          </Col>
        </Row>

        <Row>
          <Col lg="3" xs="6" className='mt-1'>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px mt-lg-4 mt-2'>Vehicle</Button>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px mt-lg-4 mt-2'>Equipment</Button>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px mt-lg-4 mt-2'>Auto Parts</Button>
          </Col>
          <Col lg="6" className='mt-1 d-lg-block d-none'>
            <div className='mt-3'>
              <Carousel arrows afterChange={onChange}>
                <div>
                  <div className='pt-3 pb-5 px-lg-5 px-3 rounded' style={contentStyle}>
                    <h1 className='fontsize40px'>
                      Flash News
                    </h1>
                    <div className='fontsize16px'>
                      Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News
                    </div>
                  </div>
                </div>
                <div>
                  <div className='pt-3 pb-5 px-lg-5 px-3 rounded' style={contentStyle}>
                    <h1 className='fontsize40px'>
                      Flash News
                    </h1>
                    <div className='fontsize16px'>
                      Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News
                    </div>
                  </div>
                </div>
                <div>
                  <div className='pt-3 pb-5 px-lg-5 px-3 rounded' style={contentStyle}>
                    <h1 className='fontsize40px'>
                      Flash News
                    </h1>
                    <div className='fontsize16px'>
                      Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News Test News
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </Col>
          <Col lg="3" xs="6" className='mt-1'>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px mt-lg-4 mt-2'>Wanted List</Button>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px mt-lg-4 mt-2'>Auction Detailes</Button>
            <Button type="primary" className='bg-light fw-bold w-100 text-dark py-4 rounded-4 fontsize20px mt-lg-4 mt-2'>New Auto Parts Form</Button>
          </Col>
        </Row>

        <div className='text-center mt-4'>
          <Button type="primary" className='bgNKred fw-semibold fontsize20px py-4'>Become a Dealer <CarFilled /></Button>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
