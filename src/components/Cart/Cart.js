import React from "react";
import { MdClose } from "react-icons/md";
import CartContent from "./CartContent";

export default function Cart(props) {
  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Cart is empty.</h2>
      </div>
    );
  };
  return (
    <div className="shop-cart">
      <div>
        <div className="cart-header">
          <h3>Cart</h3>
          <div className="cart-close-button">
            <MdClose onClick={() => props.setCartOpen(false)} />
          </div>
        </div>
        {props.orders.length ? (
          <CartContent orders={props.orders} onDelete={props.onDelete} />
        ) : (
          showNothing()
        )}
      </div>
    </div>
  );
}
