import React, {useState} from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {handleAddQuestion} from '../actions/questions';

const NewQuestion = () => {
  const dispatch = useDispatch()

  const [optionOneText, setOptionOneText] = useState('')
  const [optionTwoText, setOptionTwoText] = useState('')
  const [toHome, setToHome] = useState(false)

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    return type === 'option1' ? setOptionOneText(value) : setOptionTwoText(value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText))

    setOptionOneText('')
    setOptionTwoText('')
    setToHome(true)
  }

  if(toHome) {
    return <Redirect to='/dashboard' />
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={9} className='mx-auto p-2'>
          <h2>Create New Question</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Would You Rather...</Form.Label>
            <Form.Control name='optionOneText' type="text" placeholder="Option One Text" value={optionOneText} onChange={e => handleInputChange(e, 'option1')} />
            <div>OR</div>
            <Form.Control name='optionTwoText' type="text" placeholder="Option Two Text" value={optionTwoText} onChange={e => handleInputChange(e, 'option2')} />

            <Button className='mt-2' variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default NewQuestion;