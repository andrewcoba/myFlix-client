import React from 'react';
import './navbar-view.scss';

import { Navbar, Container, Nav } from 'react-bootstrap';

export function NavBarView({ user }) {

  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  return (
    <Navbar id='navbar' fixed='top'>
      <Container id='navbar-container'>
        <Navbar.Brand id='navbar-brand' href='#'>myFlix</Navbar.Brand>
        <Nav id='nav' className='features'>
          <Nav.Link id='nav-link' href='#home'>Account</Nav.Link>
          <Nav.Link id='nav-link' href='#watchlist'>Watchlist</Nav.Link>
          <Nav.Link id='nav-link' href='#register'>Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}