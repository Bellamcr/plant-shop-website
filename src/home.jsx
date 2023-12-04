import "./App.css";
import "./home.css";

export default function Home() {
  return (
    <>
      <h1> Green house </h1>
      <div className="grid">
        <div className="container">
          <img src="greenhouse.jpg" alt="plants" class="photo1" />
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
