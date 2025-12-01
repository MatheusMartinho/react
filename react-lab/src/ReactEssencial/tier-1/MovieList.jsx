import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.title}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;