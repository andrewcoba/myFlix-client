import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
<<<<<<< Updated upstream
      <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
    );
  }
=======
      <Container>
        <CardGroup>
          <Card id='movie-card'>
            <Card.Img variant='top' src={movie.ImagePath} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Link to={`/movies/${movie._id}`}>
                <Button id='card-button' onClick={() => onMovieClick(movie)} variant='link'>Open</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    )
  };
>>>>>>> Stashed changes
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};