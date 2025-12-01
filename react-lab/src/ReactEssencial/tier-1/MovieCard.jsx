import { useState } from 'react';

function MovieCard({ movie }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default MovieCard;