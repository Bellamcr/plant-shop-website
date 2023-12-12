import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);

    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>Sign Up</h1>
            <form>
              <div className="email">
                <label htmlFor="email-address">Email address: </label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>
              
              <div className="password">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>
              <br />
              <div className="container-btn">
                <button className="btn-auth" type="submit" onClick={onSubmit}>Sign up</button>
              </div>
            </form>
            <p className="text-signup">
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
