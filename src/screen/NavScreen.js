import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavHead = () => {
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
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavHead;