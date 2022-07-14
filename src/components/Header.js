import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

export default function Header(props) {


  const [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House staff</span>
        <ul className="nav">
          <li>About</li>
          <li>Contacts</li>
          <li>Office</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(true)}
          className={`shop-cart-button ${cartOpen && "active"} `}
        />
        {cartOpen && <Cart orders={props.orders} onDelete={props.onDelete} setCartOpen={setCartOpen} />
      }
      </div>
      <div className="presentation"></div>
    </header>
  );
}
