import React from "react";
import { useStateValue } from "../stateProvider";
import "./ReviewProducts.css";

function ReviewProducts({ id, image, title, price, year, day, month }) {
  const [{ basket }, dispatch] = useStateValue();
  let quantity = 0;
  for (const item of basket) {
    if (item.id === id) {
      quantity++;
    }
  }
  console.log(quantity);
  const addToBasket = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: 'ADD_TO_BASKET',
    //   id:
    // })
  };
  return (
    <div className="reviewProduct">
      <div className="reviewProduct__body">
        <div className="reviewProduct__body__section">
          <img className="reviewProduct__Image" src={image} alt="" />
        </div>
        <div className="reviewProduct__body__section reviewProduct__body__section__second">
          <div className="reviewProduct__title">{title}</div>
          {/* <div className="checkoutProduct__rating">{Array(rating).fill()}</div> */}
          <div className="reviewProduct__price">$ {price}</div>
          <select
            name="qty"
            className="reviewProduct__qty"
            onChange={addToBasket}
          >
            <option disabled selected>
              {quantity}
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div>Sold by: Elena Choi</div>
          <button>Add gift options</button>
        </div>
        <div className="reviewProduct__body__section">
          <div>Choose your Prime delivery option: </div>
          <input type="radio" defaultChecked />
          {`${day}, ${month}.${year}`}
          <div>FREE Standard Delivery</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewProducts;
