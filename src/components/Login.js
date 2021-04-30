import React, {useState, Fragment, useEffect} from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {setAuthedUser, clearAuthedUser} from '../actions/authedUser';


const Login = ({location}) => {
  
  const dispatch = useDispatch();

  const users = useSelector(state => state.users);
  
  // defining State
  const [userId, setUserId] = useState(null);
  const [toHome, setToHome] = useState(false);

  const handleUserChange = e => {
    const userId = e.target.value;
    setUserId(userId)
  }

  const handleLogin = () => {
    dispatch(setAuthedUser(userId))
    setToHome(true)
  }

  useEffect(() => {
    dispatch(clearAuthedUser())
  }, [dispatch])
  
  const { from } = location.state || { from: { pathname: '/dashboard'}}
  
  const selected = userId ? userId : -1
  
  if(toHome) {
    return <Redirect to={from} />
  }


  return (
    <Fragment>
    <Container fluid>
      <Row className='justify-content-center p-3'>
        <Col xs lg="6" className='text-center'>
          <h4>Please Sign In</h4>
          <div className="form-group">
            <select value={selected} onChange={e => handleUserChange(e)}>
              <option disabled value='-1'>Select User...</option>
              {
                Object.keys(users).map(key => {
                  return (
                    <option value={users[key].id} key={key}>
                      {users[key].name}
                    </option>
                  )
                })
              }

            </select>
          </div>
          <Button disabled={userId === null} onClick={e => handleLogin(e)} variant="primary">Login</Button>
      </Col>
    </Row>
  </Container>
  </Fragment>
  )
}

export default Login;