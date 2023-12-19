import "./css/cart.css";
import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Cart({ auth, setAuth, children }) {
  const { shoppingCart, totalPrice, totalQty } = useContext(CartContext);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        // navigate("/login");
      }
    });
  });

  return (
    <>
      <h2>Cart</h2>
      <div className="shopping-cart">
        {shoppingCart.length === 0 && (
          <>
            <div>
              No items in your cart or slow internet causing trouble (Refresh
              the page) or you are not logged in
            </div>
            <div>
              <NavLink to="/">Return to Home page</NavLink>
            </div>
          </>
        )}
        {shoppingCart &&
          shoppingCart.map((product) => (
            <div className="cart-card" key={product.id}>
              <button
                className="delete"
                // onClick={() =>
                //   dispatch({ type: "DELETE", id: cart.ProductID, cart })
                // }
              >Delete
              </button>

              {/* <div className="cart-img">
                <img src={cart.ProductImg} alt="not found" />
              </div> */}
              <div className="desciption">
                <div className="cart-name">{product.ProductName}</div>

                <div className="cart-price-orignal">
                  CA$ {product.ProductPrice}
                </div>
              </div>

              <div className="quantity">
                <button
                  className="inc-btn"
                  // onClick={() =>
                  // dispatch({ type: "INC", id: cart.product.id, cart })
                  // }
                >
                  +
                </button>

                <div className="prod-quantity">{product.qty}</div>

                <button
                  className="dec-btn"
                  // onClick={() =>
                  //   dispatch({ type: "DEC", id: cart.product.id, cart })
                  // }
                >
                  -
                </button>
              </div>

              <div className="cart-price">
                CA$ {product.ProductPrice * product.qty}
              </div>
            </div>
          ))}
        {shoppingCart.length > 0 && (
          <div className="cart-summary">
            <div className="cart-summary-heading">Cart-Summary</div>
            <div className="cart-summary-price">
              <span>Total Price</span>
              <span>{totalPrice}</span>
            </div>
            <div className="cart-summary-price">
              <span>Total Qty</span>
              <span>{totalQty}</span>
            </div>
            <NavLink to="cashout" className="cashout-link">
              <button className="cashout" style={{ marginTop: 5 + "px" }}>
                Cash on delivery
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}
