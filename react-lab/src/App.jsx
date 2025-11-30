import './App.css';
import MovieCard, { MovieCardArrow } from './ReactEssencial/tier-1/MovieCard';
import Profile from './ReactEssencial/tier-1/Profile';
import MovieList from './ReactEssencial/tier-1/MovieList';
import { useState } from 'react';

const movies = [
  { title: 'Vertigo', rating: 5 },
  { title: 'Interstellar', rating: 4 },
  { title: 'Everything Everywhere All at Once', rating: 5 },
];

const users = [
  { name: 'Matheus Moura Martino', age: 26, isAdmin: true, favoriteMovies: ['teste1', 'teste2', 'teste3'] },
  { name: 'Manuela Moura Feitosa', age: 17, isAdmin: false, favoriteMovies: ['teste4', 'teste5', 'teste6'] },
  { name: 'Antonio', age: 17, isAdmin: true, favoriteMovies: ['teste7', 'teste8', 'teste9'] },
];

function App() {
  
  const [likes, setLikes] = useState(0);
  const handleAdd = () => setLikes((prev) => prev + 1);
  const handleReset = () => setLikes(0);

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Tier 1 · React Essencial</p>
        <h1>Componentes + JSX, lado a lado</h1>
        <p className="lede">
          Painel rápido para revisar function vs arrow, chaves no JSX, lista com key e handlers.
        </p>

        <div className="pill-row">
          <span className="pill">Function vs Arrow</span>
          <span className="pill">Listas com key</span>
          <span className="pill">Condicionais</span>
          <span className="pill">Eventos</span>
        </div>
      </header>

      <section className="card-grid">
        <article className="card">
          <div className="card__header">
            <p className="eyebrow">Componentes Funcionais</p>
            <h2>MovieCard nos dois formatos</h2>
            <p className="hint">Mesmo layout retornado por declaration e arrow.</p>
          </div>

          <div className="two-column">
            <div className="column">
              <h3>Function declaration</h3>
              <div className="stack">
                {movies.map((movie) => (
                  <MovieCard key={`func-${movie.title}`} movie={movie} />
                ))}
              </div>
            </div>

            <div className="column">
              <h3>Arrow function</h3>
              <div className="stack">
                {movies.map((movie) => (
                  <MovieCardArrow key={`arrow-${movie.title}`} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card__header">
            <p className="eyebrow">JSX (HTML + JS)</p>
            <h2>Profile com chaves, ternário e lista</h2>
            <p className="hint">Repare na condicional de admin, ternário de idade e map com key.</p>
          </div>

          {users.map((u) => (
            <Profile key={u.name} user={u} favoriteMovies={['Interstellar', 'Into the Wild','Godfather']} />
          ))}
        </article>
      </section>

      <article className="card">
        <div className="card__header">
          <p className="eyebrow">Props</p>
          <h2>MovieList passando movie/onLike/showRating</h2>
        </div>

        <MovieList
          movies={movies}
          onLike={(movie) => console.log('Curti:', movie.title)}
          showRating
        />

        <div className="stack">
          <div className="button-row">
            <button type="button" onClick={handleAdd}>+1 like</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>

          <CounterDisplay count={likes} />
        </div>
      </article>
    </div>
  );
}

function CounterDisplay({ count }) {
  return <p>Total likes compartilhados: {count}</p>;
}

export default App;
