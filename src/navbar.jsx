import logo from "./images/plants.png";
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
    <div>
      <div className="header">
        <div className="leftside">
          <img className="logo" src={logo} alt="Green House Logo" />
        </div>
        <h1 className="headertext"> Green House </h1>
        <div className="rightside">
          {auth && auth.currentUser ? (
            <button onClick={handleLogout}> Logout </button>
          ) : (
            <button onClick={() => navigate("/login")}> Login </button>
          )}
          <button onClick={() => navigate("/signup")}> Sign up </button>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </ul>
      </nav>
    </div>
  );
}
