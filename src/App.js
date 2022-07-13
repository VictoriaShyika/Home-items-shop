import { useState } from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import { itemsList } from "./items-list";

function App() {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(itemsList);

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

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(itemsList);
      return;
    }
    setCurrentItems(itemsList.filter((el) => el.category === category));
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={onDelete} />
      <Categories chooseCategory={chooseCategory} />
      <Items items={currentItems} onAdd={addToOrders} />
      <Footer />
    </div>
  );
}

export default App;
