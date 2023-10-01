
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Logo</span>
        <span className="title">Login</span>

        <form action="">
         
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button type="submit">Sign in</button>
        </form>
        <p>You don&apos;t have an account? Sign up</p>
      </div>
    </div>
  );
};

export default Login;
