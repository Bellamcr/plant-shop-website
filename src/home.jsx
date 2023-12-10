import "./css/home.css";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function Home() {
  const auth = useContext(AuthContext);
  
  return (
    <>
      <div className="grid">
        <div className="container">
          {/* <img src="greenhouse.jpg" alt="plants" class="photo1" /> */}
          <p className="phototext">Find the right plant for you!</p>
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
