import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { firebaseAuth } from "./firebase";

// https://stackoverflow.com/questions/65948671/how-to-go-back-to-previous-route-in-react-router-dom-v6

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(-1) || navigate("/");
        console.log(user.id);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div>
            <h1>Login</h1>

            <form>
              <div className="email">
                <label htmlFor="email-address">Email address: </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password: </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="container-btn">
                <button className="btn-auth" onClick={onLogin}>Login</button>
              </div>
            </form>
            <p className="text-login">
              No account yet? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
