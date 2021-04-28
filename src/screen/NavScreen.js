import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useSelector} from 'react-redux';
//import placeholderImg from '../../public/placeholder.jpeg'

const NavHead = () => {

  const authedUser = useSelector(state => state.authedUser);
  const users = useSelector(state => state.users);
  const user = users[authedUser];
 
  const avatar = user ? user.avatarURL : 'placeholder.jpeg';
  const name = user ? user.name : '';

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <LinkContainer to='/'>
        <Navbar.Brand>Would You Rather..</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
    <LinkContainer to="/dashboard">
      <Nav.Link>
        Dashboard
      </Nav.Link>
    </LinkContainer>
    <LinkContainer to="/add">
      <Nav.Link>
        New Question
      </Nav.Link>
    </LinkContainer>
    <LinkContainer to="/leaderboard">
      <Nav.Link>
        Leader Board
      </Nav.Link>
    </LinkContainer>
    {
      authedUser && <LinkContainer to="/" className='ml-auto'>
        <Nav.Link>
          <span>Hello {name}</span>
          <img src={avatar} alt={`Author of ${authedUser}`} width="30"
        height="30" />
        </Nav.Link>
      </LinkContainer>
    }
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavHead;