import React, {useState} from "react";
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {register} from "./serviceWorker";
import {auth} from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://i.ibb.co/bbQ053v/Logo-II.png"
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5 className='pass_text'>Password</h5>
          <input
            className="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Log-in
          </button>
        </form>
        <p>By clicking on Log-in, you will agree to our Terms & Conditions</p>
        <button onClick={register} className="login__registerButton">
          Create New Account
        </button>
      </div>
      <img
        className="illustration_bottom"
        src="https://i.ibb.co/Wcf3nz3/6192.png"
      ></img>
    </div>
  );
}

export default Login;
