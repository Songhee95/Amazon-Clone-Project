import React from "react";
import { useStateValue } from "../stateProvider";
import "./CheckoutProduct.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  let quantity = `Qty: ${basket.length}`;
  console.log(quantity);
  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const addToBasket = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: 'ADD_TO_BASKET',
    //   id:
    // })
  };
  return (
    <div className="checkoutProduct">
      <input
        className="checkoutProduct__checkbox"
        type="checkbox"
        defaultChecked
      />
      <div className="checkoutProduct__body">
        <div className="checkoutProduct__image__wrap">
          <img className="checkoutProduct__Image" src={image} alt="" />
        </div>
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <div className="checkoutProduct__small">
            <small>Shipped from : Songhee Yim</small>
          </div>
          <div className="checkoutProduct__small">
            <small>gift options not available. Learn more</small>
          </div>
          {/* <div className="checkoutProduct__rating">{Array(rating).fill()}</div> */}
          <select
            name="qty"
            className="checkoutProduct__qty"
            onChange={addToBasket}
          >
            <option disabled selected>
              {quantity}
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <button className="checkoutProduct__btn" onClick={removeFromBasket}>
            Delete
          </button>
          <button className="checkoutProduct__btn">Save for later</button>
          <button className="checkoutProduct__compare">
            Compare with similar items
          </button>
        </div>
      </div>
      <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
}

export default CheckoutProduct;
