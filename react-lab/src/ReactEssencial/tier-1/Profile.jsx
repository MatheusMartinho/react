const DEFAULT_USER = {
  name: 'Ada Lovelace',
  age: 17,
  isAdmin: true,
};

const DEFAULT_FAVORITES = ['Alien', 'Arrival', 'Interstellar'];

function Profile({ user = DEFAULT_USER, favoriteMovies = DEFAULT_FAVORITES }) {
  const { name, age, isAdmin } = user;

  return (
    <div className="profile">
      <div className="profile__header">
        <p className="eyebrow">JSX em ação</p>
        <h3>Olá, {name}!</h3>
      </div>

      {isAdmin && <p className="badge">Admin</p>}

      <p className="profile__age">
        Status: {age >= 18 ? 'Maior de idade' : 'Menor de idade'}
      </p>

      <div className="profile__list">
        <p className="eyebrow">Favoritos</p>
        <ul>
          {favoriteMovies.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </div>

      <button type="button" onClick={() => console.log('Perfil clicado')}>
        Logar ação
      </button>
    </div>
  );
}

export default Profile;
