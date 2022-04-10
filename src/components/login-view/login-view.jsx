import React, { useState } from 'react';
<<<<<<< Updated upstream
=======
import axios from 'axios';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login-view.scss'
>>>>>>> Stashed changes

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
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

<<<<<<< Updated upstream
  return (
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
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
