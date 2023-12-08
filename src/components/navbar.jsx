import logo from "../images/plants.png";

export default function Navbar() {
  return (
    <>
      <h1> Green house </h1>
      <div className="navbar">
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>
      </div>
      <div className="leftside">
        <img src={logo} alt="Green House Logo" />
      </div>
      <div className="rightside">
        <button>
          <NavLink to="/login">Login</NavLink>
        </button>
        <button>
          <NavLink to="/signup">Sign up</NavLink>
        </button>
      </div>
    </>
  );
}
