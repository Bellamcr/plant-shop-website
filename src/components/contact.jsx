import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestore } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const Contact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 

  const onSubmit = async (e) => {
    e.preventDefault();

    // await createUserWithEmailAndPassword(firebaseAuth, email)
      ((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setDoc(doc(firestore, "ContactUs", user.uid), {
          Name: name,
          Email: email,
          Message: message,
          id: user.uid,
        });
        // navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="auth-container">
      <br />
      <h2>Contact Us</h2>
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
          <label htmlFor="password">Message: </label>
          <textarea
            type="text"
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Message"
          />
        </div>
        <br />
        <div className="container-btn">
          <button className="btn-auth mybtn" type="submit" onClick={onSubmit}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
