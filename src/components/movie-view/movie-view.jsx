import React from 'react';

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
                <Card.Text id='movie-director' className='movie-director'>Director: {movie.Director.Name}</Card.Text>
                <Card.Text id='movie-genre' className='movie-genre'>Genre: {movie.Genre.Name}</Card.Text>
              </Card.Body>
            </Card>
            <Link to={`/directors/${movie.Diretor.Name}`}>
              <Button id='movie-view-button' onClick={() => { onBackClick(null); }}>Back</Button>
            </Link>
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