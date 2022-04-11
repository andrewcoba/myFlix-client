<<<<<<< Updated upstream
=======
import React from 'react';
import './navbar-view.scss';

import { Navbar, Container, Nav, Button, Form } from 'react-bootstrap';

export function NavBarView({ user }) {

  return (
    <Container id='navbar-container'>
      <Navbar id='navbar' fixed='top'>

        <Navbar.Brand id='navbar-brand' href='#'>myFlix</Navbar.Brand>
        <Nav id='nav' className='features'>
          <Nav.Link id='nav-link' href='#home'>Account</Nav.Link>
          <Nav.Link id='nav-link' href='#watchlist'>Watchlist</Nav.Link>
          <Nav.Link id='nav-link' href='#register'>Register</Nav.Link>
        </Nav>
      </Navbar>
    </Container>

  )
}
>>>>>>> Stashed changes
