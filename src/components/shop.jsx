import "../css/shop.css";
import chineseevergreen from "../images/chineseevergreen.jpg";

export default function Shop() {
  return (
    <>
      <h1>All products</h1>
      <div className="cards">
        <div className="card">
          <img
            className="card_img"
            src={chineseevergreen}
            alt="Chinese Evergreen"
          />
          <h2>Chinese Evergreen</h2>
          <p className="price">$40</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
        <img
            className="card_img"
            src={chineseevergreen}
            alt="Chinese Evergreen"
          />
          <h2>Chinese Evergreen</h2>
          <p className="price">$40</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div className="card">
        <img
            className="card_img"
            src={chineseevergreen}
            alt="Chinese Evergreen"
          />
          <h2>Chinese Evergreen</h2>
          <p className="price">$40</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </>
  );
}