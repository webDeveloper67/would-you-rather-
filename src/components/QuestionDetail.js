import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleAddAnswer} from '../actions/questions';
import {Redirect} from 'react-router-dom';
import { Card, Col, Container, Row, Image, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const QuestionDetail = ({match}) => {
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const {id} = match.params;

  const question = useSelector(state => state.questions[id])
  const users = useSelector(state => state.users)
  const authedUser = useSelector(state => state.authedUser)

  const author = question ? users[question.author] : null
  const answered = question ? (question.optionOne.votes.indexOf(authedUser) > -1 || question.optionTwo.votes.indexOf(authedUser) > -1) : false;
  const votesOptionOne = (question && question.optionOne.votes) ? question.optionOne.votes.length : 0
  const votesOptionTwo = (question && question.optionTwo.votes) ? question.optionTwo.votes.length : 0
  const totalVotes = votesOptionOne + votesOptionTwo
  const percentageOptionOne = ((votesOptionOne / totalVotes) * 100).toFixed(1)
  const percentageOptionTwo = ((votesOptionTwo / totalVotes) * 100).toFixed(1)

  // get answer of authedUser
  const answer = users[authedUser].answers[id]

  const handleSaveAnswer = e => {
    e.preventDefault();

    dispatch(handleAddAnswer({
      qid: match.params.id,
      authedUser,
      answer: selectedAnswer
    }))
  }

  const chooseAnswer = answer => {
    console.log(answer, 'answerrr')
    setSelectedAnswer(answer)
  }

  if(!question) {
    return <Redirect to='/not-found' />
  }
  
  return (
    <Container fluid>
      <Row>
        <Col xs lg={9} className='mx-auto'>
          <div className={answered ? 'tile-item question-detail' : 'tile-item'}>
            {
              answered ? (
                <Card>
                  <Card.Header>
                    Asked By: {author.name}
                  </Card.Header>
                </Card>
              ) : <Card>
                  <Card.Header>
                    {author.name} asks
                  </Card.Header>
                </Card>
            }
            <Image src={`/${author.avatarURL}`} rounded />

          </div>
        </Col>

        <Col xs lg={9} className='mx-auto'>
          {
            !answered ? (
              <ListGroup className="list-group-flush">
                <ListGroupItem variant="secondary">Would You Rather</ListGroupItem>
                <ListGroupItem className={selectedAnswer === 'optionOne' ? 'option option-selected' : 'option'} onClick={e => chooseAnswer('optionOne')}>{question.optionOne.text}</ListGroupItem>
                <ListGroupItem className={selectedAnswer === 'optionTwo' ? 'option option-selected' : 'option'} onClick={e => chooseAnswer('optionTwo')}>{question.optionTwo.text}</ListGroupItem>
                <Button className={selectedAnswer ? 'btn-primary' : 'disabled'} onClick={e => handleSaveAnswer(e)}>Submit</Button>
              </ListGroup>
            ) : <div>
              <div>Results...</div>
              <div className={answer === 'optionOne' ? 'option-container selected' : 'option-container'}>
                <div>{question.optionOne.text}</div>

                <div>
                  <p>{votesOptionOne} out of {totalVotes} votes</p>
                  <p>Percentage votes: {percentageOptionOne}%</p>
                </div>

                <p className='your-vote'>Your pick</p>
              </div>

              <div className={answer === 'optionTwo' ? 'option-container selected' : 'option-container'}>
                <div>{question.optionTwo.text}</div>

                <div>
                  <p>{votesOptionTwo} out of {totalVotes} votes</p>
                  <p>Percentage votes: {percentageOptionTwo}%</p>
                </div>

                <p className='your-vote'>Your pick</p>
              </div>
            </div>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default QuestionDetail;