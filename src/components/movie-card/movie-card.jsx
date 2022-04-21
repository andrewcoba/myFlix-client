import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';
import { CardGroup, Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container>
        <CardGroup>
          <Card id='movie-card'>
            <Card.Img variant='top' className='img-thumbnail' src={movie.ImagePath} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Link to={`/movies/${movie._id}`}>
                <Button id='card-button' variant='warning' className='font-weight-bold text-light'>Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    );
  };
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired
};