import React, {Fragment} from 'react';
// Redux
import { useSelector } from 'react-redux';

// React Bootstrap
import {Card} from 'react-bootstrap';

const Question = ({id}) => {

  const question = useSelector(state => state.questions[id])
  const users = useSelector(state => state.users);
  const author = question ? users[question.author] : null;
  
  return (
    <Fragment>
      <Card.Img src={`/${author && author.avatarURL}`} />
      <Card.Body>
        <Card.Title>{author && author.name} asks</Card.Title>
        <div className="would-you">Would you rather</div>
      <div className="question-text">{question.optionOne.text}...</div>
      <button className="btn-default">View Poll</button>
      </Card.Body>
    </Fragment>
  )
}

export default Question;