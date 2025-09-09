function Login() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login Page</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;
