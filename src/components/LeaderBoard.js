import React from 'react';
import { ListGroup, Image, Container, Row, Col } from 'react-bootstrap';
import {useSelector} from 'react-redux';

const LeaderBoard = () => {
  const users = useSelector(state => state.users)

  const usersList = Object.values(users);
  
  usersList.map(user => user.totalScore = Object.keys(user.answers).length + user.questions.length)

  const sortedUsers = usersList.sort((a, b) => b.totalScore - a.totalScore)
  return (
    <Container fluid>
      <Row>
        <Col xs lg={9} className='mx-auto'>
        <ListGroup className='mt-3'>
          {
            sortedUsers.map((user) => (
              <div className='mt-3' key={user.id}>
              <ListGroup.Item>
                <Image src={`/${user.avatarURL}`} />
              </ListGroup.Item>
              <ListGroup.Item>
                {user.name}
              </ListGroup.Item>
              <ListGroup.Item variant="primary">
                <p>Answered Questions: {Object.keys(user.answers).length}</p>
              </ListGroup.Item>
              <ListGroup.Item variant="info">
                <p>Created Questions: {user.questions.length}</p>
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                <p>Total Score: {user.totalScore}</p>
              </ListGroup.Item>
              </div>
            ))
          }
    </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default LeaderBoard;