import avatar from '../img/avatar.png'
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Logo</span>
        <span className="title">Register</span>

        <form action="">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="file" style={{display: "none"}} name="image" id="image"/>
          <label htmlFor="image">
            <img src={avatar} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
