import React from 'react';
import './navbar-view.scss'

import { Navbar, Container, Nav } from 'react-bootstrap';

export function NavBarView({ user }) {

  return (
    <Container id='navbar-container'>
      <Navbar id='navbar' fixed='top'>

        <Navbar.Brand id='navbar-brand' href='/'>myFlix</Navbar.Brand>
        <Nav id='nav' className='features'>
          <Nav.Link id='nav-link' href='/profile'>Profile</Nav.Link>
          <Nav.Link id='nav-link' href='#'>Watchlist</Nav.Link>
        </Nav>
      </Navbar>
    </Container>

  )
}


