function Profile({ user }) {
  return (
    <div>
      <h3>Olá, {user.name}!</h3>
      {user.isAdmin && <p>Admin</p>}
      <p>{user.age >= 18 ? 'Maior de idade' : 'Menor de idade'}</p>
      <ul>
        {user.favoriteMovies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
      <button onClick={() => console.log('Clicou!')}>Ação</button>
    </div>
  );
}

export default Profile;
