import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function ListProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(firestore, "Products"));
    console.log(querySnapshot);
    const result = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(result);
  };

  useEffect(() => {
    console.log("Fetching data...");
    fetchProducts();
  }, []);

  const onDelete = (id) => {
    const docRef = doc(firestore, "Products", id);
    deleteDoc(docRef)
      .then(() => {
        fetchProducts();
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h2>Products in Stock</h2>
      <div className="list-products">
        {products?.map((product) => (
          <div className="product" key={product.id}>
            <img
              className="product-img"
              src={product.ProductImg}
              alt={product.ProductName}
            />
            <h2 className="product-name">{product.ProductName}</h2>
            <p className="price">C$ {product.ProductPrice}</p>
            <button className="delete-btn" onClick={() => onDelete(product.id)}>
              Delete product
            </button>
          </div>
        ))}
        <div>
          <button
            className="addproduct-btn"
            onClick={() => navigate("/adminadd")}
          >
            ADD NEW PRODUCT
          </button>
        </div>
      </div>
    </>
  );
}
