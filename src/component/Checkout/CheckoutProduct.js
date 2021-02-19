import React, { useState } from "react";
import { useStateValue } from "../stateProvider";
import "./CheckoutProduct.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function CheckoutProduct({ id, image, title, price, qty }) {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const removeFromBasket = () => {
    //remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const dropdown = document.querySelector(".checkoutProduct__qty__wrap");

  const handleQthDropDown = (e) => {
    setOpen(!open);
  };
  const handleValue = (e) => {
    dispatch({
      type: "CHANGE_QTY",
      id: id,
      qty: e.target.value,
    });
  };
  const dropDown = (
    <div className="dropdown__qty" onClick={handleValue}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </div>
  );
  if (dropdown) {
    dropdown.addEventListener("blur", function (event) {
      setOpen(false);
    });
  }

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__body">
        <input
          className="checkoutProduct__checkbox"
          type="checkbox"
          defaultChecked
        />
        <div className="checkoutProduct__image__wrap">
          <img className="checkoutProduct__Image" src={image} alt="" />
        </div>
      </div>
      <div className="checkoutProduct__info__body__wrap">
        <div className="checkoutProduct__title__price__wrap">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="checkoutProduct__info">
          <div className="checkoutProduct__small">
            <small>Shipped from : Songhee Yim</small>
          </div>
          <div className="checkoutProduct__small">
            <small>gift options not available. Learn more</small>
          </div>
          {/* <div className="checkoutProduct__rating">{Array(rating).fill()}</div> */}
          <div className="checkoutProduct__small__buttons__wrap">
            <span>
              <button
                onClick={handleQthDropDown}
                className="checkoutProduct__qty__wrap"
              >
                <span>Qty: </span>
                <span>{qty}</span>
                <ArrowDropDownIcon className="checkoutProduct__qty" />
                {open && dropDown}
              </button>
            </span>
            <span>
              <button
                className="checkoutProduct__btn"
                onClick={removeFromBasket}
              >
                Delete
              </button>
            </span>
            <span>
              <button className="checkoutProduct__btn save__for__later__button">
                Save for later
              </button>
            </span>
            <span>
              <button className="checkoutProduct__compare">
                Compare with similar items
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
