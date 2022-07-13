import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
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
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"} `}
        />
        {cartOpen && <div className="shop-cart"> </div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
