import React, {useState} from "react";


function Item({ name, category }) {
  const[addCart, setAddCart] =useState(false);
  const [changeCartButton, setChangeCartButton] = useState(false);

  const liClass = addCart?"in-cart":""

  function handleCart(){
    setAddCart(!addCart);
    setChangeCartButton(!changeCartButton)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{changeCartButton?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;