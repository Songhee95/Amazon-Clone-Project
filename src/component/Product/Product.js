import React, { useEffect, useState } from "react";
import { useStateValue } from "../stateProvider";
import "./Product.css";
import { db } from "../../firebase";

function Product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const [add, setAdd] = useState(false);
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        qty: 1,
        title: title,
        image: image,
        price: price,
        rating: rating,
        oriPrice: price,
      },
    });
    setAdd(!add);
  };
  useEffect(() => {
    if (user) {
      basket.map((item) => {
        console.log(item);
        db.collection("users")
          .doc(user?.uid)
          .collection("basket")
          .doc(item.id)
          .set({ item: item });
      });
    }
  }, [add]);

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
