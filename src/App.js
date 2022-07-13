import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import { itemsList } from "./items-list";

function App() {
  const [items, setItems] = useState(itemsList)
  return (
    <div className="wrapper">
      <Header />
      <Items items={items} />
      <Footer />
    </div>
  );
}

export default App;
