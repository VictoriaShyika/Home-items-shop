import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

export default function Order(props) {
  let priceEquation = (props.item.price * props.item.quantity).toFixed(2);
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [price, setPrice] = useState(priceEquation);

  const onMinesQuantity = () => {
    if (quantity > 1) {
      setQuantity((props.item.quantity -= 1));
    }
    setPrice(price);
    props.setListener(!props.listener);
  };
  const onAddQuantity = () => {
    if (quantity < 101) {
      setQuantity((props.item.quantity += 1));
    }
    setPrice(price);
    props.setListener(!props.listener);
  };

  const onType = (e) => {
    if (e.target.value < 101) {
      setQuantity((props.item.quantity = Number(e.target.value)));
    }
    setPrice(price);
    props.setListener(!props.listener);
  };

  return (
    <div className="item">
      <img src={"./img/" + props.item.img} alt={props.item.desc} />
      <h2>{props.item.title}</h2>
      <div className="control">
        <div>
          <Button onClick={() => onMinesQuantity()}>
            <HiOutlineMinus />
          </Button>
          <Input quantity={quantity} onType={onType} />
          <Button onClick={() => onAddQuantity()}>
            <HiOutlinePlus />
          </Button>
        </div>
        <b>{priceEquation}$</b>
      </div>

      <MdClose
        className="delete-icon"
        onClick={() => props.onDelete(props.item.id)}
      />
    </div>
  );
}
