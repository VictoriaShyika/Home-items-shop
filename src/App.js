import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import { itemsList } from "./items-list";

function App() {
  const [items, setItems] = useState(itemsList);
  const [orders, setOrders] = useState([]);

  const addToOrders = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };


  const onDelete = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={onDelete} />

      <Items items={items} onAdd={addToOrders} />
      <Footer />
    </div>
  );
}

export default App;
