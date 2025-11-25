import MovieCard, { MovieCardArrow } from './ReactEssencial/tier-1/MovieCard';

const sampleMovie = { title: 'Vertigo', rating: 5 };
const sampleMovieOne = {title: 'Interstellar', rating: 4};

function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Tier 1 · Componentes Funcionais</h1>
      <section style={{ display: 'flex', gap: '2rem' }}>
        <div>
          <h2>Function declaration</h2>
          <MovieCard movie={sampleMovie} />
          <MovieCard movie={sampleMovieOne} />
        </div>
        <div>
          <h2>Arrow function</h2>
          <MovieCardArrow movie={sampleMovie} />
          <MovieCardArrow movie={sampleMovieOne} />
        </div>
      </section>
    </main>
  );
}

export default App;
