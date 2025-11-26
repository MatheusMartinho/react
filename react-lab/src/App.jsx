import './App.css';
import MovieCard, { MovieCardArrow } from './ReactEssencial/tier-1/MovieCard';
import Profile from './ReactEssencial/tier-1/Profile';

const movies = [
  { title: 'Vertigo', rating: 5 },
  { title: 'Interstellar', rating: 4 },
  { title: 'Everything Everywhere All at Once', rating: 5 },
];

function App() {
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

          <Profile />
        </article>
      </section>
    </div>
  );
}

export default App;
