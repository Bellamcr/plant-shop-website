import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { firestore, storage } from "../../firebase";


export default function AddProducts () {
  
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [lastId, setLastId] = useState();
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"]; // image types
  const metadata = {
    contentType: "image/jpeg",
  };
  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    console.log("file", selectedFile);
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      console.log("file 2", selectedFile);
      setError("");
    } else {
      console.log("failed");
      setProductImg(null);
      setError("Please select a valid image type (png or jpeg)");
    }
  };

  // add product
  const addProduct = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, "images/" + productImg.name);
    const uploadTask = uploadBytesResumable(storageRef, productImg, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          // ...
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            const docRef = addDoc(collection(firestore, "Products"), {
              ProductName: productName,
              ProductPrice: Number(productPrice),
              ProductImg: downloadURL,
            });
            setLastId(docRef.id);
            console.log("Document written with ID: ", docRef.id);
            setProductName("");
            setProductPrice(0);
            setProductImg(null);
            setError("");
          })
          .catch((err) => setError(err.message));
      }
    );
  };

  return (
    <div className="form-container">
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProduct}>
        <label htmlFor="product-name">Product Name: </label>
        <input
          type="text"
          className="form-control"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />
        <label htmlFor="product-price">Product Price: </label>
        <input
          type="number"
          className="form-control"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="product-img">Product Image: </label>
        <input
          type="file"
          className="form-control"
          id="file"
          required
          onChange={productImgHandler}
        />
        <br />
        <button type="submit" className="btn-success mybtn">
          ADD
        </button>
      </form>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

//  bootstrap classes - AddProducts and productImgHandler
