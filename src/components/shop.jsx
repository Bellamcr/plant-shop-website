import { useContext, useEffect, useState } from "react";
import "../css/shop.css";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { CartContext } from "../CartContext";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const { dispatch } = useContext(CartContext);

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
      <div className="cards-container">
        {products?.map((product) => (
          <div className="card" key={product.id}>
            <img
              className="card-img"
              src={product.ProductImg}
              alt={product.ProductName}
            />
            <h2 className="card-name">{product.ProductName}</h2>
            <p className="price">C$ {product.ProductPrice}</p>
            <p>
              <button
                className="addcart-btn"
                onClick={() => dispatch({ type: "ADD_TO_CART", product })}
              >
                Add to Cart
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
