import { useEffect, useState } from "react";
import "../css/shop.css";
import chineseevergreen from "../images/chineseevergreen.jpg";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const querySnapshot = await getDocs(collection(firestore, "Products"));
      console.log(querySnapshot);
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(result);
    };

    console.log("Fetching data...");
    fetchPost();
  }, []);

  return (
    <>
      <h2>All products</h2>
      <div className="cards">
        {products?.map((product) => (
          <div className="card" key={product.id}>
            <img
              className="card_img"
              src={product.ProductImg}
              alt={product.ProductName}

            />
            <h2>{product.ProductName}</h2>
            <p className="price">CAD${product.ProductPrice}</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
