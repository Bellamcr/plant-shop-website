import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase";

// https://stackoverflow.com/questions/65948671/how-to-go-back-to-previous-route-in-react-router-dom-v6

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user.id);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <>
      <div className="auth-container">
        <h2>Login</h2>
        <br />
        <form className="form-auth">
          <div className="form-text">
            <label htmlFor="email-address">Email address: </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={email}
              required
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-text">
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="container-btn">
            <button className="btn-auth mybtn" onClick={onLogin}>
              LOGIN
            </button>
          </div>
        </form>
        {error && <span className="error-msg">{error}</span>}
        <br />
        <p className="text-login">
          No account yet? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </>
  );
};

export default Login;
