import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestore } from "../firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastId, setLastId] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // setDoc(doc(firestore, "SignedUpUsersData", "user.id"), {
        //   Name: name,
        //   Email: email,
        //   User: user.id,
        // });
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
      try {
      const docRef = await addDoc(collection(firestore, "SignedUpUsersData"), {
        Name: name,
        Email: email,
      });
      setLastId(docRef.id);
      console.log("Document written with ID: ", docRef.id);
      } catch (e) {
      console.error("Error adding document: ", e);
      }
  };

  return (
    <div className="auth-container">
      <br />
      <h2>Sign Up</h2>
      <form>
        <div className="form-text">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </div>
        <div className="form-text">
          <label htmlFor="email-address">Email address: </label>
          <input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div className="form-text">
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
          <button className="btn-auth mybtn" type="submit" onClick={onSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
      <p className="text-signup">
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </p>
    </div>
  );
};

export default Signup;
