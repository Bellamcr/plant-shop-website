import logo from "../images/plants.png";
import cart from "../images/shopping-cart.png";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

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
      <div className="header">
        <div className="leftside">
          <img
            className="logo"
            title="Home"
            src={logo}
            alt="Green House Logo"
            onClick={() => navigate("/")}
          />
        </div>
        <h1 className="headertext"> GREEN HOUSE </h1>
        <div className="rightside">
          {auth && auth.currentUser ? (
            <>
              <img
                className="cart"
                title="ShoppingCart"
                src={cart}
                alt="Shopping Cart"
                onClick={() => navigate("/cart")}
              />
              <button onClick={handleLogout}> Logout </button>
            </>
          ) : (
            <>
              <img
                className="cart"
                title="ShoppingCart"
                src={cart}
                alt="Shopping Cart"
                onClick={() => navigate("/cart")}
              />
              <button onClick={() => navigate("/login")}> Login </button>
              <button onClick={() => navigate("/signup")}> Sign up </button>
            </>
          )}
        </div>
      </div>
      <div className="navbar">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </>
  );
}
