import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Question from './Question';
// Redux
import {useSelector} from 'react-redux';

// React Bootstrap
import {ButtonGroup, Button, Container, Row, Col, CardGroup, Card} from 'react-bootstrap';

const Dashboard = () => {
  const [showAnswered, setShowAnswered] = useState(false);

  const filterQuestions = showAnswered => {
    setShowAnswered(showAnswered)
  }

  const questions = useSelector(state => state.questions);
  const authedUser = useSelector(state => state.authedUser);

  const questionsArray = Object.values(questions);
  
  const filteredQuestions = questionsArray.filter((question) => {
    const contains = (
      question.optionOne.votes.indexOf(authedUser) > -1 || question.optionTwo.votes.indexOf(authedUser) > -1
    )
    return showAnswered ? contains : !contains
  })

  const sortedQuestions = filteredQuestions.sort((a, b) => b.timestamp - a.timestamp)
  return (
    <Container fluid>
      <Row>
        <Col xs md={6}>
          <ButtonGroup aria-label="group buttons" className='p-3'>
          <Button className={!showAnswered ? 'btn-primary' : 'btn-secondary'} onClick={e => filterQuestions(false)}>Unanswered Questions</Button>
          <Button className={showAnswered ? 'btn-primary' : 'btn-secondary'} onClick={e => filterQuestions(true)}>Answered Questions</Button>
        </ButtonGroup>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md lg={6}>
        <CardGroup>
        {
          sortedQuestions.map((question) => (
            <Card key={question.id}>
                <Link to={`question/${question['id']}`}>
                  <Question id={question.id} />
                </Link>
            </Card>
          ))
        }
      </CardGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;