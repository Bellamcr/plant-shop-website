import "./css/cart.css";
import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Cart() {
  const { shoppingCart, totalPrice, totalQty, dispatch } =
    useContext(CartContext);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        navigate("/login");
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
              No items in your cart or slow internet causing trouble, refresh
              the page or return to <NavLink to="/shop">Shop</NavLink> page.
            </div>
          </>
        )}
        {shoppingCart &&
          shoppingCart.map((product) => (
            <div className="cart-card" key={product.id}>
              <button
                className="delete"
                onClick={() =>
                  dispatch({
                    type: "DELETE",
                    id: product.id,
                    product,
                  })
                }
              >
                Delete
              </button>
              <div>
                <img
                  className="cart-img"
                  src={product.ProductImg}
                  alt="not found"
                />
              </div>
              <div className="description">
                <div className="cart-name">{product.ProductName}</div>

                <div className="cart-price-orignal">
                  C$ {product.ProductPrice}
                </div>
              </div>

              <div className="quantity">
                <button
                  className="qty-btn"
                  onClick={() =>
                    dispatch({
                      type: "DEC",
                      id: product.id,
                      product,
                    })
                  }
                >
                  -
                </button>
                <div className="prod-quantity">{product.qty}</div>
                <button
                  className="qty-btn"
                  onClick={() =>
                    dispatch({
                      type: "INC",
                      id: product.id,
                      product,
                    })
                  }
                >
                  +
                </button>
              </div>

              <div className="cart-price">
                C$ {Math.round(product.ProductPrice * product.qty * 100) / 100}
              </div>
            </div>
          ))}
        {shoppingCart.length > 0 && (
          <div className="cart-summary">
            <div className="cart-summary-heading">Cart-Summary</div>
            <div className="cart-summary-price">
              <span>Total Price: C$ </span>
              <span>{Math.round(totalPrice * 100) / 100}</span>
            </div>
            <div className="cart-summary-price">
              <span>Total Qty: </span>
              <span>{totalQty}</span>
            </div>
            <NavLink to="cashout" className="cashout-link">
              <button className="cashout">Cash on delivery</button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}
