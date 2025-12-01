import './App.css';
import { useState } from 'react';
import MovieCard from './ReactEssencial/tier-1/MovieCard';
import MovieList from './ReactEssencial/tier-1/MovieList';
import Profile from './ReactEssencial/tier-1/Profile';

const movies = [
  { title: 'Vertigo', rating: 5 },
  { title: 'Interstellar', rating: 4 },
];

const users = [
  { name: 'Matheus', age: 26, isAdmin: true, favoriteMovies: ['Filme1', 'Filme2'] },
  { name: 'Manuela', age: 17, isAdmin: false, favoriteMovies: ['Filme3', 'Filme4'] },
];

function App() {
  const [likes, setLikes] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h1>Tier 1 - React</h1>

      {/* MovieCard individual */}
      <h2>MovieCard</h2>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}

      {/* MovieList */}
      <h2>MovieList</h2>
      <MovieList movies={movies} />

      {/* Profile */}
      <h2>Profile</h2>
      {users.map((user) => (
        <Profile key={user.name} user={user} />
      ))}

      {/* Counter com useState */}
      <h2>Counter</h2>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>+1</button>
      <button onClick={() => setLikes(0)}>Reset</button>

      {/* Rating com useState */}
      <h2>Rating</h2>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          style={{ color: star <= rating ? 'gold' : 'gray' }}
        >
          ★
        </button>
      ))}
      <p>{rating} estrela(s)</p>
    </div>
  );
}

export default App;
