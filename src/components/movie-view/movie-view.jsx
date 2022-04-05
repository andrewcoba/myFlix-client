import React from 'react';
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types';
import '.movie-view.scss'

import { Card, Col, Container, Row, Button } from 'react-bootstrap';
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
      <Container>
        <Row>
          <Col>
            <Card id='movie-view'>
              <Card.Body>
                <Card.Img id='movie-view-image' variant='top' src={movie.ImagePath} />
                <Card.Title id='movie-title' className='movie-title'>{movie.title}</Card.Title>
                <Card.Text id='movie-description' className='movie-description'>{movie.Description}</Card.Text>
                <Card.Text id='movie-director' className='movie-director'>Director: {movie.Director.Name}</Card.Text>
                <Card.Text id='movie-genre' className='movie-genre'>Genre: {movie.Genre.Name}</Card.Text>
              </Card.Body>
            </Card>
            <Button id='movie-view-button' onClick={() => { onBackClick(null); }}>Back</Button>
          </Col>
        </Row>
      </Container>
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
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string.isRequired
    }),
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
};