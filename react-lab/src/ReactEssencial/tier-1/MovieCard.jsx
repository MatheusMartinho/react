const DEFAULT_MOVIE = {
  title: 'Vertigo',
  rating: 5,
};

function MovieCard({ movie = DEFAULT_MOVIE }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

const MovieCardArrow = ({ movie = DEFAULT_MOVIE }) => (
  <div>
    <h2>{movie.title}</h2>
    <p>Rating: {movie.rating}</p>
  </div>
);

export { MovieCardArrow };
export default MovieCard;