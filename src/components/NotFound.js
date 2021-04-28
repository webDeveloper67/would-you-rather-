import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs lg={8} className='mx-auto'>
          <Image src={'404-not-found.png'} alt='not found page' fluid />
          <div className='mb-5 text-center'>
              <h3>This page could not be found</h3>
          </div>
        </Col>
      </Row>
    </Container >
)
}

export default NotFound;