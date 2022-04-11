import React from 'react';
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types';
import './movie-view.scss'

import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
  }

  render() {
    const { movie, onBackClick } = this.props;

    return (
<<<<<<< Updated upstream
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
=======
      <Container>
        <Row>
          <Col>
            <Card id='movie-view'>
              <Card.Body>
                <Card.Img id='movie-view-image' variant='top' src={movie.ImagePath} />
                <Card.Title id='movie-title' className='movie-title'>{movie.title}</Card.Title>
                <Card.Text id='movie-description' className='movie-description'>{movie.Description}</Card.Text>
                <Link to={`/director/${movie.Director.Name}`}>
                  <Button variant='link' id='movie-director' className='movie-director'>
                    Director: {movie.Director.Name}
                  </Button>
                </Link>
                <Link to={`/genre/${movie.Genre.Name}`}>
                  <Button variant='link' id='movie-genre' className='movie-genre'>
                    Genre: {movie.Genre.Name}
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Button id='movie-view-button' onClick={() => { onBackClick(null); }}>Back</Button>
            <Button id='movie-view-button' onClick={() => { }}>Add to favorites</Button>
          </Col>
        </Row>
      </Container>
>>>>>>> Stashed changes
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }),
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
};