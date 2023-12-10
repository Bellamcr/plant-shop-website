import logo from "../images/plants.png";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
        //navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <>
      <h1> Green house </h1>
      <div className="leftside">
        <img src={logo} alt="Green House Logo" />
      </div>
      <div className="rightside">
        {auth && auth.currentUser ? (
        <button onClick={handleLogout}> Logout </button>
      ) : (
        <button onClick={() => navigate("/login")}> Login </button>
      )}
        <button onClick={() => navigate("/signup")}> Sign up </button>
      </div>
      <div className="navbar">
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>
      </div>
      
    </>
  );
}
