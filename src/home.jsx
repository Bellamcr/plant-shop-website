import "./css/home.css";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import greenhouse from "./images/greenhouse.jpeg";

export default function Home() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  return (
    <>
      <div className="grid">
        <div className="container">
          <img src={greenhouse} alt="plants" class="photo1" />
          <button className="photobutton" onClick={() => navigate("/shop")}>
            Find the right plant for you!
          </button>{" "}
        </div>
        <p className="text1">
          Plants in your home or office can make you feel more comfortable,
          soothed, and natural.
        </p>
      </div>
      <h2>Clients photos</h2>
    </>
  );
}
