function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management System</h1>

      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button type="submit">Login</button>
      </form>

      <hr />

      <h2>Signup</h2>
      <form>
        <input type="email" placeholder="Email" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button type="submit">Signup</button>
      </form>

      <hr />

      <h2>Profile</h2>
      <p>Name: Test User</p>
      <p>Email: test@example.com</p>
    </div>
  );
}

export default App;
