import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../stateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__image">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
        </div>

        <div className="checkout__cart">
          <h2 className="checkout__title">Shopping Cart</h2>
          <div className="checkout__deselect__checkbox">
            <button>Deselect all items</button>
          </div>
          <div className="checkout__price">Price</div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              qty={item.qty}
            />
          ))}
          <div className="checkout__bottom__subtotal">
            Subtotal ({basket.length} item):
            <span className="checkout__bottom__subtotal__price">
              {" "}
              ${basket.reduce((acc, item) => acc + item.price, 0)}
            </span>
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
