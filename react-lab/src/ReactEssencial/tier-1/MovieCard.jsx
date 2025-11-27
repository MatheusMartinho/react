const DEFAULT_MOVIE = {
  title: 'Vertigo',
  rating: 5,
};

function MovieCard({ movie = DEFAULT_MOVIE, onLike = () => {}, showRating = true }) {
  const { title, rating } = movie;

  return (
    <article className="movie-card">
      <h3>{title}</h3>
      {showRating && <p>Rating: {rating}</p>}
      <button type="button" onClick={() => onLike(movie)}>
        Curtir
      </button>
    </article>
  );
}

const MovieCardArrow = ({ movie = DEFAULT_MOVIE, onLike = () => {}, showRating = true }) => {
  const { title, rating } = movie;

  return (
    <article className="movie-card movie-card--arrow">
      <h3>{title}</h3>
      {showRating && <p>Rating: {rating}</p>}
      <button type="button" onClick={() => onLike(movie)}>
        Curtir
      </button>
    </article>
  );
};

export { MovieCardArrow };
export default MovieCard;