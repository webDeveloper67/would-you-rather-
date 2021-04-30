import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const NotFound = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path)
  }
  return (
    <Container fluid>
      <Row>
        <Col xs lg={8} className='mx-auto'>
          <Image src={'404-not-found.png'} alt='not found page' fluid />
          <div className='mb-5 text-center mb-5'>
              <h3>This page could not be found</h3>
              <Button 
                variant="success"
                size="lg"
                onClick={() => handleClick("/")}
              >
                Go Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container >
)
}

export default NotFound;