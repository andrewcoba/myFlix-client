import React from 'react';
import axios from 'axios'

import { Col, Row, Button } from 'react-bootstrap';
import './main-view.scss'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { NavBarView } from '../navbar-view/navbar-view'


export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      user: null,
    };
  }

  getMovies(token) {
    axios.get('https://infoaboutmovies123.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    axios.get('https://infoaboutmovies123.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
    localStorage.clear();
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  render() {
    const { movies, user } = this.state;

    // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // if (movies.length === 0) return <div className='main-view' />;

    return (
      <Router>
        <Button id='logout-button' onClick={() => { this.onLoggedOut() }}>Logout</Button>
        <Row>
          <NavBarView user={user} />
        </Row>

        <Row className='main-view justify-content-md-center'>
          <Route exact path='/' render={() => {
            if (!user) {
              return <Redirect to='/login' />;
            }
            return movies.map(m => (
              <Col md={4} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />

          <Route exact path='/login' render={() => {
            if (user) {
              return <Redirect to='/' />;
            }
            return <LoginView onLoggedIn={(data) => this.onLoggedIn(data)} />
          }} />

          <Route exact path='/register' render={() => {
            if (user) {
              return <Redirect to='/' />;
            }
            return (
              <Col>
                <RegistrationView />
              </Col>
            );
          }} />

          <Route exact path='/movies/:movieId' render={({ match, history }) => {
            if (!user) {
              return (
                <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );
            }

            if (movies.lenth === 0) {
              return <div className='movie-view' />;
            }

            return (

              <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)}
                  onBackClick={() => history.goBack()} />
              </Col>
            );
          }} />

          <Route exact path='/profile' render={({ history }) => {
            if (!user) {
              return (
                <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );
            }

            return (
              <Col md={8}>
                <ProfileView movies={movies} onBackClick={() => history.goBack()} />
              </Col>
            );
          }} />

          <Route path='/genre/:name' render={({ match, history }) => {
            if (!user) {
              return (
                <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );
            }

            if (movies.length === 0) {
              return <div className='movie-view' />;
            }

            return (
              <Col md={8}>
                <GenreView
                  genre={movies.find(m => m.Genre.Name === match.params.name).Genre}
                  onBackClick={() => history.goBack()}
                  movies={movies.filter(movie => movie.Genre.Name === match.params.name)} />

              </Col>
            );
          }} />

          <Route exact path='/director/:name' render={({ match, history }) => {

            if (!user) {
              return (
                <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );
            }

            if (movies.length === 0) {
              return <div className='movie-view' />
            }

            return (
              <Col md={8}>
                <DirectorView
                  director={movies.find(m => m.Director.Name === match.params.name).Director}
                  onBackClick={() => history.goBack()}
                  movies={movies.filter(movie => movie.Director.Name === match.params.name)} />
              </Col>
            );
          }} />

          <Route path={`/users/${user}`} render={({ history }) => {
            if (!user)
              return <Redirect to='/' />
            return <Col>
              <ProfileView user={user}
                onBackClick={() => history.goBack()} />
            </Col>
          }} />
        </Row>

      </Router>

    );
  }
}
