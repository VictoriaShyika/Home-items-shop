import { useState } from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Notif from "./components/Notif";
import ShowFullItem from "./components/ShowFullItem";
import { itemsList } from "./items-list";

function App() {
  const [orders, setOrders] = useState([]);

  const [addingNotif, setAddingNotif] = useState(false);
  const [currentItems, setCurrentItems] = useState(itemsList);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState();

  const addToOrders = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      setOrders([...orders, item]);
      setAddingNotif(true);
      console.log(">>>>>>>Notif Added");
      setTimeout(() => {
        setAddingNotif(false);
        console.log("<<<<<<<<<<<<Notif deleted");
      }, 5000);
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

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={onDelete} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrders} />
      {showFullItem && (
        <ShowFullItem
          item={fullItem}
          onShowItem={onShowItem}
          onAdd={addToOrders}
        />
      )}
      {addingNotif && <Notif />}
      <Footer />
    </div>
  );
}

export default App;
