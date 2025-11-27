import MovieCard from './MovieCard';

function MovieList({ movies = [], onLike = () => {}, showRating = true }) {
  if (movies.length === 0) {
    return <p>Nenhum filme disponível.</p>;
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id ?? movie.title}>
          <MovieCard
            movie={movie}
            onLike={() => onLike(movie)}
            showRating={showRating}
          />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;