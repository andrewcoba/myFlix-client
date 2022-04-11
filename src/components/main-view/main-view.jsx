import React from 'react';
import axios from 'axios';
<<<<<<< Updated upstream
=======
import { Col, Row, Container, Button } from 'react-bootstrap';
import './main-view.scss'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
<<<<<<< Updated upstream
>>>>>>> Stashed changes

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
<<<<<<< Updated upstream
=======
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavbarView } from '../navbar-view/navbar-view';
>>>>>>> Stashed changes
=======

import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { ProfileView } from '../profile-view/profile-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { NavbarView } from '../navbar-view/navbar-view'
>>>>>>> Stashed changes

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
<<<<<<< Updated upstream
      selectedMovie: null,
<<<<<<< Updated upstream
    }
=======
      user: null,
      register: null,
=======
      user: null
>>>>>>> Stashed changes
    };
>>>>>>> Stashed changes
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
    axios.get('https://infoaboutmovies123.herokuapp.com')
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
<<<<<<< Updated upstream

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
=======

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
    let accesstoken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
>>>>>>> Stashed changes
  }

<<<<<<< Updated upstream
  render() {
<<<<<<< Updated upstream
    const { movies, selectedMovie, user } = this.state;
=======
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
>>>>>>> Stashed changes

    // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // if (movies.length === 0) return <div className='main-view' />;

    return (
<<<<<<< Updated upstream
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
          ))
        }
      </div>
=======
      <Router>
        <Button id='logout-button' onClick={() => { this.onLoggedOut() }}>Logout</Button>
        <Row>
          <NavbarView user={user} />
        </Row>
=======
    const { movies, user } = this.state;

    // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    // if (!register) return <RegistrationView onRegistration={(register) => this.onRegistration(register)} />;

    // if (movies.length === 0) return <div className="main-view" />;

    return (
      <Router>
        <Button id='logout-button' onClick={() => { this.onLoggedOut() }}>Logout</Button>

        <Row>
          <NavbarView user={user} />
        </Row>

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <Col>
                <RegistrationView />
              </Col>
            };
          }} />

          <Route exact path='/movies/:movieId' render={({ match, history }) => {
            if (!user) {
              return (
                <Col>
                  <LoginView on onLoggedIn={user => this.onLoggedIn(user)} />
=======
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
>>>>>>> Stashed changes
                </Col>
              );
            }

            if (movies.length === 0) {
              return <div className='movie-view' />;
            }
<<<<<<< Updated upstream
            return (
              <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)}
                  onBackClick={() => history.goBack()} />
=======

            return (
              <Col md={8}>
                <GenreView
                  genre={movies.find(m => m.Genre.Name === match.params.name).Genre}
                  onBackClick={() => history.goBack()}
                  movies={movies.filter(movie => movie.Genre.Name === match.params.name)} />
>>>>>>> Stashed changes
              </Col>
            );
          }} />

<<<<<<< Updated upstream
          <Route exact path='/profile' render={({ history }) => {
=======
          <Route exact path='/director/:name' render={({ match, history }) => {
>>>>>>> Stashed changes
            if (!user) {
              return (
                <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );
            }
<<<<<<< Updated upstream
            return (
              <Col md={8}>
                <ProfileView movies={movies} onBackClick={() => history.goBack()} />
=======

            if (movies.length === 0) {
              return <div className='movie-view' />
            }

            return (
              <Col md={8}>
                <DirectorView
                  director={movies.filter(movie => movie.Director.Name === match.params.name)} />
>>>>>>> Stashed changes
              </Col>
            );
          }} />

<<<<<<< Updated upstream
          <Route path='/genre/:name' render={({ match, histroy }) => {
            if (!user) {
              return (
                <Col>
                  <LoginView onLoggedIn={user => }</Col>
              )
            }
          }}
            {selectedMovie
              ? (
                <Col md={6}>
                  <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                </Col>
              )
              : (
                movies.map(movie => (
                  <Col md={6} lg={4}>
                    <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                  </Col>
                ))
              )
            }
        </Row>
      </Container>
>>>>>>> Stashed changes
=======
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
>>>>>>> Stashed changes
    );
  }
}

export default MainView;