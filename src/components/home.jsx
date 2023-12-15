import "../css/home.css";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import greenhouse from "../images/greenhouse.jpeg";
import client1 from "../images/client1.jpg";
import client2 from "../images/client2.jpg";
import client3 from "../images/client3.jpg";
import client4 from "../images/client4.jpg";
import client5 from "../images/client5.jpg";


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
      <h2 className="text2">Clients photos</h2>
      <div className="clientphotos">
        <img
          className="client"
          src={client1}
          alt="Client Photo"
        /> 
        <img
          className="client"
          src={client2}
          alt="Client Photo"
        /> 
        <img
          className="client"
          src={client3}
          alt="Client Photo"
        /> 
        <img
          className="client"
          src={client4}
          alt="Client Photo"
        /> 
        <img
          className="client"
          src={client5}
          alt="Client Photo"
        />        
      </div>
    </>
  );
}
