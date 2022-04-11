import React, { useState } from 'react';
<<<<<<< Updated upstream
=======
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Col, Row } from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

import './login-view.scss'
>>>>>>> Stashed changes

import axios from 'axios';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

<<<<<<< Updated upstream

=======
  //validation declarations
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username Required');
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr('Username must be at least 2 characters long');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password Required');
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr('Password must be at least 6 characters long');
      isReq = false;
    }
    return isReq;
  }
>>>>>>> Stashed changes

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
<<<<<<< Updated upstream
    /* Send a request to the server for authentication */
    axios.post('https://infoaboutmovies123.herokuapp.com/login, {
        Username: username,
      Password: password
    })
    .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
      })
    .catch(e => {
      console.log('no such user')
    });

};
=======
    if (isReq) {
      axios.post('https://infoaboutmovies123.herokuapp.com/login', {
        Username: username,
        Password: password
      })
        .then(response => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch(e => {
          console.log('no such user exists')
        });
    }
  };
>>>>>>> Stashed changes

<<<<<<< Updated upstream
  return (
<<<<<<< Updated upstream
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
=======
    <Container id='login-form'>
      <Row>
        <Col>
          <CardGroup>
            <Card id='login-card'>
              <Card.Body>
                <Card.Title id='login-card-title'>Login</Card.Title>
                <Form>
                  <Form.Group controlId='formUsername'>
                    <Form.Label id='login-form-label'>Username</Form.Label>
                    <Form.Control type='text' placeholder='Enter username' value={username} onChange={e => setUsername(e.target.value)} />
                    {usernameErr && <p>{usernameErr}</p>}
                  </Form.Group>
                  <Form.Group controlId='formPassword'>
                    <Form.Label id='login-form-label'>Password</Form.Label>
                    <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    {passwordErr && <p>{passwordErr}</p>}
                  </Form.Group>
                  <Button id='login-button' variant='primary' type='submit' onClick={handleSubmit}>Login</Button>
                </Form>
                <Card.Text>Not registered yet</Card.Text>
                <div id='register-container'>
                  <Link to='/register'>
                    <Button id='link-to-register-button'>Register now</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>

    </Container>
>>>>>>> Stashed changes
  );
=======
return (
  <Form>
    <Form.Group controlId='formUsername'>
      <Form.Label>Username:</Form.Label>
      <Form.Control type='text' placeholder='Enter username' value={username} onChange={e => setUsername(e.target.value)} />
    </Form.Group>
    <Form.Group controlId='formPassword'>
      <Form.Label>Password:</Form.Label>
      <Form.Control type='password' value={password} onChange={e => setPassword(e.target.value)} />
    </Form.Group>
    <Button variant='primary' type='submit' onClick={handleSubmit}>Submit</Button>
  </Form>
);
>>>>>>> Stashed changes
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired
};
