function Register() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Register Page</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <br />
        <input type="email" placeholder="Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Register;
