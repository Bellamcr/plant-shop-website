import React from "react";
import { useState } from "react";
import { firestore, storage } from "./firebase";

export const AddProducts = () => {
  //useState hook the first property (productName) is a variable and the second property is a function
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [error, setError] = useState("");
  // If encounter any problem during addProducts process show the error on web

  const types = ["image/png", "image/jpg", "image/jpeg"];

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Type invalid choose png, jpg or jpeg.");
    }
  };
  //   Add product form submit event
  const addProducts = (e) => {
    e.preventDefault();

    // Storing the image
    const uploadTask = storage
      .ref(`product-images/${productImg.name}`)
      .put(productImg);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => {
        setError(err.message);
      },
      () => {
        //getting product url an if it is OK store in firebase
        storage
          .ref("product-images")
          .child(productImg.name)
          .getDownloadURL()
          .then((url) => {
            firestore
              .collection("Products")
              .add({
                ProductName: productName,
                ProductPrice: Number(productPrice),
                ProductImg: url,
              })
              .then(() => {
                setProductName("");
                setProductPrice(0);
                setProductImg("");
                setError("");
                document.getElementById("file").value = "";
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  //If the product is added claring input fields

  return (
    <div className="container2">
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete="off" className="formgroup" onSubmit={addProducts}>
        <label htmlFor="product-name">Product Name</label>
        <br />
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        ></input>
        <br />
        <label htmlFor="product-price">Product Price</label>
        <br />
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        ></input>
        <br />
        <label htmlFor="product-img">Product Image</label>
        <input
          type="file"
          className="form-control"
          onChange={productImgHandler}
          id="file"
        ></input>
        <br />
        <button className="btn btn-success btn-md mybtn">ADD</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};

//  create a route
//  bootstrap classes - AddProducts and productImgHandler
//  add import of bootstrap
//  for the ADD botton be bigger in cell screen
// @media(max-width: 768px) {
//     .mybtn {
//         width: 100%
//     }
// }
