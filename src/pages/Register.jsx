import { useState } from "react";
import avatar from "../img/avatar.png";
import { auth, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setNewUser({ ...newUser, avatar: e.target.files[0] });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, newUser.name);
      const uploadTask = uploadBytesResumable(storageRef, newUser.avatar);

      uploadTask.on(
        (error) => {
          setError(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(user, {
              displayName: user.name,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Logo</span>
        <span className="title">Register</span>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            onChange={(e) => changeHandler(e)}
            value={newUser.name}
            name="name"
            placeholder="Name"
          />
          <input
            type="email"
            onChange={(e) => changeHandler(e)}
            name="email"
            value={newUser.email}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => changeHandler(e)}
            name="password"
            value={newUser.password}
            placeholder="Password"
          />
          <input
            type="file"
            onChange={(e) => changeFileHandler(e)}
            style={{ display: "none" }}
            name="image"
            //value={newUser.avatar}
            id="image"
          />
          <label htmlFor="image">
            <img src={avatar} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign up</button>
          {error}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
