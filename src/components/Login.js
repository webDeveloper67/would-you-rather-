import React, {useState, Fragment} from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import {Redirect, withRouter} from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {setAuthedUser, clearAuthedUser} from '../actions/authedUser';


const Login = () => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users);

  // defining State
  const [userId, setUserId] = useState(null);
  const [toHome, setToHome] = useState(false)

  const handleUserChange = e => {
    const userId = e.target.value;

    setUserId((prevState) => {
      console.log(prevState, 'prevState in func Compo');
      return {
        ...prevState,
        userId
      }
    })
  }

  const handleLogin = () => {
    dispatch(setAuthedUser(userId))
  }
  return (
    <>
    <Container fluid>
      <Row className='justify-content-md-center p-3'>
        <Col xs lg="2">
          <h4>Please Sign In</h4>
          <form>
          <div className="form-group">
            <label htmlFor="select user">Select User</label>
            <select id="login-select" onChange={e => handleUserChange(e)}>
              
            </select>
          </div>
          </form>
          <Button disabled={userId === null} onClick={e => handleLogin(e)} variant="primary">Login</Button>
      </Col>
    </Row>
  </Container>
  </>
  )
}

export default Login;