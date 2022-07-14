import React from "react";
import Order from "./Order";
import { MdClose } from "react-icons/md";

const showOrders = (props) => {
  let total = 0;
  props.orders.forEach((el) => (total += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="total">
        Total price: {new Intl.NumberFormat().format(total)}$
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Cart is empty.</h2>
    </div>
  );
};

export default function Cart(props) {
  return (
    <div className="shop-cart">
      <div>
        <div className="cart-header">
          <h3>Cart</h3>
          <div className="cart-close-button">
            <MdClose onClick={() => props.setCartOpen(false)} />
          </div>
        </div>
        {props.orders.length ? showOrders(props) : showNothing()}
      </div>
    </div>
  );
}
